"use client";

import s from "./css/contactpage.module.css";
import { use, useState ,useEffect} from "react";
import axios from "axios";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [emesage,setemessage]=useState("");
  const [message,setmessage]=useState("");
  const [btncon,setbtncon]=useState("Submit")



  useEffect(()=>{
    setTimeout(()=>{
      setemessage("");
    },3000)
  },[emesage])

   useEffect(()=>{
      setmessage("");
  },[emesage])

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name==="email"){
      setFormData((prev) => ({ ...prev, [name]: value.replace(/\s/g, "").toLowerCase()}));
    }else{
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);


    try{
      if(loading) return;
      setLoading(true)
      const respons =await axios.post( `${process.env.NEXT_PUBLIC_API_URL}/contact`, formData);
      
      if(respons.data.detail){
        setemessage(respons.data.detail)
      }

      if(respons.data.message){
        
        setmessage("Form submitted successfully!");
        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
      }

    }catch(err){
      console.error("Error submitting form:", err);
    }finally{
       setLoading(false);
    }

   
  };

  return (
    <section className={s.contactmain}>
      <div className={s.contact}>
        <h1>Contact Us 📞</h1>
        <p className={s.subtitle}>We would love to hear from you 🥰</p>

        <div className={s.formmain}>
          
          <form className={s.formleft} onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Your Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label>Your Message</label>
            <textarea
              rows="5"
              name="message"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            />

            {emesage && <p className={s.emesage}>{emesage}</p>}
            {message && <p className={s.message}>{message}</p>}
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>

          {/* RIGHT – CONTACT DETAILS */}
          <aside className={s.formright}>
            <h2>Get in Touch 😄</h2>
            <p>
              Reach out for project discussions, support, or partnerships.
              We’re always happy to help.
            </p>

            <div className={s.contactDetails}>
              <div>
                <span>✉️</span>
                <a href="mailto:contact@teclury.in">
                  contact@teclury.in
                </a>
              </div>

              <div>
                <span>📞</span>
                <a href="tel:+918526521533">
                  +91 8526521533
                </a>
              </div>

              <div>
                <span>🟢</span>
                <a
                  href="https://wa.me/918526521533"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
