import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        <div className="pb-0 lg:col-span-2 bg-green-200 rounded-3xl p-8 md:pb-0  relative flex flex-col lg:flex-row items-center justify-between overflow-hidden h-auto min-h-[32rem]">
          <div className="max-w-xl z-10">
            <div className="inline-flex items-center bg-green-500 text-white px-4 py-1.5 rounded-full text-sm mb-4">
              <span className="bg-green-700 text-sm font-semibold px-2 py-0.5 rounded-full mr-2">
                NEWS
              </span>
              Free Shipping on Orders Above $50!
              <span className="ml-2 text-lg font-semibold">&rarr;</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-gray-800">
              Gadgets with <span className="text-green-600">love</span>.<br />
              Prices with <span className="text-green-600">trust</span>.
            </h1>

            <p className="text-lg text-gray-700 mt-6 mb-1">Starts from</p>
            <p className="text-2xl font-bold text-gray-900">$4.90</p>

            <button
              className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition"
              aria-label="Learn more about our products"
            >
              LEARN MORE
            </button>
          </div>

          <div className="mt-10 lg:mt-0 lg:absolute bottom-0 right-0 lg:mr-10 z-0">
            <img
              src="/hero1.png"
              alt="Girl with headphones"
              className="h-78 sm:h-64 md:h-72 lg:h-95 object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          {/* Card 1 */}
          <div className="bg-orange-200 w-full h-[15rem] rounded-3xl p-6 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 leading-tight">
                Best <br /> <span className="text-gray-600">products</span>
              </h3>
              <a
                onClick={() => navigate("/headphones")}
                className="cursor-pointer text-sm text-gray-600 mt-4 inline-flex items-center hover:underline"
              >
                View more &rarr;
              </a>
            </div>
            <img
              src="/hero2.png"
              alt="Earbuds"
              className="h-32 sm:h-36 md:h-40 w-auto"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-blue-200 w-full h-[15rem] rounded-3xl p-6 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 leading-tight">
                20% <br /> <span className="text-gray-600">discounts</span>
              </h3>
              <a
                onClick={() => navigate("/watches")}
                className="cursor-pointer text-sm text-gray-600 mt-4 inline-flex items-center hover:underline"
              >
                View more &rarr;
              </a>
            </div>
            <img
              src="/hero.png"
              alt="Smartwatch"
              className="h-32 sm:h-36 md:h-40 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
