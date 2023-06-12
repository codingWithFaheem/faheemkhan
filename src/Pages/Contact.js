import {FiInstagram} from 'react-icons/fi' ;
import {FiFacebook} from 'react-icons/fi' ;
import {AiOutlineGithub} from 'react-icons/ai' ;
import {FiLinkedin} from 'react-icons/fi' ;

export const Contact = () => {
    return (
        <div className={`bg-[#111e62] h-[110vh]  md:h-[100vh]  w-full  
        py-[3rem] px-[2rem] md:p-[] 
        flex flex-col  justify-start items-center
        `}>
            <div className=" md:mt-16 w-full md:w-[756px] lg:w-[1024px] xl:w-[1240px] flex flex-col lg:flex-row justify-start lg:justify-center items-center gap-x-20 ">
                <p className=" font-1 text-center  text-[#cad7fd]  text-[52px] md:text-[72px] lg:text-[92px]  ">Let's Talk</p>
                <form className=" mt-6 flex flex-col">
                                <div className="border- relative  borde-2 rem] py-6">

                                <label htmlFor="name"
                                className=" font-1 font-bold text-[#cad7fd]  text-[16px] md:text-[18px]
                                py-[0.6rem] px-[1.5rem] m
                              absolute top-0 bg-[#111e62] left-6
                                "
                                >Name</label>
                                <input type="text"  placeholder="Ex : Jame Mordan" className="
                              h-[4rem] w-[18rem] sm:w-[20rem]  md:w-[26rem]   px-4 rounded-[13px]
                                placeholder:text-[#cad7fd] font-1 font-bold text-[16px]
                                text-[#cad7fd] 
                              border-2 border-[#cad7fd]
                              outline-none bg-[#111e62] 
                              "/>

                                </div>
                                <div className=" relative  borde-2 py-6">

                                        <label htmlFor="name"
                                        className=" font-1 font-bold text-[#9baee9]  text-[16px] md:text-[18px]
                                        py-[0.6rem]  px-[1.5rem] 
                                        absolute top-0 bg-[#111e62] left-6
                                        "
                                        >Email</label>
                                        <input type="text"  placeholder="Ex : jameMordan10@gmail.com" className="
                                        h-[4rem] w-[18rem] sm:w-[20rem]  md:w-[26rem]    px-4 rounded-[13px] text-[#cad7fd]
                                        placeholder:text-[#cad7fd] font-1 font-bold text-[16px]
                                        border-2 border-[#cad7fd]
                                        outline-none bg-[#111e62] 
                                        "/>

                                </div>   
                                <div className=" relative    py-6">
                                <label htmlFor="name"
                                        className=" font-1 font-bold text-[#9baee9]  text-[16px] md:text-[18px]
                                        py-[0.6rem] px-[1.5rem] 
                                        absolute top-0 bg-[#111e62] left-6
                                        "
                                        >Messge</label>
                                        <textarea className="
                                         h-[14rem] w-[18rem] sm:w-[20rem]  md:w-[26rem]   px-4 pt-10 rounded-[13px]
                                         font-1  text-[16px] text-[#cad7fd]
                                         border-2 border-[#cad7fd]
                                         outline-none bg-[#111e62] 
                                         ">
                                            
                                        </textarea>
                              </div>                                                                                           
                   </form>
            </div>
            <div className=" bg-[#3943b3]
                          w-[80%] md:w-[64%] lg:w-[28%] xl:w-[22%]
                           h-[4rem]  xl:ml-[28rem] px-4 md:py-4  rounded-[13px]
                           flex justify-center items-center gap-x-8
                           
            ">
              
              <a href="https://www.instagram.com/faheem_khan564/" target='blacl'><FiInstagram className=' cursor-pointer text-[20px] sm:text-[24px] md:text-[34px] md:text-[] text-[#cad7fd]'/> </a>
              <a href="https://www.facebook.com/faheemsami.junior" target='blacl'><FiFacebook className=' cursor-pointer text-[24px] md:text-[34px] md:text-[] text-[#cad7fd]' /></a>
              <a href="https://github.com/codingWithFaheem" target='blacl'><AiOutlineGithub className=' cursor-pointer text-[24px] md:text-[34px] md:text-[] text-[#cad7fd]' /></a>
              <a href="https://www.linkedin.com/in/faheem-khan-b5b633204/" target='blacl'><FiLinkedin className=' cursor-pointer text-[24px] md:text-[34px]  text-[#cad7fd]' /></a>
            </div>
        </div>  
    )
}
