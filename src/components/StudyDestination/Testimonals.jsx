import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Quote1 from "../../assets/studyDestination/quote.svg"
import Testimonals from "../../assets/studyDestination/TestimonalLink.svg"

const testimonials = [
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.",
    name: "Student Name",
    degree: "MS in Computer Science",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.",
    name: "Student Name",
    degree: "MS in Computer Science",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.",
    name: "Student Name",
    degree: "MS in Computer Science",
  },
  // Add more testimonials as needed
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1))
  }

  const previous = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <div className="w-full bg-[#37D7D957] overflow-hidden py-8 sm:py-12 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-serif text-center mb-8 sm:mb-12">
          Student Testimonials
        </h2>

        <div className="relative">
          <div className="flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 z-10 bg-white rounded-full shadow-lg hidden sm:flex"
              onClick={previous}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="flex flex-col sm:flex-row gap-6 overflow-hidden">
              {[...Array(3)].map((_, idx) => {
                const testimonialIndex = (currentIndex + idx) % testimonials.length
                return (
                  <Card
                    key={idx}
                    className="w-full sm:w-[300px] md:w-[320px] lg:w-[350px] p-6 bg-white shadow-lg relative mb-6 sm:mb-0"
                  >
                    <img src={Quote1 || "/placeholder.svg"} alt="" className="pb-4 w-8 h-8" />
                    <p className="text-gray-600 mb-6 line-clamp-6 text-sm lg:text-base font-roboto1">
                      {testimonials[testimonialIndex].content}
                    </p>
                    <div>
                      <p className="text-base lg:text-lg font-roboto">{testimonials[testimonialIndex].name}</p>
                      <p className="text-sm lg:text-base font-roboto">{testimonials[testimonialIndex].degree}</p>
                    </div>
                    <img
                      src={Testimonals || "/placeholder.svg"}
                      alt=""
                      className="absolute right-0 bottom-0 w-16 h-16"
                    />
                  </Card>
                )
              })}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 z-10 bg-white rounded-full shadow-lg hidden sm:flex"
              onClick={next}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6 sm:hidden">
          <Button variant="outline" size="sm" onClick={previous} aria-label="Previous testimonial">
            <ChevronLeft className="h-4 w-4 mr-1" /> Prev
          </Button>
          <Button variant="outline" size="sm" onClick={next} aria-label="Next testimonial">
            Next <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>

        <div className="text-center mt-8">
          <Button variant="link" className="text-gray-600 font-medium" onClick={next}>
            See More <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}

