import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'

import "./courseCard.css"

const CourseCard = ({course,college}) => {

 

  
  return (
   <Fragment>
     
     <div className="card">
      <div className="coursecard_body">
        <h2 >{course.courseName}</h2>
       
       {college ? <div className="clgname"><img src={college.logo_image_url} alt="" /><h3 >{college.collegeName}</h3></div> :  <div className="clgname"><img src="https://assets.sentinelassam.com/h-upload/2020/11/11/172257-assam-government.jpg" alt="" /><h3>{course.collegeName}</h3></div> }
        <p> <FontAwesomeIcon icon={faLocationPin}/> {course.address}</p>
        <p>Duration: {course.duration}year</p>
      </div>
    <div className='coursecard_body_2'>

        <p>Application fees: {course.admission_fees}</p>
        <p>Admission fees: {course.application_fees}</p>
    
        <Link to={`/course/${course.id}`} className="btn applybtn btn-primary">Details/Apply</Link>
    </div>
        
    </div>

   </Fragment>
  )
}

export default CourseCard