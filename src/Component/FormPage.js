import React, { useState } from 'react'


function FormPage() {
   
   
    const [formData,setFormData] = useState({
        name:"",
        phone:"",
        email:"",
        address:"",
    })

    const handleChange = (e) =>{
        const {name ,value} = e.target
        setFormData({...formData,[name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Data:', formData);
        
      };

    

  return (
    <>
    <div className='formpage'>
     <h1>Submit Your Information</h1>
    <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' placeholder='Enter your name' name= "name" value={formData.name} onChange={handleChange}  required/> <br />
        <label>Email</label>
        <input type='email' placeholder='Enter your Email' name= "email" value={formData.email} onChange={handleChange}  required/> <br />
        <label>Phone No</label>
        <input type='tel' placeholder='Enter your Phone No' name= "phone" value={formData.phone} onChange={handleChange}  required/> <br />
        <label>Address</label>
        <input type='text' placeholder='Enter your address' name= "address" value={formData.address} onChange={handleChange}  required/> <br />
        <button type="submit">Submit</button>
       
    </form>
    </div>
    </>
  )
}

export default FormPage