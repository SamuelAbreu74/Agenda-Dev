import "./globals.css";
import Sidebar from "@/components/sidebar";



export const metadata = {
  title: "Agenda-Dev"
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="flex ">
        <aside>
          <Sidebar/>
        </aside>
        <main className="flex-1 bg-white max-w-screen max-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
