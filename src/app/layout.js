import StyledComponentsRegistry from "./registry";

export const metadata = {
  title: "Andrew Puig | Senior Software Engineer",
  description:
    "With over seven years of professional experience in web development, I am a senior full-stack engineer at Thinx, a leading online platform for menstrual health and wellness. I use JAMstack, Node.js, and Next.js to create fast, secure, and scalable web solutions that deliver a great user experience and drive business growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.png" />
        <link rel="stylesheet" href="https://use.typekit.net/tng0nam.css" />
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
