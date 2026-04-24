import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Gohil Infotech Private Limited | Smart IT Solutions for Growing Businesses",
  description: "Gohil Infotech provides software development, HRMS, CRM, POS, ERP & complete digital solutions for businesses in Gujarat & worldwide.",
  keywords: "IT company Ahmedabad, software development Gujarat, HRMS, CRM, POS, ERP",
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: "Gohil Infotech Private Limited",
    description: "Smart IT Solutions for Growing Businesses – software, apps, CRM, POS, ERP & automation.",
    images: ["/gipl-og.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gohil Infotech Private Limited",
    description: "Smart IT Solutions for Growing Businesses",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
