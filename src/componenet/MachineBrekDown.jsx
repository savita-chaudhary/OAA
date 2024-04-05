import React from 'react'
import fac from '../assets/fac.jpg'
import { AiOutlineCaretRight } from "react-icons/ai";
function MachineBrekDown() {
  return (
    <>
      <div className='bg-cyan-950 w-screen h-screen p-4 m-6'>

        <div className=' flex'>
          <img src={fac} alt="" className='w-[300px]  p-6 shadow-2xl mt-8' />
          <p className='text-4xl text-white  font-bold mt-56'>Machine BreaKdown</p>
        </div>

        <div className='border border-dashed  m-20 rounded-2xl p-8'>

          <div className='flex justify-between text-2xl text-yellow-500 font-bold'>

            <p>Machine breakdoun Event:
            </p> <p>Machine Id:
            </p> <p className='flex gap-x-6'>Date:
              <p>dd/mm/yy</p>

            </p>
          </div>
          <br />
          <br />
          <div className='flex justify-between text-2xl '>
            <button className='bg-black   px-4 py-3 text-yellow-500 font-bold'>ProductionDate</button>
            <button className='bg-black   px-4 py-3 text-yellow-500 font-bold'>Shift</button>

            <button className='bg-black  px-4 py-3 text-yellow-500 font-bold'>Operator ID</button>
            <button className='bg-black  px-4 py-3 text-yellow-500 font-bold'>Downtime Start</button>
            <button className='bg-black px-4 py-3 text-yellow-500 font-bold'>Downtime End</button>
            <button className='bg-black  px-4 py-3 text-yellow-500 font-bold'>Machine ID</button>
            <button className='bg-black  px-4 py-3 text-yellow-500 font-bold'>Total Downtime</button>
            <button className='bg-black  px-4 py-3 text-yellow-500 font-bold'>Update Details</button>

          </div>
          <br />
          <p className='border border-dotted'></p>
          <div className="justify-between flex  text-2xl  text-white mt-5">


          <p>Auto filled</p>
          <p>Auto filled</p>
          <p>Auto filled</p>
          <p>Auto filled</p>
          <p>Auto filled</p>
          <p>Auto filled</p>
          <p>Auto filled</p>
          <button className="mx-2 my-3 bg-blue-400 p-2 text-black font-bold ">Update Details</button>
        </div>
        <br />
          <p className='border border-dotted'></p>

          <div className="justify-between  text-2xl flex mt-5 text-white ">

    <p>Auto filled</p>
    <p>Auto filled</p>
    <p>Auto filled</p>
    <p>Auto filled</p>
    <p>Auto filled</p>
    <p>Auto filled</p>
    <p>Auto filled</p>
    <button className="mx-2 my-3   bg-blue-400 p-2 text-black font-bold">Update Details</button>

</div>
<p className='border border-dotted'></p>

          <div className="justify-between flex mt-5  text-2xl text-white ">

    <p>Auto filled</p>
    <p>Auto filled</p>
    <p>Auto filled</p>
    <p>Auto filled</p>
    <p>Auto filled</p>
    <p>Auto filled</p>
    <p>Auto filled</p>
    <button className="mx-2 my-3  bg-blue-400 p-2 text-black font-bold">Update Details</button>

</div>
<p className='border border-dotted'></p>

          <div className="justify-between flex mt-5  text-2xl text-white ">

    <p>Auto filled</p>
    <p>Auto filled</p>
    <p>Auto filled</p>
    <p>Auto filled</p>
    <p>Auto filled</p>
    <p>Auto filled</p>
    <p>Auto filled</p>
    <button className="mx-2 my-3  bg-blue-400 p-2 text-black font-bold">Update Details</button>

</div><p className='border border-dotted'></p>

<div className="justify-between flex mt-5 text-white text-2xl ">

<p>Auto filled</p>
<p>Auto filled</p>
<p>Auto filled</p>
<p>Auto filled</p>
<p>Auto filled</p>
<p>Auto filled</p>
<p>Auto filled</p>
<button className="mx-2 my-3  bg-blue-400 p-2 text-black font-bold">Update Details</button>

</div>
<p className='border border-dotted'></p>

<div className='flex justify-between'>
  
<p></p>
<div className='flex   bg-black text-white px-7 py-3 w-fit gap-y-2 mt-5 text-3xl'>
<button className='border rounded-full px-3 py-1 font-bold  bg-blue-400'>1</button>
<button  className='border rounded-full px-3 py-1 font-bold '>2</button>
<button  className='border rounded-full px-3 py-1 font-bold '>3</button>
<button  className='border rounded-full px-3 py-1 font-bold '>4</button>
<button  className='border rounded-full px-3 py-1 font-bold '>5</button>
<button  className='border rounded-full px-3 py-1 font-bold '>6</button>
<button  className='border rounded-full px-3 py-1 font-bold '><AiOutlineCaretRight /></button>
</div>
</div>

        </div>

        
      </div>
    </>
  )
}




export default MachineBrekDown;
