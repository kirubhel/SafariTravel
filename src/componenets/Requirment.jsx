import React from 'react'
import passport from '../assets/passport.png'
import trans from '../assets/trans.png'
import study from '../assets/study.png'
function Requirment() {
  return (
    <div className='  py-[80px]'>
        <div className='max-w-[1140px] w-[100%] px-[15px] mx-auto'>

            <h2 className='text-center uppercase text-[60px] font-black text-[#242424]'>Requirment</h2>

            <div className='grid md:grid-cols-3 mt-[40px] grid-cols-1 gap-2'>
                <div>
                    <img src={passport} alt="" />
                    <div>

                    <h4 className="text-[20px] font-semibold text-left uppercase mt-[36px] mb-[30px] text-[#242424]">passport</h4>
                 
                    <p className="text-[#8e8888] font-semibold text-[16px] leading-6 shadow-[#8e8888]">If you don’t have a passport, you should apply to get your passport from immigration.</p>

                    </div>
                </div>
                 <div>
                 <img src={trans} alt="" />
                    <div>

                    <h4 className="text-[20px] font-semibold text-left uppercase mt-[36px] mb-[30px] text-[#242424]">Transcript</h4>
                 
                    <p className="text-[#8e8888] font-semibold text-[16px] leading-6 shadow-[#8e8888]">
                    We need official or unofficial transcript from your
high school.
                    </p>

                    </div>
                 </div>
                 <div>
                     
                 <img src={study} alt="" />
                    <div>

                    <h4 className="text-[20px] font-semibold text-left uppercase mt-[36px] mb-[30px] text-[#242424]">passport</h4>
                 
                    <p className="text-[#8e8888] font-semibold text-[16px] leading-6 shadow-[#8e8888]">
                    For second degree, masters and transfer students that have their degree/tempo/student copy is important to start the process.
                    </p>

                    </div>
                    </div>   
            </div>

        </div>

    </div>
  )
}

export default Requirment