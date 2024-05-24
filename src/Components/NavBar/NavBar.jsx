import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <div>
         

            <div className="relative w-full bg-black text-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center ">

                        <img src="https://staging-7c6d-classyinternet3.wpcomstaging.com/wp-content/uploads/2024/01/website-logo.png" alt="company Logo" width={160} />
                    </div>
             
                    <div className="hidden lg:block ">
                        <ul className="ml-12 inline-flex space-x-8 text-xl myFont tracking-widest">

                            <li >
                                <Link
                                    to={'/'}
                                    className=" font-semibold  hover:text-gray-900"
                                >
                                    Home
                                </Link>
                            </li>
                            <li >
                                <Link
                                    to={'/add'}
                                    className=" font-semibold  "
                                >
                                    Add
                                </Link>
                            </li>
                            

                        </ul>
                     
                    </div>
                    <div className="lg:hidden">
                        <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                    </div>
                    {isMenuOpen && (
                        <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                            <div className="divide-y-2 divide-gray-50 rounded-lg bg-black shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="px-5 pb-6 pt-5">
                                    <div className="flex items-center justify-between">
                                        <div className="inline-flex items-center space-x-2">

                                            <img src="https://staging-7c6d-classyinternet3.wpcomstaging.com/wp-content/uploads/2024/01/website-logo.png" alt="company Logo" width={160} />
                                        </div>
                                        <div className="-mr-2">
                                            <button
                                                type="button"
                                                onClick={toggleMenu}
                                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                            >
                                                <span className="sr-only">Close menu</span>
                                                <X className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                       
                                        
                                    </div>
                                    <ul className="ml-15 inline-flex space-x-8 text-xl myFont tracking-widest">

                                        <li >
                                            <Link
                                                to={'/'}
                                                className=" font-semibold  hover:text-gray-900"
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li >
                                            <Link
                                                to={'/'}
                                                className=" font-semibold  "
                                            >
                                                Add
                                            </Link>
                                        </li>
                                        <li >
                                            <Link
                                                to={'/'}
                                                className=" font-semibold  "
                                            >
                                                Edit
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default NavBar