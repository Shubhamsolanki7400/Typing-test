import React from 'react';
import img from '../../src/assets/99.png'
import left from '../../src/assets/left.png'
import erin from '../../src/assets/erin-lee.webp'
import { dummyData1, dummyData2 } from "../dummydata/Dummy"
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
            <div className="prepare" style={{ paddingTop: "100px", marginTop: "100px", backgroundColor: "#83bceb" }}>
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
                        <div style={{ background: "white", position: "relative", padding: "20px",borderRadius:"15px" }}>
                            <div><img src={left} alt="" /></div>
                            <p style={{marginTop:"10px",color:"#67B1EA"}}>Typing.com is a one-stop shop for students to learn to type! The fact that students can progress at their own pace, while tracking accuracy and speed, has been an important benefit.</p>
                            <div style={{display:"flex",gap:"5px"}}>
                                <img src={erin} style={{maxWidth:"40px",borderRadius:"100%"}} alt="" />
                               <div style={{textAlign:"center",padding:"10px"}}>
                               <p style={{marginBottom:"0px",color:"#67B1EA"}}>Rory Stadt</p>
                               <p style={{marginBottom:"0px", color:"#67B1EA"}}>Missouri, US</p>
                               </div>
                               
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Content