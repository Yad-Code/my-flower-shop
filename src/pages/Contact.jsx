import { Mail, Instagram, Facebook, Phone, Sparkles } from "lucide-react";
import Card from "../components/ui/Card";

export default function Contact() {
  const contacts = [
    {
      icon: <Mail size={22} />,
      title: "Email",
      link: "hello@floral.com",
      detail: "Send us a message anytime",
    },
    {
      icon: <Instagram size={22} />,
      title: "Instagram",
      link: "doubleadesignn",
      detail: "Follow our latest blooms",
    },
    {
      icon: <Facebook size={22} />,
      title: "Facebook",
      link: "Double A Design",
      detail: "Follow us for updates",
    },
    {
      icon: <Phone size={22} />,
      title: "Phone",
      link: "+964 772 123 4567",
      detail: "Sat-Fri, 9am - 12pm",
    },
  ];

  const customItems = [
    "Weddings and bridal bouquets",
    "Baby showers and nursery decor",
    "Home and event decorations",
    "Corporate gifts and events",
    "Memorial and sympathy arrangements",
  ];

  return (
    <div className="bg-[#FFF8F9] min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl md:text-7xl font-serif text-rose-950">
            Get In <span className="italic text-rose-500">Touch</span>
          </h1>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-20">
          {contacts.slice(0, 3).map((contact, index) => (
            <div key={index} className="md:col-span-2">
              <Card {...contact} />
            </div>
          ))}
          <div className="md:col-start-3 md:col-span-2">
            <Card {...contacts[3]} />
          </div>
        </div>

        {/* Custom Orders - Simple Vertical Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] border border-rose-100 p-10 md:p-16 shadow-sm shadow-rose-100">
          <div className="flex flex-col space-y-8">
            {/* 1. Header & Intro */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-rose-500 justify-center" >
                <h2 className="text-3xl md:text-4xl font-serif text-rose-950">
                  Custom Orders Welcome
                </h2>
              </div>
              <p className="text-rose-900/70 leading-relaxed max-w-2xl">
                We offer custom handmade flower arrangements for special
                occasions including:
              </p>
            </div>

            {/* 2. List - Vertical Flow */}
            <ul className="space-y-4 border-l-2 border-rose-50 pl-6">
              {customItems.map((item, i) => (
                <li
                  key={i}
                  className="text-rose-800 text-sm md:text-base font-medium flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-300" />
                  {item}
                </li>
              ))}
            </ul>

            {/* 3. Closing Text */}
            <p className="text-rose-900/70 pt-4 leading-loose">
              <span className="text-rose-500 font-bold border-b-2 border-rose-100 pb-1">
                Contact us
              </span>{" "}
              to discuss your vision and we'll create something special just for
              you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
