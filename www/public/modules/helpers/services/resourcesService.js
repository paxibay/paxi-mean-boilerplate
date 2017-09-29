
module.exports = [ 'coreConfig', '$http', 'syncHttp', '_',  resourcesService];
var staticResourcesList = require('./resources.data.js');

function resourcesService( coreConfig, $http,syncHttp, _) {
    var loadedResources = [];
    
    init();

    function init(){
        loadStaticResourceList();

        if(coreConfig.isProduction()){
                _.each(syncHttp.get("/WPApi/Resources"), function (resourceItem){
                    loadedResources.push(resourceItem);
                })
                // loadedResources = syncHttp.get("/WPApi/Resources");
            } else {
                loadedResources.push({key : 'security, admin_groupname', value: 'What is the group name?' });
                loadedResources.push({key : 'security, admin_ein', value: 'What is the ein name?' });
                loadedResources.push({key : 'security, admin_name', value: 'What is the admin name?' });
                loadedResources.push({key : 'menu, text_member', value: 'Member' });
                loadedResources.push({key : 'menu, text_planadmin', value: 'Plan Admin' });
	        loadedResources.push({key : 'global, global_gender_male', value: 'Male' });
	        loadedResources.push({key : 'global, global_gender_female', value: 'Female' });
	        loadedResources.push({key : 'elections, status', value: 'Status' });
	        loadedResources.push({key : 'elections, status', value: 'Status' });
	        loadedResources.push({key : 'elections, description', value: 'Description' });
	        loadedResources.push({key : 'elections, effective_date', value: 'Effective Date' });
		loadedResources.push({key : 'elections, expiration_date', value: 'Expiration Date' });
		loadedResources.push({key : 'elections, health_evidence_title', value: 'Health Evidence' });
		loadedResources.push({key : 'elections, todays_coverage_description', value: 'Today\'s Coverage' });
		loadedResources.push({key : 'elections, status', value: 'Status' });
		loadedResources.push({key : 'elections, personal_information', value: 'Personal Information' });
		loadedResources.push({key : 'elections, your_coverage', value: 'Your Coverage' });
		loadedResources.push({key : 'elections, your_selections', value: 'Your Selections' });
		loadedResources.push({key : 'elections, dependents', value: 'Dependents' });
		loadedResources.push({key : 'elections, beneficiaries', value: 'Beneficiaries' });
		loadedResources.push({key : 'elections, dependent_changes', value: 'Dependent Changes' });
		loadedResources.push({key : 'elections, beneficiary_changes', value: 'Beneficiary Changes' });
		loadedResources.push({key : 'elections, transaction_details', value: 'Transaction Details' });
		loadedResources.push({key : 'elections, spd_certification', value: 'SPD Certification' });
		loadedResources.push({key : 'elections, special_reminders', value: 'Special Reminder(s)' });
		loadedResources.push({key : 'elections, statuses_incomplete', value: 'Incomplete' });
		loadedResources.push({key : 'elections, statuses_processed', value: 'Processed' });
		loadedResources.push({key : 'elections, statuses_cancelled', value: 'Cancelled' });
		loadedResources.push({key : 'elections, statuses_complete', value: 'Complete' });
		loadedResources.push({key : 'elections, statuses_todays-coverage', value: 'Today\'s Coverage'});
		loadedResources.push({key : 'elections, statuses_health-evidence', value: 'Health Evidence' });
		loadedResources.push({key : 'elections, status_type', value: 'Type' });
		loadedResources.push({key : 'elections, status_effective_date', value: 'Effective Date' });
		loadedResources.push({key : 'elections, status_table_description', value: 'The following table provides details on the changes made during this event.' });
		loadedResources.push({key : 'elections, status_processing_history_day', value: 'Processing history day' });
		loadedResources.push({key : 'elections, status_accessed_by', value: 'Accessed By' });
		loadedResources.push({key : 'elections, status_accessed_by_member', value: 'Member' });
		loadedResources.push({key : 'elections, status_accessed_by_admin', value: 'Administrator' });
		loadedResources.push({key : 'elections, personal_info_fullname', value: 'Full Name' });
		loadedResources.push({key : 'elections, personal_info_employee_number', value: 'Employee Number' });
		loadedResources.push({key : 'elections, personal_info_gender', value: 'Gender' });
		loadedResources.push({key : 'elections, personal_info_dob', value: 'Date of Birth' });
		loadedResources.push({key : 'elections, personal_info_address', value: 'Address' });
		loadedResources.push({key : 'elections, dependent', value: 'Dependent' });
		loadedResources.push({key : 'elections, dependent_student', value: 'Student' });
		loadedResources.push({key : 'elections, dependent_dependent_disabled', value: 'Disabled' });
		loadedResources.push({key : 'elections, dependent_birth_date', value: 'Birth Date' });
		loadedResources.push({key : 'elections, dependent_coverage', value: 'Coverage' });
		loadedResources.push({key : 'elections, dependent_coverage_elsewhere', value: 'Coverage Elsewhere' });
		loadedResources.push({key : 'elections, dependent_no_dependent', value: 'No dependents on file.' });
		loadedResources.push({key : 'elections, dependent_na', value: 'No' });
		loadedResources.push({key : 'elections, dependent_ssn', value: 'SSN' });
		loadedResources.push({key : 'elections, beneficiary_no_beneficiary', value: 'No beneficiaries on file.' });
		loadedResources.push({key : 'elections, beneficiary_no_beneficiary_coverage', value: 'No beneficiary coverage on file.' });
		loadedResources.push({key : 'elections, beneficiary', value: 'Beneficiary' });
		loadedResources.push({key : 'elections, beneficiary_primary_beneficiary', value: 'Primary Beneficiary' });
		loadedResources.push({key : 'elections, beneficiary_contingent_beneficiary', value: 'Contingent Beneficiary' });
		loadedResources.push({key : 'elections, beneficiary_none', value: 'None' });
		loadedResources.push({key : 'elections, coverage_cost_summary', value: 'Cost Summary' });
		loadedResources.push({key : 'elections, coverage_benefits', value: 'Benefits' });
		loadedResources.push({key : 'elections, coverage_benefit_name', value: 'Benefit name' });
		loadedResources.push({key : 'elections, coverage_coverage_options', value: 'Coverage options' });
		loadedResources.push({key : 'elections, coverage_coverage_details', value: 'Coverage details' });
		loadedResources.push({key : 'elections, coverage_employer_cost', value: 'Employer cost' });
		loadedResources.push({key : 'elections, coverage_your_cost', value: 'Your cost' });
		loadedResources.push({key : 'elections, coverage_your_cost', value: 'Your cost' });
		loadedResources.push({key : 'elections, coverage_totals', value: 'Totals' });
		loadedResources.push({key : 'elections, cost_summary_totals_month', value: 'month' });
		loadedResources.push({key : 'elections, cost_summary_totals_year', value: 'year' });
		loadedResources.push({key : 'elections, cost_summary_totals_pay', value: 'pay' });
		loadedResources.push({key : 'elections, transaction_detail_benefit_name', value: 'Benefit Name' });
		loadedResources.push({key : 'elections, transaction_detail_requested_volume', value: 'Requested Volume' });
		loadedResources.push({key : 'elections, transaction_detail_status', value: 'Status' });
		loadedResources.push({key : 'elections, transaction_detail_effective_date', value: 'Effective Date' });
		loadedResources.push({key : 'elections, spd_description1', value: 'The Summary Plan Description (SPD) for one or  more of your plans has changed. You must read and acknowledge the statement(s) bellow  before you will be permitted to enroll or make changes to your benefits elections.' });
		loadedResources.push({key : 'elections, spd_description2', value: 'Check the box next to each statement to acknowledge that you have read and understood it. Click Submit to proceed to next step.' });

		loadedResources.push({key : 'elections, costsummary_beforetaxbenefitssection', value: 'Your Pre-tax Costs:' });
		loadedResources.push({key : 'elections, costsummary_aftertaxbenefitssection', value: 'Your After Tax Costs:' });
		loadedResources.push({key : 'elections, costsummary_companycontributionssection', value: 'Company Contributions:' });
		loadedResources.push({key : 'elections, costsummary_healthbenefit', value: 'Health:' });
		loadedResources.push({key : 'elections, costsummary_dentalbenefit', value: 'Dental:' });
		loadedResources.push({key : 'elections, costsummary_visionbenefit', value: 'Vision:' });
		loadedResources.push({key : 'elections, costsummary_medicalanddentalbenefit', value: 'Medical & Dental:' });
		loadedResources.push({key : 'elections, costsummary_lifeinsurancebenefit', value: 'Life Insurance:' });
		loadedResources.push({key : 'elections, costsummary_employeelifeinsurancebenefit', value: 'Employee Life Insurance:' });
		loadedResources.push({key : 'elections, costsummary_dependentlifeinsurancebenefit', value: 'Dependent Life Insurance:' });
		loadedResources.push({key : 'elections, costsummary_dependentcarebenefit', value: 'Dependent Care:' });
		loadedResources.push({key : 'elections, costsummary_companycontributionsbenefit', value: 'H.S.A. Employer Contribution:' });
		loadedResources.push({key : 'elections, costsummary_healthcarereimbursementbenefit', value: 'Healthcare Reimbursement:' });
		loadedResources.push({key : 'elections, costsummary_employeecontributionsbenefit', value: 'H.S.A. Employee Contribution:' });
        }
    }

    return {
        resource: resource,
        get: get,
        loadResource: loadResource
    };

    function get(value){
        return resource(value);
    }

    function loadResource(values){
         if (values && values.length>0){
            _.each(values, function(resourceItem){
                loadedResources.push(resourceItem);
            })
        }
    }

    function loadStaticResourceList(){
        if (staticResourcesList && staticResourcesList.length>0){
            _.each(staticResourcesList, function(resourceItem){
                loadedResources.push(resourceItem);
            })
        }
    }



    function resource(resourcereq){
        var dicokey;
        if (typeof resourcereq === 'object'){    
            dicokey = resourcereq.classKey.toLowerCase() + ',' + resourcereq.resourceKey.toLowerCase();
        } else {
            dicokey = resourcereq.toLowerCase();
        }

        var value = _.findWhere(loadedResources, {
                key : dicokey
           });
        if(value === undefined){
        	return '>>'+dicokey+'>>';

        }else{
    		return value.value;
    	}
    }
}




