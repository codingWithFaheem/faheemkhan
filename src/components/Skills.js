
export const Skills = ({Icon , name}) => {
  return (
    <div className = {` rounded-[18px]
                      py-2 bg-[#9baee9]
                      flex flex-col justify-center items-center
                      md:h-[] w-[6rem] md:w-[8rem] `}>
        <Icon  className = {`text-[48px] md:text-[55px] text-[#333881]`}/>
        <p className=" font-1 font-bold text-[#333881]">{name}</p>
    </div>
  )
}
