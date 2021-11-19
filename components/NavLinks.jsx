import React from 'react'

const NavLinks = () => {
    return (
        <div className="flex items-center w-4/12 justify-between">
            <div className="flex w-8/12 items-center justify-between text-gray-800">
                <p><a href="#">Udwell now</a></p>
                <p><a href="#">Sell a property</a></p>
            </div>
            <div className="w-2/12 flex justify-center items-center">
                <img src="/assets/menu.svg" className="cursor-pointer" alt="toggle" />
            </div>
        </div>
    )
}

export default NavLinks
