import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Jo humne abhi banaya

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EzyKnot Careers | Learn & Grow Professionally",
  description: "High-quality professional certification courses for your career growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0f1012] text-white antialiased`}>
        {/* Navbar hamesha top par rahega */}
        <Navbar />

        {/* Page Content yahan load hoga */}
        <main className="min-h-screen pt-20">
          {children}
        </main>

        {/* Footer Section */}
        <footer className="bg-[#1a1c1e] border-t border-gray-800 pt-16 pb-8">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              
              {/* Brand Info */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold italic">EzyKnot <span className="text-blue-500">Careers</span></h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Humara mission hai professionals ko industry-ready skills sikhana aur unke career ko nayi uchaiyon tak pahunchana.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-bold text-lg mb-6 text-blue-400">Trending Courses</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="hover:text-white cursor-pointer transition">Data Science with Python</li>
                  <li className="hover:text-white cursor-pointer transition">Cloud Computing (AWS/Azure)</li>
                  <li className="hover:text-white cursor-pointer transition">Full Stack Web Development</li>
                  <li className="hover:text-white cursor-pointer transition">Cyber Security Masterclass</li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="font-bold text-lg mb-6 text-blue-400">Company</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="hover:text-white cursor-pointer transition">About Us</li>
                  <li className="hover:text-white cursor-pointer transition">Contact Support</li>
                  <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
                  <li className="hover:text-white cursor-pointer transition">Terms & Conditions</li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="font-bold text-lg mb-6 text-blue-400">Get in Touch</h3>
                <p className="text-sm text-gray-400">Email: support@ezyknot.com</p>
                <p className="text-sm text-gray-400 mt-2 text-wrap">Location: Bihar, India</p>
                <div className="flex gap-4 mt-6">
                  {/* Social Icons Placeholder */}
                  <div className="w-8 h-8 bg-gray-800 rounded-full hover:bg-blue-600 transition cursor-pointer" />
                  <div className="w-8 h-8 bg-gray-800 rounded-full hover:bg-blue-600 transition cursor-pointer" />
                  <div className="w-8 h-8 bg-gray-800 rounded-full hover:bg-blue-600 transition cursor-pointer" />
                </div>
              </div>

            </div>

            {/* Bottom Copyright */}
            <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
              <p>© {new Date().getFullYear()} EzyKnot Careers. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}