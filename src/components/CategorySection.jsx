import { useNavigate } from "react-router-dom";

const CategorySection = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-5xl font-semibold text-center mt-10" id="category">
        Category
      </h1>
      <div className="w-35 h-1 bg-green-500 ml-30 lg:ml-144"></div>
      <div className="flex flex-col items-center mt-18 lg:flex-col">
        <div className="cursor-pointer flex flex-col gap-12 lg:flex-row">
          <div className="relative w-70 h-80 bg-black/70 rounded-3xl flex items-center p-10 overflow-hidden">
            <img
              src="/earphone.png"
              alt="watch"
              className="absolute top-5 left-13 w-full object-contain"
            />
            <div>
              <p className="text-xl text-black font-bold">enjoy</p>
              <p className="text-3xl text-white">with</p>
              <p className="text-4xl font-semibold text-gray-300">Earph</p>
              <button
                className="cursor-pointer bg-black py-2 px-3 text-white rounded-xl mt-5 relative z-10"
                onClick={() => navigate("/headphones")}
              >
                Browse
              </button>
            </div>
          </div>
          <div className="relative w-70 h-80 bg-violet-500 rounded-3xl flex items-center p-10 overflow-hidden">
            <img
              src="/hero.png"
              alt="watch"
              className="absolute left-26 top-20 w-2/3 object-contain"
            />
            <div className="relative z-10">
              <p className="text-xl text-black font-bold">enjoy</p>
              <p className="text-3xl text-white">with</p>
              <p className="text-4xl font-semibold text-gray-300">Watc</p>
              <button
                className="cursor-pointer bg-black py-2 px-3 text-white rounded-xl mt-5 relative z-10"
                onClick={() => navigate("/watches")}
              >
                Browse
              </button>
            </div>
          </div>
          <div className="relative w-70 h-80 bg-red-600 rounded-3xl flex items-center p-10 overflow-hidden lg:w-130 lg:h-80">
            <img
              src="/laptop.png"
              alt="laptop"
              className="absolute left-14 w-full object-contain lg:left-22"
            />
            <div className="relative z-10">
              <p className="text-xl text-black font-bold">enjoy</p>
              <p className="text-3xl text-white">with</p>
              <p className="text-3xl font-semibold text-gray-300 lg:text-4xl">
                Laptop
              </p>
              <button
                className="cursor-pointer bg-black py-2 px-3 text-white rounded-xl mt-5 relative z-10"
                onClick={() => navigate("/laptops")}
              >
                Browse
              </button>
            </div>
          </div>
        </div>
        <div className="cursor-pointer flex flex-col gap-12 mt-10 lg:flex-row">
          <div className="relative w-70 h-80 bg-blue-600 rounded-3xl flex items-center p-10 overflow-hidden lg:w-130">
            <img
              src="/vr.png"
              alt="watch"
              className="absolute bottom-23 left-25 w-2/3 object-contain lg:left-45 lg:top-5 lg:bottom-0"
            />
            <div>
              <p className="text-xl text-black font-bold">enjoy</p>
              <p className="text-3xl text-white">with</p>
              <p className="text-4xl font-semibold text-gray-300">Oculus</p>
              <button
                className="cursor-pointer bg-black py-2 px-3 text-white rounded-xl mt-5 relative z-10"
                onClick={() => navigate("/")}
              >
                Browse
              </button>
            </div>
          </div>
          <div className="relative w-70 h-80 bg-gray-500 rounded-3xl flex items-center p-10 overflow-hidden">
            <img
              src="/console.png"
              alt="watch"
              className="absolute top-5 left-18 w-full object-contain"
            />
            <div>
              <p className="text-xl text-black font-bold">enjoy</p>
              <p className="text-3xl text-white">with</p>
              <p className="text-4xl font-semibold text-gray-300">Console</p>
              <button
                className="cursor-pointer bg-black py-2 px-3 text-white rounded-xl mt-5 relative z-10"
                onClick={() => navigate("/consoles")}
              >
                Browse
              </button>
            </div>
          </div>

          <div className="relative w-70 h-80 bg-green-600 rounded-3xl flex items-center p-10 overflow-hidden">
            <img
              src="/speaker.png"
              alt="watch"
              className="absolute top-25 left-16 w-full object-contain"
            />
            <div>
              <p className="text-xl text-black font-bold">enjoy</p>
              <p className="text-3xl text-white">with</p>
              <p className="text-4xl font-semibold text-gray-300">Speaker</p>
              <button
                className="cursor-pointer bg-black py-2 px-3 text-white rounded-xl mt-5 relative z-10"
                onClick={() => navigate("/speakers")}
              >
                Browse
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorySection;
