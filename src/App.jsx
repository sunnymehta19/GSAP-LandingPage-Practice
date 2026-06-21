import { useState } from 'react'
import './App.css'
import { RiShining2Fill } from '@remixicon/react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="section1">
        <nav className='flex justify-between px-10 py-6'>
          <div className="part1 flex items-center gap-1">
            <RiShining2Fill className='rotate-45' />
            <h2 className='font-bold text-xl'>WizardZ</h2>
          </div>
          <div className="part2 flex gap-8 capitalize items-center">
            <h3>about us</h3>
            <h3>services</h3>
            <h3>use cases</h3>
            <h3>pricing</h3>
            <h3>blog</h3>
            <button className='border px-5 rounded-lg border-2 py-2 text-[17px]'>Request a quote</button>
          </div>
        </nav>

        <div className="hero flex px-10 py-5">
          <div className="left h-[70vh] w-1/2">
            <div className="top h-[35vh]">
              <h1 className="text-[48px] w-[70%] leading-15 font-neuMachina pl-5 pt-4">Navigating the digital landscape for success</h1>
            </div>
            <div className="bottom">
              <div className="paragraph w-[85%] pl-5">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC. social media marketing and content creation. Helping brands increase visibility and reach the right audience.</div>
              <button className='border px-6 rounded-lg border-2 py-2 ml-5 cursor-pointer text-[19px] bg-black text-white border-none my-4 '>Book a consultation</button>
            </div>
          </div>
          <div className="right  h-[70vh] w-1/2">
             <img src="/Hero.svg" alt="Hero" className='w-full h-full object-contain'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
