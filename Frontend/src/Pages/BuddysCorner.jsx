import React from 'react'
import Sidebar from '../components/Sidebar'


const BuddysCorner = () => {
  return (
    <>
      <div className="grid grid-cols-4 p-4 bg-blend-lighten h-screen">
        <Sidebar />

        {/* Right Component */}
        <div className="col-span-3 h-full px-2 rounded-lg flex flex-col">
          

          <div className="search-box">
                    <input onChange={(e)=> setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img onClick={()=> onSent()} src={assets.send_icon} alt="" />:null}
                    </div>
                </div>
        </div>
      </div>

    </>
  )
}

export default BuddysCorner