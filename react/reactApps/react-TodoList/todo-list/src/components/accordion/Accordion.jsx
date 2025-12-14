import React, { useState } from 'react'
import data from './data.js'
const Accordion = () => {

  const [select, setSelect] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multi, setMulti] = useState([]);

  const handleSelect = (id) => {
    setSelect(select ? null : id)
  }
  const handleMultiSelect = (id) => {
    console.log("enable multi select" + id)
    let copyAr = [...multi];
    let findIndex = copyAr.indexOf(id);
    console.log(findIndex);
    if(findIndex == -1) {
      copyAr.push(id);
    }else{
      copyAr.splice(findIndex, id);
    }
    setMulti(copyAr)
  }
console.log(multi)
  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen'>
      <button onClick={()=>{setEnableMultiSelect(!enableMultiSelect)}} className='bg-black text-white px-5 py-3 mt-3 rounded-lg font-bold'>enable multi select</button>
      <div className='h-[500px]'>
        {
          data.map((each) => {
            return (
              <div className='p-1 flex flex-col' onClick={enableMultiSelect ? ()=>handleMultiSelect(each.id) : ()=>{handleSelect(each.id)}}  key={each.id}>
                <div className='cursor-pointer flex justify-between p-2 mb-3'>
                  <h3 className='text-2xl'>{each.question}</h3>
                  <span>+</span>
                </div>
                <div className='px-2'>
                  {
                    enableMultiSelect ? multi.indexOf(each.id) != -1 && <p className='text-sm'>{each.answer}</p> : (
                      select == each.id && <p className='text-sm'>{each.answer}</p>
                    )
                  }
                  {
                    select == each.id ? (
                      <p className='text-sm'>{each.answer}</p>
                    ) : null
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Accordion;