import first from "../public/images/first.png";
import second from "../public/images/second.png";
import third from "../public/images/third.png";
import Image from "next/image";
function Course() {
  return (
    <>
      <section className="module flex flex-col items-center justify-center relative">
        <div className='absolute md:block hidden bg-green-400/75 blur-2xl opacity-20 -ml-[50rem] h-[300px] w-[300px] rounded-full mt-20 -z-20'></div>
        <div>
          <svg
            className="hidden xl:block"
            width="164"
            height="132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M162.489 120.017c-1.318 1.354-6.103 10.6-6.633 10.823m0 0c-.452.191-3.298-5.156-5.992-10.538m5.992 10.538c5.012-24.418-17.84-38.27-35.281-47.719-21.097-11.429-38.904-16.188-56.95-24.111C37.13 47.379 3.943 29.436 1.568 1.984"
              stroke="#676767"
              stroke-width="2"
              stroke-miterlimit="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>

        <div className="flex flex-col items-center xl:flex xl:flex-row w-5/6 xl:justify-between xl:gap-10 ">
          <div className="w-5/6 xl:w-2/5 xl:h-4/5  flex justify-center xl:justify-end">
            <svg
              className="xl:h-full xl:w-full "
              viewBox="0 0 296 296"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="url(#Target_svg__a)" d="M0 0h296v296H0z"></path>
              <path
                opacity="0.05"
                d="M238 147c0 49.639-40.137 90-89.5 90S59 196.639 59 147c0-49.64 40.137-90 89.5-90S238 97.36 238 147Z"
                fill="#676767"
              ></path>
              <path
                d="M148.5 215c37.279 0 67.5-30.221 67.5-67.5 0-37.279-30.221-67.5-67.5-67.5-37.279 0-67.5 30.221-67.5 67.5 0 37.279 30.221 67.5 67.5 67.5Z"
                fill="#fff"
              ></path>
              <path
                d="M181.866 180.707c18.408-18.435 18.408-48.325 0-66.76-18.408-18.435-48.253-18.435-66.661 0-18.407 18.435-18.407 48.325 0 66.76 18.408 18.436 48.253 18.436 66.661 0Z"
                fill="url(#Target_svg__b)"
              ></path>
              <path
                d="M148.877 173.484c14.419-.181 25.962-12.033 25.781-26.474-.18-14.44-12.015-26-26.433-25.819-14.419.18-25.962 12.033-25.782 26.473.181 14.44 12.015 26 26.434 25.82Z"
                fill="#fff"
              ></path>
              <circle
                opacity="0.2"
                cx="148.5"
                cy="147.5"
                r="12.5"
                fill="#676767"
              ></circle>
              <path
                d="m147.5 148 77.303-90.446"
                stroke="#676767"
                stroke-miterlimit="10"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M146.679 139.207a.5.5 0 0 1 .527.471l.443 7.973 7.973-.442a.5.5 0 0 1 .055.998l-8.472.47a.499.499 0 0 1-.527-.471l-.47-8.472a.5.5 0 0 1 .471-.527Z"
                fill="#676767"
              ></path>
              <path
                d="M203.139 81 224 56.603 211.02 52 189 77.548 203.139 81ZM205 82.561 226.176 58 233 70.049 210.882 96 205 82.561Z"
                fill="#9092FB"
              ></path>
              <defs>
                <linearGradient
                  id="Target_svg__a"
                  x1="252.652"
                  y1="43.348"
                  x2="43.348"
                  y2="252.652"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FDFEFF"></stop>
                  <stop offset="1" stop-color="#F1F7FF"></stop>
                </linearGradient>
                <linearGradient
                  id="Target_svg__b"
                  x1="115.205"
                  y1="113.947"
                  x2="139.073"
                  y2="189.318"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#7BDDE2"></stop>
                  <stop offset="0.479" stop-color="#86B5EF"></stop>
                  <stop offset="1" stop-color="#9092FB"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="flex flex-col w-full items-center xl:w-1/2 gap-10 xl:items-start xl:gap-4">
            <h4 className="font-medium text-black-primary text-5xl mt-10 xl:text-4xl">
              Complete the course
            </h4>
            <p className="text-text-gray text-center text-4xl mt-3 xl:text-2xl">
              In three simple modules, learn:
            </p>
            <div className="flex flex-col  items-center gap-2 xl:flex xl:flex-row xl:gap-3 ">
              <Image className="w-12" src={first} alt="icone" />
              <p className="text-text-gray text-4xl text-center xl:text-[18px] module">
                Essential NEAR concepts
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 xl:flex xl:flex-row xl:gap-3 xl:items-center">
              <Image className="w-12" src={second} alt="icone" />
              <p className="text-text-gray text-4xl text-center xl:text-[18px]">
                How to write smart contracts on NEAR
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 xl:flex xl:flex-row xl:gap-3 xl:items-center">
              <Image className="w-12" src={third} alt="icone" />
              <p className="text-text-gray text-4xl text-center xl:text-[18px] module leading-[50px]">
                How to build dapps on the NEAR blockchain
              </p>
            </div>
          </div>
        </div>

        <div>
          <svg
            className="hidden xl:block"
            width="164"
            height="132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.511 120.017c1.318 1.354 6.103 10.6 6.633 10.823m0 0c.452.191 3.298-5.156 5.992-10.538M8.144 130.84c-5.012-24.418 17.84-38.27 35.281-47.719C64.522 71.692 82.33 66.933 100.376 59.01c26.494-11.631 59.68-29.574 62.055-57.026"
              stroke="#676767"
              stroke-width="2"
              stroke-miterlimit="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
}

export default Course;
