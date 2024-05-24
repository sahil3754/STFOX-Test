import React, { useContext, useState } from 'react'
import { MyContext } from '../../context/MyContext'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";

function Add() {
  const { addItem, items } = useContext(MyContext)

  const { register,handleSubmit ,formState: { errors }, reset, } = useForm({ mode: "onBlur", reValidateMode: "all", });


  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const navigate = useNavigate();

  return (
    <div className=' mx-auto container p-32'>
    

      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit((e)=> {
        addItem({ id: Date.now(), email, contact });
        setEmail('');
        setContact('');
        navigate("/")
       
      } )} >
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-white"
          >
            Enter The Email
          </label>

          <input
            type="text"
            className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
            {...register("email", {
              required: true,
              onChange:(e)=>{
                setEmail(e.target.value)
              },
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Enter a valid email address",
              },

            })}
          />
          {errors.email && (
            <p className="text-red-500 mt-2 text-sm">
                {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-white"
          >
            Enter Contact Number
          </label>
          <input
            type="text"
            // value={products.price}
            className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
            {...register("contact", {
              required: true,
              onChange:(e)=>{
                setContact(e.target.value)
              },
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit contact number",
              },

            })}
          />
          {errors.contact && (
            <p className="text-red-500 mt-2 text-sm">
               {errors.contact.message}
            </p>
          )}
        </div>


        
        <button
          type="submit"
          className="focus:outline-none w-full text-white bg-[#836FFF]  hover:bg-violet-800  outline-0 font-medium rounded-lg text-sm px-5 py-2.5 "
        >
          Add
        </button>

      </form>
    </div>
  )
}

export default Add