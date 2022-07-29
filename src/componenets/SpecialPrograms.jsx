import React from 'react'
import program from '../assets/programs.png'

function SpecialPrograms() {
  return (
    <div className='bg-bdark my-[50px] shadow-2xl '>
      <div className='p-0 overflow-hidden mx-auto'>

          <div className='flex flex-wrap -mx-[15px]'>
              <div className=' flex-[0 0 33.333333%] max-w-[33.333333%]'>
            <img className='max-w-[120%] border-none align-middle' src={program} alt="" />
            

              </div>
              <div className='flex-[0 0 66.666667%] max-w-[66.666667%] my-auto mx-0 align-middle'>
                  <div className='pl-[120px] ml-4'>

                  <h2 className="uppercase text-[60px] font-black text-twhite text-left">special programs</h2>
                  <div className="mt-[10px]"><li className='text-twhite text-[20px] font-semibold leading-8 list-none'>We give special discounts for students who have low economical or financial status.
                  <br/> Special discounts for top 3 students all over Ethiopia.</li></div>
               
                  </div>

</div>
     
          </div>
         

          
      
      </div>
    </div>
  )
}

export default SpecialPrograms