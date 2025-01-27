import React from "react"

const StudyVisaSection = ({Heading , Paragraph, num}) => {
  const menuItems = [
    "Study Visa",
    "Personalised Career Guidance",
    "Edulinks AI Jackpot",
    "Scholarship Assessment",
    "Loan Guidance",
    "Post Landing Services",
  ]

  return (
    <div className="relative container p-8 max-w-7xl">
      <div className="flex flex-col md:flex-row gap-8  mx-auto">
        {/* Sidebar Menu */}
        <div className="w-full md:w-[320px] bg-[#21F0F0] rounded-[32px] p-6 space-y-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full  hover:bg-gray-50 text-black text-left px-4 py-3 rounded-lg transition-colors ${(index == num) ? "bg-white" : "bg-[#37D7D9]"}`}>
              {item}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="flex-1 pt-4 text-justify">
          <h2 className="text-[32px] font-medium mb-6">{Heading}</h2>
          <p className="text-gray-800 leading-relaxed max-w-[800px] font-roboto1 text-[24px]">
            {Paragraph}
          </p>
        </div>
      </div>
</div>

  )
}

export default StudyVisaSection

