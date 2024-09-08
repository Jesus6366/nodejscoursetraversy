import url from "url";

const urlString = "https://www.google.com/search?q=Hello+world";

// URL Object
const urlObj = new URL(urlString);

console.log(urlObj);
console.log(urlObj.pathname);

// format()
console.log(url.format(urlObj));

// import.meta.url
console.log(import.meta.url);
