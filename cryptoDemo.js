// cryptographic create hashes, random exadecimal etc..

import crypto from "crypto";

// create hash createHash() hash password
const hash = crypto.createHash("sha256");
hash.update("password123");
console.log(hash.digest("hex"));

// random bytes
crypto.randomBytes(16, (err, buf) => {
  if (err) {
    throw err;
  } else {
    console.log(buf.toString("hex"));
  }
});
