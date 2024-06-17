import React from 'react';
import img from '../../src/assets/99.png'
import left from '../../src/assets/left.png'
import erin from '../../src/assets/erin-lee.webp'
import threestar from '../../src/assets/threestar.png'
import elipse from '../../src/assets/elipse.png'
import myvideo from '../../src/assets/curriculum.mp4'
import chair from '../../src/assets/chair.png'

import { dummyData1, dummyData2 } from "../dummydata/Dummy"
import Footer from './Footer';
const Content = () => {
    return (
        <>
            <div className="section" style={{ paddingRight: "1.5rem", paddingLeft: "1.5rem ", marginTop: "100px" }}>
                <div className="col-md-12">
                    <h5 style={{ textAlign: "center ", color: "#67B1EA" }}>Go Beyond Typing with Digital Citizenship, Coding and Career Prep</h5>
                </div>

                <div className="row mt-5" >
                    {
                        dummyData1?.map((items) => (
                            <>

                                <div key={items.id} className='col-md-2'>
                                    <div className="card mb-4">
                                        <img src={items.image} className="card-img" alt={`Item ${items.id}`} />

                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">{items.content}</p>
                                    </div>
                                </div>

                            </>
                        ))
                    }

                </div>

                <div className="col-md-12" style={{ textAlign: "center ", color: "#67B1EA", marginTop: "60px" }}>
                    <h5>A Free Typing Programme, Built for Teachers</h5>
                </div>
                <div className="row mt-5">
                    {
                        dummyData2?.map((items) => (
                            <>

                                <div key={items.id} className='col-md-2'>
                                    <div className="card mb-4">
                                        <img src={items.image} className="card-img" alt={`Item ${items.id}`} />

                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">{items.content}</p>
                                    </div>
                                </div>

                            </>
                        ))
                    }

                </div>


            </div>
            <div className="prepare" style={{ paddingTop: "100px", paddingBottom: "100px", marginTop: "100px", backgroundColor: "#83bceb" }}>
                <div className="row" style={{ paddingRight: "1.5rem", paddingLeft: "1.5rem" }}>
                    <div className="col-md-6">
                        <div>
                            <p style={{ fontSize: "44px", color: "white", fontWeight: "700" }}>Preparing Students <br /> for the Future</p>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div style={{ backgroundColor: "white", padding: "10px", borderRadius: "5px", color: "#3182CE" }}>38,916,000+ students</div>
                                <div style={{ backgroundColor: "white", padding: "10px", borderRadius: "5px", color: "#269D3A" }}>6,77,000+ teachers</div>
                            </div>
                            <p className='mt-5' style={{ color: "white", fontWeight: "700" }}>Tens of thousands of schools rely on us every year.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div style={{ display: "flex", justifyContent: "center", position: "absolute" }}>
                            <img style={{ maxWidth: "425px", marginTop: "-90px" }} src={img} alt="" />
                        </div>
                        <div>
                            <p></p>
                        </div>
                        <div style={{ background: "white", position: "relative", padding: "20px", borderRadius: "15px" }}>
                            <div><img src={left} alt="" /></div>
                            <p style={{ marginTop: "10px", color: "#67B1EA" }}>Typing.com is a one-stop shop for students to learn to type! The fact that students can progress at their own pace, while tracking accuracy and speed, has been an important benefit.</p>
                            <div style={{ display: "flex", gap: "5px" }}>
                                <img src={erin} style={{ maxWidth: "40px", borderRadius: "100%" }} alt="" />
                                <div style={{ textAlign: "center", padding: "10px" }}>
                                    <p style={{ marginBottom: "0px", color: "#67B1EA" }}>Rory Stadt</p>
                                    <p style={{ marginBottom: "0px", color: "#67B1EA" }}>Missouri, US</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='typing-com' style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
                <div className='row'>
                    <div className="col-md-12" style={{ marginTop: "60px" }}>
                        <h5 style={{ color: "#000000", fontWeight: "700", textAlign: "center" }}>Why You’ll Love Typing.com</h5>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div>
                                <img src={elipse} alt="" />
                            </div>
                            <div style={{ padding: "16px 0px 0px 25px" }}>
                                <p style={{ color: "#2280C9" }}>Engaging Curriculum</p>
                                <p>Students learn valuable technology fundamentals – designed by experts for students of every skill level. </p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div>
                                <img src={threestar} alt="" />
                            </div>
                            <div style={{ padding: "16px 0px 0px 25px" }}>
                                <p style={{ color: "#2280C9" }}>Gamified Learning</p>
                                <p>Engage students with fun typing games, interactive lessons, and achievements.</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div>
                                <img src={elipse} alt="" />
                            </div>
                            <div style={{ padding: "16px 0px 0px 25px" }}>
                                <p style={{ color: "#2280C9" }}>Make it Your Own</p>
                                <p>Enhance learning by creating your own lessons for cross-curricular reinforcement.</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div>
                                <img src={threestar} alt="" />
                            </div>
                            <div style={{ padding: "16px 0px 0px 25px" }}>
                                <p style={{ color: "#2280C9" }}>Standardized Test Prep Solution</p>
                                <p>Prepare your students for standardized testing with free response typing lessons.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
                            <video controls autoPlay loop muted playsInline style={{ maxWidth: "-webkit-fill-available", border: "4px solid rgb(190 227 255)", borderRadius: "1.5rem" }}>
                                <source src={myvideo} type='video/mp4' />
                            </video>
                        </div>
                    </div>
                </div>
                <div className="row mt-5" style={{boxShadow:"0px 0px 4px 0px #00000040",padding:"15px"}}>
                    <div className="col-md-3">
                        <img src={chair} alt="" style={{maxWidth:"-webkit-fill-available"}}/>
                    </div>
                    <div className="col-md-9" >
                        <div style={{textAlign:"center",padding:"15px",color:"#000000"}}>
 <h5>
                            Teachers and Administrators, Get Started Today
                        </h5>
                        <p>
                            Grade, track, and report on students' progress in real time. Unlimited students, unlimited classes, unlimited teachers, unlimited schools. Typing.com's teacher portal is FREE!
                        </p>
                        <button style={{margin:"10px",background:"#FFDB57",border:"1px solid #F1BC3F",borderRadius:"4px",padding:"4px 10px 4px 10px"}}>Signup now</button>
                        <button style={{color:"#4299E2",background:"transparent",border:"1px solid #3182CE",borderRadius:"4px",padding:"4px 10px 4px 10px"}}>Learn More</button>
                        </div>
                       
                    </div>
                </div>
            </div>
            <Footer/>

        </>
    )
}

export default Content;