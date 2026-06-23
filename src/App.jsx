import { useRef, useState } from 'react'
import './App.css'
import { RiArrowRightUpLine, RiShining2Fill } from '@remixicon/react'
import amazonPng from "/logo/amazon.png";
import dribbblePng from "/logo/dribbble.png";
import hubspotPng from "/logo/hubspot.png";
import notionPng from "/logo/notion.png";
import netflixPng from "/logo/netflix.png";
import zoomPng from "/logo/zoom.png";
import box1Image from "/logo/box1-image.jpg";
import box2Image from "/logo/box2-image.jpg";
import box3Image from "/logo/box3-image.jpg";
import box4Image from "/logo/box4-image.jpg";
import darkFaceStar from "/logo/darkFaceStar.png";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";


function App() {
  const [count, setCount] = useState(0);
  const logoeRef = useRef()
  const listRef = useRef()
  const marqueRef = useRef()

  useGSAP(() => {

    let tl = gsap.timeline();

    tl.from(logoeRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.4,
    })
    tl.from(".nav-items", {
      opacity: 0,
      y: -30,
      duration: 0.3,
      stagger: 0.2
    })
    tl.from(".left", {
      opacity: 0,
      x: -50,
      duration: 0.5,
      stagger: 0.2
    }, "-=1")
    tl.from(".right", {
      opacity: 0,
      x: 50,
      duration: 0.5,
      stagger: 0.2
    }, "-=1")

  })

  useGSAP(() => {
    gsap.to(marqueRef.current, {
      x: "-50%",
      repeat: -1,
      duration: 15,
      ease: "none",
    })
  })


  return (
    <>
      <main>
        {/* section1 */}
        <div className="section1">
          <nav className='flex justify-between px-10 py-6'>
            <div ref={logoeRef} className="part1 flex items-center gap-1">
              <RiShining2Fill className='rotate-45' />
              <h2 className='font-bold text-xl'>WizardZ</h2>
            </div>
            <div ref={listRef} className="part2 flex gap-8 capitalize items-center">
              <h3 className='nav-items'>about us</h3>
              <h3 className='nav-items'>services</h3>
              <h3 className='nav-items'>use cases</h3>
              <h3 className='nav-items'>pricing</h3>
              <h3 className='nav-items'>blog</h3>
              <button className='nav-items border px-5 rounded-lg border-2 py-2 text-[17px]'>Request a quote</button>
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
        {/* section2 */}
        <section className='section2'>
          <div className="marqueContainer overflow-hidden py-5">
            <div ref={marqueRef} className="flex w-max ">

              <div className="flex items-center gap-20 px-8 grayscale">
                <img className='h-10' src={amazonPng} alt="Amazon" />
                <img className='h-10' src={dribbblePng} alt="Dribbble" />
                <img className='h-10' src={hubspotPng} alt="HubSpot" />
                <img className='h-10' src={notionPng} alt="Notion" />
                <img className='h-10' src={netflixPng} alt="Netflix" />
                <img className='h-10' src={zoomPng} alt="Zoom" />
              </div>

              <div className="flex items-center gap-20 px-8 grayscale">
                <img className='h-10' src={amazonPng} alt="Amazon" />
                <img className='h-10' src={dribbblePng} alt="Dribbble" />
                <img className='h-10' src={hubspotPng} alt="HubSpot" />
                <img className='h-10' src={notionPng} alt="Notion" />
                <img className='h-10' src={netflixPng} alt="Netflix" />
                <img className='h-10' src={zoomPng} alt="Zoom" />
              </div>

            </div>
          </div>

        </section>
        {/* section3 */}
        <section className="sectoin3 min-h-[100vh] w-full px-10 py-16">
          <div className="services px-28 flex gap-7 items-center justify-center">
            <div className="text-[35px] font-bold capitalize bg-[#B9FF66] px-3 py-1 rounded-lg font-neuMachina ">services</div>
            <div className="w-[40vw] leading-5 font-neuMachina">At our digital marketing agency. we offer a range of services to help businesses grow and succeed online. These services include:</div>
          </div>

          <div className="boxContainer flex gap-x-20 gap-y-10 py-14 flex-wrap items-center justify-center">

            {/* box1 */}
            <div className="h-[220px] w-[500px] border  rounded-3xl border-b-7 flex">
              <div className="p-7 flex-col flex justify-between h-[210px] w-[45%]">
                <div className="font-neuMachina text-[20px] w-[100%] font-bold bg-[#B9FF66] rounded-lg p-1">Search Engine Optimization</div>
                <div className="flex gap-2 items-center ">
                  <span className="bg-black rounded-full text-white p-2"><RiArrowRightUpLine /></span>
                  <span className="">Learn more</span>
                </div>
              </div>

              <div className=" w-[55%]">
                <img className='w-full h-full object-cover rounded-3xl' src={box1Image} alt="seo" />
              </div>
            </div>
            {/* box2 */}
            <div className="h-[220px] w-[500px] border  rounded-3xl border-b-7 flex bg-black">
              <div className="p-7 flex-col flex justify-between h-[210px] w-[45%]">
                <div className="font-neuMachina text-[20px] w-[100%] font-bold bg-white rounded-lg p-1">Pay per click advertising</div>
                <div className="flex gap-2 items-center ">
                  <span className="bg-white rounded-full text-black p-2"><RiArrowRightUpLine /></span>
                  <span className="text-white">Learn more</span>
                </div>
              </div>

              <div className=" w-[55%]">
                <img className='w-full h-full object-cover rounded-3xl p-4' src={box2Image} alt="seo" />
              </div>
            </div>
            {/* box3 */}
            <div className="h-[220px] w-[500px] border  rounded-3xl border-b-7 flex bg-black">
              <div className="p-7 flex-col flex justify-between h-[210px] w-[45%]">
                <div className="font-neuMachina text-[20px] w-[100%] font-bold bg-white rounded-lg p-1">Social media marketing</div>
                <div className="flex gap-2 items-center ">
                  <span className="bg-white rounded-full text-black p-2"><RiArrowRightUpLine /></span>
                  <span className="text-white">Learn more</span>
                </div>
              </div>

              <div className=" w-[55%]">
                <img className='w-full h-full object-cover rounded-3xl p-5' src={box3Image} alt="seo" />
              </div>
            </div>
            {/* box4 */}
            <div className="h-[220px] w-[500px] border  rounded-3xl border-b-7 flex">
              <div className="p-7 flex-col flex justify-between h-[210px] w-[45%]">
                <div className="font-neuMachina text-[20px] w-[100%] font-bold bg-[#B9FF66] rounded-lg p-1">E-mail marketing</div>
                <div className="flex gap-2 items-center ">
                  <span className="bg-black rounded-full text-white p-2"><RiArrowRightUpLine /></span>
                  <span className="">Learn more</span>
                </div>
              </div>

              <div className=" w-[55%]">
                <img className='w-full h-full object-cover rounded-3xl p-7' src={box4Image} alt="seo" />
              </div>
            </div>


          </div>
        </section>

        {/* section4 */}
        <section className="section4 min-h-[100vh] w-full pt-0 pb-12 px-15">
          <div className="flex h-[35vh] w-full  rounded-4xl bg-[#F3F3F3]">
            <div className="w-[60%] p-10">
              <h2 className="font-neuMachina font-bold text-3xl pb-4">Let's make things happen</h2>
              <h4 className="w-[70%] font-neuMachina leading-4 pb-5">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online</h4>
              <button className="text-white bg-black text-lg px-5 py-2 rounded-xl font-neuMachina cursor-pointer">Get your free proposal</button>
            </div>
            <div className="w-[40%] flex justify-center ">
              <img className='' src={darkFaceStar} alt="image" />
            </div>
          </div>

          {/* case study */}
          <div className="services px-28 flex gap-7 items-center py-12 justify-center">
            <div className="text-[35px] font-bold capitalize bg-[#B9FF66] px-3 py-1 rounded-lg font-neuMachina ">Case Study</div>
            <div className="w-[40vw] leading-5 font-neuMachina">At our digital marketing agency. we offer a range of services to help businesses grow and succeed online. These services include:</div>
          </div>

          <div className="flex items-center justify-between gap-20 h-[35vh] w-full rounded-4xl bg-black px-10 py-8 text-white">
            <div className="flex flex-col justify-between h-[140px]">
              <div className="">
                For a looal restaurant, we implemented a targeted PPO campaign that resulted in a B0% Increate in website traffic and a 20% Increase in sales.
              </div>
              <div className="flex gap-2">
                <span className="text-[#A5BE84] font-neuMachina font-semibold text-[18px]">Learn more</span>
                <span className="text-[#A5BE84] text-[18px] font-bold "><RiArrowRightUpLine /></span>
              </div>
            </div>

            <div className="flex flex-col justify-between h-[140px]">
              <div className="">
                For a B2B software company. we developed an SEO strategy that resulted in a first page ranking for long keywords and a 200% Increase in organic traffic.
              </div>
              <div className="flex gap-2">
                <span className="text-[#A5BE84] font-neuMachina font-semibold text-[18px]">Learn more</span>
                <span className="text-[#A5BE84] text-[18px] font-bold "><RiArrowRightUpLine /></span>
              </div>
            </div>

            <div className="flex flex-col justify-between h-[140px]">
              <div className="">
                For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
              </div>
              <div className="flex gap-2">
                <span className="text-[#A5BE84] font-neuMachina font-semibold text-[18px]">Learn more</span>
                <span className="text-[#A5BE84] text-[18px] font-bold "><RiArrowRightUpLine /></span>
              </div>
            </div>

          </div>


        </section>

        {/* section5 */}
        <section className="section5 min-h-[100vh] w-full ">
        </section>
      </main>
    </>
  )
}

export default App
