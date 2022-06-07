import React from 'react'
import Navbar from './FCNavbar';
import { useNavigate } from 'react-router-dom';


export default function UserInfo() {

  const navigate = useNavigate();
  let objects = JSON.parse(localStorage.getItem('user'));
  const subjects = [];
  let strSubjects = '';
  var avergae = 0;
  var sum = 0;

  if(objects != null){
    for (let i=0; i<objects.length; i++) {
      subjects.push([objects[i].subject, objects[i].gradeAverage]);
    }

    strSubjects = subjects.map((item, key) => 
      <tr key={key}>
        <th>{key}</th>
        <td>{item[0]}</td>
        <td>{item[1]}</td>
      </tr>
    )

    for(let i=0; i<subjects.length; i++){
      sum += subjects[i][1];
    }

    if(sum > 0){
      avergae = sum / subjects.length;
    }
  }

  const logOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('students');
    objects = '';
    navigate("/Login");
  }
  
  return (
    <div>
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <div className="d-flex justify-content-around" style={{fontSize: "1.8em", fontWeight:"bold"}}>
        <div>Your Average is: {avergae}</div>
        <div><button type="button" className="btn btn-danger" onClick={() => logOut() }>Logout</button></div>
      </div>
      <br/>
      <div className="d-flex justify-content-center" style={{fontSize: "1.4em"}}>
        <div className="w-75">
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Subject</th>
                <th scope="col">Grade</th>
              </tr>
            </thead>
            <tbody>
              {strSubjects}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}


