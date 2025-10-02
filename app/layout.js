import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Alicia Meyer | Portfolio",
  description:
    "Portfolio de Alicia Meyer, UX & UI designer orientée Reaserch UX.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={dm.className}>{children}</body>
    </html>
  );
}
