import iconSuccess from "../assets/success.png"

const Success = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 h-[60vh]'>
        <div className="w-[250px] h-[250px]">
            <img src={iconSuccess} alt="" className="w-full h-full" />
        </div>
      <h1 className="text-[#60230D] font-bold text-[20px]">Cảm ơn bạn đã tham gia khảo sát</h1>
      <h1 className="text-[#60230D] font-bold text-[20px] text-center"> Mọi góp ý của bạn là động lực để Chanchan tiếp tục phát triển</h1>
    </div>
  )
}

export default Success