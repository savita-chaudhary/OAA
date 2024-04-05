import React from 'react'
import opr1 from '../assets/opr1.png'
import opr2 from '../assets/opr2.png'
import opr3 from '../assets/opr3.png'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='bg-cyan-950 w-screen h-screen'>
      <div className='p-14'>
        <h1 className='text-8xl text-blue-600 font-bold flex shadow-2xl justify-center p-8'>HUMAC</h1>
        <h2 className='text-yellow-400 flex justify-center font-semibold text-3xl shadow-2xl'>Amplifying Intelligence on Manufacturing Shopfloor</h2>
      </div>

      <div className='flex justify-between m-24 p-24'>

        <div>
          <img src={opr1} alt="" className='w-[600px] rounded-3xl   shadow-2xl border-white border-2 ' />


          <div className='flex justify-center p-8'>
            <Link to='/Operator' className='   text-yellow-500 font-bold text-3xl px-8 py-3 w-fit border shadow-2xl bg-black'>
              Operator</Link>
          </div>


        </div>


        <div>
          <img src={opr2} alt="" className='w-[500px]  rounded-3xl shadow-2xl border-white border-2 ' />
          <div className='flex justify-center p-8'>

            <Link  to='/MachineBrekDown' className=' text-yellow-500 font-bold text-3xl px-8 py-3 w-fit border shadow-2xl bg-black '>Maintenance</Link>

          </div>
        </div>


        <div>
          <img src={opr3} alt="" className='w-[500px]  border-white border-2  rounded-3xl shadow-2xl ' />
          <div className='flex justify-center p-8'>

            <Link to='/UpDateQA' className='  text-yellow-500 font-bold text-3xl px-20 py-3 w-fit border shadow-2xl bg-black'>QA</Link>
          </div>
        </div>




      </div>

    </div>
  )
}

export default Home
