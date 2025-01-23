import React from 'react'

export default function Contact() {
  return (
    <div>
    <section className="py-16 bg-[#E6FBFC]">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-center mb-12">
            <span className="text-6xl font-bold text-black font-adramalech">Contact </span>
            <span className="text-6xl font-bold text-[#26B9C1] font-adramalech">Us</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-roboto text-center mb-6">
                Trusted Expertise for Your International Goals
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Name*"
                      className="w-full px-4 py-2 border border-[#37d7d9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26B9C1]"
                      required
                    />
                  </div>
                  <div className="flex gap-2">
                    <select
                      className="w-24 px-2 py-2 border border-[#37d7d9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26B9C1]"
                      defaultValue="+91"
                    >
                      <option value="+91">+91</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="Mobile*"
                      className="flex-1 px-4 py-2 border border-[#37d7d9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26B9C1]"
                      required
                    />
                  </div>
              
                </div>
                <div>
                    <input
                      type="email"
                      placeholder="Email*"
                      className="w-full px-4 py-2 border border-[#37d7d9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26B9C1]"
                      required
                    />
                  </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="City*"
                      className="w-full px-4 py-2 border border-[#37d7d9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26B9C1]"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Age*"
                      className="w-full px-4 py-2 border border-[#37d7d9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26B9C1]"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Occupation*"
                      className="w-full px-4 py-2 border border-[#37d7d9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26B9C1]"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <select
                      className="w-full px-4 py-2 border border-[#37d7d9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26B9C1]"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Country Interested in*
                      </option>
                      <option value="nz">New Zealand</option>
                      <option value="au">Australia</option>
                      <option value="uk">United Kingdom</option>
                    </select>
                  </div>
                  <div>
                    <select
                      className="w-full px-4 py-2 border border-[#37d7d9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26B9C1]"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Visa Categories Interested in*
                      </option>
                      <option value="student">Student Visa</option>
                      <option value="work">Work Visa</option>
                      <option value="pr">Permanent Residency</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#26B9C1] text-white py-3 rounded-md font-roboto hover:bg-[#37d7d9] transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}
