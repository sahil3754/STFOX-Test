import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { MyContext } from '../../context/MyContext';
import { useNavigate } from 'react-router-dom';

function Add() {
  const { addItem, myEdit, edit, updateItem } = useContext(MyContext);
  const navigate = useNavigate();

  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (edit) {
      setValue('email', myEdit.email);
      setValue('contact', myEdit.contact);
    }
  }, [edit, myEdit, setValue]);

  const onSubmit = (data) => {
    if (edit) {
      updateItem(myEdit.id, { ...myEdit, email: data.email, contact: data.contact });
    } else {
      addItem({ id: Date.now(), email: data.email, contact: data.contact });
    }
    navigate('/');
  };

  return (
    <div className='mx-auto container p-32'>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="text-base font-medium text-white">Email address</label>
          <div className="mt-2">
            <input
              className="flex h-10 w-full rounded-md border text-white border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Email"
              {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email format' } })}
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>
        </div>
        <div>
          <label className="text-base font-medium text-white">Contact Number</label>
          <div className="mt-2">
            <input
              className="flex h-10 w-full rounded-md border text-white border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Contact Number"
              {...register('contact', { required: 'Contact number is required', pattern: { value: /^[0-9]{10}$/, message: 'Contact must be a 10-digit number' } })}
            />
            {errors.contact && <span className="text-red-500">{errors.contact.message}</span>}
          </div>
        </div>
        <button type="submit" className="focus:outline-none w-full text-white bg-[#836FFF] hover:bg-violet-800 outline-0 font-medium rounded-lg text-sm px-5 py-2.5">
          {edit ? 'Save' : 'Add'}
        </button>
      </form>
    </div>
  );
}

export default Add;
