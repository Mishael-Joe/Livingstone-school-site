"use client"

import React from 'react'
import { useState } from 'react'

function WhatsappSquare(props) {
  return <svg className='text-blue-700' stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" height="5em" width="5em" {...props}><path d="M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z" /></svg>;
}

function Email(props) {
  return <svg className='text-blue-700' stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="5em" width="5em" {...props}><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>;
}


function Linkedin(props) {
  return <svg className='text-blue-700' stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" height="5em" width="5em" {...props}><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" /></svg>;
}


const ContactUs = () => {
    const [formData, setFormData] = useState({
        childsName: '',
        parentName: '',
        phoneNumber: '',
        comment: '',
    })

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prev => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        
    }

  return (
    <section>
        <div className="p-5 flex gap-4 flex-col-reverse sm:flex-row">
            <div id='Admission' className=' basis-3/6 bg-[#0b80da]/50 shrink'>
                <h1 className="text-center text-lg font-serif font-bold p-1">CONTACTS</h1>
                <div className="row g-5">
                    <div className="col mb-4">
                        {/* <!--<h3 className="text-info">Contact<span className="text-primary fw-light">Details</span></h3>--> */}
                        <ul className="pt-2">
                            <li className=" px-4 text-sm font-mono font-semibold">
                                <span className="font-semibold font-serif text-base">Address:</span> 79 IBB WAY CALABAR, C.R.S
                            </li>
                        
                        
                            <li className=" px-4 text-sm font-mono font-semibold">
                                <span className="font-semibold font-serif text-base">E-Mail :</span> grenecademy55@gmail.com
                            </li>
                    
                        
                            <li className=" px-4 text-sm font-mono font-semibold">
                                <span className="font-semibold font-serif text-base">Telephone :</span> +234 9072-2988-35
                            </li>
                        
                            {/* <li className="flex justify-evenly items-center px-4 text-sm font-mono font-semibold">
                                <a href=""><i className='bg-blue-500 s'  ><WhatsappSquare /></i></a>
                                <a href=""><i><Email /></i></a>
                                <a href=""><i className='bg-blue-500 re bx-sm'   ><Linkedin /></i></a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
            <div id='Contact' className=' basis-3/6 bg-[#0b80da]/50'>
                <h1 className='font-serif font-bold text-lg text-center p-1'>Admission</h1>
                <h2 className='ps-4 text-xs font-semibold'>Admission in progress ...</h2>
                <form className='px-4'>
                    <input 
                        name='childsName'
                        value={formData.childsName}
                        type='text' 
                        placeholder="Child's Name"
                        onChange={handleChange}
                        required
                        className='w-full py-0.5 px-2 rounded-sm bg-slate-200 my-1 focus:outline-none'
                    />

                    <input 
                        name='phoneNumber'
                        value={formData.phoneNumber}
                        type='text' 
                        placeholder='Phone Number' 
                        onChange={handleChange}
                        required
                        className='w-full py-0.5 px-2 rounded-sm bg-slate-200 my-1 focus:outline-none'
                    />

                    <input 
                        name='parentName'
                        value={formData.parentName}
                        type='text' 
                        placeholder="Guardian's Name" 
                        onChange={handleChange}
                        required
                        className='w-full py-0.5 px-2 rounded-sm bg-slate-200 my-1 focus:outline-none'
                    />

                    <textarea 
                        name='comment'
                        value={formData.comment}
                        type='textarea' 
                        placeholder="Your Comment" 
                        onChange={handleChange}
                        required
                        className="w-full py-0.5 px-2 my-1 rounded-sm bg-slate-200 mb-4 block text-gray-700 placeholder-gray-400 border border-gray-300 focus:outline-none"
                    />
                </form>
            </div>
        </div>
    </section>
  )
}

export default ContactUs