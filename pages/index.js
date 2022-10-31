import Head from 'next/head'
import Certificate from '../components/certificate'
import Footer from '../components/footer'
import Header from '../components/header'
import HeroSection from '../components/heroSection'
import OpenWallet from '../components/openWallet'
import Course from '../components/course'
import StartCourse from '../components/starteCourse'

export default function Home() {
  return (
    <div className='home flex justify-center  w-[200%] md:w-[100%] xl:w-full'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className='w-[98%] md:w-[98%] flex flex-col   xl:w-5/6 '>
      <Header />
      <HeroSection />
      <OpenWallet />
      <Course />
      <Certificate />
      <StartCourse />
      <Footer />

      </section>

      

    
    </div>
  )
}