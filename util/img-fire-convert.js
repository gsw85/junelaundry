const urlReplace = [
  {
    has: `https://firebasestorage.googleapis.com/v0/b/nproj-nudi5.appspot.com/o`,
    replace: `https://s3.media.deepixels.co/ndev`,
  },
  {
    has: `https://firebasestorage.googleapis.com/v0/b/nproj-nudiprod.appspot.com/o`,
    replace: `https://s3.media.deepixels.co/nprod`,
  },
  {
    has: `https://customer-4uxl55dv62ex0tt1.cloudflarestream.com`,
    replace: `https://s3.media.deepixels.co/cfstream`,
  },
  {
    has: `https://imagedelivery.net/_rcIVT3taNSHudAfnOfnXg`,
    replace: `https://s3.media.deepixels.co/cfimg`,
  },
  {
    has: `https://v3.fal.media`,
    replace: `https://s3.media.deepixels.co/zoo`,
  },
];

export const urlConvert = (url) => {
  if (!url) return url;
  const match = urlReplace.find((obj) => url.includes(obj.has));
  return match ? url.replace(match.has, match.replace) : url;
};
