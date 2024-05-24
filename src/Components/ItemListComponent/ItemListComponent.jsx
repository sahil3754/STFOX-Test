import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../context/MyContext';

import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
const ItemListComponent = () => {
    const { register, handleSubmit, formState: { errors }, reset, } = useForm({ mode: "onBlur", reValidateMode: "all", });
    const { items, updateItem, deleteItem, myEdit } = useContext(MyContext);
    const [editId, setEditId] = useState(null);
    const [editEmail, setEditEmail] = useState('');
    const [editContact, setEditContact] = useState('');

    const navigate = useNavigate();

    const handleUpdate = (id) => {
        updateItem(id, { id, email: editEmail, contact: editContact });
        setEditId(null);

        setEditEmail('');
        setEditContact('');
        navigate("/")
    };


    useEffect(() => {


        return () => {
            console.log(myEdit)
            setEditId(myEdit.id);

            setEditEmail(myEdit.email);
            setEditContact(myEdit.contact);
        }
    }, [])


    return (
        <ul>

            <li key={myEdit?.id}>
                {editId === myEdit?.id ? (
                    <>

                       

                        <div class="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 myFont">
                            <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">


                                <div class="space-y-5">
                                    <div>
                                        <label for="" class="text-base font-medium text-white">
                                            {" "}
                                            Email address{" "}
                                        </label>
                                        <div class="mt-2">
                                            <input
                                                class="flex h-10 w-full rounded-md border text-white border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="email"
                                                placeholder="Email"
                                                value={editEmail}
                                                onChange={(e) => setEditEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex items-center justify-between">
                                            <label for="" class="text-base font-medium text-white">
                                                {" "}
                                                Contact Number{" "}
                                            </label>

                                        </div>
                                        <div class="mt-2">
                                            <input
                                                class="flex h-10 w-full rounded-md border text-white border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="text"
                                                placeholder="Password"
                                                value={editContact}
                                                onChange={(e) => setEditContact(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    {editId === myEdit?.id ? (
                                        <button onClick={() => handleUpdate(myEdit?.id)} className="focus:outline-none w-full text-white bg-[#836FFF]  hover:bg-violet-800  outline-0 font-medium rounded-lg text-sm px-5 py-2.5 ">Save</button>
                                    ) : (

                                        ""
                                    )}

                                </div>


                            </div>
                        </div>
                    </>
                ) : (
                    <>

                    </>
                )}
                {/* <button onClick={() => deleteItem(myEdit?.id)} className='text-white'>Delete</button>
                {editId === myEdit?.id ? (
                    <button onClick={() => handleUpdate(myEdit?.id)} className='text-white'>Save</button>
                ) : (

                   ""
                )} */}
            </li>
            {/* ))} */}
        </ul>
    );
};

export default ItemListComponent;
