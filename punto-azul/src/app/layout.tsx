
export const metadata = {
  title: "Punto Azul",
  description: "Punto Azul Next.js app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
