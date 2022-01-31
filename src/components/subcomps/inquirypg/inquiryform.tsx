import { useContext, useState } from "react";
import { InquiryContext } from "../../contexts/inquiryCtx";

export function ProjectForm() {
  const [submitInquiry, setSubmitInquiry] = useContext(InquiryContext);
  const [submitCheck, setSubmitCheck] = useState(false);
  return (
    <>
      <div className="flex justify-center">
        <div className="md:grid flex-1 md:flex-none md:grid-cols-2 md:gap-6 ">
          <div className="mt-5 md:col-span-2">
            <form
              action="#"
              method="POST"
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  let tempvalue: Array<{
                    name: string;
                    validSubmit: boolean;
                  }> = await submitInquiry;
                  tempvalue[0].validSubmit = true;
                  await setSubmitInquiry(tempvalue);
                  await setSubmitCheck(true);
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 rounded-md py-5 bg-white bg-opacity-40 backdrop-blur-md space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 lg:grid-cols-4 gap-6">
                    <div className="col-span-6">
                      <label
                        htmlFor="company-name"
                        className="block text-sm font-medium text-white"
                      >
                        Company Name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="company-name"
                          id="company-name"
                          className=" flex-1  border block w-full rounded-md sm:text-sm bg-opacity-50 bg-white border-gray-300"
                          placeholder="company"
                        />
                      </div>
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="project-length"
                        className="block text-sm font-medium text-white"
                      >
                        Project Length
                      </label>
                      <div className="mt-1 flex items-center">
                        <input
                          type="text"
                          name="project-length"
                          id="project-length"
                          className=" flex-1  border block w-full bg-opacity-50 bg-white rounded-md sm:text-sm border-gray-300"
                          placeholder="year? month?"
                        />
                      </div>
                    </div>

                    <div className="col-span-4">
                      <label
                        htmlFor="start-project"
                        className="block text-sm font-medium text-white"
                      >
                        Start Of The Project
                      </label>
                      <div className="mt-1 flex items-center">
                        <input
                          type="text"
                          name="start-project"
                          id="start-project"
                          className=" flex-1  border block w-full rounded-md bg-opacity-50 bg-white sm:text-sm border-gray-300"
                          placeholder={`Must be more than ${
                            Date().substring(4, 8) + Date().substring(10, 15)
                          }`}
                        />
                      </div>
                    </div>

                    <div className="col-span-6 lg:col-span-3">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium text-white"
                      >
                        Project Details
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          name="about"
                          rows={3}
                          cols={35}
                          className="shadow-sm  mt-1 block w-full bg-opacity-50 bg-white sm:text-sm border border-gray-300 rounded-md"
                          placeholder="you@example.com"
                          defaultValue={""}
                        />
                      </div>
                      <p className="mt-2 text-sm text-white">
                        Fill out a brief description about your project.
                      </p>
                    </div>

                    <div className="col-span-6 lg:col-span-3">
                      <label className="block text-sm font-medium text-white">
                        Project Example
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-300">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer  rounded-md font-medium text-indigo-400 hover:text-indigo-500 focus-within:outline-none"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-200">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
                      submitCheck ? "bg-green-600" : "bg-indigo-600"
                    } hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus: `}
                  >
                    {submitCheck ? "Done" : "Save"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export const PersonalInfoForm = () => {
  const [submitInquiry, setSubmitInquiry] = useContext(InquiryContext);
  const [submitCheck, setSubmitCheck] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="md:grid flex-1 md:flex-none md:grid-cols-2 md:gap-6">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form
            action="#"
            method=""
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                let tempvalue: Array<{
                  name: string;
                  validSubmit: boolean;
                }> = await submitInquiry;
                tempvalue[1].validSubmit = true;
                await setSubmitCheck(true);
                await setSubmitInquiry(tempvalue);
              } catch (error) {
                console.log(error);
              }
            }}
          >
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 rounded-md bg-white bg-opacity-40 backdrop-blur-md sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-white"
                    >
                      First name
                    </label>
                    <input
                      required
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1   focus:border-indigo-500 bg-opacity-50 bg-white block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-white"
                    >
                      Last name
                    </label>
                    <input
                      required
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="mt-1 focus:border-indigo-500 bg-opacity-50 bg-white block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      required
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="phone"
                      className="mt-1 focus:border-indigo-500 bg-opacity-50 bg-white block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-white"
                    >
                      Email address
                    </label>
                    <input
                      required
                      type="text"
                      name="email-address"
                      id="email-address"
                      autoComplete="email"
                      className="mt-1 focus:border-indigo-500 bg-opacity-50 bg-white block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-white"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="mt-1 block w-full py-2 px-3 border bg-opacity-50 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none   focus:border-gray-500 sm:text-sm"
                    >
                      <option>United Kingdom</option>
                      <option>Czech</option>
                      <option>Germany</option>
                      <option>Italy</option>
                    </select>
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium text-white"
                    >
                      Street address
                    </label>
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autoComplete="street-address"
                      className="mt-1   focus:border-indigo-500 bg-opacity-50 bg-white block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-white"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="mt-1 bg-opacity-50 bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium text-white"
                    >
                      ZIP / Postal code
                    </label>
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autoComplete="postal-code"
                      className="mt-1 bg-opacity-50 bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3  text-right sm:px-6">
                <button
                  type="submit"
                  className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
                    submitCheck ? "bg-green-600" : "bg-indigo-600"
                  } hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus: `}
                >
                  {submitCheck ? "Done" : "Save"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export const NotificationForm = () => {
  const [submitInquiry, setSubmitInquiry] = useContext(InquiryContext);
  const [submitCheck, setSubmitCheck] = useState(false);

  return (
    <div className="mt-10  flex justify-center">
      <div className="md:grid md:grid-cols-2 md:gap-6">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form
            action="#"
            method=""
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                let tempvalue: Array<{
                  name: string;
                  validSubmit: boolean;
                }> = await submitInquiry;
                tempvalue[2].validSubmit = true;
                await setSubmitCheck(true);
                await setSubmitInquiry(tempvalue);
              } catch (error) {
                console.log(error);
              }
            }}
          >
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 rounded-md bg-white bg-opacity-40 backdrop-blur-md space-y-6 sm:p-6">
                <fieldset>
                  <legend className="text-base font-medium text-white">
                    By Email
                  </legend>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          className="  h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="comments"
                          className="font-medium text-white"
                        >
                          Comments
                        </label>
                        <p className="text-gray-300">
                          Get notified when someones posts a comment on a
                          posting.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="candidates"
                          name="candidates"
                          type="checkbox"
                          className="  h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="candidates"
                          className="font-medium text-white"
                        >
                          Candidates
                        </label>
                        <p className="text-gray-300">
                          Get notified when a candidate applies for a job.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="offers"
                          name="offers"
                          type="checkbox"
                          className="  h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="offers"
                          className="font-medium text-white"
                        >
                          Offers
                        </label>
                        <p className="text-gray-300">
                          Get notified when a candidate accepts or rejects an
                          offer.
                        </p>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <div>
                    <legend className="text-base font-medium text-white">
                      Push Notifications
                    </legend>
                    <p className="text-sm text-gray-300">
                      These are delivered via SMS to your mobile phone.
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        id="push-everything"
                        name="push-notifications"
                        type="radio"
                        className="  h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label
                        htmlFor="push-everything"
                        className="ml-3 block text-sm font-medium text-white"
                      >
                        Everything
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="push-email"
                        name="push-notifications"
                        type="radio"
                        className="  h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label
                        htmlFor="push-email"
                        className="ml-3 block text-sm font-medium text-white"
                      >
                        Same as email
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="push-nothing"
                        name="push-notifications"
                        type="radio"
                        className="  h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label
                        htmlFor="push-nothing"
                        className="ml-3 block text-sm font-medium text-white"
                      >
                        No push notifications
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div className="px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
                    submitCheck ? "bg-green-600" : "bg-indigo-600"
                  } hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus: `}
                >
                  {submitCheck ? "Done" : "Save"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
