import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";
function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
         className='vertical-timeline-element--education'
         date='2008 - 2016'
         iconStyle={{background: "#3e497a", color: "#fff"}}>
         <h3 className='vertical-timeline-element-title'> std 1st to 8th</h3>
         <p>Purusharth Vidyamandir,Bhanvad,Gujarat</p>
         </VerticalTimelineElement>
         <VerticalTimelineElement 
         className='vertical-timeline-element--education'
         date='2017 - 2018'
         iconStyle={{background: "#3e497a", color: "#fff"}}>
         <h3 className='vertical-timeline-element-title'> std 9th-10th</h3>
         <p>Jawahar Navodaya Vidyalaya,Jamnagar,Gujarat</p>
         </VerticalTimelineElement>
         <VerticalTimelineElement 
         className='vertical-timeline-element--education'
         date='2019 - 2020'
         iconStyle={{background: "#3e497a", color: "#fff"}}>
         <h3 className='vertical-timeline-element-title'> High school</h3>
         <p> Dream International School,Dhoraji,Gujarat,India</p>
         </VerticalTimelineElement>
         <VerticalTimelineElement 
         className='vertical-timeline-element--education'
         date='2020 - present'
         iconStyle={{background: "#3e497a", color: "#fff"}}>
         <h3 className='vertical-timeline-element-title'> College</h3>
         <p> Dhirubhai Ambani Institute of Information and Communication Technology,Gandhinagar,Gujarat</p>
         </VerticalTimelineElement>
         <VerticalTimelineElement 
         className='vertical-timeline-element--education'
         date='May 2023 - July 2023'
         iconStyle={{background: "#3e497a", color: "#fff"}}>
         <h3 className='vertical-timeline-element-title'> Summer internship</h3>
         <p> Fintech global center,Gandhinagar,Gujarat</p>
         </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience