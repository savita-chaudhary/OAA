import React from 'react'
import fac from '../assets/fac.jpg'
function UpDateQA() {
    return (
        <div className='bg-cyan-950 h-screen w-screen'>
            <div className="nav flex justify-between bg-slate-200 pt-4  p-2">
                <button className="bg-black font-bold hover:bg-slate-700 text-yellow-200 rounded-2xl  px-6 py-2 text-2xl mt-2 ml-2 mb-2">Home</button>
                <button className="bg-black font-bold hover:bg-slate-700 text-yellow-200 rounded-2xl  px-6 text-2xl py-2 mt-2 mr-2 mb-2 "> Back</button>
            </div>

            <div className=" flex justify-between">

                <p className="font-bold text-yellow-400 text-4xl pt-8 px-8"> Update Quality OutComes</p>
                <img src={fac} alt="" className='w-64  p-8' />
            </div>

            <div className="second flex ml-12 -mt-12">

                <button className="bg-yellow-100 text-yellow-900 hover:bg-blue-200  font-bold py-2 px-4 rounded-full text-3xl">
                    1
                </button>
                <div className="flex py-4">
                    <hr className="w-72 border-dashed" />
                    <hr className="w-72 border-dashed" />
                    <hr className="w-72 border-dashed" />
                    <hr className="w-72 border-dashed" />
                    <hr className="w-72 border-dashed" />
                    <hr className="w-72 border-dashed" />
                    <hr className="w-72 border-dashed" />
                    <hr className="w-72 border-dashed" />

                    <hr className="w-60 border-dashed" />

                </div>
                <button className=" text-3xl bg-yellow-100 hover:bg-blue-200 text-yellow-900 font-bold py-2 px-4 rounded-full">
                    2
                </button>
            </div>
            <div className=" flex justify-between text-yellow-300 text-3xl font-semibold  p-8 mr-80">
                <p>Quality <br />Inspartion</p>
                <p>Quality <br />Inspartion</p>
            </div>
            <div className="border-dashed border-white border-2 rounded-3xl  m-8">

                <div className="four flex justify-between  m-14  text-3xl  ">

                    <div className="font-semibold text-white ">
                        <p>Production Date:</p> <br /><p>Shift:</p>
                    </div>

                    <ul className="font-semibold text-yellow-300">
                        <li>Auto Filled:</li><br /><li>Auto Filled:</li>
                    </ul>
                    <ul className="font-bold text-white">
                        <li>Machine ID:</li><br /><li>Oprator Id:</li>

                    </ul>
                    <ul className="font-semibold text-yellow-300">
                        <li>Auto Filled:</li><br /> <li>Auto Filled:</li>
                    </ul>

                    <ul className="font-semibold text-white">
                        <li>Batch ID:</li> <br /><li>Part-ID/Part-NO:</li>
                    </ul>
                    <ul className="font-semibold text-yellow-300">
                        <li>
                            <li>Auto Filled:</li><br />  <li>Auto Filled:</li>
                        </li>
                    </ul>
                    <ul className="font-semibold text-white">
                        <li>Total Parts Production:</li><br /> <li>Reject-Parts:</li>

                    </ul>
                    <ul className="font-semibold text-yellow-300">
                        <li>Auto Filled:</li> <br /> <li>Auto Filled:</li>
                    </ul>
                </div>


                <div className="flex pl-10 -mt-6">
                    <hr className="w-72 border-dashed" />
                    <hr className="w-72 border-dashed" />
                    <hr className="w-72 border-dashed" />
                    <hr className="w-72 border-dashed" />
                    <hr className="w-72 border-dashed" />
                    <hr className="w-72 border-dashed" />
                    <hr className="w-72 border-dashed" />
                    <hr className="w-72 border-dashed" />
                    <hr className="w-72 border-dashed" />
                    <hr className="w-72 border-dashed" />

                </div>

                < div className="five m-10 text-white flex justify-between">
                    <ul className=''>
                        <li className="font-semibold bg-blue-500  px-6 py-2 text-2xl ">
                            Sr.No </li><br /><br />

                        <ul className='text-5xl'> <li>1</li><br /><li>2</li><br /><li>3</li><br /><li>4</li></ul>
                    </ul>


                    <div className=''>
                        <p className="bg-blue-500 font-bold p-2 text-2xl">Rejection Category</p><br />

                        <p><br />
                            <button className="relative flex justify-center items-center bg-white border text-gray-600 rounded  focus:ring ring-slate-500">
                                <p className="px-4 font-bold py-2">Select Rejection Category</p>
                                <span className="bordre-1  bg-black">
                                    <svg className="h-8 w-8 text-white-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="6 9 12 15 18 9" /></svg>
                                </span>
                            </button>

                        </p><br /><br />

                        <p>
                            <button className="relative flex justify-center items-center bg-white border text-gray-600 rounded  focus:ring ring-slate-500">
                                <p className="px-4 py-2 font-semibold">Select Rejection Category</p>
                                <span className="bordre-1  bg-black">
                                    <svg className="h-8 w-8 text-white-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="6 9 12 15 18 9" /></svg>
                                </span>


                            </button>
                        </p>
                        <br />
                        <p><br />
                            <button className="relative flex justify-center items-center bg-white border text-gray-600 rounded  focus:ring ring-slate-500">
                                <p className="px-4 font-bold">Select Rejection Category</p>
                                <span className="bordre-1  bg-black">
                                    <svg className="h-8 w-8 text-white-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="6 9 12 15 18 9" /></svg>
                                </span>


                            </button>
                        </p>
                        <br />
                        <p><br />
                            <button className="relative flex justify-center items-center bg-white border text-gray-600 rounded  focus:ring ring-slate-500">
                                <p className="px-4 font-bold">Select Rejection Category</p>
                                <span className="bordre-1  bg-black">
                                    <svg className="h-8 w-8 text-white-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="6 9 12 15 18 9" /></svg>
                                </span>

                            </button>

                        </p>

                    </div>




                    <ul>
                        <li className="bg-blue-500 font-bold p-2 text-2xl">Rejection Type</li>

                        <br />
                        <li><br />
                            <button className="relative flex justify-center items-center bg-white border text-gray-600 rounded  focus:ring ring-slate-500">
                                <p className="px-4 font-bold">Select Rejection Type</p>
                                <span className="bordre-1  bg-black">
                                    <svg className="h-8 w-8 text-white-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="6 9 12 15 18 9" /></svg>
                                </span>

                            </button>

                        </li>

                        <br />
                        <li><br />
                            <button className="relative flex justify-center items-center bg-white border text-gray-600 rounded  focus:ring ring-slate-500">
                                <p className="px-4 font-bold">Select Rejection Type</p>
                                <span className="bordre-1  bg-black">
                                    <svg className="h-8 w-8 text-white-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="6 9 12 15 18 9" /></svg>
                                </span>

                            </button>

                        </li>
                        <br />
                        <li><br />
                            <button className="relative flex justify-center items-center bg-white border text-gray-600 rounded  focus:ring ring-slate-500">
                                <p className="px-4 font-bold">Select Rejection Type</p>
                                <span className="bordre-1  bg-black">
                                    <svg className="h-8 w-8 text-white-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="6 9 12 15 18 9" /></svg>
                                </span>

                            </button>

                        </li>
                        <br />
                        <li><br />
                            <button className="relative flex justify-center items-center bg-white border text-gray-600 rounded  focus:ring ring-slate-500">
                                <p className="px-4 font-bold">Select Rejection Type</p>
                                <span className="bordre-1  bg-black">
                                    <svg className="h-8 w-8 text-white-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="6 9 12 15 18 9" /></svg>
                                </span>

                            </button>

                        </li>

                    </ul>
                    <br />
                    <ul>
                        <li className="bg-blue-500 font-bold p-2 text-2xl">No Of Parts Rejected</li>
                        <br />                        <br />
                        <li className="font-bold bg-black px-5   p-1.5">Free Text Field</li>

                        <br />                        <br />
                        <li className="font-bold bg-black px-5 p-1.5">Free Text Field</li>

                        <br />                        <br />
                        <li className="font-bold bg-black px-5 p-1.5">Free Text Field</li>

                        <br />                        <br />
                        <li className="font-bold bg-black px-5 p-1.5">Free Text Field</li>

                    </ul>
                    <ul>
                        <li className="bg-blue-500 font-bold p-2 text-2xl">
                            Remarks(if Any)
                        </li>

                        <br />                        <br />
                        <li className="font-bold bg-black px-6 p-1.5">Free Text Field</li>

                        <br />                        <br />
                        <li className="font-bold bg-black px-6 p-1.5">Free Text Field</li>

                        <br />                        <br />
                        <li className="font-bold bg-black px-6 p-1.5">Free Text Field</li>

                        <br />                        <br />
                        <li className="font-bold bg-black px-6 p-1.5">Free Text Field</li>
                        <br />
                        <br /><br /><br />


                        <div>
                            <li>
                                <button className="relative flex justify-center items-center bg-yellow-400 border text-gray-600 rounded  focus:ring ring-slate-500">
                                    <p className="px-6 text-2xl py-2 font-bold">Submit Now</p>
                                    <span className="bordre-1 ">
                                        <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                    </span>

                                </button>

                            </li><br />
                        </div>

                    </ul>
                    <br />
                    <div className=' '>
                        <div className="flex pt-16  ">
                            <button className="bg-slate-50 rounded-full mx-3 text-3xl h-6 border-black border-2 border-solod hover:bg-gray-500 text-black px-3 py-5 flex justify-center items-center  ">+
                            </button>
                            <p className="font-bold text-2xl">Add new row</p>
                        </div><br />                        <br />
                        <div className="flex">
                            <button className="bg-slate-50 rounded-full mx-3 h-6 border-black border-2 border-solod hover:bg-gray-500 text-black  flex  py-5 px-3 justify-center items-center text-3xl
    ">+
                            </button>
                            <p className="font-bold text-2xl">Add new row</p>
                        </div><br />                        <br />
                        <div className="flex">
                            <button className="bg-slate-50 rounded-full mx-3 h-6 border-black border-2 border-solod hover:bg-gray-500 text-black  text-3xl  py-5 px-3  flex justify-center items-center
    ">+
                            </button>
                            <p className="font-bold text-2xl">Add new row</p>
                        </div><br />                        <br />
                        <div className="flex">
                            <button className="bg-slate-50 rounded-full mx-3 h-6 border-black border-2 border-solod hover:bg-gray-500 text-black px-3 flex  items-center text-3xl py-5 
    ">+
                            </button>
                            <br />
                            <p className="font-bold text-2xl">Add new row</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>



    )
}

export default UpDateQA
