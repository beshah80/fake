import { Briefcase, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p>
              Fourth-year Information Systems student passionate about front-end
              development and building user-centric web applications.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:underline">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#education" className="hover:underline">
                  Education
                </Link>
              </li>
              <li>
                <Link href="#internships" className="hover:underline">
                  Internships
                </Link>
              </li>
              <li>
                <Link href="#certifications" className="hover:underline">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="#resume" className="hover:underline">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={20} className="mr-2" /> Addis Ababa, Ethiopia
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2" />{" "}
                <a href="tel:+251948100497" className="hover:underline">
                  +251(0)948100497
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2" />{" "}
                <a
                  href="mailto:beshah2017@gmail.com"
                  className="hover:underline"
                >
                  beshah2017@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/beshah-ashenafi-a21743367"
                target="_blank"
                className="hover:text-accent"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/beshah80"
                target="_blank"
                className="hover:text-accent"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~beshahashenafi"
                target="_blank"
                className="hover:text-accent"
              >
                <Briefcase size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>© {currentYear} Beshah Ashenafi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
