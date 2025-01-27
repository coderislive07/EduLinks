import React from 'react';

export default function Cost({ educationData }) {
    const { country, costs, totalExpenses, careerInsights } = educationData;

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-8">
            {/* Cost Table Section */}
            <div>
                <h1 className="text-center text-3xl font-serif mb-6">Cost of Education in {country}</h1>
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="bg-[#40E7E7] text-black p-3 text-left">Types of Expenses</th>
                            <th className="bg-[#40E7E7] text-black p-3 text-right">Annual Expenses in USD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {costs.map((cost, index) => (
                            <tr key={index} className="border-b">
                                <td className="p-3">{cost.type}</td>
                                <td className="p-3 text-right">{cost.amount.toLocaleString()}</td>
                            </tr>
                        ))}
                        <tr>
                            <td className="bg-[#40E7E7] p-3 font-medium">Total Expenses</td>
                            <td className="bg-[#40E7E7] p-3 text-right font-medium">{totalExpenses.toLocaleString()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Careers Section */}
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1 space-y-4">
                        {careerInsights.images.map((image, index) => (
                            <img key={index} src={image.url || "/placeholder.svg"} alt={image.alt} className="w-full rounded-lg" />
                        ))}
                    </div>
                    <div className="md:col-span-2">
                    <h2 className="text-3xl font-serif mb-6">{careerInsights.title}</h2>

                        <p className="text-gray-800 leading-relaxed">{careerInsights.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
