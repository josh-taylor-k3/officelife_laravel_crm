<?php

namespace App\Http\Controllers\Company\Employee;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Helpers\InstanceHelper;
use App\Models\Company\Employee;
use App\Helpers\NotificationHelper;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Http\Resources\Company\EmployeeLog\EmployeeLog as EmployeeLogResource;

class EmployeeLogsController extends Controller
{
    /**
     * Show the employee log.
     *
     * @param Request $request
     * @param int $companyId
     * @param int $employeeId
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, int $companyId, int $employeeId)
    {
        try {
            $employee = Employee::where('company_id', $companyId)
                ->findOrFail($employeeId);
        } catch (ModelNotFoundException $e) {
            return redirect('home');
        }

        try {
            $this->validateAccess(
                Auth::user()->id,
                $companyId,
                $employeeId,
                config('officelife.authorizations.hr')
            );
        } catch (\Exception $e) {
            return redirect('/home');
        }

        // logs
        $logs = $employee->employeeLogs()->with('author')->paginate(15);
        $logsCollection = collect([]);
        foreach ($logs as $log) {
            $logsCollection->push([
                'id' => $log->id,
                'author' => [
                    'id' => is_null($log->author) ? null : $log->author->id,
                    'name' => is_null($log->author) ? $log->author_name : $log->author->name,
                ],
                'localized_content' => $log->content,
                'created_at' => $log->created_at,
            ]);
        }
        $logs = EmployeeLogResource::collection($logs);

        return Inertia::render('Employee/Logs/Index', [
            'employee' => $employee->toObject(),
            'logs' => $logsCollection,
            'notifications' => NotificationHelper::getNotifications(InstanceHelper::getLoggedEmployee()),
            'paginator' => [
                'count' => $logs->count(),
                'currentPage' => $logs->currentPage(),
                'firstItem' => $logs->firstItem(),
                'hasMorePages' => $logs->hasMorePages(),
                'lastItem' => $logs->lastItem(),
                'lastPage' => $logs->lastPage(),
                'nextPageUrl' => $logs->nextPageUrl(),
                'onFirstPage' => $logs->onFirstPage(),
                'perPage' => $logs->perPage(),
                'previousPageUrl' => $logs->previousPageUrl(),
                'total' => $logs->total(),
            ],
        ]);
    }
}
