import './globals.css'

export const metadata = {
  title: 'Wild Oasis',
  description: 'Demo project for LR15'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-primary-900 text-primary-50 p-6">
        {children}
      </body>
    </html>
  )
}
