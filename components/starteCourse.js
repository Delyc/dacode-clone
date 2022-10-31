import Link from 'next/link'
import Image from 'next/image'
import nlogo from '../public/images/nlogo.png'
function StartCourse(){
    return (
        <>
        <section className='flex flex-col-reverse items-center xl:flex xl:flex-row xl:justify-between  mt-20'>
            <div className='flex flex-col items-center gap-5 xl:items-start'>
            <h4 className='font-medium module text-5xl'>NEAR Development 101</h4>
            <button className='mt-5 border border-slate-300 py-6 px-10 rounded-full text-3xl xl:text-xl xl:py-4 xl:px-8'> <Link href="#">Start the Course</Link> </button>
            </div>
            <div className='w-5/6 flex justify-center xl:w-2/5'>
        <Image className='w-5/6 h-5/6' src={nlogo} />
        </div>
        </section>
      
        </>
    )
}

export default StartCourse