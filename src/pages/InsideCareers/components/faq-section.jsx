import { useState } from "react"

const faqs = [
  {
    question: "What is Engineering & Technology?",
    answer:
      "Engineering & Technology encompasses various disciplines that apply scientific and mathematical principles to solve real-world problems and create innovative solutions.",
  },
  {
    question: "How do I apply to study Engineering in Australia?",
    answer:
      "To study Engineering in Australia, you need to meet academic requirements, English language proficiency, and submit applications through universities' online portals.",
  },
  {
    question: "What are the career prospects in Australia?",
    answer:
      "Engineering careers in Australia offer excellent prospects with competitive salaries and opportunities across various sectors including mining, construction, technology, and healthcare.",
  },
  {
    question: "Are there scholarships available for Engineering students?",
    answer:
      "Yes, many Australian universities offer scholarships for international engineering students based on academic merit and other criteria.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Top 10 FAQs for Engineering & Technology</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                className="w-full px-6 py-4 text-left focus:outline-none flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <span className="ml-6 flex-shrink-0">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}