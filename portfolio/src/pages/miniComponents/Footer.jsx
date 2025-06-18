"use client"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Phone, Calendar, MessageCircle } from "lucide-react"
import axios from "axios"


const Footer = ({user}) => {


  // You can customize these contact details
  const contactInfo = {
    phone: user.phone || "+234 8109959313",
    whatsapp: user.whatsapp || "+248109959313", // WhatsApp number without spaces/symbols
    email: user.email || "angusdev.aeworks@mail.com",
  }



  const handleBookingCall = () => {
    window.open(`tel:${contactInfo.phone}`, "_self")
  }

  const handleWhatsAppChat = () => {
    const message = encodeURIComponent("Hi! I'd like to discuss a project with you.")
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, "_blank")
  }

  const handleCalendlyBooking = () => {
    // Replace with your actual Calendly link
    window.open("https://calendly.com/angusdev-aeworks/30min", "_blank")
  }

  return (
    <footer className="mt-20 ">
      <div className="mx-auto w-full max-w-screen-xl p-5 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Dev Angus</span>
            </a>

            {/* Contact Information Section */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Get In Touch</h3>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-blue-600">
                    {contactInfo.phone}
                  </a>
                </p>
                <p className="text-gray-600 dark:text-gray-400">{contactInfo.email}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 mt-4">
                <Button onClick={handleBookingCall} variant="outline" size="sm" className="flex items-center">
                  <Phone className="w-4 h-4 mr-1" />
                  Call Now
                </Button>

                <Button onClick={handleCalendlyBooking} variant="outline" size="sm" className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Book Call
                </Button>

                <Button
                  onClick={handleWhatsAppChat}
                  variant="outline"
                  size="sm"
                  className="flex items-center bg-green-50 hover:bg-green-100 text-green-700 border-green-200"
                >
                  <MessageCircle className="w-4 h-4 mr-1" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href={process.env.DASHBOARD_URL} className="hover:underline">
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow Me</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href={user.githubURL || "#"} className="hover:underline">
                    Github
                  </a>
                </li>
                <li>
                  <a href={user.twitterURL || "#"} className="hover:underline">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <a href="#" className="hover:underline">
              Dev Angus™
            </a>
            . All Rights Reserved.
          </span>

          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {/* WhatsApp Icon */}
            <button
              onClick={handleWhatsAppChat}
              className="text-gray-500 hover:text-green-500 dark:hover:text-white mr-5"
              title="Chat on WhatsApp"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              <span className="sr-only">WhatsApp</span>
            </button>

            {/* Phone Icon */}
            <button
              onClick={handleBookingCall}
              className="text-gray-500 hover:text-blue-500 dark:hover:text-white mr-5"
              title="Call Now"
            >
              <Phone className="w-4 h-4" />
              <span className="sr-only">Phone</span>
            </button>

            {/* Existing Social Media Icons */}
            <a
              href={user.facebookURL !== "" ? user.facebookURL : "#"}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white mr-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>

            <a href={user.discordURL || "#"} className="text-gray-500 hover:text-gray-900 dark:hover:text-white mr-5">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord</span>
            </a>

            <a
              href={user.twitterURL !== "" ? user.twitterURL : "#"}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white mr-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>

            <a
              href={user.githubURL !== "" ? user.githubURL : "#"}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white mr-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>

            <a
              href={user.linkedinURL !== "" ? user.linkedinURL : "#"}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer




// import React from "react";
// import { Label } from "@/components/ui/label";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { date } from "zod";

// const TEMP_URL="https://mern-portfolio-0moh.onrender.com"





// const Footer = () => {
//     const [user, setUser] = useState({});
//     const domain = process.env.BACKEND_URL || TEMP_URL;

//     useEffect(() => {
//         const getMyProfile = async () => {
//             const { data } = await axios.get(
//                 `${domain}/api/v1/user/portfolio/me`,
//                 { withCredentials: true }
//             );
//             setUser(data.user);
//         };
//         getMyProfile();
//     }, []);


//     return (
//         <footer class="mt-20">
//             <div class="mx-auto w-full max-w-screen-xl p-5 py-6 lg:py-8">
//                 <div class="md:flex md:justify-between">
//                     <div class="mb-6 md:mb-0">
//                         <a href="https://flowbite.com/" class="flex items-center">
//                             <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Dev Angus</span>
//                         </a>
//                     </div>
//                     <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
//                         <div>
//                             <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
//                             <ul class="text-gray-500 dark:text-gray-400 font-medium">
//                                 <li class="mb-4">
//                                     <a href="#" class="hover:underline">Blog</a>
//                                 </li>
//                                 <li>
//                                     <a href={process.env.DASHBOARD_URL} class="hover:underline">dasboard</a>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow ME</h2>
//                             <ul class="text-gray-500 dark:text-gray-400 font-medium">
//                                 <li class="mb-4">
//                                     <a href="#" class="hover:underline ">Github</a>
//                                 </li>
//                                 <li>
//                                     <a href="#" class="hover:underline">Twitter</a>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
//                             <ul class="text-gray-500 dark:text-gray-400 font-medium">
//                                 <li class="mb-4">
//                                     <a href="#" class="hover:underline">Privacy Policy</a>
//                                 </li>
//                                 <li>
//                                     <a href="#" class="hover:underline">Terms &amp; Conditions</a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//                 <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
//                 <div class="sm:flex sm:items-center sm:justify-between">
//                     <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
//                     </span>
//                     <div class="flex mt-4 sm:justify-center sm:mt-0">
//                         <a href={user.facebookURL !== "" ? user.facebookURL : "#"} class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
//                             <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
//                                 <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
//                             </svg>
//                             <span class="sr-only">Facebook page</span>
//                         </a>
//                         <a href={user.discordURL} class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
//                             <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
//                                 <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
//                             </svg>
//                             <span class="sr-only">Discord</span>
//                         </a>
//                         <a href={user.twiter !=="" ? user.twitterURL : "#"} class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
//                             <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
//                                 <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
//                             </svg>
//                             <span class="sr-only">Twitter page</span>
//                         </a>
//                         <a href={user.githubURL !== ""? user.githubURL : "#"} class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
//                             <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                                 <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
//                             </svg>
//                             <span class="sr-only">GitHub account</span>
//                         </a>
//                         <a href={ user.dribbleURL !== ""? user.linkdinURL : "#"} class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
//                             <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                                 <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd" />
//                             </svg>
//                             <span class="sr-only">Drible</span>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </footer>

//     );
// };

// export default Footer;




