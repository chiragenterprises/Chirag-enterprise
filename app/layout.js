// import localFont from "next/font/local";
// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import WhatsAppBtn from "./components/WhatsAppBtn";
// import favicon from '../public/favicon.ico'

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata = {
//   metadataBase: new URL("https://chiragepoxy.com"),
//   title: {
//     default: "Chirag Epoxy Palghar",
//     template: `%s | Chirag Epoxy - Flooring Experts in Palghar`,
//   },
//   keywords:
//     "epoxy flooring Palghar, epoxy services Palghar, Chirag Epoxy, chirag enterprises palghar ,best epoxy palghar,best epxoy near palghar , best expoxy in palghar , best expoxy service near mumbai, flooring solutions Palghar",
//   description:
//     "Learn about Chirag Epoxy, your trusted partner for epoxy and flooring solutions in Palghar. Excellence in service and customer satisfaction.",
//   openGraph: {
//     description:
//       "Learn about Chirag Epoxy, your trusted partner for epoxy and flooring solutions in Palghar. Excellence in service and customer satisfaction.",
//   },
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon.ico",
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="icon" href="/favicon.ico" />
//       </head>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <Navbar />
//         <div className=" mt-[50px]">
//           <WhatsAppBtn />
//         </div>
//         {children}

//         <Footer />
//       </body>
//     </html>
//   );
// }

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppBtn from "./components/WhatsAppBtn";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL("https://chiragepoxy.com"),
  title: {
    default: "Chirag Epoxy and Flooring Palghar",
    template: `%s | Palghar Epoxy and Flooring Service`,
  },
  description:
    "Chirag Epoxy, your trusted partner for epoxy and flooring solutions in Palghar. Excellence in service and customer satisfaction.",
  keywords:
    "epoxy flooring Palghar, epoxy services Palghar, Chirag Epoxy, chirag enterprises palghar ,best epoxy palghar,best epxoy near palghar , best expoxy in palghar , best expoxy service near mumbai, flooring solutions Palghar",
  openGraph: {
    description:
      "Learn about Chirag Epoxy, your trusted partner for epoxy and flooring solutions in Palghar. Excellence in service and customer satisfaction.",
  },

  // title: "Chirag Enterprise",
  // description:
  //   "Learn about Chirag Epoxy, your trusted partner for epoxy and flooring solutions in Palghar. Excellence in service and customer satisfaction.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className=" mt-[50px]">
          <WhatsAppBtn />
        </div>
        {children}

        <Footer />
      </body>
    </html>
  );
}
