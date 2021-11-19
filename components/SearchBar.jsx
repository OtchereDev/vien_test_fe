import React from 'react'

const SearchBar = () => {
    return (
        <div className="flex w-4/12  ml-24">
            <div className=" p-1 pl-2 bg-gray-100 rounded-l flex">
                <div className="items-center flex w-8/12">
                
                <span className="inline-flex p-1 rounded-md bg-gray-200 items-center">
                    <p className="mr-1 text-gray-800 text-sm">
                        Granger,IA
                    </p>
                    <img src="/assets/cancel.svg" className="cursor-pointer" alt="" />
                </span>

                </div>
                <div className="">
                <input type="text" className="p-2 w-full bg-gray-100 outline-none " placeholder="Add more" />

                </div>
            </div>
            <button className="p-1 w-3/12 bg-green-500 rounded-r flex justify-center items-center">
                <img src="/assets/Navigation/search.svg" alt="" />
            </button>
            
        </div>
    )
}

export default SearchBar
