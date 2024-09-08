// normal import
// import fs from "fs";

// promises import
import fs from "fs/promises";

// // READ FILES NODE.JS
// // readFile() -callback asyncronous version
// fs.readFile("./test.txt", "utf8", (err, data) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log(data);
//   }
// });

// // readFileSync() - synchronous version
// const data = fs.readFileSync("./test.txt", "utf8");
// console.log(data, "Synchronous");

// // readFile() -promise .then()
// fs.readFile("./test.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// readFile() - Async/Await
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// WRITE FILE writeFile() // this will overwrite

const writeFile = async () => {
  try {
    await fs.writeFile("./test.txt", "Hello I am writing.. ");
    console.log("File written to");
  } catch (error) {
    console.log(error);
  }
};

// APPEND FILE appendFile() this will add
const appendFile = async () => {
  try {
    await fs.appendFile("./test.txt", "\nThis is appended text");
    console.log("File appended to ...");
  } catch (error) {
    console.log(error);
  }
};

writeFile();
appendFile();
readFile();
