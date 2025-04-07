// common
import Link from "next/link";

// styles
import style from "./layout.module.css";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header>
            <Link href="/">ONBITE CINEMA</Link>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
