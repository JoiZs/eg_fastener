/* This example requires Tailwind CSS v2.0+ */
export default function Productcont() {
  return (
    <div className="relative overflow-hidden">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font font-extrabold tracking-tight text-white text-opacity-70 sm:text-6xl">
              Good Products are finally here
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
              iste sed eos, ut similique dolorem et eveniet veniam vitae
              delectus?
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://images.pexels.com/photos/5691652/pexels-photo-5691652.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://images.pexels.com/photos/4792505/pexels-photo-4792505.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://images.pexels.com/photos/8478349/pexels-photo-8478349.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://images.pexels.com/photos/4050567/pexels-photo-4050567.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://images.pexels.com/photos/9558504/pexels-photo-9558504.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://images.pexels.com/photos/5853951/pexels-photo-5853951.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://images.pexels.com/photos/207367/pexels-photo-207367.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="---"
                className="inline-block text-center bg-indigo-800 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
