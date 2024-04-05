import React from 'react'
import { FaPeopleRoof } from "react-icons/fa6";
import { FaPeopleArrows } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { GiGears } from "react-icons/gi";
import { FaCalendarCheck } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import imgae from '../assets/image.png'
import { Link } from 'react-router-dom';

function Operator() {


    return (


        <div className='bg-sky-950 w-screen h-screen p-4 m-6 '>
            <nav className='bg-slate-300 justify-between flex shadow-2xl m-4 p-4 '>
                <button className='bg-black px-8 py-3 text-2xl rounded-md text-white font-bold  m-3  '>Home</button>
                <button className='bg-black px-8 py-3 ro w-screenunded-md text-white font-bold text-2xl m-3'>Back</button>
            </nav>
            <div className=' p-20'>
                <div className='  flex gap-x-80'>

                    <ul className='text-white text-9xl font-bold    ' >
                        <FaPeopleRoof className='' />

                        <div className='-mt-11 '>
                            < Link to='/NewBatch' className=' text-3xl  '>Update New Batch</Link>
                        </div>

                    </ul>

                    <ul className='text-white text-9xl font-bold  '>

                        <FaPeopleArrows />


                        <div className='-mt-8'>
                            <Link to='/RuningBatch' className=' pt-9 text-3xl'>Runing Batch</Link>
                        </div>

                    </ul>

                    <ul className='text-white text-9xl font-bold'>
                        <FaScrewdriverWrench />

                        <div className='-mt-8'>
                            <Link to='/UpdateBrDetails' className=' text-3xl pt-9'>Update & Taskd</Link>

                        </div>
                    </ul>


                    <div className='mt-28 shadow-2xl'> <img src={imgae} alt="" /></div>
                </div>

                <div className='  flex gap-x-80'>
                    <ul className='text-white text-9xl font-bold'>
                        <GiGears />
                        <p className=' text-3xl pt-9'>My Action Board</p>
                    </ul>
                    <ul className='text-white text-9xl font-bold'>

                        <FaListAlt />

                        <p className=' text-3xl pt-9'>Production Plan</p></ul>
                    <ul className='text-white text-9xl font-bold'>
                        <FaCalendarCheck />

                        <p className=' text-3xl pt-9'>Past Production</p>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Operator
