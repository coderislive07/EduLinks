import { CheckCircle2 } from "lucide-react"

export default function StudyInfo({ studyInfo }) {
    const { title, description, quickFacts } = studyInfo

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                    <h2 className="text-3xl font-serif mb-6">{title}</h2>
                    <p className="text-gray-700 leading-relaxed">{description}</p>
                </div>

                {/* Right Column */}
                <div>
                    <h2 className="text-3xl font-serif mb-6">Quick Facts</h2>
                    <ul className="space-y-4">
                        {quickFacts.map((fact, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#40E7E7] mt-1 flex-shrink-0" />
                                <span className="text-gray-700">{fact}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
