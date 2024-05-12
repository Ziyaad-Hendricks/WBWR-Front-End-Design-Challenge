import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='bg-gray-400 h-[80px] flex justify-center items-center font-bold text-[28px]'>
        HEADER
      </header>
      <div className='relative hidden lg:block'>
        <video autoPlay loop playsInline muted={true} className="object-cover h-full w-full ">
          <source src="../assets/desktop/Play1.mp4" type="video/mp4"  height="700" /> 
                          
        </video>
        <div className='absolute top-[8%] right-[25%] flex flex-col gap-[30px] '>
          <h1 className='font-customFont-condensed-black text-[104px] leading-[94px]'>CHECK <br /> OUT OUR <br /> LATEST <br /> GEAR</h1>
          <p className='font-customFont-regular text-[12px]'>Check out our latest gear
              Advanced tech, superior comfort and all <br /> performance is what our latest UA gear is all <br /> about. Built to go further, push hard and break <br /> your boundaries.
              </p>
          <button className='font-customFont-regular text-white bg-black w-[258.805px] h-[43.57px] text-[14px]'>Shop UA New Arrivals</button>
        </div>
      </div>

      <div className='lg:hidden flex flex-col gap-[26px]'> 
        <video autoPlay loop playsInline muted={true} className="object-cover h-full w-full ">
          <source src="../assets/mobile/UA_Theme_1_MB.mp4" type="video/mp4"  height="700" />
                        
        </video>
        <h1 className='font-customFont-condensed-black text-[48px] leading-[43px] px-[15px]'>CHECK OUT OUR <br /> LATEST  GEAR</h1>
          <p className='font-customFont-regular text-[14px] px-[15px]'>Check out our latest gear
              Advanced tech, superior comfort and all  performance is <br />what our latest UA gear is all  about. Built to go further, <br />push hard and break  your boundaries.
          </p>
          <button className='font-customFont-regular text-white bg-black w-full h-[43.57px] text-[14px] mx-[15px]'>Shop UA New Arrivals</button>
      </div>

      <div className='w-full mx-auto max-w-[1292px] mt-[60px]'>

      <div className='flex flex-col gap-[13px] px-[15px] lg:px-0'>
        <h3 className='font-customFont-regular-bold lg:text-[24px] text-[22px]'>Our best gear</h3>
        <p className='font-customFont-regular text-[14px]'>Unlock your potential with the best UA gear</p>
        <div className='flex max-w-[1292px] overflow-x-scroll gap-[11px]'>
          <div><img className='min-w-[314px] min-h-[314px]' src="../assets/shared/Train.jpg" alt="" /><p className='underline hidden lg:block'>Shop Now</p></div>
          <div><img className='min-w-[314px] min-h-[314px]' src="../assets/shared/Run.jpg" alt="" /><p className='underline hidden lg:block'>Shop Now</p></div>
          <div><img className='min-w-[314px] min-h-[314px]' src="../assets/shared/Golf.jpg" alt="" /><p className='underline hidden lg:block'>Shop Now</p></div>
          <div><img className='min-w-[314px] min-h-[314px]' src="../assets/shared/Accessories.jpg" alt="" /><p className='underline hidden lg:block'>Shop Now</p></div>
        </div>
      </div>

      <div className='relative mt-[60px] hidden lg:block'>
        <img src="../assets/desktop/Section3.jpg" alt="" />
                          
        <div className='absolute top-[12%] right-[5%] flex flex-col gap-[30px] '>
          <p className='font-customFont-regular-bold text-[16px] text-white'>Project Rock</p>
          <h1 className='font-customFont-condensed-black text-[64px] leading-[57px] text-white'>EVERY SIDE <br />OF STRONG</h1>
          <p className='font-customFont-regular text-[14px] text-white'>The Underground collection is inspired by the idea of a <br />Project Rock fight club. 
          A place where we push each <br /> other harder to make each other stronger. A drop <br />dedicated to you and your crew. The neon colourways <br />are a reflection of the energy we bring to every rep, <br />
          every set and every challenge.  
              </p>
          <button className='font-customFont-regular text-white bg-black bg-opacity-0 border border-white w-[258.805px] h-[43.57px] text-[16px]'>Shop Project Rock</button>
        </div>
      </div>

      <div className='lg:hidden mt-[40px] flex flex-col gap-[20px]'> 
        <img src="../assets/mobile/UA_Theme_2_MB.jpg" alt="" />
        <p className='font-customFont-regular-bold text-[16px] text-black px-[15px]'>Project Rock</p>
        <h1 className='font-customFont-condensed-black text-[64px] leading-[57px] text-black px-[15px]'>EVERY SIDE <br />OF STRONG</h1>
        <p className='font-customFont-regular text-[14px] text-black px-[15px]'>The Underground collection is inspired by the idea of a <br />Project Rock fight club. 
          A place where we push each <br /> other harder to make each other stronger. A drop <br />dedicated to you and your crew. The neon colourways <br />are a reflection of the energy we bring to every rep, <br />
          every set and every challenge.  
              </p>
              <button className='font-customFont-regular text-white bg-black  w-full mx-[15px] h-[43.57px] text-[16px]'>Shop Project Rock</button>
      </div>
      

      <div className='flex flex-col gap-[13px] lg:mt-[60px] mt-[40px] px-[15px] lg:px-0'>
        <h3 className='font-customFont-regular-bold text-[24px]'>Our best gear</h3>
        <p className='font-customFont-regular text-[14px]'>Unlock your potential with the best UA gear</p>
        <div className='flex max-w-[1292px] overflow-x-scroll gap-[11px]'>
          <div><img className=' min-w-[314px] min-h-[314px]' src="../assets/shared/Promo 1.jpg" alt="" /></div>
          <div><img className=' min-w-[314px] min-h-[314px]' src="../assets/shared/Promo 4.jpg" alt="" /></div>
          <div><img className=' min-w-[314px] min-h-[314px]' src="../assets/shared/Promo 3.jpg" alt="" /></div>
          <div><img className=' min-w-[314px] min-h-[314px]' src="../assets/shared/Promo 2.jpg" alt="" /></div>
        </div>
      </div>

      <div className='lg:mt-[60px] mt-[40px] flex flex-col gap-[13px] px-[15px] lg:px-0'>
        <h3 className='font-customFont-regular-bold text-[24px]'>What's happening on instagram</h3>
        <p className='font-customFont-regular text-[14px]'>Don’t miss out on the latest news and updates from Under Armour.</p>

        <div className='flex flex-col lg:flex-row gap-[11px]'>
          <div className='w-full'>
          <video autoPlay loop playsInline muted={true} className="object-cover h-[744px] w-full">
            <source src="../assets/shared/ig_video.mp4" type="video/mp4"  height="700" />                   
          </video>
        </div>
          <div className='w-full grid grid-cols-2 gap-[11px]'>
            <img src="../assets/desktop/IG Image 2_DT.jpg" alt="" />
            <img src="../assets/desktop/IG Image 3_DT.jpg" alt="" />
            <img src="../assets/desktop/IG Image 4_DT.jpg" alt="" />
            <img src="../assets/desktop/IG Image 5_DT.jpg" alt="" />
          </div>
        </div>
      </div>
      
      </div>
      <footer className='bg-gray-400 h-[400px] flex justify-center items-center font-bold text-[28px]'>Footer</footer>
    </div>
  );
}

export default App;
