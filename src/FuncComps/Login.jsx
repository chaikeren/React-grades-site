import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './FCNavbar';
import '../App.css';


export default function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [returnData, setReturnData] = useState(['']);
  const [returnStudetnsData, setStudentsData] = useState(['']);

  const getAllStudentsGrades = async () => {
    let res = await fetch("/api/Grades", {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      }
    });
    let data = await res.json();
    setStudentsData(data);
    if(localStorage.getItem('user') != null){
      localStorage.setItem('students', JSON.stringify(returnStudetnsData));
    }
  }

  useEffect(() => {
    let isMounted = true
    if(isMounted){
      getAllStudentsGrades()
    }
    return () => {isMounted = false}
  },[])

  const addUser = async () => {

    if(username == '' && password == ''){
      return;
    }

    let res = await fetch("/api/Grades", {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        Id: `${username}`,
        Password: `${password}`,
        Email: `${email}`
      })
    });

    let data = await res.json();
    setReturnData(data);
    if(returnData.length > 1){
      getAllStudentsGrades();
      localStorage.setItem('user', JSON.stringify(returnData));
      navigate("/UserInfo");
    }
  }

  useEffect(() => {
    let check = true
    if(check){
      addUser()
    }
    return () => {check = false}
  },[])

  return (
    <div>
      <Navbar/>
      <div class="d-flex justify-content-center">
        <div className="w-50">
          <div className="card">
              <div className="card-body card_body" style={{fontSize: "1.2em"}}>
                <h2>Hello</h2>
                In order to log in you need user from yedion<br/>
                Insert your: <b>Username, Password</b><br/>
                After loggin in you can see your grades and your class courses average
              </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-25"><br/><br/>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input type="text" onChange={(e) => {setUsername(e.target.value)}} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"  required/>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input type="password" onChange={(e) => {setPassword(e.target.value)}} className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"  required/>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input type="text" onChange={(e) => {setEmail(e.target.value)}} className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"  required/>
          </div>
          <button onClick={() => addUser()} className="btn btn-primary">Login</button>
        </div>
        </div>
    </div>
  )
}














// export default function Login() {

//   const navigate = useNavigate();

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [returnData, setReturnData] = useState(['']);
//   const [returnStudetnsData, setStudentsData] = useState(['']);

//    const getAllStudentsGrades = async () => {
//     let res = await fetch("/api/Grades", {
//       method: 'GET',
//       headers: {
//         'content-type': 'application/json',
//         'Accept': 'application/json'
//       }
//     });
//     let data = await res.json();
//     setStudentsData(data);
//     if(localStorage.getItem('user') != null){
//       localStorage.setItem('students', JSON.stringify(returnStudetnsData));
//     }
//   }

//   useEffect(() => {
//     let isMounted = true
//     if(isMounted){
//       getAllStudentsGrades()
//     }
//     return () => {isMounted = false}
//   },[])

//   const addUser = async () => {
//     let res = await fetch("/api/Grades", {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify({
//         Id: `${username}`,
//         Password: `${password}`,
//         Email: `${email}`

//         // Id: '318417540',
//         // Password: 'Chaikeren3131',
//         // Email: 'haikeren61@gmail.com'

//         // Id: '318567047',
//         // Password: '0526696135Aa!',
//         // Email: 'aavshlom1235@gmail.com'
//       })
//     });

//     let data = await res.json();
//     setReturnData(data);
//     console.log(returnData);
//     if(returnData.length > 1){
//       getAllStudentsGrades();
//       localStorage.setItem('user', JSON.stringify(returnData));
//       navigate("/UserInfo");
//     }
//   }

//   useEffect(() => {
//     let check = true
//     if(check){
//       addUser()
//     }
//     return () => {check = false}
//   },[])

//   return (
//     <div>
//       <Navbar/>
//       <div className="w-25"><br/><br/>
//         <div className="input-group mb-3">
//           <span className="input-group-text" id="basic-addon1">@</span>
//           <input type="text" onChange={(e) => {setUsername(e.target.value)}} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
//         </div>
//         <div className="input-group mb-3">
//           <span className="input-group-text" id="basic-addon1">@</span>
//           <input type="text" onChange={(e) => {setPassword(e.target.value)}} className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
//         </div>
//         <div className="input-group mb-3">
//           <span className="input-group-text" id="basic-addon1">@</span>
//           <input type="text" onChange={(e) => {setEmail(e.target.value)}} className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/>
//         </div>
//         <button onClick={() => addUser()} className="btn btn-primary">Login</button>
//       </div>
//     </div>
//   )
// }
