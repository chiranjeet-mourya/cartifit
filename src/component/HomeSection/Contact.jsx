import React, { useState } from 'react'

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let formErrors = {};
    
    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      formErrors.email = "Valid email is required";
    }

    if (!formData.subject.trim()) {
      formErrors.subject = "Subject is required";
    }
    
    // setErrors(formErrors);
    
    // return Object.keys(formErrors).length === 0;
  
    
    if (!formData.message.trim()) {
      formErrors.message = "Please, leave us a message";
    }
    
    setErrors(formErrors);
    
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      console.log('Form Submitted', formData);
    } else {
      console.log('Validation Failed');
    }
  };

  return (
    <>
    <div className="contact_section">
      <div className="container">
      <div className="text">
          <h1>Contact Us</h1>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className="contact_flex">
          <div className="left">
            <div className="single_text">
              <h5>Address:</h5>
              <p>11 West Town</p>
              <p>PBo 12345, United States</p>
            </div>
            <div className="single_text">
            <h5>Phone:</h5>
              <p>+1 1234 56 789</p>
              <p>+1 1234 56 780</p>
            </div>
            <div className="single_text">
              <h5>Email:</h5>
              <p>info@example.com</p>
              <p>email@example.com</p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
      <div className="right">
        <div className="halh_input">
          <div>
            <input 
              type="text" 
              placeholder="Name*" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div>
            <input 
              type="text" 
              placeholder="Email*" 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange} 
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
        </div>
        <div className="full_input">
          <input 
            type="text" 
            placeholder="Subject" 
            name="subject" 
            value={formData.subject} 
            onChange={handleInputChange} 
          />
          {errors.subject && <p>{errors.subject}</p>}
        </div>
        <div className="full_input">
          <textarea 
            placeholder="Write Your Message" 
            name="message" 
            value={formData.message} 
            onChange={handleInputChange} 
          />
          {errors.message && <p>{errors.message}</p>}
        </div>
        <button type="submit">Send Message</button>
      </div>
    </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact