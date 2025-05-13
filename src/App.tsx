
import './App.css'
import Cursor from './Component/cursor'
import Avatar from './Component/Avatar'
import Intro from './Component/intro'
import Portfolio from './Component/portfolio'
function App() {
  
  return (
    <div className='relative'>
      <Cursor></Cursor>
    <div className="min-h-screen min-w-screen bg-fixed bg-no-repeat bg-cover bg-center  background-container">
      <div className='m-[10%] text-white '>
       <div className=' md:flex md:justify-around col-end-1  '>
        <Avatar url = "https://mir-s3-cdn-cf.behance.net/user/276/2d437b1473253117.67f0b471df3f2.jpg"/>       
        <Intro></Intro>
       </div>
        
      </div>
    </div>
         <Portfolio></Portfolio>
    
  </div>
  )
}

export default App
