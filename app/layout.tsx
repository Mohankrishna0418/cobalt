import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata ={
  title: 'Cobalt | A Metal with Unique Properties',
  description: 'Cobalt is a versatile metal used in a variety of industries, known for its strength, corrosion resistance, and vibrant blue hue.',
  openGraph: {
    title: 'Cobalt: A Unique Metal with Diverse Uses',
    description: 'Discover the characteristics, applications, and importance of cobalt, a metal used in everything from batteries to aerospace.',
    images: [{
      url: 'https://cobalt-jade.vercel.app/og-card.png',  // Ensure this path is correct and accessible
      width: 1200,  // Consider using a larger resolution for better display on social media
      height: 630,  // Optimal for Open Graph images (aspect ratio 1.91:1)
      alt: 'A visual representation of cobalt metal'
    }]
  }
};


const RootLayout = (proes: PropsWithChildren) => {
  return (
    <html>
      <body>{proes.children}</body>
    </html>
  )
}

export default RootLayout;