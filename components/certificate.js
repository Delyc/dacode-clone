import Image from 'next/image'
import certificate from '../public/images/certificate.png'
function Certificate(){
    return (
        <>

<section className="certificate flex flex-col mt-20 gap-5 items-center px-10 ">
            <h3 className="text-black-primary font-medium text-center ">Claim NEAR certificate</h3>
            <p className="text-text-gray  leading-[30px] text-4xl xl:text-[22px] xl:w-1/2 text-center">Upon course completion, receive the NEAR dev 101
certificate as an NFT on your NEAR wallet.</p>
<div className="w-full xl:w-3/5 mt-32 xl:mt-10"> <Image className="" src={certificate} alt="certificate"/></div>
       
        </section>
        </>
    )

   
}

export default Certificate