export default function Modal({isModalOpened, onCloseModal}){
    return(
        <>

        <section className={`${isModalOpened ? "bg-black/20 opacity-1 fixed top-0 left-0 bottom-0 right-0 w-full h-screen z-10 px-5 transition-opacity duration-500" : "opacity-0 transition-opacity duration-500 w-0 h-0 overflow-hidden"}`}>
        <div className="bg-white mt-44 rounded-2xl pb-5 lg:max-w-sm lg:mx-auto">
        <div className=" border-b border-b-gray-200">
          <div className="flex justify-between items-center py-5 px-5">
            <h6 className="font-semibold text-base">Choose Language</h6>

            <button onClick={onCloseModal}>
              X
            </button>
          </div>
        </div>
        <ul className="flex flex-col gap-5 mt-5">
        
          
        </ul>
      </div>
            

        </section>
        </>
    )
}