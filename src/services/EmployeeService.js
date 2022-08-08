import axios from 'axios'

const EMPLOYEE_BASE_API_URL='http://localhost:8080/employees'

class EmployeeService{

    getAllEmployess(){

        return axios.get(EMPLOYEE_BASE_API_URL)
    }
   createEmployee(emp){

    return axios.post(EMPLOYEE_BASE_API_URL,emp)
   }

   getEmployeeById(empid){
        return axios.get(EMPLOYEE_BASE_API_URL +  '/' + empid);
   }

  
    deleteEmployeeById(employeeId){
        return axios.delete(EMPLOYEE_BASE_API_URL + '/' + employeeId);
    }
   

}
export default new EmployeeService();