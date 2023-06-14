import "@styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css"
import { Content, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OnebitFlix",
  description: "Tenha acesso aos melhores conteúdos de programação de uma forma simples e fácil",
  openGraph: {
  title:"OnebitFlix",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
