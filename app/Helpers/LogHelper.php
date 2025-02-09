<?php

namespace App\Helpers;

use App\Models\Company\TeamLog;
use App\Models\Company\AuditLog;
use App\Models\Company\EmployeeLog;

class LogHelper
{
    /**
     * Return an sentence explaining what the log contains.
     * A log is stored in a json file and needs some kind of processing to make
     * it understandable by a human.
     *
     * @param AuditLog $log
     * @return string
     */
    public static function processAuditLog(AuditLog $log): string
    {
        $sentence = '';

        if ($log->action == 'account_created') {
            $sentence = trans('account.log_account_created');
        }

        if ($log->action == 'employee_added_to_company') {
            $sentence = trans('account.log_employee_added_to_company', [
                'employee' => $log->object->{'employee_name'},
            ]);
        }

        if ($log->action == 'team_created') {
            $sentence = trans('account.log_team_created', [
                'name' => $log->object->{'team_name'},
            ]);
        }

        if ($log->action == 'employee_added_to_team') {
            $sentence = trans('account.log_employee_added_to_team', [
                'employee' => $log->object->{'employee_name'},
                'team' => $log->object->{'team_name'},
            ]);
        }

        if ($log->action == 'employee_removed_from_team') {
            $sentence = trans('account.log_employee_removed_from_team', [
                'employee' => $log->object->{'employee_name'},
                'team' => $log->object->{'team_name'},
            ]);
        }

        if ($log->action == 'employee_updated') {
            $sentence = trans('account.log_employee_updated', [
                'employee' => $log->object->{'employee_name'},
            ]);
        }

        if ($log->action == 'employee_updated_hiring_information') {
            $sentence = trans('account.log_employee_updated_hiring_information', [
                'employee' => $log->object->{'employee_name'},
            ]);
        }

        if ($log->action == 'manager_assigned') {
            $sentence = trans('account.log_manager_assigned', [
                'name' => $log->object->{'manager_name'},
                'employee' => $log->object->{'employee_name'},
            ]);
        }

        if ($log->action == 'manager_unassigned') {
            $sentence = trans('account.log_manager_unassigned', [
                'name' => $log->object->{'manager_name'},
                'employee' => $log->object->{'employee_name'},
            ]);
        }

        if ($log->action == 'employee_invited_to_become_user') {
            $sentence = trans('account.log_employee_invited_to_become_user', [
                'employee' => $log->object->{'employee_first_name'}.' '.$log->object->{'employee_last_name'},
            ]);
        }

        if ($log->action == 'position_created') {
            $sentence = trans('account.log_position_created', [
                'name' => $log->object->{'position_title'},
            ]);
        }

        if ($log->action == 'position_updated') {
            $sentence = trans('account.log_position_updated', [
                'former_name' => $log->object->{'position_old_title'},
                'new_name' => $log->object->{'position_title'},
            ]);
        }

        if ($log->action == 'position_destroyed') {
            $sentence = trans('account.log_position_destroyed', [
                'name' => $log->object->{'position_title'},
            ]);
        }

        if ($log->action == 'position_assigned') {
            $sentence = trans('account.log_position_assigned', [
                'name' => $log->object->{'position_title'},
                'employee' => $log->object->{'employee_name'},
            ]);
        }

        if ($log->action == 'position_removed') {
            $sentence = trans('account.log_position_removed', [
                'name' => $log->object->{'position_title'},
                'employee' => $log->object->{'employee_name'},
            ]);
        }

        if ($log->action == 'flow_created') {
            $sentence = trans('account.log_flow_created', [
                'name' => $log->object->{'flow_name'},
            ]);
        }

        if ($log->action == 'employee_worklog_logged') {
            $sentence = trans('account.log_employee_worklog_logged');
        }

        if ($log->action == 'employee_status_created') {
            $sentence = trans('account.log_employee_status_created', [
                'name' => $log->object->{'employee_status_name'},
            ]);
        }

        if ($log->action == 'employee_status_updated') {
            $sentence = trans('account.log_employee_status_updated', [
                'former_name' => $log->object->{'employee_status_old_name'},
                'new_name' => $log->object->{'employee_status_new_name'},
            ]);
        }

        if ($log->action == 'employee_status_destroyed') {
            $sentence = trans('account.log_employee_status_destroyed', [
                'name' => $log->object->{'employee_status_name'},
            ]);
        }

        if ($log->action == 'employee_status_assigned') {
            $sentence = trans('account.log_employee_status_assigned', [
                'name' => $log->object->{'employee_status_name'},
                'employee' => $log->object->{'employee_name'},
            ]);
        }

        if ($log->action == 'employee_status_removed') {
            $sentence = trans('account.log_employee_status_removed', [
                'name' => $log->object->{'employee_status_name'},
                'employee' => $log->object->{'employee_name'},
            ]);
        }

        if ($log->action == 'company_news_created') {
            $sentence = trans('account.log_company_news_created', [
                'name' => $log->object->{'company_news_title'},
            ]);
        }

        if ($log->action == 'company_news_updated') {
            $sentence = trans('account.log_company_news_updated', [
                'name' => $log->object->{'company_news_title'},
            ]);
        }

        if ($log->action == 'company_news_destroyed') {
            $sentence = trans('account.log_company_news_destroyed', [
                'name' => $log->object->{'company_news_title'},
            ]);
        }

        if ($log->action == 'employee_morale_logged') {
            $sentence = trans('account.log_employee_morale_logged', [
                'name' => $log->object->{'employee_name'},
            ]);
        }

        if ($log->action == 'company_pto_policy_created') {
            $sentence = trans('account.log_company_pto_policy_created', [
                'year' => $log->object->{'company_pto_policy_year'},
            ]);
        }

        if ($log->action == 'company_pto_policy_updated') {
            $sentence = trans('account.log_company_pto_policy_updated', [
                'year' => $log->object->{'company_pto_policy_year'},
            ]);
        }

        if ($log->action == 'time_off_created') {
            $sentence = trans('account.log_company_time_off_created', [
                'date' => $log->object->{'planned_holiday_date'},
            ]);
        }

        if ($log->action == 'time_off_destroyed') {
            $sentence = trans('account.log_company_time_off_destroyed', [
                'date' => $log->object->{'planned_holiday_date'},
            ]);
        }

        if ($log->action == 'address_added_to_employee') {
            $sentence = trans('account.log_employee_address_set', [
                'address' => $log->object->{'partial_address'},
            ]);
        }

        if ($log->action == 'pronoun_assigned_to_employee') {
            $sentence = trans('account.log_employee_pronoun_set', [
                'name' => $log->object->{'pronoun_label'},
            ]);
        }

        if ($log->action == 'pronoun_removed_from_employee') {
            $sentence = trans('account.log_employee_pronoun_removed', [
                'name' => $log->object->{'employee_name'},
            ]);
        }

        if ($log->action == 'employee_description_set') {
            $sentence = trans('account.log_employee_description_set', [
                'name' => $log->object->{'employee_name'},
            ]);
        }

        if ($log->action == 'employee_description_cleared') {
            $sentence = trans('account.log_employee_description_cleared', [
                'name' => $log->object->{'employee_name'},
            ]);
        }

        if ($log->action == 'employee_birthday_set') {
            $sentence = trans('account.log_employee_birthday_set', [
                'name' => $log->object->{'employee_name'},
            ]);
        }

        if ($log->action == 'team_description_set') {
            $sentence = trans('account.log_team_description_set', [
                'name' => $log->object->{'team_name'},
            ]);
        }

        if ($log->action == 'team_description_cleared') {
            $sentence = trans('account.log_team_description_cleared', [
                'name' => $log->object->{'team_name'},
            ]);
        }

        if ($log->action == 'team_useful_link_created') {
            $sentence = trans('account.log_team_useful_link_created', [
                'name' => $log->object->{'team_name'},
                'link_name' => $log->object->{'link_name'},
            ]);
        }

        if ($log->action == 'team_useful_link_updated') {
            $sentence = trans('account.log_team_useful_link_updated', [
                'name' => $log->object->{'team_name'},
                'link_name' => $log->object->{'link_name'},
            ]);
        }

        if ($log->action == 'team_useful_link_destroyed') {
            $sentence = trans('account.log_team_useful_link_destroyed', [
                'name' => $log->object->{'team_name'},
                'link_name' => $log->object->{'link_name'},
            ]);
        }

        return $sentence;
    }

    /**
     * Transform an action into an understandable sentence.
     *
     * @param EmployeeLog $log
     * @return string
     */
    public static function processEmployeeLog(EmployeeLog $log): string
    {
        $sentence = '';

        if ($log->action == 'employee_created') {
            $sentence = trans('account.employee_log_employee_created');
        }

        if ($log->action == 'manager_assigned') {
            $sentence = trans('account.employee_log_manager_assigned', [
                'name' => $log->object->{'manager_name'},
            ]);
        }

        if ($log->action == 'direct_report_assigned') {
            $sentence = trans('account.employee_log_direct_report_assigned', [
                'name' => $log->object->{'direct_report_name'},
            ]);
        }

        if ($log->action == 'manager_unassigned') {
            $sentence = trans('account.employee_log_manager_unassigned', [
                'name' => $log->object->{'manager_name'},
            ]);
        }

        if ($log->action == 'direct_report_unassigned') {
            $sentence = trans('account.employee_log_direct_report_unassigned', [
                'name' => $log->object->{'direct_report_name'},
            ]);
        }

        if ($log->action == 'position_assigned') {
            $sentence = trans('account.employee_log_position_assigned', [
                'name' => $log->object->{'position_title'},
            ]);
        }

        if ($log->action == 'position_removed') {
            $sentence = trans('account.employee_log_position_removed', [
                'name' => $log->object->{'position_title'},
            ]);
        }

        if ($log->action == 'employee_added_to_team') {
            $sentence = trans('account.employee_log_employee_added_to_team', [
                'name' => $log->object->{'team_name'},
            ]);
        }

        if ($log->action == 'employee_removed_from_team') {
            $sentence = trans('account.employee_log_employee_removed_from_team', [
                'name' => $log->object->{'team_name'},
            ]);
        }

        if ($log->action == 'employee_worklog_logged') {
            $sentence = trans('account.employee_log_employee_worklog_logged');
        }

        if ($log->action == 'employee_status_assigned') {
            $sentence = trans('account.employee_log_employee_status_assigned', [
                'name' => $log->object->{'employee_status_name'},
            ]);
        }

        if ($log->action == 'employee_status_removed') {
            $sentence = trans('account.employee_log_employee_status_removed', [
                'name' => $log->object->{'employee_status_name'},
            ]);
        }

        if ($log->action == 'morale_logged') {
            $sentence = trans('account.employee_log_morale_logged', [
                'name' => $log->object->{'employee_name'},
            ]);
        }

        if ($log->action == 'time_off_created') {
            $sentence = trans('account.employee_log_time_off_created', [
                'date' => $log->object->{'planned_holiday_date'},
            ]);
        }

        if ($log->action == 'time_off_destroyed') {
            $sentence = trans('account.employee_log_time_off_destroyed', [
                'date' => $log->object->{'planned_holiday_date'},
            ]);
        }

        if ($log->action == 'address_added') {
            $sentence = trans('account.employee_log_address_set', [
                'address' => $log->object->{'partial_address'},
            ]);
        }

        if ($log->action == 'pronoun_assigned') {
            $sentence = trans('account.employee_log_pronoun_set', [
                'name' => $log->object->{'pronoun_label'},
            ]);
        }

        if ($log->action == 'pronoun_removed') {
            $sentence = trans('account.employee_log_pronoun_removed');
        }

        if ($log->action == 'description_set') {
            $sentence = trans('account.employee_log_description_set');
        }

        if ($log->action == 'description_cleared') {
            $sentence = trans('account.employee_log_description_cleared');
        }

        if ($log->action == 'birthday_set') {
            $sentence = trans('account.employee_birthday_set');
        }

        return $sentence;
    }

    /**
     * Transform an action into an understandable sentence.
     *
     * @param TeamLog $log
     * @return string
     */
    public static function processTeamLog(TeamLog $log): string
    {
        $sentence = '';

        if ($log->action == 'team_log_team_created') {
            $sentence = trans('account.team_log_team_created', [
                'name' => $log->object->{'team_name'},
            ]);
        }

        if ($log->action == 'team_log_team_updated') {
            $sentence = trans('account.team_log_team_updated', [
                'old_name' => $log->object->{'team_old_name'},
                'new_name' => $log->object->{'team_new_name'},
            ]);
        }

        if ($log->action == 'team_log_employee_added_to_team') {
            $sentence = trans('account.team_log_employee_added_to_team', [
                'employee_name' => $log->object->{'employee_name'},
                'team_name' => $log->object->{'team_name'},
            ]);
        }

        if ($log->action == 'team_log_employee_removed_from_team') {
            $sentence = trans('account.team_log_employee_removed_from_team', [
                'employee_name' => $log->object->{'employee_name'},
                'team_name' => $log->object->{'team_name'},
            ]);
        }

        if ($log->action == 'team_log_task_associated_to_team') {
            $sentence = trans('account.team_log_task_associated_to_team', [
                'name' => $log->object->{'task_name'},
            ]);
        }

        if ($log->action == 'team_log_team_leader_assigned') {
            $sentence = trans('account.team_log_team_leader_assigned', [
                'name' => $log->object->{'team_leader_name'},
            ]);
        }

        if ($log->action == 'team_log_team_leader_removed') {
            $sentence = trans('account.team_log_team_leader_removed', [
                'name' => $log->object->{'team_leader_name'},
            ]);
        }

        if ($log->action == 'description_set') {
            $sentence = trans('account.team_log_description_set', [
                'name' => $log->object->{'team_name'},
            ]);
        }

        if ($log->action == 'description_cleared') {
            $sentence = trans('account.team_log_description_cleared', [
                'name' => $log->object->{'team_name'},
            ]);
        }

        if ($log->action == 'useful_link_created') {
            $sentence = trans('account.team_log_useful_link_created', [
                'name' => $log->object->{'link_name'},
            ]);
        }

        if ($log->action == 'useful_link_updated') {
            $sentence = trans('account.team_log_useful_link_updated', [
                'name' => $log->object->{'link_name'},
            ]);
        }

        if ($log->action == 'useful_link_destroyed') {
            $sentence = trans('account.team_log_useful_link_destroyed', [
                'name' => $log->object->{'link_name'},
            ]);
        }

        return $sentence;
    }
}
