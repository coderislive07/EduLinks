import React from "react";
import { Compass, Building2, GraduationCap, Brain, Globe } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const FeatureCard = ({ title, description, icon, isHeading = false }) => {
    if (isHeading) {
        return (
            <div className="border-none text-[46px] p-6">
                <h3 className="text-4xl font-medium">{title}</h3>
            </div>
        );
    }

    return (
        <div className="p-4">
            <Card className="relative  h-[200px] bg-[#BBF1F2] border-4 border-[#37D7D9] rounded-none">
                <CardContent className="p-2">
                    <div className="absolute -top-10 left-12 transform -translate-x-1/2 \">
                        {icon && (
                            <div className="text-black">
                                {/* {React.cloneElement(icon, { size: 32, strokeWidth: 2 })} */}
                                <img src={icon} alt="" className="w-16" />
                            </div>
                        )}
                    </div>
                    <div className="mt-4 text-[24px] text-center z-20">
                        <h3 className=" mb-2">{title}</h3>
                        <p className=" font-roboto1">
                            {description}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

const AIAssistantSection = ({features}) => {
  

    return (
        <section className="bg-[#BBF1F2] py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            isHeading={feature.isHeading}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AIAssistantSection;
