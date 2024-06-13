import React from 'react'
import image from '../assets/image.png'
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
                    </div>
                </div>
            </div>

        </>
    )
}

export default Typewriter