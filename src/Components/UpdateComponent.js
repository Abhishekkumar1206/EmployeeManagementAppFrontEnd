import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'
import {Link,useParams} from 'react-router-dom'
const UpdateComponent = () => {

  //const [id,setid]=useState(' ')
  const [emp_name,setempname]=useState(' ')
  const [email_id,setemail_id]=useState(' ')
  const [salary,setsalary]=useState(' ')
  const history=useNavigate();
  const {id}=useParams();
  const saveEmployee=(e) => {
    e.preventDefault();
    const emp={id,emp_name,email_id,salary}

    EmployeeService.createEmployee(emp).then((response) =>{

      history('/employees');
        console.log(response.data);
    })
  }
  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((response) =>{
      setempname(response.data.emp_name)
      setemail_id(response.data.email_id)
      setsalary(response.data.salary)
       

    })
  }, [])
  

  return (
    <div>
        <div className='container'>
          <div className='row'>
            <div >
              <div className='text-center'><h2>Update Employees</h2></div>
              <div className='card-body'>
                <form>

                  <div className='form-group mb-2'>
                    <label className='form-label'>Employee Name :</label>
                    <input type="text" name="empname" className='form-control' value={emp_name}
                    onChange={(e) => setempname(e.target.value)}></input>
                  </div>
                  <div className='form-group mb-2'>
                    <label className='form-label'>Email Id :</label>
                    <input type="text" name="email" className='form-control' value={email_id}
                    onChange={(e) => setemail_id(e.target.value)}></input>
                  </div>
                  <div className='form-group mb-2'>
                    <label className='form-label'>Salary :</label>
                    <input type="text" name="salary" className='form-control' value={salary}
                    onChange={(e) => setsalary(e.target.value)}></input>
                  </div>
                  <button className="btn btn-success" onClick={(e)=>saveEmployee(e)}>Submit</button>&nbsp;
                  <Link to="/employees" className="btn btn-danger">Cancel</Link>
                </form>
                
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default UpdateComponent