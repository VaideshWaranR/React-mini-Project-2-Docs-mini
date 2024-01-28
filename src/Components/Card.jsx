import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu"
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"
import { FiUpload } from "react-icons/fi";
const Card = ({data,reference}) => {
  return (
    <motion.div drag  dragConstraints={reference}  whileDrag={{scale:1.2}} className='overflow-hidden relative px-5 py-10 w-52 h-[17rem] rounded-[38px] bg-zinc-900/90 text-white'>
       <FaRegFileAlt />
       <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
        <footer className='absolute w-full bottom-0 bg-zinc-900/90 left-0'>
        <div className=' text-white px-5  flex items-center justify-between mb-5'>
                <h5>{data.fileSize}</h5>
                <div className='w-7 h-7 rounded-full  bg-zinc-400 flex flex-col-reverse items-center justify-center text-black'>
                {data.close ? <IoMdClose /> :  (data.tagDetails.tagTitle==="Upload" ?<FiUpload size="1em"/>: <LuDownload size="1em"/>)}
                </div>
        </div>
        {data.tagDetails.isOpen ?
        ( (data.tagDetails.tagColor==="green")?
            <div className={`tag bg-green-600 w-full h-10`}>
                    <h3 className='text-white text-center py-1 font-semibold'>{data.tagDetails.tagTitle}</h3>
        </div>:  
        <div className={`tag bg-blue-600 w-full h-10`}>
                    <h3 className='text-white text-center py-1 font-semibold'>{data.tagDetails.tagTitle}</h3>
        </div>) :null}
        </footer>
    </motion.div>
  )
}

export default Card