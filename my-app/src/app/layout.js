import "./globals.css";

export const metadata = {
  title: "Site React",
  description: "Atividade de Front-End",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}