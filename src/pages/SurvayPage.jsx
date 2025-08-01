import SurvayForm from '@/components/common/SurvayForm'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify'
import Header from '@/components/common/Header'
import { useState } from 'react'
const SurvayPage = () => {
  const [go,setGo] = useState(false)
  return (
        <div className='flex justify-center items-center min-h-screen'>
      {
        go ? <SurvayForm/> : <Header go={go} setGo={setGo}/>
      }
      <ToastContainer/>
    </div>
  )
}

export default SurvayPage