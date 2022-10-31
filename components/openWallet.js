import Link from 'next/link'
import Image from 'next/image'
import lightn from '../public/images/lightn.png'
function OpenWallet(){
    return (
        <>
        <section className="flex flex-col  items-center px-10">
            <h3 className="text-black-primary font-bold text-center xl:w-2/5">Making your NEAR learning easy</h3>
          

          
          <div className="flex flex-col-reverse xl:flex xl:flex-row xl:justify-between w-[98%] xl:w-5/6 items-center relative py-32">
          <div className='hidden bg-gradient-to-r from-indigo-400 to-blue-400 md:block absolute h-[300px] w-[300px] blur-2xl opacity-10 right-0 -mt-32 -z-20 -mr-32'></div>

            <div className='flex items-center flex-col gap-6 xl:gap-2 xl:items-start'>
                <h4 className="text-black-primary font-bold text-center mt-5 text-6xl xl:text-[36px]">Open NEAR wallet</h4>
                <p className="text-text-gray text-center w-full leading-[50px] text-4xl xl:w-3/4 xl:text-start xl:text-[18px] xl:leading-[35px]">Opening a NEAR wallet is the first step and
essential part of joining the NEAR community
as well as starting this course.</p>
<button className='border border-black-primary  text-black-primary mt-5 py-5 px-8 xl:py-3 xl:px-5 rounded-full text-3xl xl:text-lg xl:w-40'> <Link href="#">Create wallet</Link> </button>


            </div>

            <div className='flex  w-full justify-center xl:justify-end'>
                <Image className="w-5/6 xl:w-5/6 h-5/6" src={lightn} alt="N logo"/>
            </div>
          </div>
        </section>
        </>
    )
}

export default OpenWallet