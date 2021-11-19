import React from 'react'
import NavLinks from './NavLinks'
import SearchBar from './SearchBar'

const NavBar = () => {
    return (
        <div className="bg-white py-4">

            <div className="w-11/12 lg:w-10/12 mx-auto flex justify-between">
               <SearchBar/>
               <NavLinks/>
            </div> 

        </div>
    )
}

export default NavBar
