"use client";

import s from "./css/products.module.css";
import { useState ,useEffect} from "react";
import axios from "axios";
import Chatcompunents from "../components/Chatcomponent"


export default function ProductsPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [message,setmessage]=useState("");
  const [emessage,setemessage]=useState('');
  const [Isloading,setIsloading]=useState(false);

  useEffect(()=>{
      setTimeout(()=>{
        setemessage("");
      },4000)
    },[emessage])

  useEffect(()=>{
      setmessage("");
  },[emessage])


  const submitInterest = async(e) => {
    e.preventDefault();
    if(Isloading) return;
    try{
      setIsloading(true)
      const respons = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/early-access`, {
      name,
      email,
    });
    if(respons.data.detail){
      setemessage(respons.data.detail)
    }
    if (respons.data.message) {
      setmessage("Thank you for registering! 🎉.  We'll keep you updated.😁");
      setName("");
      setEmail("");
    }

    }catch(err){
      console.log(`Error while sending product request:${err}`)
    }finally{setIsloading(false)}

    
  };

  return (
    <section className={s.wrapper}>
      <Chatcompunents/>
      <h1>🚀 Our Products</h1>
      <p className={s.subtitle}>
        We’re building powerful AI products to help businesses and developers
        move faster.
      </p>

      <div className={s.productsGrid}>
        {/* PRODUCT 1 */}
        <div className={s.card}>
          <h2>🤖 Teclury SalesMind AI</h2>
          <p className={s.tagline}>
            AI-powered sales agent for WhatsApp & web
          </p>
          <ul>
            <li>🟢 Auto-reply to customer messages</li>
            <li>🟢 Product catalog & order handling</li>
            <li>🟢 Works with WhatsApp & other Messaging Platforms</li>
            <li>🟢 Auto generate ecommerce site based on selected theme</li>
            <li>🟢 Seller dashboard</li>
            <li>🟢 Built for small & medium businesses</li>
          </ul>
        </div>

        {/* PRODUCT 2 */}
        <div className={s.card}>
          <h2>📚 Teclury KnowledgeCore API</h2>
          <p className={s.tagline}>
            Knowledge-based chatbot API for developers
          </p>
          <ul>
            <li>🟢 Plug-and-play REST API</li>
            <li>🟢 Train on PDFs, docs & databases</li>
            <li>🟢 RAG-based accurate responses</li>
            <li>🟢 API-based</li>
          </ul>
        </div>
      </div>

      {/* EARLY ACCESS */}
      <div className={s.earlyAccess}>
        <h3>✨ Get Early Access</h3>
        <p>
          We’re currently working on these products. Register now to get early
          access and updates.
        </p>

        <form onSubmit={submitInterest} className={s.form}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            required
          />
          <button type="submit">{ Isloading?("Saving.."):("Notify Me 🚀")}</button>
        </form>
        {message && <p className={s.successMessage}>{message}</p>}
        {emessage && <p className={s.errorMessage}>{emessage}</p>}
      </div>
    </section>
  );
}
