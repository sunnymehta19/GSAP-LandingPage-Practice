import { useState } from 'react'
import './App.css'
import { RiArrowRightUpLine, RiShining2Fill } from '@remixicon/react'
import amazonPng from "../public/logo/amazon.png";
import dribbblePng from "../public/logo/dribbble.png";
import hubspotPng from "../public/logo/hubspot.png";
import notionPng from "../public/logo/notion.png";
import netflixPng from "../public/logo/netflix.png";
import zoomPng from "../public/logo/zoom.png";


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

        <div className="hero flex px-10 py-7">
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
            <img src="/Hero.svg" alt="Hero" className='w-full h-full object-contain' />
          </div>
        </div>


      </div>

      <section className='section2'>
        <div className="marqueContainer">
          <div className="marque px-8 flex items-center gap-20 bg-green-300 h-20 overflow-x-hidden ">
            <img className='h-10' src={amazonPng} alt="Amazon" />
            <img className='h-10' src={dribbblePng} alt="Dribbble" />
            <img className='h-10' src={hubspotPng} alt="HubSpot" />
            <img className='h-10' src={notionPng} alt="Notion" />
            <img className='h-10' src={netflixPng} alt="Netflix" />
            <img className='h-10' src={zoomPng} alt="Zoom" />

            <img className='h-10' src={amazonPng} alt="Amazon" />
            <img className='h-10' src={dribbblePng} alt="Dribbble" />
            <img className='h-10' src={hubspotPng} alt="HubSpot" />
            <img className='h-10' src={notionPng} alt="Notion" />
            <img className='h-10' src={netflixPng} alt="Netflix" />
            <img className='h-10' src={zoomPng} alt="Zoom" />
          </div>
        </div>

      </section>
      <section className="sectoin3 min-h-[100vh] w-full px-10 py-16">
        <div className="services px-28 flex gap-7 items-center">
          <div className="text-[35px] font-bold capitalize bg-[#B9FF66] px-3 py-1 rounded-lg font-neuMachina ">services</div>
          <div className="w-[40vw] leading-5 font-neuMachina">At our digital marketing agency. we offer a range of services to help businesses grow and succeed online. These services include:</div>
        </div>

        <div className="boxContainer flex gap-x-20 gap-y-10 py-10 flex-wrap items-center justify-center">
          <div className="h-[220px] w-[500px] border bg-cyan-400 rounded-3xl border-b-7">
            <div className="p-7 flex-col flex justify-between h-[210px]">
              <div className="font-neuMachina text-[22px] w-[40%] font-bold bg-[#B9FF66] rounded-xl p-1">Search Engine Optimization</div>
              <div className="flex gap-2 items-center ">
                <span className="bg-black rounded-full text-white p-2"><RiArrowRightUpLine /></span>
                <span className="">Learn more</span>
              </div>
            </div>
            <div className=""></div>
          </div>
          <div className="h-[220px] w-[500px] border bg-cyan-400 rounded-3xl border-b-7">

          </div>
          <div className="h-[220px] w-[500px] border bg-cyan-400 rounded-3xl border-b-7">

          </div>
          <div className="h-[220px] w-[500px] border bg-cyan-400 rounded-3xl border-b-7">

          </div>
        </div>
      </section>
    </>
  )
}

export default App
