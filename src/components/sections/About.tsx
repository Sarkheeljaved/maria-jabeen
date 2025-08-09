import { Card, CardContent } from "@/components/ui/card";
import { Brush, Heart, Star } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About The Artist
          </h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Dedicated to capturing beauty and emotion through the art of
            painting, with a passion for creating visual stories that resonate
            with viewers.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/5">
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
              {/* Placeholder for artist's portrait */}
              <div
                className=""
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  src="/IMG_5868-removebg-preview.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  alt=""
                  className=""
                />
              </div>
              {/* <div className="text-center p-8 text-amber-700 italic">
                <p className="text-xl">Artist Portrait</p>
                <p className="text-sm mt-2">
                  A professional portrait of the artist would be displayed here
                </p>
              </div> */}
            </div>
          </div>

          <div className="md:w-3/5 space-y-6">
            <p className="text-lg text-gray-700">
              I've developed a unique style that blends traditional techniques
              with contemporary themes. My work explores the intersection of
              nature, human emotion, and cultural narratives.
            </p>

            <p className="text-lg text-gray-700">
              Each painting is a journey of discovery, where colors and textures
              come together to create pieces that not only please the eye but
              also evoke deep emotional responses and contemplation.
            </p>

            <h3 className="text-xl font-semibold text-amber-800 mt-8">
              Artistic Philosophy
            </h3>
            <p className="text-gray-700">
              "Art should challenge perspectives, comfort the soul, and create
              connections between people across different backgrounds and
              experiences. I strive to create works that invite viewers to pause
              and reflect on the beauty that exists in our everyday lives."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Brush className="h-10 w-10 text-amber-600 mb-4" />
                  <h4 className="font-medium mb-2">Creative Approach</h4>
                  <p className="text-sm text-gray-600">
                    Blending traditional techniques with innovative styles
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Heart className="h-10 w-10 text-amber-600 mb-4" />
                  <h4 className="font-medium mb-2">Passion-Driven</h4>
                  <p className="text-sm text-gray-600">
                    Each artwork is created with dedication and emotional depth
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Star className="h-10 w-10 text-amber-600 mb-4" />
                  <h4 className="font-medium mb-2">Quality Focus</h4>
                  <p className="text-sm text-gray-600">
                    Using premium materials for lasting, museum-quality pieces
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
