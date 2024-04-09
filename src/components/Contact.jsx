import React, { useState } from 'react'

export const Contact = () => {
  
    const [email,setemail]=useState('')
    const [feedback,setFeedback]=useState('')
    const handelSubmit=(e)=>{
      e.preventDefault()
      const formData={email,feedback,timestamp:Date.now}
      console.log(formData);
    }


   return ( 
    <div className='container p-3'>
     <section> 
      <form onSubmit={handelSubmit}>
      
        <h2 className='provider'>Provide feedback</h2>
        <div className="mb-3">
            <label  className="form-label">Email:</label>
            <input type="email" 
            className="form-control" 
            value={email} 
            onChange={(e)=>setemail(e.target.value)}
            placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
          <label  className="form-label">Feedback:</label>
          <textarea 
          className="form-control"  
          value={feedback}
          onChange={(e)=>setFeedback(e.target.value)}
          rows="3"></textarea>

          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">Submit</button>
          </div>

        </div>
      </form>
      </section>
    </div>
  )
}
