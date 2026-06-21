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
            <RiShining2Fill className='rotate-45'/>
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

        <div className="hero">
          
        </div>
      </div>
    </>
  )
}

export default App
