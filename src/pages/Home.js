import React from 'react'
import "../styles/Home.css"
function Home() {
  return (
    <div className='home'>
      <div className='about'> 
       <h2>
        Hi, My name is Chirag
        </h2>
        <div className='prompt'>
          <p>
           An ICT student in DA-IICT
          </p>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
         <li className='item'>
          <h2>Front-end</h2>
          <span>HTML,CSS,Bootstrap,AngularJS,ReactJS</span>
         </li>
         <li className='item'>
          <h2>Back-end</h2>
          <span>NodeJS</span>
         </li>
         <li className='item'>
          <h2>Languages</h2>
          <span>C,C++,python,javascript</span>
         </li>
        </ol>
      </div>
    </div>
  )
}

export default Home