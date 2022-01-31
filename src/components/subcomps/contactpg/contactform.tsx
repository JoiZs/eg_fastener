import { Popover } from "@headlessui/react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Contactmail from "./contactmail";

export default function Contactform() {
  return (
    <div className="flex flex-1 pt-16 justify-center items-center ">
      <div className="bg-gray-600 w-full mx-8 bg-opacity-40 shadow lg:max-w-3xl overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-white">
            Get in touch
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            24/7 Customers Services
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-400 bg-opacity-30 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-white">
                <span className="flex items-center gap-3">
                  <FiPhone />
                  Phone
                </span>
              </dt>
              <dd className="mt-1 text-sm text-gray-300 sm:mt-0 sm:col-span-2">
                <div className="grid grid-cols-6">
                  <div className="col-span-2">
                    <label>1:</label>
                    <br />
                    0000000000
                  </div>
                  <div className="col-span-2">
                    <label>2:</label>
                    <br />
                    0000000000
                  </div>
                  <div className="col-span-2">
                    <label>3:</label>
                    <br />
                    0000000000
                  </div>
                </div>
              </dd>
            </div>

            <div className="bg-gray-400 bg-opacity-30 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-white">
                <span className="flex items-center gap-3">
                  <FiMail />
                  Email
                </span>
              </dt>
              <dd className="mt-1 text-sm text-gray-300 sm:mt-0 sm:col-span-2">
                you@example.com
              </dd>
            </div>
            <div className="bg-gray-400 bg-opacity-30  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-white">
                <span className="flex items-center gap-3">
                  <FiMapPin />
                  Address
                </span>
              </dt>
              <dd className="mt-1 text-sm text-gray-300 sm:mt-0 sm:col-span-2">
                <div className="grid grid-cols-6">
                  <div className="col-span-2">
                    <label>1:</label>
                    <br />
                    Location_1
                  </div>
                  <div className="col-span-2">
                    <label>2:</label>
                    <br />
                    Location_2
                  </div>
                  <div className="col-span-2">
                    <label>3:</label>
                    <br />
                    Location_3
                  </div>
                </div>
              </dd>
            </div>

            <div className="bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-white">
                <Popover>
                  <Popover.Button className="bg-indigo-500 bg-opacity-80 rounded-md hover:bg-opacity-60 p-2 text-white">
                    Mail
                  </Popover.Button>
                  <Popover.Panel>
                    <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
                      <Contactmail />
                    </div>
                  </Popover.Panel>
                </Popover>
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"></dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
