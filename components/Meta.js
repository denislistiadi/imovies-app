import Head from "next/head";
import React from "react";

const Meta = ({ keywords, description, title }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/public/apple-touch-icon.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#374151" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "iMovies",
  keywords: "Movie app, free movies, popular movies",
  description: "Produce FILM Feature, TELEVISION and GAME",
};

export default Meta;
