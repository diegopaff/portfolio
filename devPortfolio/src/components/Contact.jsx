import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form"
import { AiFillCheckSquare } from 'react-icons/ai'
import { CopyMail } from '../components'

const Contact = () => {
    /* utilizo useForm Hook para el manejo del form */
    const { register, formState: {errors}, handleSubmit, reset } = useForm();
    
    const form = useRef();
    
    /* Emailjs para enviar mail desde el formulario */
    const sendEmail = (ev) => {
        console.log(ev.nombre);
        emailjs.sendForm('service_lns9smm', 'template_portfolio_AV', form.current , 'RLzHWGu0VQuk5fekx')
        .then((result) => {
            toast((t) => (
                <span className='font-poppins text-base text-black flex gap-3' >
                    <AiFillCheckSquare className=' text-green-600 text-7xl'/>
                    Thanks for contacting me {ev.nombre}. I'll get back to you soons as posible.
                </span>
              ));
            
            reset();
            console.log(result.text)
        }, (error) => {
            console.log(error.text);
        });
    }

  return (
    <div className='flex flex-col gap-5 justify-center items-center font-poppins'>
        <Toaster />
        <h2 className='font-poppins font-semibold text-xl text-white border-b-8 border-[#7477FF] 
                     md:justify-self-start'>
            Contact
        </h2>

        <CopyMail/>
        
        <form ref={form} className="w-full max-w-md px-9 gap-1" onSubmit={handleSubmit(sendEmail)}>
            <div className="flex flex-wrap -mx-3 mb-1">
                <div className="w-full md:w-full px-3 mb-1 md:mb-0">
                    <label className="block  tracking-wide text-white text-base font-regular mb-2" htmlFor="nombre">
                        Name
                    </label>
                    <input  
                        className="appearance-none  rounded-md block w-full bg-[#212e42] text-white  py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#425c83]" 
                        id="nombre" 
                        type="text" 
                        name='nombre'
                        {...register('nombre' , {
                            required: true,
                            maxLength:30,})} />
                            {errors.nombre?.type === 'required' && <p className='font-poppins font-extralight text-xs text-red-500'>Name required.</p>}
              
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-1">
                <div className="w-full px-3">
                    <label className="block tracking-wide text-white text-base font-regular mb-2" htmlFor="email">
                        E-mail
                    </label>
                    <input  
                        className="appearance-none rounded-md block w-full bg-[#212e42] text-white  py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#425c83] focus:border-gray-500" 
                        id="email" 
                        type="email" 
                        name='email'
                        {...register('email' ,  {
                            required: true,
                            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})} /> {/* Es una plantilla que evalua el formato para validar que sea un email */}
                            {errors.email?.type === 'required' && <p className='font-poppins font-extralight text-xs text-red-500'>Email requerido.</p>}
                            {errors.email?.type === 'pattern' && <p className='font-poppins font-extralight text-xs text-red-500'>Invalid format: please enter a valid e-mail</p>}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-1">
                <div className="w-full px-3">
                    <label className="block tracking-wide text-white text-base font-regular mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea 
                        className=" no-resize rounded-md appearance-none block w-full bg-[#212e42] text-white  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#425c83] hover:bg-[#26364c] focus:border-gray-500 h-48 resize-none" 
                        id="message" 
                        name='message'
                        {...register('message' , {required:true, maxLength: 500} )}></textarea>
                        {errors.message?.type === 'required' && <p className='font-poppins font-extralight text-xs text-red-500'>Please write a message.</p>}
                        {errors.message?.type === 'maxLength' && <p className='font-poppins font-extralight text-xs text-gray-700'> Max 500 char.</p>}
                    
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="text-center md:w-1/3 shadow bg-[#0F172A] hover:bg-[#7477FF] focus:shadow-outline focus:outline-none text-white hover:text-[#0F172A] font-bold rounded h-9">
                    <input className='pointer w-full h-full cursor-pointer' type="submit" value='Send' />
                </div>
                <div className="md:w-2/3"></div>
            </div>
        </form>
    </div>
  )
}

export default Contact;