export const metadata = {
  title: 'ICEEM - Innovation & Excellence',
  description: 'ICEEM Tunisia - Your partner for business innovation and excellence',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
