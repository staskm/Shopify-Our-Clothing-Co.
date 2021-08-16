import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

export function SEO({
  // title = "",
  // description = "",
  // pathname = "",
  // image = "",
  children = null,
}) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          hrefLang
          siteUrl
          siteDescription
          steTitleDefault
        }
      }
    }
  `);

  const { hrefLang, siteDescription, siteUrl, title } = siteMetadata;

  const seo = {
    title: title,
    description: siteDescription,
    url: pathname ? `${siteUrl}${pathname}` : location.href,
  };

  return (
    <Helmet title={title}>
      <html lang={hrefLang} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      {children}
      {/* Only for Demo */}
      <meta name="robots" content="noindex"></meta>
    </Helmet>
  );
}
