import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React from 'react'
import Navbar from './FCNavbar';


const LOW_GRADE = 60;
const classNames = {
  "מבנה נתונים": "https://www.youtube.com/watch?v=RBSGKlAvoiM&ab_channel=freeCodeCamp.org",
  "נתוח מערכות מידע": "https://www.youtube.com/watch?v=WnMQ8HlmeXc&ab_channel=freeCodeCamp.org",
  "פיתוח אפלקציות לאנדרואיד": "https://www.youtube.com/watch?v=fis26HvvDII&t=11s&ab_channel=freeCodeCamp.org",
  "תכנות מונחה עצמים": "https://www.youtube.com/watch?v=hxIb99-Z8_I&ab_channel=DotNetTricks",
  "SQL בסיס נתונים": "https://www.youtube.com/watch?v=HXV3zeQKqGY&ab_channel=freeCodeCamp.org",
  "Full stack-React-UI": "https://www.youtube.com/watch?v=w7ejDZ8SWv8&ab_channel=TraversyMedia",
  "פיתוח מאובטח": "https://www.youtube.com/watch?v=gSfMNjWNoX0&ab_channel=IAmTimCorey",
  "שיטות לזיהוי והגנה מפני תקיפות סייבר": "https://www.youtube.com/watch?v=fNzpcB7ODxQ&ab_channel=TheCyberMentor",
  "תקשורת נתונים ואבטחת מידע": "https://www.youtube.com/watch?v=qiQR5rTSshw&ab_channel=freeCodeCamp.org",
  "python": "https://www.youtube.com/watch?v=rfscVS0vtbw&t=1s&ab_channel=freeCodeCamp.org"
}

export default function ToStudy() {

let objects = JSON.parse(localStorage.getItem('user'));
  var subjects = [];
  var lowerGrades = [];
  var popUp = '';
  var classSubjects = Object.keys(classNames);
  var classLinks = Object.values(classNames);
  var showLinks = '';

  if(objects != null){
    for (let i=0; i<objects.length; i++) {
      subjects.push([objects[i].subject, objects[i].gradeAverage]);
    }

    for(let i=0; i<subjects.length; i++){
      if(subjects[i][1] < LOW_GRADE){
        lowerGrades.push(subjects[i]);
      }
    }

    let strLowerGrades = lowerGrades.map((subject, key) => 
      <li key={key}>{subject[0]}</li>
    )
    
    for(let i=0; i<lowerGrades.length; i++){
      <a href={classNames[lowerGrades[i][0]]}>lowerGrades[i][0]</a>
    }

    let str = lowerGrades.map((subject, key) => 
    <div>
     <a href={classNames[subject[0]]} key={key}>{subject[0]}</a><br/>
    </div>
    )

    if(lowerGrades.length > 0){
      popUp = 
      <div className="d-flex justify-content-end">
        <div className="w-85 p-3" style={{backgroundColor: "#9FFFD4", boxShadow: "0px 10px 5px"}}>
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Hey</h1>
              <p className="lead" style={{textAlign: "start"}}>It looks like you need to focus more on the followings
              {strLowerGrades}
              So we reccommend you to watch the following:<br/>
              {str}
              </p>
            </div>
          </div>
        </div>
      </div>
    }


    showLinks = classSubjects.map((subject, key) =>
    <a href={classLinks[key]} className="list-group-item list-group-item-action list-group-item-success" key={key}>{subject}</a>
    )
  }


  return (
    <div>
        <Navbar/>
        <h1>Link to improve study acorrding to your class</h1><br/>
        <br/>
        <div className="d-flex justify-content-around">
          <div className="w-25 p-3">
            <div className="list-group" style={{textAlign: "end"}}>
              {showLinks}
            </div>
          </div>
            <div>
              {popUp}
            </div>
        </div>
    </div>
  )
}
