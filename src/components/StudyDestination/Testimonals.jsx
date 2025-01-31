import React, { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
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
        <div className="w-full bg-[#37D7D957] py-12 px-4 realtive">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl lg:text-[48px] font-serif text-center mb-12">Student Testimonials</h2>

                <div className="relative">
                    <div className="flex items-center justify-center gap-6">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute left-0 z-10 bg-white rounded-full shadow-lg"
                            onClick={previous}
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>

                        <div className="flex gap-6 overflow-hidden">
                            {[...Array(3)].map((_, idx) => {
                                const testimonialIndex = (currentIndex + idx) % testimonials.length
                                return (
                                    <Card key={idx} className="w-[350px]  p-6 bg-white shadow-lg relative">
                                        <img src={Quote1} alt="" className="pb-4" />
                                        <p className="text-gray-600 mb-6 line-clamp-6 lg:text-[18px] font-roboto1">{testimonials[testimonialIndex].content}</p>
                                        <div>
                                            <p className=" lg:text-[18px] font-roboto">{testimonials[testimonialIndex].name}</p>
                                            <p className="text-sm  lg:text-[18px] font-roboto ">{testimonials[testimonialIndex].degree}</p>
                                        </div>
                                        <img src={Testimonals} alt="" className="absolute right-0 bottom-0" />
                                    </Card>
                                )
                            })}
                        </div>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 z-10 bg-white rounded-full shadow-lg"
                            onClick={next}
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>
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
