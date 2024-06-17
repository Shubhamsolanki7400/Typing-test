import React from 'react'
import image from '../assets/image.png'
import { Link } from 'react-router-dom'
const Typewriter = () => {
    return (
        <>
            <div className="row typewriter">
                <div className="writer1 col-md-6">
                    <p className='write' data-text="Learn to Type Faster and Easier for Free">Learn to Type Faster and Easier for Free</p>
                    <ul className='type-u'>
                        <li className='type-li'>Prepares Students for Standardized Testing</li>
                        <li className='type-li'>Aligned to Federal and State Stanards</li>
                        <li className='type-li'>Powerful District and Classroom Mamagement</li>

                    </ul>
                </div>
                <div className="writer2 col-md-6">
                    <div className="im">
                    <img src={image} alt="" />
                    </div>
                    <div className="write-box">
                        <p style={{color:"black"}}>Learn to Type for Free</p>
                        <p>Join millions of Typing.com users and learn to type at your own pace with gamified lessons and student-led progression.</p>
                        <div className="start">
                        <button style={{backgroundColor:"#FFDB57", border:"1px solid #F1BC3F" , borderRadius:'5px', color: "#000000",fontSize:"14px",padding:"2px"}}><Link to="/Start" style={{textDecoration:"none"}}>Start Typing Today</Link></button>
                    </div>
                    </div>
                    
                </div>
            </div>
            
            
        </>
    )
}

export default Typewriter