import Link from 'next/link'

function OpenWallet(){
    return (
        <>
        <section className="flex flex-col  items-center px-10">
            <h3 className="text-black-primary font-medium text-center xl:w-2/5">Making your NEAR learning easy</h3>
          

          <div className="flex flex-col-reverse xl:flex xl:justify-between w-[98%] xl:w-5/6 items-center py-32">
            <div className='flex items-center flex-col gap-6 xl:gap-2'>
                <h4 className="text-black-primary font-medium text-center mt-5 text-6xl xl:text-[36px]">Open NEAR wallet</h4>
                <p className="text-text-gray text-center w-full leading-[50px] text-4xl xl:w-3/5 xl:text-[22px]">Opening a NEAR wallet is the first step and
essential part of joining the NEAR community
as well as starting this course.</p>
<button className='border border-black-primary  text-black-primary mt-5 py-5 px-8 xl:py-3 xl:px-5 rounded-full text-3xl xl:text-lg xl:w-40'> <Link href="#">Create wallet</Link> </button>


            </div>

            <div className='flex w-full justify-center xl:justify-end'>
                <img className="w-5/6 xl:w-5/6 h-5/6" src="https://dacade-nearbalkans.netlify.app/_ipx/w_640,q_75/%2F_next%2Fstatic%2Fmedia%2Fnear.3a79378e.png?url=%2F_next%2Fstatic%2Fmedia%2Fnear.3a79378e.png&w=640&q=75" />
            </div>
          </div>
        </section>
        </>
    )
}

export default OpenWallet