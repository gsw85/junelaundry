import { siteUrl } from "@/constant/site";

export default function metaheader(
  titleInit = "",
  descriptionInit = "",
  keywordsInit = "",
  path = "/"
) {
  const title = titleInit
    ? titleInit
    : "June Laundry";

  const description = descriptionInit
    ? descriptionInit
    : "Cleaning with Love.";

  const urlPath = siteUrl + path;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    icons: {
      icon: [
        {
          rel: "icon",
          url: "/favicon.ico",
          type: "image/x-icon",
          sizes: "any",
        },
        {
          rel: "icon",
          url: "/favicon.png",
          type: "image/png",
          sizes: "any",
        },
      ],
    },
    robots: { index: true, follow: true },
    alternates: { canonical: urlPath },
  };
}
