import arrow from '../public/images/arrow.png'

function HeroSection(){

    return (
        <>
        <section className="flex flex-col items-center py-44 gap-5 px-10">
            <h1 className="text-center font-medium leading-[100px]">Get <span className=" text-transparent  bg-clip-text bg-gradient-to-b from-[#9092fb] via-[#86b5ef] to-[#7bdde2]"
>NEAR</span>  Certified!</h1>
<p className="text-center xl:w-2/3 text-text-gray text-[35px] mt-10 xl:text-[22px]">We, in NEAR Balkans, know how important it is to have regional and local support. Now you can become NEAR certified in a regional language of preference and connect with our team to support your further growth within the NEAR ecosystem.</p>
<div className='mt-10 w-12 h-12 border xl:w-8 xl:h-8 rounded-full  flex justify-center items-center'>
<img src={arrow.src}/>

</div>

        </section>
        </>

    )

  

}

export default HeroSection