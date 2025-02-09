<?php

namespace App\Http\Controllers\Company\Adminland;

use Inertia\Inertia;
use App\Models\Company\Flow;
use Illuminate\Http\Request;
use App\Helpers\InstanceHelper;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;
use App\Services\Company\Adminland\Flow\CreateFlow;
use App\Services\Company\Adminland\Flow\AddStepToFlow;
use App\Services\Company\Adminland\Flow\AddActionToStep;
use App\Http\Resources\Company\Flow\Flow as FlowResource;

class AdminFlowController extends Controller
{
    /**
     * Show the list of positions.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $company = InstanceHelper::getLoggedCompany();
        $flows = FlowResource::collection(
            $company->flows()->orderBy('created_at', 'desc')->get()
        );

        return Inertia::render('Adminland/Flow/Index', [
            'notifications' => Auth::user()->getLatestNotifications($company),
            'flows' => $flows,
        ]);
    }

    /**
     * Display the detail of a flow.
     *
     * @param Request $request
     * @param int $companyId
     * @param int $flowId
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, int $companyId, int $flowId)
    {
        $company = InstanceHelper::getLoggedCompany();
        $flow = Flow::findOrFail($flowId);

        return Inertia::render('Adminland/Flow/Show', [
            'notifications' => Auth::user()->getLatestNotifications($company),
            'flow' => new FlowResource($flow),
        ]);
    }

    /**
     * Show the Create flow view.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $company = InstanceHelper::getLoggedCompany();

        return Inertia::render('Adminland/Flow/Create', [
            'notifications' => Auth::user()->getLatestNotifications($company),
        ]);
    }

    /**
     * Save the flow.
     *
     * @param Request $request
     * @param int $companyId
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $companyId)
    {
        $loggedEmployee = InstanceHelper::getLoggedEmployee();

        $data = [
            'company_id' => $companyId,
            'author_id' => $loggedEmployee->id,
            'name' => $request->get('name'),
            'type' => $request->get('type'),
        ];

        $flow = (new CreateFlow)->execute($data);

        // add steps for the flow
        foreach ($request->get('steps') as $step) {
            $newStep = (new AddStepToFlow)->execute([
                'company_id' => $companyId,
                'author_id' => $loggedEmployee->id,
                'flow_id' => $flow->id,
                'number' => $step['number'],
                'unit_of_time' => $step['frequency'],
                'modifier' => $step['type'],
            ]);

            // for each step, add actions
            foreach ($step['actions'] as $action) {
                (new AddActionToStep)->execute([
                    'company_id' => $companyId,
                    'author_id' => $loggedEmployee->id,
                    'flow_id' => $flow->id,
                    'step_id' => $newStep->id,
                    'type' => $action['type'],
                    'recipient' => $action['target'],
                    'specific_recipient_information' => json_encode($action),
                ]);
            }
        }

        return response()->json([
            'company_id' => $companyId,
        ]);
    }
}
