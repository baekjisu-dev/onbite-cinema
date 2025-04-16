// common
import Link from "next/link";

// styles
import style from "./layout.module.css";
import "./globals.css";

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
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
        {modal}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
