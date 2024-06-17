import React from 'react'

const StartTyping = () => {
  return (
    <>
    <div style={{display:"flex",justifyContent:"space-between",paddingRight:"1.5rem",paddingLeft:"1.5rem",background:"linear-gradient(180deg, #FEA144 0%, #F57C21 100%)",padding:"10px",color:"white"}}>
        <div>
           <h3>Create a free account to save your progress!</h3> 
        </div>
        <div>
          <button style={{margin:"10px",border:"none",background:"none",color:"white"}}>Log In</button>
          <button style={{background:"white",color:"#F8862A",borderRadius:"5px",padding:"5px",border:"none"}}>Create Free Account</button>
        </div>
    </div>

    <div className="row mt-5">
         <div className="col-md-3">
            <div>Typing Lessons</div>
         </div>
         <div className="col-md-6">
           <div style={{background:"#3295DB"}}>0% Complete</div>
         </div>
         <div className="col-md-3">
        <div>Print Unit Certificate</div>
         </div>
    </div>
    
    </>
  )
}

export default StartTyping