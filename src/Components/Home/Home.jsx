import React, { useContext } from 'react'
import { MyContext } from '../../context/MyContext'
import { Link, useNavigate } from 'react-router-dom';


function Home() {
    const { setEdit, items,setMyEdit,deleteItem } = useContext(MyContext);
    const navigate = useNavigate()

    const Edit = () => {
        setEdit(true);
        navigate("/add")

    }

    const Add = () => {
        setEdit(false);
        navigate("/add")
    }
    return (
        <>


            <div className='bg-black text-white myFont  p-36 '>
               

                <section className="mx-auto w-full max-w-7xl px-4 py-4">
                    <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">

                        <h1 className='text-xl'>Welcome to ST FOX</h1>
                    
                    </div>
                    <div className="mt-6 flex flex-col">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                    <table className="min-w-full w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                             
                                                <th
                                                    scope="col"
                                                    className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                                                >
                                                    Email
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-8 py-3.5 text-left text-sm font-normal text-gray-700"
                                                >
                                                    Contact
                                                </th>

                                                <th
                                                    scope="col"
                                                    className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                                >
                                                    Edit
                                                </th>

                                                <th
                                                    scope="col"
                                                    className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                                >
                                                    Delete
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white ">
                                            {items.map((person) => (
                                                <tr key={person.id} className='w-full'>
                                                    <td className="whitespace-nowrap px-4 py-4">
                                                        <div className="flex items-center">

                                                            <div className="ml-4">
                                                                {/* <div className="text-sm font-medium text-gray-900">{person.contact}</div> */}
                                                                <div className="text-sm text-gray-700">{person.email}</div>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td className="whitespace-nowrap px-4 text-left py-4 text-black">
                                                        {person.contact}
                                                    </td>
                                                    <td className="whitespace-nowrap px-4 py-4">
                                                        
                                                            <span  onClick={()=>{setMyEdit(person)
                                                                navigate("/add")
                                                                setEdit(true)
                                                            }} className="inline-flex rounded-full cursor-pointer bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                                Edit
                                                            </span>
                                                    </td>
                                                    <td className="whitespace-nowrap px-4 py-4 text-sm text-red-300 cursor-pointer " onClick={()=> deleteItem(person.id)}>
                                                        delete
                                                    </td>
                                                    {/* <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                                                        <a href="#" className="text-gray-700">
                                                            Edit
                                                        </a>
                                                    </td> */}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )

}

export default Home