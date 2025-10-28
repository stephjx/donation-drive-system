import React from "react";
import { Shield, TrendingUp, Users, Users2Icon } from "lucide-react";
import { Card, CardContent} from "./ui/card";


const features = [
  {
    icon: Users2Icon,
    title: "Submit Drives",
    description: "Your contributions are protected with bank-level security and full transparency.",
  },
  {
    icon: TrendingUp,
    title: "Real-time Tracking",
    description: "Monitor donation progress and see the direct impact of your generosity.",
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Join thousands of donors making a difference in student lives across communities.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            What is <span className="text-blue-600">DonateFlow</span>?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            DonateFlow is a digital platform that connects donors and schools to support student 
            donation initiatives. Simplify donations, track progress, and make change together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardContent className="flex flex-col items-center text-center space-y-4 mt-10">
                {/* Icon with hover effect */}
                <div className="w-20 h-20 flex items-center justify-center mb-2
                                bg-blue-100 rounded-2xl
                                group-hover:bg-blue-600 transition-colors duration-300">
                  <feature.icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
