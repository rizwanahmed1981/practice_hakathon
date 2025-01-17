import { Copyright } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative">
      {/*heading*/}
      <div className='text-center my-10'>
        <h1 className='scroll-m-20 text-xl lg:text-4xl font-semibold tracking-tight '>CONTACT</h1>
        <div className='flex mt-2 justify-center'>
          <div className='w-16 h-1 rounded-full bg-myColor2 inline-flex' />
        </div>
      </div>
      {/*contact section starts from here*/}
      <div className="container px-5 py-4 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300  overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative rounded-2xl">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.4038928742325!2d67.02407019689684!3d24.850051455352563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e75a28531d1%3A0x412558657f5ff4a8!2sGovernor%20House%20Karachi!5e0!3m2!1sen!2s!4v1736866820213!5m2!1sen!2s" width="100%"
            height="100%"
            className="absolute inset-0"
            allowFullScreen
            loading="lazy"
          ></iframe>

          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Governor House Karachi
                Aiwan-e-Sadar, Civil Lines, Karachi, Karachi City, Sindh 75580
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-500 leading-relaxed">razykan.ra@gmail.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+92-(349)-025-2559</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 px-6 rounded-2xl">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600 capitalize">
            feel free to share your feedback all queries are welcome
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
          <p className="text-xs text-gray-500 mt-3 flex items-center justify-center">
            <Copyright /> 2025 NovaNex Innovations
          </p>
        </div>
      </div>
    </section>

  )
}

export default Contact