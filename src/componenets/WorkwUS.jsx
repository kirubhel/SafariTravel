import React from 'react'
import work from '../assets/work.png'
function WorkwUS() {
  return (
    <div>
        <div className='banner5 mx-auto px-[15px]'>
            <div className='grid grid-cols-2 gap-0 -mx-[15px]'>
                <div className='m-auto left-[5%]'>
                    <div>
                    <h2 className="text-left  font-black  text-[60px] text-twhite  uppercase">Work with Us</h2>
                    <h3 className="text-[22px] font-semibold uppercase text-twhite">Be our agent</h3>

                    <div className="mt-[10px]">
                
                        <li className='list-none text-[20px] font-semibold text-twhite leading-8'>1000 Birr per one referral in advance</li>
                        <li className='list-none text-[20px] font-semibold text-twhite leading-8' >4000 Birr after the students successful complete the process</li>
                        <li className='list-none text-[20px] font-semibold text-twhite leading-8' >Use your own link to refer students from wherever you are<br/>and make profits easily from home</li>
                        </div>

                        <button className="bg-back hover:bg-blue-700  text-twhite mt-6  py-[8px] px-[30px] mr-[10px] text-[20px] shadow-twhite   rounded-2xl">
           WORK WITH US!
          </button>
                  
                    </div>

                </div>
                <div className='p-0'>
                    <img className='border-none align-middle w-[100%]' src={work} alt="" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default WorkwUS