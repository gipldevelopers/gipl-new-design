import { Poppins } from "next/font/google";
import "../globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Admin Panel | Gohil Infotech",
  description: "Admin dashboard for managing contact messages",
};

export default function AdminLayout({ children }) {
  return children;
}
