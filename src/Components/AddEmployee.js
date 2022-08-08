import React, { useState,useEffect } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link,useNavigate } from 'react-router-dom';
export const AddEmployee = () => {

    const [employees, setemployees] = useState([])
    useEffect(() => {

        getEmployees();
    }, [])
   
    const getEmployees =() =>{

        EmployeeService.getAllEmployess().then((response)=>{
            setemployees(response.data)
            console.log(response.data);
        })
    }

    const deleteEmployee=(id)=>{
        EmployeeService.deleteEmployeeById(id).then((response) =>{

            getEmployees();
        })
    }

  return (
    <div>
        <Link to="/add-employees" className='btn btn-primary'>Add Employees</Link>
        <div className='container'></div> 
        <br></br>
        <table className='table table-bordered table stripped'>
        <thead>
            <th>Employee Id</th>
            <th>Employee Name</th>
            <th>Email_id</th>
            <th>Salary</th>
            <th>Action</th>
        </thead>
        <tbody>
            {
                employees.map(
                    employee=>
                    <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.emp_name}</td>
                    <td>{employee.email_id}</td>
                    <td>{employee.salary}</td>
                    <td>
                     <Link className="btn btn-success" to={`/edit-employee/${employee.id}`} >Update</Link>&nbsp;
                     <button className="btn btn-danger" onClick={()=>deleteEmployee(employee.id)}>Delete</button>
                    </td>
                    </tr>
                )
            }
        </tbody>  

        </table>
    </div>
  )
}
export default AddEmployee;