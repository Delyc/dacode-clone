
import complogo from '../public/images/complogo.png'
import logomobile from '../public/images/logomobile.png'
import circle from "../public/images/circle.png";
import Link from "next/link";
import Image from 'next/image'
import Modal from './modal';
import { useState } from 'react';
function Header() {

  const [isModalOpened, setIsModalOpened] = useState(false)

  const onOpenModal = () => setIsModalOpened(true)
  const onCloseModal = () => setIsModalOpened(false)

  return (
    <>
    <Modal isModalOpened={isModalOpened} onCloseModal={onCloseModal}/>
      <nav className="hidden fixed bg-white min-w-[100%] xl:flex xl:justify-between xl:py-10 xl:items-center z-50 xl:px-20">
        
        <div className="xl:grid xl:grid-cols-2 xl:divide-x ">
          <div className=" xl:flex xl:gap-3 xl:items-center ">
           <Link className='xl:flex xl:gap-3 xl:items-center ' href="dacade"> <Image src={circle} alt="company logo"/>     <h3 className="xl:font-bold xl:text-2xl">Dacade</h3></Link>
        
          </div>

          <div className="xl:flex xl:justify-center xl:px-4 ">
            {" "}

            <Link href="near"><Image src={complogo}  alt="logo" className="w-32 h-12" /></Link>
            
          </div>
        </div>
        <div className="xl:flex xl:items-center xl:gap-10">
          <button href="courses" className="xl:text-xl" onClick={onOpenModal}>
            Start The Course
          </button>
          <button className="xl:bg-black-primary xl:text-white xl:font-medium xl:py-3 xl:px-5 xl:rounded-full xl:text-xl">
            {" "}
            <Link href="wallet">Create wallet</Link>{" "}
          </button>
        </div>
       
      </nav>

      <nav className="xl:hidden fixed bg-white flex justify-between items-center  w-full z-50 px-10 py-10">
        <div className="  gap-2 grid grid-cols-2 divide-x  ">
          <div className="w-12">
            <svg
              className="w-full lg:w-[39px] "
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.5 1.41C9.509 1.41 1.41 9.509 1.41 19.5S9.509 37.59 19.5 37.59s18.09-8.099 18.09-18.09S29.491 1.41 19.5 1.41ZM0 19.5C0 8.73 8.73 0 19.5 0S39 8.73 39 19.5 30.27 39 19.5 39 0 30.27 0 19.5Z"
                fill="#3F4246"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.515 6.525C23.852 3.199 21.685 1.41 19.5 1.41V0c3.006 0 5.537 2.418 7.276 5.895 1.759 3.518 2.826 8.33 2.826 13.605 0 5.276-1.067 10.087-2.826 13.605C25.037 36.582 22.506 39 19.5 39v-1.41c2.184 0 4.352-1.789 6.015-5.115 1.642-3.284 2.678-7.87 2.678-12.975 0-5.104-1.036-9.69-2.678-12.975Z"
                fill="#3F4246"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.904 6.633C26.453 3.365 23.12 1.41 19.5 1.41V0c4.164 0 7.88 2.252 10.532 5.787 2.65 3.534 4.27 8.385 4.27 13.713 0 5.328-1.62 10.178-4.27 13.713C27.38 36.748 23.663 39 19.5 39v-1.41c3.621 0 6.953-1.955 9.404-5.223 2.45-3.268 3.988-7.815 3.988-12.867 0-5.052-1.537-9.6-3.988-12.867Z"
                fill="#3F4246"
              ></path>
            </svg>
          </div>
          <div className="px-3 w-20">
            <Image className="w-full " src={logomobile} alt="logo"/>
          </div>
        </div>

        <button className="bg-black-primary text-white font-medium py-5 px-6 rounded-full text-3xl">
          {" "}
          <Link href="#">Create wallet</Link>{" "}
        </button>
      </nav>
    </>
  );
}

export default Header;
