
import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Yeamim Hossain Sajid",
    "url": "https://yourdomain.com",
    "sameAs": [
      "https://github.com/yourusername",
      "https://linkedin.com/in/yourusername",
      "mailto:youremail@example.com"
    ],
    "jobTitle": "Full Stack Developer",
    "description": "I'm a passionate developer specializing in crafting clean, modern, and performant web applications.",
    "image": "https://yourdomain.com/profile-photo.jpg"
  };

  return (
    <>
      <Helmet>
        <title>Yeamim Hossain Sajid | Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Yeamim Hossain Sajid - Full Stack Developer crafting clean, modern, and performant web applications."
        />
        <meta
          name="keywords"
          content="Yeamim Hossain Sajid, Sajid, Full Stack Developer, Web Developer, React Developer, Portfolio, Software Engineer"
        />
        <meta name="author" content="Yeamim Hossain Sajid" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourdomain.com" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Yeamim Hossain Sajid | Full Stack Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Portfolio of Yeamim Hossain Sajid - Full Stack Developer crafting clean, modern, and performant web applications."
        />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Yeamim Hossain Sajid | Full Stack Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Portfolio of Yeamim Hossain Sajid - Full Stack Developer crafting clean, modern, and performant web applications."
        />
        <meta name="twitter:image" content="https://yourdomain.com/twitter-image.jpg" />
      </Helmet>

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
};

export default SEO;
