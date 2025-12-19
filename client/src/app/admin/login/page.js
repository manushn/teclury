"use client";
import { useState, useEffect } from "react";
import axios from "axios";

import s from "./page.module.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Page() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [emessage, setEMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [resendTimer, setResendTimer] = useState(30);
  const [isResendActive, setIsResendActive] = useState(false);

  const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

  /* ⏱ Resend OTP countdown */
  useEffect(() => {
    if (!isOtpSent || isResendActive) return;

    if (resendTimer === 0) {
      setIsResendActive(true);
      return;
    }

    const timer = setTimeout(() => {
      setResendTimer((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [resendTimer, isOtpSent, isResendActive]);


  useEffect(()=>{
    setTimeout(()=>{
        setEMessage("")
    },2000)
  },[emessage])

  useEffect(()=>{
    const tok=sessionStorage.getItem("admin_token")
    if(tok){
      window.location.href = "/admin/dashboard";
    }
  },[])

  const handleSendOtp = async () => {
    if (!email) {
      setEMessage("Email is required");
      return;
    }
    if(!validateEmail(email)){
        setEMessage("Enter a valid Email!")
        return
    }
    try {
      setIsLoading(true);
      setEMessage("");

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/send-otp`,
        { email }
      );

      if(response.data.detail){
        setEMessage(response.data.detail)

      }

      if (response.data.message === "OTP sent successfully") {
        setIsOtpSent(true);
        setResendTimer(30);
        setIsResendActive(false);
      }
      
    } catch (err) {
      setEMessage("Failed to send OTP. Please try again.");
      console.log(err)
    } finally {
      setIsLoading(false);
    }
  };

  /* 🔁 Resend OTP */
  const handleResendOtp = async () => {
    if (!isResendActive) return;

    if(!validateEmail(email)){
        setEMessage("Enter a valid Email!")
        return
    }
    if(!otp){
        setEMessage("Enter a valid Email!")
    }
    try {
      setIsLoading(true);
      setEMessage("");

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/send-otp`,
        { email }
      );

      setResendTimer(30);
      setIsResendActive(false);
    } catch {
      setEMessage("Failed to resend OTP");
    } finally {
      setIsLoading(false);
    }
  };

  /* 🔐 Verify OTP & Login */
  const handleLogin = async () => {
    if (!otp) {
      setEMessage("OTP is required");
      return;
    }

    try {
      setIsLoading(true);
      setEMessage("");

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/verify-otp`,
        { email, otp }
      );
      if(response.data.detail){
        setEMessage(response.data.detail);
      }
      if (response.data.success){
        sessionStorage.setItem("admin_token", response.data.token);
        window.location.href = "/admin/dashboard";
      }
      

      
    } catch {
      setEMessage("Invalid or expired OTP");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />

      <div className={s.loginContainer}>
        <div className={s.loginbox}>
          <h1>Admin Login</h1>

          <div className={s.loginForm}>
            {!isOtpSent ? (
              <>
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value.replace(/\s/g, "").toLowerCase())}
                  placeholder="Enter your admin email"
                />

                {emessage && <p className={s.error}>{emessage}</p>}

                <button onClick={handleSendOtp} disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send OTP"}
                </button>
              </>
            ) : (
              <>
                <label>Email</label>
                <input type="email" value={email} disabled />

                <label>OTP</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter the OTP"
                />

                {isResendActive ? (
                  <p className={s.resend} onClick={handleResendOtp}>
                    Resend OTP
                  </p>
                ) : (
                  <p className={s.timer}>
                    Resend OTP in {resendTimer}s
                  </p>
                )}

                <p className={s.error}>{emessage}</p>

                <button onClick={handleLogin} disabled={isLoading}>
                  {isLoading ? "Verifying..." : "Login"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
