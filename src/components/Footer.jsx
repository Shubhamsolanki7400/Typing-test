import React from 'react'
import powered from '../../src/assets/powered.png'
const Footer = () => {
    return (
        <>
        <div style={{background:"#373D45"}}>
        <div className="row mt-5" style={{paddingRight:"1.5rem",paddingLeft:"1.5rem",paddingTop:"3rem",paddingBottom:"3rem"}}>       
                <div className="col-md-3">
                    <ul style={{color:"white"}}>
                        <li>
                            Teachers
                        </li>
                        <li>
                            school and Districts
                        </li>
                        <li>
                            Homeschool 
                        </li>
                        <li>
                            PLUS Edition
                        </li>
                        <li>
                            Students
                        </li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul style={{color:"white"}}>
                        <li>
                            Typing Lessons
                        </li>
                        <li>
                            Typing Test
                        </li>
                        <li>
                            Typing Games
                        </li>
                        <li>
                            Digital Literacy
                        </li>
                        <li>
                            coding Curriculum
                        </li>
                    </ul>
                </div>
                <div className="col-md-6" style={{textAlign:"center"}}>
                     <p style={{color:"white"}}>Powered by:</p>
                      <img src={powered} alt="powered"/>           
                     </div>
            </div>
        </div>
          
        </>
    )
}

export default Footer