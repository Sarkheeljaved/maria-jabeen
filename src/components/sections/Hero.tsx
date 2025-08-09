import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16 bg-gradient-to-r from-amber-50 to-orange-50"
    >
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6 md:pr-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="block">Artistic Vision</span>
            <span className="block text-amber-700">Brought to Life</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-md">
            Professional painter specializing in contemporary oil paintings,
            realistic portraits, and abstract expressionism.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-amber-700 hover:bg-amber-800 text-white px-6"
              size="lg"
            >
              View Gallery
            </Button>
            <Button
              variant="outline"
              className="border-amber-700 text-amber-700 hover:bg-amber-50 px-6"
              size="lg"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0">
          <div
            className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center"
            style={{
              background: "url(/maria-jabeen.JPG)",
              backgroundPosition: "top",
              backgroundSize:"contain",
              backgroundRepeat:"norepeat"
            }}
          >
            {/* Placeholder for artist's feature image */}
            <div className="text-center p-8 text-transparent italic">
              <p className="text-xl">Featured Artwork</p>
              <p className="text-sm mt-2">The image of the artist's most notable work would be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
