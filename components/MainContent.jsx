import React from 'react'

const MainContent = () => {
    return (
        <div className="w-11/12 lg:w-10/12 mx-auto py-5">
            <div className="w-3/12 bg-white py-5 px-4 rounded-md">
                <div className="flex justify-center items-center flex-col">

                    <div className="mx-auto ">
                        <div className="w-20 h-20 inline-flex rounded-full bg-pink-300 mx-auto">

                        </div>
                        <div style={{transform: "translate(-63%, -50%)"}} className="w-6 h-6 inline-flex rounded-full bg-green-600 ">

                        </div>
                    </div>

                    <div>
                        <p className="text-gray-900 text-lg font-medium text-center">
                            Allex Assencher
                        </p>

                        <p className="text-gray-300 text-center text-sm mb-2">
                            Home Buyer
                        </p>
                        <div className="flex justify-center items-center">
                            <button className="py-1 w-full rounded-md block mx-auto bg-green-600 text-gray-50">
                                Edit profile
                            </button>

                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="flex justify-between items-center py-2 px-4 border-gray-200 border-b border-t">
                        <p>
                            Profile
                        </p>
                        <img src="/assets/User.svg" alt="Profile" />
                    </div>
                    <div className="flex justify-between items-center py-2 px-4 border-gray-200 border-b border-t">
                        <p>
                            Profile
                        </p>
                        <img src="/assets/User.svg" alt="Profile" />
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default MainContent
