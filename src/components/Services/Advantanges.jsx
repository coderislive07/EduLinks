import React from "react"
export default function AdvantagesSection(Image) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Discover the Advantages of a Study Visa with Edulink
      </h1>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
          <img src= {Image}
            className="object-cover rounded-lg"
            // priority
          />
        </div>
        <div className="space-y-8">
          <AdvantageItem
            title="Interview Preparation"
            description="Get expert tips and coaching for visa interviews to enhance your confidence and performance."
          />
          <AdvantageItem
            title="Financial Planning"
            description="Receive guidance on demonstrating financial stability, a crucial aspect of your visa application."
          />
          <AdvantageItem
            title="Post-Visa Support"
            description="Access ongoing support even after your visa is granted, ensuring a smooth transition to your new educational environment."
          />
          <AdvantageItem
            title="Stress-Free Process"
            description="Experience a hassle-free application process with our dedicated team handling all the complexities on your behalf."
          />
          <AdvantageItem
            title="Dedicated Team"
            description="Work with a passionate and committed team that prioritizes your success and satisfaction."
          />
        </div>
      </div>
    </section>
  )
}

function AdvantageItem({ title, description }) {
  return (
    <div className="flex gap-3">
      <div className="flex-shrink-0 w-6 h-6 text-yellow-400">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

