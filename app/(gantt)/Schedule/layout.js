

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { ThemeProvider } from "@/components/theme-provider"


export const metadata = {
  title: 'Zero Infinite',
  description: 'Hello world ',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
     
          <main className="flex">
        
          <div className="sticky top-0 bottom-0 h-screen  ">
            <Sidebar/>
            
          </div>
          

        <section className="w-full">
          {/* <Navbar/> */}
          <div className="p-4 ">
            {children}
          </div>
        </section>
        </main>
        
        </ThemeProvider>
     
        </body>
    </html>
  )
}