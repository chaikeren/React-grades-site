import React from 'react';
import Navbar from './FCNavbar';

export default function Home() {

  let objects = JSON.parse(localStorage.getItem('students'));
  const studentsSubjects = [];
  let strStudentsSubjects = '';

  if(objects != null){
    for (let i=0; i<objects.length; i++) {
      studentsSubjects.push([objects[i].code, objects[i].subject, objects[i].courseAverage]);
    }

    strStudentsSubjects = studentsSubjects.map((item, key) => 
      <tr key={key}>
        <th>{key}</th>
        <td>{item[0]}</td>
        <td>{item[1]}</td>
        <td>{item[2]}</td>
      </tr>
    )
  }

  return (
    <div>
       <Navbar/>
      <br/>
      <br/>
      <br/>
      <div style={{fontSize:"2em", fontWeight:"bold"}}>Class Subjects Average</div><br/>
      <div className="d-flex justify-content-center" style={{fontSize:"1.4em"}}>
        <div className="w-75">
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Code</th>
                <th scope="col">Subject</th>
                <th scope="col">Grade</th>
              </tr>
            </thead>
            <tbody>
              {strStudentsSubjects}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
