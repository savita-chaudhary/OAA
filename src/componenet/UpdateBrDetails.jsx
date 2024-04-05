
import React from 'react'
import fac from '../assets/fac.jpg';

function UpdateBrDetails() {
    return (
        <div className='bg-sky-950  h-screen w-screen p-6 m-6 '>
            <div className=' flex justify-between '>
                <p className='text-yellow-500 text-5xl font-bold m-12'>Update BreaKdown Details</p>
                <img src={fac} alt="" className='w-56 shadow-3xl  m-10' />
            </div>

            <div className='border border-dashed  m-28 ml-2 pr-10 rounded-3xl flex justify-between  p-14'>


                <ul className='text-3xl font-semibold text-white   p-10 '>
                    <li className='mt-2'>Production<p>Date</p></li><br />
                    <li className='mt-2'>Shift</li><br />
                    <li className='mt-2'>Machine Id</li><br />
                    <li className='mt-2'>Downtime<p>Start</p></li><br />
                    <li className='mt-2'>Downtime End</li><br />
                    <li className='mt-2'>Total <p> DownTime</p></li><br />

                </ul>

                <ul className='text-3xl font-semibold text-white p-6'><br/>

                    <p className='mt-2'>Auto Filled</p><br />
                    <p className='mt-2'>Auto Filled</p><br />
                    <p className='mt-2'>Auto Filled</p><br />
                    <p className='mt-2'>Auto Filled</p><br />
                    <div>
                        <p span className="bordre-1 mt-2  bg-white flex ">
                            <svg className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <polyline points="12 6 12 12 16 14" /></svg>

                            <button className="relative flex  justify-center items-center bg-black border text-gray-600 rounded  focus:ring ring-slate-500">
                                <p className="px-4 font-bold">Ex:11:59 pm</p></button>


                        </p>
                    </div><br />

                    <p span className="bordre-1   bg-white flex ">
                        <svg className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <polyline points="12 6 12 12 16 14" /></svg>

                        <button className="relative flex justify-center items-center bg-black border text-gray-600 rounded  focus:ring ring-slate-500">
                            <p className="px-4 font-bold">Ex:11:59 pm</p></button>


                    </p>
                    <br></br>
                    <p span className="bordre-1   bg-white  flex ">
                        <svg className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <polyline points="12 6 12 12 16 14" /></svg>

                        <button className="relative flex justify-center items-center bg-black border text-gray-600 rounded  focus:ring ring-slate-500">
                            <p className="px-4 font-bold">Ex:11:59 pm</p></button>


                    </p>
                </ul>
            
                <ul className='text-3xl font-semibold text-white p-6'><br/>
                     <li>DownTime Reson<p>Category</p></li><br />
                    <li className='mt-5'>DownTime Type</li><br />
                    <li className='mt-5'>DownTime Sub-type</li><br />
                    <li className='mt-5'>Description</li><br />
                    <li className='mt-5'>Updeted-By</li><br />
                    <li className='mt-5'>UPdated-On</li></ul><br />
                <div className='text-2xl font-semibold'>
                    <br />
                    <div className="">
                        <br/>
                        <button className="relative flex justify-center items-center bg-yellow-950 border text-white-600 rounded  focus:ring ring-slate-500">
                            <p className="px-8 py-2 font-semibold  text-white">Select Reson Category</p>
                            <span className="bordre-1  bg-black">
                                <svg className="h-12 w-12 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="6 9 12 15 18 9" /></svg>
                            </span>
                        </button>
                    </div>
                    <br />
                    <div>
                        <button className="relative flex justify-center items-center bg-yellow-950 border text-white-600 rounded  focus:ring ring-slate-500">
                            <p className="px-8 py-2 font-semibold text-white">Select Downtime Type</p>
                            <span className="bordre-1  bg-black">
                                <svg className="h-12 w-12 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="6 9 12 15 18 9" /></svg>
                            </span>

                        </button>
                    </div>
                    <br />
                    <div className=''>
                        <button className="relative flex justify-center items-center bg-yellow-950 border text-white rounded  focus:ring ring-slate-500 ">
                            <p className="px-3 py-2 font-semibold">Select Downtime Sub-Type</p>
                            <span className="bordre-1   bg-black">
                                <svg className="h-12 w-12 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="6 9 12 15 18 9" /></svg>
                            </span>

                        </button>
                    </div>
                    <br />
                    <div>
                        <ul>
                            <input className="bg-black py-4  border px-7" />
                        </ul>
                        <br />
                        <p className="bg-black py-2  text-white font-semibold  px-7 ">Maintennance Supervisor ID</p>
                        <br />
                        <p span className="bordre-1   bg-white flex  w-fit">
                            <svg className="h-12 w-12 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <polyline points="12 6 12 12 16 14" /></svg>

                            <button className="relative flex justify-center items-center bg-black border text-gray-600 rounded  focus:ring ring-slate-500">
                                <p className="px-20 py-2 font-bold  ">Ex:11:59 pm</p></button>


                        </p>
                        <br />
                        <p>
                            <button className="relative flex justify-center items-center bg-yellow-500 border text-gray-600 rounded  focus:ring ring-slate-500">
                                <p className="px-8 py-3 shadow-2xl text-2xl font-bold">Submit Now</p>
                                <span className="bordre-1 ">
                                    <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                </span>

                            </button>

                        </p>
                    </div>

                </div>



            </div>


        </div>

    )
}

export default UpdateBrDetails
