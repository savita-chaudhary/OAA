import React from 'react'
import { FaPeopleRoof } from "react-icons/fa6";
import image from '../assets/image.png'
function RuningBatch() {
    return (


        <div className='bg-sky-950 w-screen h-screen'>
            <div className="div">
                 <nav className='bg-slate-300 justify-between flex shadow-3xl p-3 '>
                <button className='bg-black px-7 py-3 rounded-xl p-2 text-white font-bold text-xl m-3'>Home</button>
                <button className='bg-black px-7 py-3 roundex-xl p-2 text-white font-bold text-xl m-3 rounded-xl'>Back</button>
            </nav>
            </div>
            <div>

            </div>
            <div className='flex'>
                <ul className='text-white  font-bold mx-3 px-3   mt-6 ' >
                    <FaPeopleRoof className='text-9xl border m-4 p-2' />
                </ul>
                <div className='mt-12'><p className=' text-3xl  mt-9 bg-blue-400 w-fit  px-6 py-2 my-24  font-bold  '> Running  Batch </p>
                </div>
            </div>
            <div className='flex  justify-between items-center'>


                <div className="div1 border border-dashed rounded-3xl  p-36 m-24">
                    <div className=' flex justify-between  gap-10 text-white text-3xl font-bold'>
                        <ul className='border p-3 shadow-2xl'>Target Production: <p className='text-yellow-500 ml-28 mt-3 text-4xl'>XXXXX</p></ul>
                        <ul className='border p-3  shadow-2xl'>Complate Production:<p className='text-yellow-500 ml-28 mt-3 text-4xl'>XXXXX</p></ul>
                        <ul className='border p-3  shadow-2xl'>Pending Production:<p className='text-yellow-500 ml-28 mt-3 text-4xl'>XXXXX</p></ul>
                    </div>
                    <div className='flex justify-between p-14 m-3 text-white  font-semibold text-2xl gap-16  '>

                        <div className=' '>
                            <br />
                            <p>Batch ID:</p>   <br />
                            <p>Machine ID:</p>   <br />
                            <p>Operator ID:</p>   <br />
                            <p>Shift:</p>   <br />
                            <p>Batch Start Date:</p>   <br />
                            <p>Batchh Start Time:</p>
                        </div>
                        <br /><br /><br />
                        <div className=''>
                            <br />
                            <p>Auto Incremental Value</p>   <br />
                            <p>Auto Populated</p>   <br />
                            <p>Auto  Populated</p>   <br />
                            <p>Auto  Populated</p>   <br />
                            <p>Auto Filled</p>   <br />
                            <p>Auto Filled</p>
                        </div>
                        <br />
                        <div>   <br />
                            <p>Customer Name:</p>   <br />
                            <p>Part Id:</p>   <br />
                            <p>Program Id:</p>   <br />
                            <p>Batch Type:</p>   <br />
                            <p>Old Batch No</p>   <br />
                            <p>Target Production</p>

                        </div> <br />
                        <div>   <br />
                            <p>Auto Filled</p>   <br />
                            <p>Auto Filled</p>   <br />
                            <p>Auto Filled</p>   <br />
                            <p>Auto Filled</p>   <br />
                            <p>Auto Filled</p>   <br />
                            <p>Auto Filled</p>
                        </div>
                        <br />
                    </div>

                    <div className='flex justify-between '>
                        <button className='bg-cyan-500 p-4 border-black border text-xl font-semibold'>Part Specifications</button>
                        <button className='bg-cyan-500 px-11 border-black border text-xl font-semibold'> Back</button>
                    </div>
                </div>


                <div className="div2  mr-96  -ml-28  shadow-2xl">
                    <img src={image} alt="" className='w-[700px]' />
                </div>

            </div>

        </div>
    )
}

export default RuningBatch
