(function() {
	'use strict';

	angular
		.module('app')
		.factory('apiService', ['$http', apiService]);

	function apiService($http) {
		var baseUrl = 'https://vintageokrapi.azurewebsites.net';

		//export function here
		return {
			getCompanies: getCompanies,
			getCompany: getCompany,
			getUsers: getUsers,
			getCompanyObjectivesById: getCompanyObjectivesById,
			getCompanyObjectiveById: getCompanyObjectiveById,
			getDepartmentObjectivesById: getDepartmentObjectivesById,
			getDepartmentObjectiveById: getDepartmentObjectiveById,
			getDepartmentsByCompanyId: getDepartmentsByCompanyId,
			getDepartmentById: getDepartmentById,
			getAssignments: getAssignments,
			getObjectiveAssociations: getObjectiveAssociations,
			getObjectiveAssociationsById: getObjectiveAssociationsById,
			getObjectiveAssociationsByObjectiveId: getObjectiveAssociationsByObjectiveId,
			getCompanyEmployees: getCompanyEmployees,
			getEmployeesByDepartment: getEmployeesByDepartment,
			getEmployeesByDepartmentAndId: getEmployeesByDepartmentAndId,
			getEmployees: getEmployees,
			getEmployeeById: getEmployeeById,
			getKeyResults: getKeyResults,
			getKeyResultsByID: getKeyResultsByID,
			getCompanyObjectives: getCompanyObjectives,
			putCompanyObjective: putCompanyObjective,
			putCompany: putCompany,
			putDepartmentObjective: putDepartmentObjective,
			putDepartment: putDepartment,
			putEmployee: putEmployee,
			putKeyResult: putKeyResult,
			postCompany: postCompany,
			postAssignment: postAssignment,
			postCompanyObjective: postCompanyObjective,
			postDepartmentObjective: postDepartmentObjective,
			postDepartment: postDepartment,
			postEmployee: postEmployee,
			postKeyResult: postKeyResult,
			postObjectiveAssociation: postObjectiveAssociation,
			deleteObjectiveAssociationsById: deleteObjectiveAssociationsById,
			deleteCompanyById: deleteCompanyById,
			deleteCompanyObjectivesById: deleteCompanyObjectivesById,
			deleteDepartmentObjectiveById: deleteDepartmentObjectiveById,
			deleteEmployeeById: deleteEmployeeById,
			deleteEmployeeByAllId: deleteEmployeeByAllId,
			deleteEmployeeByDepartmentId: deleteEmployeeByDepartmentId,
			deleteDepartmentById: deleteDepartmentById,
			deleteAssignmentById: deleteAssignmentById,
			deleteKeyResultById: deleteKeyResultById,
			postCompany: postCompany,
			postCreateCompanyObjective: postCreateCompanyObjective,
			postAssignment: postAssignment,
			postCompanyObjective: postCompanyObjective,
			getCompanyObjectives: getCompanyObjectives,
			getDepartmentsByCompanyId: getDepartmentsByCompanyId,
		};

		//define functions here

		//GETS

		function getCompanies() {
			return $http.get(baseUrl + '/companies')
					.then(function(response) {
						return response.data;
					});
		}
		function getCompany(id, includes) {
			if (includes === undefined) includes = '';
			return $http.get(baseUrl + '/companies/' + id + '?include=' + includes)
					.then(function(response) {
						return response.data;
					});
		}
		function getUsers() {
			return $http.get(baseUrl + '/users')
					.then(function(response) {
						return response.data;
					});
		}
		function getCompanyObjectivesById(id) {
			return $http.get(baseUrl + '/companies/' + id + '/company-objectives/?include=objectiveAssociations,objectiveAssociations.departmentObjective,objectiveAssociations.departmentObjective.department')
					.then(function(response) {
						return response.data;
					});
		}

		function getCompanyObjectiveById(companyId, objectiveId){
			return $http.get(baseUrl + '/companies/' + companyId + '/company-objectives/' + objectiveId)
					.then(function(response) {
						return response.data;
					});
		}

		function getCompanyObjectives() {
			return $http.get(baseUrl + '/company-objectives')
					.then(function(response) {
						return response.data;
					});
		}
		function getDepartmentsByCompanyId(companyId){
			return $http.get(baseUrl + '/departments?where=companyId='+companyId)
					.then(function(response) {
						return response.data;
					});
		}
		function getDepartmentObjectivesById(companyId, departmentId){
			return $http.get(baseUrl + '/companies/' + companyId + '/departments/' + departmentId + '/department-objectives?include=keyResults,assignments,assignments.employee')
					.then(function(response) {
						return response.data;
					});
		}

		function getDepartmentObjectiveById(companyId, departmentId, objectiveId){
			return $http.get(baseUrl + '/companies/' + companyId + '/departments/' + departmentId + '/department-objectives/' + objectiveId)
					.then(function(response) {
						return response.data;
					});
		}

		function getDepartmentById(companyId, departmentId){
			return $http.get(baseUrl + '/companies/' + companyId + '/departments/' + departmentId)
					.then(function(response) {
						return response.data;
					});
		}

		function getDepartmentsByCompanyId(id){
			return $http.get(baseUrl + '/companies/' + id + '/departments')
					.then(function(response){
						return response.data;
					});
		}
		function getAssignments(){
			return $http.get(baseUrl + '/assignments')
					.then(function(response){
						return response.data;
					});
		}
		function getKeyResults(){
			return $http.get(baseUrl +'/key-results')
				.then(function(response) {
					return response.data;
				});
		}
		function getKeyResultsByID(id){
			return $http.get(baseUrl+ '/key-results/' + id)
				.then(function(response){
					return response.data;
				});
		}
		function getObjectiveAssociationsById(id) {
			return $http.get(baseUrl + '/companies/' + id + '/objective-associations')
			.then(function(response) {
				return response.data;
			})
		}
		function getObjectiveAssociations() {
			return $http.get(baseUrl + '/objective-associations')
			.then(function(response) {
				return response.data;
			})
		}
		function getObjectiveAssociationsByObjectiveId(id) {
			return $http.get(baseUrl + '/objective-associations/' + id)
			.then(function(response) {
				return response.data;
			})
		}
		function getCompanyEmployees(companyId){
			return $http.get(baseUrl + '/employees/?where=companyId=' + companyId)
			.then(function(response) {
				return response.data;
			})
		}
		function getEmployeesByDepartment(companyId, deptartmentId) {
			return $http.get(baseUrl + '/companies/' + companyId + '/departments/' + deptartmentId + '/employees/')
			.then(function(response) {
				return response.data;
			})
		}
		function getEmployeesByDepartmentAndId(id, dept, emp) {
			return $http.get(baseUrl + '/companies/' + id + '/departments/' + dept + '/employees/' + emp)
			.then(function(response) {
				return response.data;
			})
		}
		function getEmployees() {
			return $http.get(baseUrl + '/employees/')
			.then(function(response) {
				return response.data;
			})
		}
		function getEmployeeById(id) {
			return $http.get(baseUrl + '/employees/' + id)
			.then(function(response) {
				return response.data;
			})
		}


		//POSTS
		function postCompany(newObj){
			return $http.post(baseUrl + '/companies', newObj)
			.then(function(response){
				return response.data;
			});
		}

		function postCreateCompanyObjective(companyId, data) {
			return $http.post(baseUrl + '/companies/' + companyId + '/company-objectives', data)
			.then(function(response) {
				return response.data;
			})
		}

		function postAssignment(newObj){
			return $http.post(baseUrl + '/assignments/', newObj)
			.then(function(response) {
				return response.data;
			})
		}

		function postCompanyObjective(newObj){
			return $http.post(baseUrl + '/company-objectives', newObj)
			.then(function(response) {
				return response.data;
			})
		}

		function postDepartmentObjective(companyId, departmentId, newObj){
			return $http.post(baseUrl + '/companies/' + companyId + '/departments/' + departmentId + '/department-objectives/', newObj)
			.then(function(response) {
				return response.data;
			})
		}
		function postDepartment(newObj){
			return $http.post(baseUrl + '/departments', newObj)
			.then(function(response) {
				return response.data;
			})
		}
		function postEmployee(newObj){
			return $http.post(baseUrl + '/employees', newObj)
			.then(function(response) {
				return response.data;
			})
		}
		function postKeyResult(newObj){
			return $http.post(baseUrl + '/key-results/', newObj)
			.then(function(response) {
				return response.data;
			})
		}
		function postObjectiveAssociation(newObj){
			return $http.post(baseUrl + '/objective-associations', newObj)
			.then(function(response){
				return response.data;
			})
		}


		//PUTS

		function putCompanyObjective(updatedObj){
			return $http.put(baseUrl + '/companies/' + updatedObj.companyId + '/company-objectives/' + updatedObj.id, updatedObj)
					.then(function(response){
						return response.data;
						});
		}

		function putCompany(updatedObj){
			return $http.put(baseUrl + '/companies/' + updatedObj.id, updatedObj)
					.then(function(response){
						return response.data;
						});
		}

		function putDepartmentObjective(companyId, departmentId, updatedObj){
			return $http.put(baseUrl + '/companies/' + companyId + '/departments/' + departmentId +  '/department-objectives/' + updatedObj.id, updatedObj)
					.then(function(response){
						return response.data;
						});
		}

		function putDepartment(updatedObj){
			return $http.put(baseUrl + '/departments/' + updatedObj.id, updatedObj)
					.then(function(response){
						return response.data;
						});
		}

		function putEmployee(updatedObj){
			return $http.put(baseUrl + '/employees/' + updatedObj.id, updatedObj)
					.then(function(response){
						return response.data;
						});
		}

		function putKeyResult(updatedObj){
			return $http.put(baseUrl + '/key-results/' + updatedObj.id, updatedObj)
					.then(function(response){
						return response.data;
						});
		}

		//DELETES

		function deleteObjectiveAssociationsById(id) {
			return $http.delete(baseUrl + '/objective-associations/' + id)
			.then(function(response) {
				return;
			})
		}
		function deleteCompanyById(id){
			return $http.delete(baseUrl + '/companies/' + id)
			.then(function(response){
				return;
			})
		}
		function deleteCompanyObjectivesById(companyId, objectiveId){
			return $http.delete(baseUrl + '/companies/' + companyId + '/company-objectives/' + objectiveId)
			.then(function(response){
				return;
			})
		}
		function deleteDepartmentObjectiveById(companyId, departmentId, objectiveId){
			return $http.delete(baseUrl + '/companies/' + companyId + '/departments/' + departmentId + '/department-objectives/' + objectiveId)
			.then(function(response){
				return;
			})
		}
		function deleteKeyResultById(id){
			return $http.delete(baseUrl + '/key-results/' + id)
			.then(function(response){
				return;
			})
		}
		function deleteEmployeeById(id) {
			return $http.delete(baseUrl + '/employees/' + id)
			.then(function(response) {
				return;
			})
		}
		function deleteEmployeeByAllId(company, dept, emp) {
			return $http.delete(baseUrl + '/companies/' + company + '/departments/' + dept + '/employees/' + emp)
			.then(function(response) {
				return;
			})
		}
		function deleteEmployeeByDepartmentId(company, dept) {
			return $http.delete(baseUrl + '/companies/' + company + '/departments/' + dept + '/employees')
			.then(function(response) {
				return;
			})
		}
		function deleteDepartmentById(companyId, deptartmentId){
			return $http.delete(baseUrl + '/companies/' + companyId + '/departments/' + deptartmentId)
			.then(function(response){
				return;
			})
		}
		function deleteAssignmentById(id){
			return $http.delete(baseUrl + '/assignments/' + id)
			.then(function(response){
				return;
			})
		}
	}
}());
