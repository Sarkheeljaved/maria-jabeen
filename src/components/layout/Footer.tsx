import { Instagram, Facebook, Twitter, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-900 text-amber-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Maria Jabeen</h3>
            <p className="text-amber-200 mb-6 max-w-md">
              Creating unique, emotion-driven artwork that connects with viewers
              and enhances spaces with beauty and meaning.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/i_ma_ria319?igsh=emdwc205MzZ0M2Fp "
                className="text-amber-200 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/share/16cXhDCvhX/"
                className="text-amber-200 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              {/* <a
                href="#"
                className="text-amber-200 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-amber-200 hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">Youtube</span>
              </a> */}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#qualifications"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Qualifications
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-amber-200 mb-4">
              Subscribe to receive updates about new artwork, exhibitions, and
              workshops.
            </p>
            <form
              className="flex gap-2"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "300px",
              }}
            >
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-md text-gray-800 flex-grow text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                style={{width:"150px"}}
              />
              <Button type="submit" variant="secondary" size="sm">
                <Mail className="h-4 w-4 mr-1" />
                <span>Subscribe</span>
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-amber-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-amber-300 text-sm">
            © {currentYear} Maria Jabeen. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-amber-300">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
