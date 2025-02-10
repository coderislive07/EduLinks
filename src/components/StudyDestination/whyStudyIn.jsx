import { CheckCircle2 } from "lucide-react"
import checkbox from "../../assets/studyDestination/checkpoint.svg"
import EduLink from "../../assets/studyDestination/Edulink1.svg"

export default function StudyInfo({ studyInfo }) {
    const { title, description, quickFacts } = studyInfo

    return (
        <div className="max-w-7xl mx-auto p-6 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                    <h2 className="text-3xl lg:text-[48px]  mb-6">{title}</h2>
                    <p className="text-gray-700 leading-relaxed font-roboto1 lg:text-[24px]  ">{description}</p>
                </div>

                {/* Right Column */}
                <div>
                    <img src={EduLink} alt="" className="absolute -left-24 bottom-0" />
                    <h2 className="text-3xl lg:text-[48px]  mb-6">Quick Facts</h2>
                    <ul className="space-y-4">
                        {quickFacts.map((fact, index) => (
                            <li key={index} className="flex items-start gap-3">
                                {/* <CheckCircle2 className="w-5 h-5 text-[#40E7E7] mt-1 flex-shrink-0" /> */}
                                <img
                                    src= {checkbox}
                                    class="img-fluid rounded-top"
                                    alt=""
                                />
                                
                                <span className="text-gray-700 font-roboto1 lg:text-[24px] lg:max-w-[529px]">{fact}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
