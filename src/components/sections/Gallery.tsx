import { useState } from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Sample artwork data - would be replaced with actual artwork images
  const artworks = [
    {
      title: "Autumn Reflections",
      category: "Landscape",
      year: "2023",
      description: "Oil on canvas, 36 × 48 inches",
      img: "/paining-1",
    },
    {
      title: "Portrait of Serenity",
      category: "Portrait",
      year: "2022",
      description: "Oil on canvas, 24 × 30 inches",
      img: "/paining-2",
    },
    {
      title: "Urban Abstract #5",
      category: "Abstract",
      year: "2022",
      description: "Mixed media, 40 × 40 inches",
      img: "/paining-3",
    },
    {
      title: "Coastal Dreams",
      category: "Landscape",
      year: "2021",
      description: "Oil on canvas, 30 × 40 inches",
      img: "/paining-4",
    },
    {
      title: "Contemplation",
      category: "Portrait",
      year: "2021",
      description: "Oil on canvas, 20 × 24 inches",
      img: "/paining-5",
    },
    {
      title: "Symphony in Red",
      category: "Abstract",
      year: "2020",
      description: "Acrylic on canvas, 36 × 48 inches",
      img: "/paining-6",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto mb-6"></div>
          <p className="color">
            A selection of my most representative works from various periods and
            styles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork, index) => (
            <Card
              key={index}
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedImage(index)}
            >
              <div
                className={`aspect-[3/4] bg-gradient-to-br  flex flex-col justify-end p-6`}
                style={{
                  background: `url(/painting-${index + 1}.jpg)`,
                  backgroundPosition: "top",
                  backgroundSize: "contain",
                  backgroundRepeat: "norepeat",
                }}
              >
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="font-bold text-lg">{artwork.title}</h3>
                  <p className="text-amber-700">
                    {artwork.category} • {artwork.year}
                  </p>
                  <p className="text-sm color mt-1">
                    {artwork.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* <div className="flex justify-center mt-12">
          <Button className="bg-amber-700 hover:bg-amber-800">
            View Full Collection <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div> */}

        {/* Image Preview Dialog */}
        {selectedImage !== null && (
          <Dialog
            open={selectedImage !== null}
            onOpenChange={() => setSelectedImage(null)}
          >
            <DialogContent
              className="max-w-4xl w-[90vw]"
              style={{ height: "95vh", overflowY: "scroll" }}
            >
              <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DialogClose>

              <div className="p-2">
                <div
                  className={` rounded-lg`}
                  style={{
                    width: "100%",
                    position: "relative",
                    zIndex: "2",
                    display:"flex",
                    justifyContent:"center"
                  }}
                >
                  <img
                    src={`/painting-${selectedImage + 1}.jpg`}
                    width="80%"
                    alt=""
                    className=""
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-2xl font-bold">
                    {artworks[selectedImage]?.title}
                  </h3>
                  <p className="text-lg text-amber-700">
                    {artworks[selectedImage]?.category} •{" "}
                    {artworks[selectedImage]?.year}
                  </p>
                  <p className="mt-2 color">
                    {artworks[selectedImage]?.description}
                  </p>
                  <p className="mt-4 color">
                    This piece explores themes of nature and human connection.
                    The composition balances warm and cool tones to create a
                    sense of harmony, while the brushwork adds texture and
                    movement to the scene.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
}
