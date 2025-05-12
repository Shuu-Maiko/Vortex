
import './App.css'
import ButtonHover from './Component/bottonHover'
import Cursor from './Component/cursor'


function App() {
  
  return (
    <div className='relative'>
      <Cursor></Cursor>
    <div className="min-h-screen min-w-screen bg-fixed bg-no-repeat bg-cover bg-center  background-container">
      <div className='m-[10%] text-white '>
        <div className='  whitespace-nowrap flex justify-center '>
        <h1 className='font-bold  text-5xl  '> Hey, I'm </h1>
        <h1 className='font-bold  text-5xl  ml-4 text-amber-700 '>  Votex </h1>
        </div>
        <p className=' m-4 text-3xl text-center font-bold flex justify-center '>Your content's guardian angelbringing your videos to life.</p>
        <div className=' flex justify-center center'>
        <div className=' h-10 w-45 flex justify-center ' >
        <ButtonHover content= 'Work With Me!' color='#ffd300' css=' font-bold text-xl' link=' '/>
        </div>
        </div>
        <div className='  relative m-10 grid md:grid-cols-2 grid-cols-1   '>
          <div className='  aspect-video mr-[10%] mt-[10%] ' >
          <iframe  className='h-full w-full' src="https://www.youtube.com/embed/P8lhmT8Lv94?si=wOHiwHRtDbuPdeuh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe>
          </div>
          <div className=' aspect-video mr-[10%] mt-[10%]'>
          <iframe className='h-full w-full ' src="https://www.youtube.com/embed/PxOJmlBLUu0?si=7Ul7-0ZdYwR30upb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>          </div>
          <div className=' aspect-video mr-[10%] mt-[10%]'>
          <iframe  className='h-full w-full ' src="https://www.youtube.com/embed/xBnXEGumvvc?si=eUzFuzxD8r9NTRuB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>          </div>
          </div>
          <div className='text-6xl font-bold flex justify-center'>
            Creators I've Worked With
          </div>
      </div>
          
    </div>
    
  </div>
  )
}

export default App
