import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) {
      console.error("Form reference is not available");
      return;
    }

    emailjs
      .sendForm(
        "service_bpyxznr",
        "template_3tqgshf",
        form.current,
        "97TlwddoxOxUzMYkM"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Interested in commissioning a painting or have questions about my
            work? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6 space-y-6">
                <h3 className="text-xl font-semibold">Contact Information</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-amber-700 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm text-gray-500">Email</p>
                      <p className="text-gray-800">mariaJabeen@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-amber-700 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm text-gray-500">Phone</p>
                      <p className="text-gray-800">(+92) 3242446908</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-amber-700 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm text-gray-500">
                        Karachi
                      </p>
                      <p className="text-gray-800">Pakistan</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-amber-700 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm text-gray-500">
                        Studio Hours
                      </p>
                      <p className="text-gray-800">Mon-Fri: 10am - 6pm</p>
                      <p className="text-gray-800">Weekends: By appointment</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div>
              <h3 className="text-xl font-semibold mb-4">Commission Process</h3>
              <ol className="space-y-4 text-gray-700">
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold mr-3">
                    1
                  </div>
                  <div>
                    <p className="font-medium">Initial Consultation</p>
                    <p className="text-gray-600 text-sm">
                      We'll discuss your vision, requirements, and preferences
                      for the artwork.
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold mr-3">
                    2
                  </div>
                  <div>
                    <p className="font-medium">Concept and Proposal</p>
                    <p className="text-gray-600 text-sm">
                      I'll provide sketches or digital mockups along with a
                      formal quote.
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold mr-3">
                    3
                  </div>
                  <div>
                    <p className="font-medium">Creation</p>
                    <p className="text-gray-600 text-sm">
                      With your approval, I'll begin working on the commissioned
                      piece.
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold mr-3">
                    4
                  </div>
                  <div>
                    <p className="font-medium">Delivery</p>
                    <p className="text-gray-600 text-sm">
                      Once complete, your artwork will be professionally
                      packaged and delivered.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        className="border-amber-200 focus:border-amber-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email address"
                        className="border-amber-200 focus:border-amber-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-gray-700"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      className="border-amber-200 focus:border-amber-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      className="min-h-[150px] border-amber-200 focus:border-amber-500"
                      required
                    />
                  </div>

                  <div>
                    <Button
                      type="submit"
                      className="w-full bg-amber-700 hover:bg-amber-800"
                    >
                      Send Message
                    </Button>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      I typically respond within 1-2 business days.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
