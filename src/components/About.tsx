export default function Aboutus() {
  return (
    <div className="px-10 py-5">
      <h1 className="text-red-600 text-xl ">ABOUT US</h1>
      <div className="flex justify-between pt-5">
        <h1 className="font-bold text-3xl text-left text-[#3D628C]">
          Lorem Ipsum Dolor Sit Amet <br /> Consec Tetur Attempor Eu <br />{" "}
          Fermentu Commodo
        </h1>
        <div className="flex flex-col items-end justify-end mr-10">
          <p className="text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur. Rhoncus <br /> gravida
            consequat feugiat consectetur. Adipiscing <br /> arcu sit auctor hac
            ornare tempus. Quis praesent.
          </p>
          <button className="flex py-3 px-14 mt-3  bg-white pt-4  rounded-3xl border font-medium  hover:bg-gray-200">
            About Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17l9-9M7 7h9v9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
