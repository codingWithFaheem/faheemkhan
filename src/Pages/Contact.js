import {FiInstagram} from 'react-icons/fi' ;
import {FiFacebook} from 'react-icons/fi' ;
import {AiOutlineGithub} from 'react-icons/ai' ;
import {FiLinkedin} from 'react-icons/fi' ;

export const Contact = () => {
    return (
        <div className={`bg-[#333881] h-[90vh] md:h-[] w-full  
        py-[3rem] px-[2rem] md:p-[] 
        flex flex-col  justify-start items-center
        `}>
            <div className="border- border-[#9baee9] md:mt-28 w-full md:w-[1240px]  md:flex justify-center items-center gap-x-20 ">
                <p className=" font-1 text-center  text-[#cad7fd]  text-[52px] md:text-[72px] lg:text-[92px]  ">Let's Talk</p>
                <form className=" mt-6 flex flex-col">
                                <div className="relative borde-2 w-full md:w-[23vw] py-6">

                                <label htmlFor="name"
                                className=" font-1 font-bold text-[#cad7fd]  text-[16px] md:text-[18px]
                                py-[0.6rem] px-[1.5rem] m
                              absolute top-0 bg-[#333881] left-6
                                "
                                >Name</label>
                                <input type="text"  placeholder="Ex : Jame Mordan" className="
                              h-[4rem] md:h-[] w-full  md:w-[] px-4 rounded-[13px]
                                placeholder:text-[#cad7fd] font-1 font-bold text-[16px]
                                text-[#cad7fd] 
                              border-2 border-[#cad7fd]
                              outline-none bg-[#333881] 
                              "/>

                                </div>
                                <div className=" relative borde-2 w-full md:w-[23vw] py-6">

                                        <label htmlFor="name"
                                        className=" font-1 font-bold text-[#9baee9]  text-[16px] md:text-[18px]
                                        py-[0.6rem]  px-[1.5rem] 
                                        absolute top-0 bg-[#333881] left-6
                                        "
                                        >Email</label>
                                        <input type="text"  placeholder="Ex : jameMordan10@gmail.com" className="
                                        h-[4rem] md:h-[] w-full  md:w-[] px-4 rounded-[13px] text-[#cad7fd]
                                        placeholder:text-[#cad7fd] font-1 font-bold text-[16px]
                                        border-2 border-[#cad7fd]
                                        outline-none bg-[#333881] 
                                        "/>

                                </div>   
                                <div className=" relative borde-2 w-full md:w-[23vw] py-6">
                                <label htmlFor="name"
                                        className=" font-1 font-bold text-[#9baee9]  text-[16px] md:text-[18px]
                                        py-[0.6rem] px-[1.5rem] 
                                        absolute top-0 bg-[#333881] left-6
                                        "
                                        >Messge</label>
                                        <textarea className="
                                         h-[14rem] md:h-[] w-full  md:w-[] px-4 pt-10 rounded-[13px]
                                         font-bold text-[16px] text-[#cad7fd]
                                         border-2 border-[#cad7fd]
                                         outline-none bg-[#333881] 
                                         ">
                                            
                                        </textarea>
                              </div>                                                                                           
                   </form>
            </div>
            <div className=" bg-[#cad7fd]
                           h-[4rem] md:h-[] w-ful md:w-[22rem] md:ml-[28rem] px-4 rounded-[13px]
                           flex justify-center items-center gap-x-8
                           
            ">
              <FiInstagram className='text-[35px] md:text-[] text-[#333881]' />
              <FiFacebook className='text-[34px] md:text-[] text-[#333881]' />
              <AiOutlineGithub className='text-[34px] md:text-[] text-[#333881]' />
              <FiLinkedin className='text-[34px] md:text-[] text-[#333881]' />
            </div>
        </div>
    )
}
