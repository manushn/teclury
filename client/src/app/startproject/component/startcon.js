"use client";
import styles from "../css/startcon.module.css";
import { useState } from "react";

export default function StartForm() {
    const [formData, setFormData] = useState({
        fullname: '',
        company: '',
        email: '',
        phone:'',
        projectDetails: '',
        budget: 'less than  10,000Rs',
        Type:'Full-Stack Development',
    });

    const [mailrror,setemailerror]=useState('');
    const [phoneerror,setphoneerror]=useState('');

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
        setFormData({ ...formData, [name]: value });
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

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Form submitted:', formData);
        alert('form clcked')
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
                            <label htmlFor="projectDetails">Project details</label>
                            <textarea 
                                id="projectDetails" 
                                name="projectDetails" 
                                value={formData.projectDetails} 
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

                            <label htmlFor="Type">Project Type</label>
                            <select 
                                id="Type" 
                                name="Type" 
                                value={formData.Type} 
                                onChange={handleChange} 
                                required
                            >
                                <option value="Full-Stack Development">Full-Stack Development</option>
                                <option value="AI Integration">AI Integration</option>
                                <option value="Mobile App Development">Mobile App Development</option>
                                <option value="Web Development">Web Development</option>
                            </select>

                            <button type="submit" className={styles.submitButton}>Request Project Proposal</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )

}
