import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GraduationCap, Award, Scroll } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Qualifications() {
  const educationItems = [
    {
      degree: "BBA",
      institution: "Virtual  University",
      period: "2022/11 - Present",
      description: "Karachi Pakistan",
    },
    {
      degree: "BBBA (1 Year)",
      institution: "Fedral Urdu University of Arts, Science And Technolog",
      period: "2018 - 2019",
      description: "Karachi Pakistan",
    },
    {
      degree: "Intermediate (Commerece)",
      institution: "Govt. Degree Girls College",
      period: "2016 - 2017",
      description: "Karachi Pakistan",
    },
    {
      degree: "Matriculation",
      institution: "Rafi Public Secondary School",
      period: "2011",
      description: "Karachi Pakistan",
    },
  ];

  const certifications = [
    {
      name: "Master Oil Painting Certification",
      institution: "International Guild of Realist Artists",
      year: "2010",
      icon: <Scroll className="h-8 w-8 text-amber-600" />,
    },
    {
      name: "Art Conservation and Restoration",
      institution: "Heritage Conservation Institute",
      year: "2012",
      icon: <Award className="h-8 w-8 text-amber-600" />,
    },
    {
      name: "Contemporary Art Curation",
      institution: "Modern Art Foundation",
      year: "2015",
      icon: <Scroll className="h-8 w-8 text-amber-600" />,
    },
  ];

  const skills = [
    "Oil Painting",
    "Watercolor",
    "Acrylic",
    "Portrait",
    "Landscape",
    "Still Life",
    "Abstract",
    "Color Theory",
    "Composition",
    "Art History",
    "Restoration",
    "Framing",
    "Exhibition Design",
  ];

  return (
    <section id="qualifications" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Qualifications
          </h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Formal education, professional certifications, and specialized
            skills that inform my artistic practice and professional approach.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <GraduationCap className="h-8 w-8 text-amber-700 mr-4" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              {educationItems.map((item, index) => (
                <Card key={index} className="border-l-4 border-amber-600">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-lg">{item.degree}</h4>
                      <Badge
                        variant="outline"
                        className="text-amber-700 border-amber-300 bg-amber-50"
                      >
                        {item.period}
                      </Badge>
                    </div>
                    <p className="text-amber-800 font-medium mb-2">
                      {item.institution}
                    </p>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div>
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-amber-700 mr-4" />
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>

              <div className="space-y-4 mb-12">
                {certifications.map((cert, index) => (
                  <Card key={index}>
                    <CardContent className="p-6 flex items-center">
                      {cert.icon}
                      <div className="ml-4">
                        <h4 className="font-semibold">{cert.name}</h4>
                        <p className="text-gray-600 text-sm">
                          {cert.institution} • {cert.year}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4">
                  Specialized Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-amber-600 hover:bg-amber-700 text-white py-1.5"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
