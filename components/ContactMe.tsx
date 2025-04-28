"use client"

import React, { useState } from 'react'
import SectionHeader from './SectionHeader'
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const ContactMe = () => {
    const [form, setForm] = useState({name: "", email: "", message: ""});
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setStatus("Sending...");

        try{
            const res = await fetch("/api/send-email",{
                method: "POST",
                body: JSON.stringify(form),
            });
    
            const data = await res.json();
            if (res.ok) {
                toast.success("Message sent successfully!")
                setForm({ name: "", email: "", message: "" }); // reset form
            }else{
                toast.error("Failed to send message")
            }

        }

        catch(err){
            console.error(err);
            toast.error("Somthing went wrong.");
        }
        // setStatus(data.message);
    }

  return (
    <div id='contact'>
        <SectionHeader title="Get in Touch" Icon={MdOutlineConnectWithoutContact}/>
        <div className='mt-5 sm:flex'>
            <div className='basis-1/2 p-5 flex flex-col justify-center items-center shrink-0 sm:p-10'>
                <div className='w-full flex gap-x-3 items-center border border-gray-300 rounded-lg py-1 px-5 mb-4'>
                    <FaEnvelope className='text-3xl'/>
                    <div>
                        <h3 className='font-bold'>Email Me At</h3>
                        <p className='text-gray-600'>luqmansalad00@gmail.com</p>
                    </div>
                </div>
                <div className='w-full flex gap-x-3 items-center border border-gray-300 rounded-lg py-1 px-5'>
                    <FaWhatsapp className='text-3xl'/>
                    <div>
                        <h3 className='font-bold'>Get in Touch</h3>
                        <p className='text-gray-600'>+252-616-984-305</p>
                    </div>
                </div>
                
            </div>
            <div className='basis-1/2 shrink-0 sm:p-10 p-5'>
                <h3 className='mb-5 font-medium text-2xl'>Direct Message</h3>
                <form 
                    className='flex flex-col'
                    onSubmit={handleSubmit}
                >
                    <input 
                        name='name'
                        type='text' 
                        placeholder='Name'
                        value={form.name}
                        onChange={handleChange}
                        required
                        className='border border-gray-300 rounded-lg px-3 py-2 mb-2'
                    />
                    <input 
                        name='email'
                        type='email' 
                        placeholder='Email'
                        value={form.email}
                        onChange={handleChange}
                        required
                        className='border border-gray-300 rounded-lg px-3 py-2 mb-2'
                    />
                    <textarea 
                        name='message'
                        placeholder='Write me your message Here'
                        onChange={handleChange}
                        value={form.message}
                        className='border border-gray-300 rounded-lg px-3 py-2'
                    />
                    <button 
                        type='submit'
                        className='border bg-cyan-800 text-white py-2 rounded-md mt-4 cursor-pointer'

                    >Send</button>
                    {status && <p>{status}</p>}
                </form>
            </div>
        </div>

        <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default ContactMe;