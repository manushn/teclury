"use client";
import styles from "../css/startcon.module.css";
import { useState ,useEffect} from "react";
import axios from "axios";

export default function StartForm() {
    const [formData, setFormData] = useState({
        fullname: '',
        company: '',
        email: '',
        phone:'',
        projectdetails: '',
        budget: 'less than  10,000Rs',
        type:'Full-Stack Development',
    });

    const [mailrror,setemailerror]=useState('');
    const [phoneerror,setphoneerror]=useState('');
    const [emessage,setemessage]=useState('');
    const [message,setmessage]=useState('');
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
          setemessage("");
        },4000)
      },[emessage])

    useEffect(()=>{
        setmessage("");
    },[emessage])
    

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validateMobile = (mobile) => {
        const regex = /^[0-9]{10}$/; 
        return regex.test(mobile);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if(name==="email"){
            setFormData((prev) => ({ ...prev, [name]: value.replace(/\s/g, "").toLowerCase()}));
        }else{
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
       
        if (name === 'email') {
            if (!validateEmail(value)) {
                setemailerror('Invalid email address');
            } else {
                setemailerror('');
            }
        }
        if (name === 'phone') {
            if (!validateMobile(value)) {
                setphoneerror('Invalid mobile number');
            } else {
                setphoneerror('');
            }
        }
    };

    const validateForm = () => {
    if (!formData.fullname.trim())
      return setemessage("Full name is required"), false;

    if (!formData.company.trim())
      return setemessage("Company name is required"), false;

    if (!formData.email.trim())
      return setemailerror("Email is required"), false;

    if (!validateEmail(formData.email))
      return setemailerror("Invalid email address"), false;

    if (!formData.phone.trim())
      return setphoneerror("Phone number is required"), false;

    if (!validateMobile(formData.phone))
      return setphoneerror("Phone number must be 10 digits"), false;

    if (!formData.projectdetails.trim())
      return setemessage("Project details are required"), false;

    if (formData.projectdetails.length < 20)
      return (
        setemessage(
          "Project details must be at least 20 characters"
        ),
        false
      );

    return true;
  };

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(loading) return;
        if (!validateForm()) return;

        try{
            setLoading(true);
            const respons =await axios.post( `${process.env.NEXT_PUBLIC_API_URL}/start-project`, formData);
            if(respons.data.message){
            setmessage("Form submitted successfully!");
            setFormData({
                fullname: '',
                company: '',
                email: '',
                phone:'',
                projectdetails: '',
                budget: 'less than  10,000Rs', 
                type:'Full-Stack Development',
            });
            }else{
                setemessage("Failed to submit the form. Please try again.");
            }
        }catch(err){
            console.error("Error submitting form:", err);
            setemessage("Failed to submit the form. Please try again.");
        }finally{
            setLoading(false);
        }
    };

    return(
        <div className={styles.formContainer}>
            <div className={styles.formcon}>
                <h1 className={styles.formTitle}>Start Your Project with Teclury 🎯</h1>
                <p>Tell us about your challenge and timeline — we'll reply within 24 hours.</p>
                <div className={styles.formmain}>
                    <div className={styles.formleft}>
                        <form >
                            <label htmlFor="fullname">Full name</label>
                            <input 
                                type="text" 
                                id="fullname" 
                                name="fullname" 
                                value={formData.fullname} 
                                onChange={handleChange} 
                                required 
                            />
                            <label htmlFor="company">Company name</label>
                            <input 
                                type="text" 
                                id="company" 
                                name="company" 
                                value={formData.company} 
                                onChange={handleChange} 
                                required 
                            />
                            <label htmlFor="email">Email address</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                            />
                            {mailrror && <span className={styles.error}>{mailrror}</span>}
                            <label htmlFor="phone">Phone number</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                required 
                            />
                            {phoneerror && <span className={styles.error}>{phoneerror}</span>}
                            <label htmlFor="projectdetails">Project details</label>
                            <textarea 
                                id="projectdetails" 
                                name="projectdetails" 
                                value={formData.projectdetails} 
                                onChange={handleChange} 
                                required 
                            ></textarea>
                            
                        </form>
                    </div>
                    <div className={styles.formright}>
                        <h3>Project details</h3>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="budget">Estimated Budget</label>
                            <select 
                                id="budget" 
                                name="budget" 
                                value={formData.budget} 
                                onChange={handleChange} 
                                required
                            >
                                <option value="less than  10,000Rs">Less than 10,000Rs</option>
                                <option value="10,000Rs - 50,000Rs">10,000Rs - 50,000Rs</option>
                                <option value="50,000Rs - 1,00,000Rs">50,000Rs - 1,00,000Rs</option>
                                <option value="more than 1,00,000Rs">More than 1,00,000Rs</option>
                            </select>

                            <label htmlFor="type">Project Type</label>
                            <select 
                                id="type" 
                                name="type" 
                                value={formData.type} 
                                onChange={handleChange} 
                                required
                            >
                                <option value="Full-Stack Development">Full-Stack Development</option>
                                <option value="AI Integration">AI Integration</option>
                                <option value="Mobile App Development">Mobile App Development</option>
                                <option value="Web Development">Web Development</option>
                            </select>
                            {emessage && <span className={styles.emessage}>{emessage}</span>}
                            {message && <span className={styles.message}>{message}</span>}
                            <button type="submit" className={styles.submitButton}>Request Project Proposal</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )

}
