import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Users,
  Globe,
  Award,
  MonitorSmartphone,
} from "lucide-react";

export default function Experience() {
  const workExperience = [
    {
      position: "Social Media Handler",
      company: "ArtVision Studio",
      period: " 2025/01  - Present",
      location: " Karachi, Pakistan",
      icon: <MonitorSmartphone className="h-8 w-8 text-amber-600" />,
      description:
        "Managed and optimized social media accounts to boost engagement, brand visibility, and audience growth. Created content strategies and monitored analytics to improve performance.",
      achievements: [
        "Increased follower base by 100% through targeted campaigns and consistent posting.",
        "Achieved [specific metric] engagement rate via creative content and audience interaction.",
        "Successfully planned and executed promotional campaigns that boosted conversions/sales.",
      ],
    },
    {
      position: "Home Tutor",
      company: "Home",
      period: "2012 - Present",
      location: "Karachi, Pakistan",
      icon: <Users className="h-8 w-8 text-amber-600" />,
      description:
        "Provided personalized academic support to students, focusing on improving subject understanding and performance. Tailored lesson plans to meet individual learning needs.",
      achievements: [
        "Improved students’ grades by 100% within [timeframe].",
        "Helped students develop stronger study habits and exam preparation skills.",
        "Received positive feedback from students and parents for effective teaching methods.",
      ],
    },
    {
      position: "WordPress Back-end",
      company: "The Saed Store",
      period: "2021/03 – 2022/10",
      location: "Karachi, Pakistan",
      icon: <Globe className="h-8 w-8 text-amber-600" />,
      description:
        "Developed, customized, and maintained WordPress websites with a focus on backend functionality, performance, and security. Integrated plugins, APIs, and custom features to meet client needs.Specially WooCommerece and Blogs Managements",
      achievements: [
        "Built and optimized custom WordPress themes and plugins to enhance site functionality",
        "Improved website loading speed by 100% through backend optimization.",
        "Implemented secure database and API integrations, ensuring smooth user experience.",
      ],
    },
    {
      position: "Founder",
      company: "Imitation Jewelry",
      period: "2019/07 – 2020/12",
      location: "Karachi, Pakistan",
      icon: <Briefcase className="h-8 w-8 text-amber-600" />,
      description:
        "Established and operated an online jewelry brand, handling end-to-end business operations from product sourcing to customer service. Leveraged digital marketing strategies to grow brand presence across social media platforms.",
      achievements: [
        "Increased online sales by 100% through targeted social media and influencer marketing campaigns.",
        "Built a loyal customer base with 100% repeat purchase rate through exceptional service",
        "Designed and implemented a streamlined supply chain for consistent product quality and timely delivery.",
      ],
    },
  ];

  const exhibitions = [
    {
      title: "Chromatic Visions",
      venue: "Modern Art Museum",
      location: "San Francisco, CA",
      year: "2023",
      type: "Solo Exhibition",
    },
    {
      title: "Nature Reimagined",
      venue: "International Gallery of Contemporary Art",
      location: "Paris, France",
      year: "2022",
      type: "Group Exhibition",
    },
    {
      title: "Portraits of Emotion",
      venue: "National Portrait Gallery",
      location: "London, UK",
      year: "2021",
      type: "Featured Artist",
    },
    {
      title: "Abstract Landscapes",
      venue: "Contemporary Arts Center",
      location: "Tokyo, Japan",
      year: "2019",
      type: "Solo Exhibition",
    },
    {
      title: "Artists of the Decade",
      venue: "Metropolitan Gallery",
      location: "New York, NY",
      year: "2018",
      type: "Juried Exhibition",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto mb-6"></div>
          <p className="color">
            A chronicle of my professional journey, showcasing career milestones
            and notable exhibitions that have shaped my artistic development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Briefcase className="mr-3 h-6 w-6 text-amber-700" />
              Work Experience
            </h3>

            <div className="relative border-l-2 border-amber-200 pl-6 space-y-10">
              {workExperience.map((job, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-8 bg-white p-1 rounded-full border-2 border-amber-200">
                    {job.icon}
                  </div>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start flex-wrap">
                        <h4 className="font-bold text-lg text-amber-800">
                          {job.position}
                        </h4>
                        <Badge
                          variant="outline"
                          className="text-amber-700 border-amber-300 bg-amber-50"
                        >
                          {job.period}
                        </Badge>
                      </div>

                      <p className="text-amber-700 font-medium mb-3">
                        {job.company} • {job.location}
                      </p>
                      <p className="color mb-4">{job.description}</p>

                      <div>
                        <p className="font-medium color mb-2">
                          Key Achievements:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 color text-sm">
                          {job.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="mr-3 h-6 w-6 text-amber-700" />
              Notable Exhibitions
            </h3>

            <div className="space-y-4">
              {exhibitions.map((exhibition, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex">
                      <div className="w-24 bg-gradient-to-br from-amber-500 to-amber-700 text-white flex flex-col items-center justify-center p-4">
                        <span className="text-xl font-bold">
                          {exhibition.year}
                        </span>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-lg">
                          {exhibition.title}
                        </h4>
                        <p className="text-amber-700">{exhibition.venue}</p>
                        <div className="flex justify-between items-center mt-1">
                          <span className="color text-sm">
                            {exhibition.location}
                          </span>
                          <Badge
                            variant="secondary"
                            className="bg-amber-100 text-amber-800"
                          >
                            {exhibition.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-4">
                Publications & Press
              </h3>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-3 color">
                    <li className="flex items-start">
                      <span className="inline-block h-2 w-2 rounded-full bg-amber-500 mt-2 mr-2"></span>
                      <div>
                        <p className="font-medium">
                          "The Evolution of Contemporary Oil Painting"
                        </p>
                        <p className="text-sm color">
                          Art Review Magazine, 2022
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block h-2 w-2 rounded-full bg-amber-500 mt-2 mr-2"></span>
                      <div>
                        <p className="font-medium">
                          "10 Artists Redefining Portraiture"
                        </p>
                        <p className="text-sm color">
                          Modern Painter Quarterly, 2021
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block h-2 w-2 rounded-full bg-amber-500 mt-2 mr-2"></span>
                      <div>
                        <p className="font-medium">
                          "Color Theory and Emotional Response in Abstract Art"
                        </p>
                        <p className="text-sm color">
                          International Journal of Art Studies, 2020
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block h-2 w-2 rounded-full bg-amber-500 mt-2 mr-2"></span>
                      <div>
                        <p className="font-medium">
                          "Featured Artist Interview"
                        </p>
                        <p className="text-sm color">
                          Art & Design Today, 2019
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
