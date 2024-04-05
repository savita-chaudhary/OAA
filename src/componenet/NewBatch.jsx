import React from 'react'
import { FaPeopleRoof } from "react-icons/fa6";
import image from '../assets/image.png'
import mongoose from 'mongoose';
 

//  const UserSchema = new  mongoose.Schema({
//     Batch_Id:String,
//     Mchine_I:String,
//     Operator_I:String,
//     Shif:String,
//     Batch_I:String,
//     Batch_Start_Tim:String,
//     CustomerName:String,
//     PartID:String,
//     ProgramId:String,
//     OLDBatchNO:String,
//     TargetProduction:String

//  })

 
function NewBatch() {

    

    return (
        <div className='w-screen  h-screen p-6  bg-cyan-950'>
            <div className=''>
                <nav className='bg-slate-300 justify-between flex shadow-2xl  py-3'>
                    <button className='bg-black px-10 py-3 rounded-xl text-white font-bold text-xl m-3'>Home</button>
                    <button className='bg-black px-10 rounded-xl  text-white font-bold text-xl m-3'>Back</button>
                </nav>
            </div>
            <div className='flex '>
                <ul className='text-white  font-bold mx-3 px-3   mt-6' >
                    <FaPeopleRoof className='text-9xl border m-8 p-2' />
                </ul>
                <div className='mt-12'>

                    <p className=' text-xl  mt-9 bg-blue-400 w-fit  px-6 py-2 my-24  font-bold  '> New Batch Details</p>
                </div>

            </div>

            <div className='flex'>

                <div className=' flex p-20 m-28 gap-x-36 border border-dashed rounded-2xl  '>
                    <div className='font-semibold text-white text-2xl   '>

                        <p>Batch ID:</p>
                        <br /> <br />
                        <p>Machine ID:</p><br /> <br />
                        <p>OPerator ID:</p><br /> <br />
                        <p>Shift:</p><br /> <br />
                        <p>Batch Start Date:</p><br /> <br />
                        <p>Batch Start Time:</p><br /> <br />

                    </div>
                    <div className='font-semibold text-white text-2xl'>
                        <p>Auto Encremental Value</p><br /> <br />
                        <p>Auto Populated</p><br /> <br />
                        <p>Auto Populated</p><br /> <br />
                        <p>Auto Populated</p><br /> <br />
                        <p>Auto Filled</p><br /> <br />
                        <p>Auto Filled</p><br /> <br />
                    </div>
                    <div className='font-semibold text-white text-2xl'>
                        <p> Customer Name</p><br /> <br />
                        <p>Part ID</p><br /> <br />
                        <p>Program ID</p><br /> <br />
                        <p>Batch Type</p><br /> <br />
                        <p>OLD Batch NO</p><br /> <br />
                        <p>Target Production </p><br /> <br />
                    </div>

                    <div className='text-3xl'>
                        <button className="relative flex justify-center items-center bg-slate-600 border text-white rounded  focus:ring ring-slate-500 ">
                            <p className="px-8 py-2 font-bold">Select Customer</p>
                            <span className="bordre-1  bg-black">
                                <svg className="h-12 w-12 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="6 9 12 15 18 9" /></svg>
                            </span>

                        </button><br />

                        <div className=''>
                            <input placeholder='' className=' text-white bg-black py-2  border'></input>
                        </div><br />
                        <div>
                            <input placeholder='' className='bg-black py-2 border text-white'></input>
                        </div><br />
                        <button className="relative flex justify-center items-center bg-slate-600 border text-white rounded  focus:ring ring-slate-500 ">
                            <p className="px-28   py-1   text-xl font-bold">Batch Type</p>
                            <span className="bordre-1  bg-black">
                                <svg className="h-16 w-12  text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="6 9 12 15 18 9" /></svg>
                            </span>

                        </button><br />
                        <div>
                            <input placeholder='' className='bg-black text-white py-2 border'></input>
                        </div><br />
                        <div>
                            <input placeholder='' className='bg-black py-2 border text-white'></input>
                        </div><br /> <br /> <br /> <br />

                         <button onClick="save" className='bg-green-600 px-20 py-2 text-2xl border-black  font-bold'>Save</button>
                    </div>




                </div>
                <div className='m-64'>

                    <img src={image} alt="" className=' w-[600px]' />
                </div>
            </div>
        </div>





    )
}

export default NewBatch
