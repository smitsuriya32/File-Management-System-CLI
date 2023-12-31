const fs = require("fs");

function listFiles(directoryPath) {
  try {
    const files = fs.readdirSync(directoryPath);
    if (files.length > 0) {
      console.log(`Files in ${directoryPath}:`);
      files.forEach((file) => console.log(file));
    } else {
      console.log(`Directory is empty (use 'createfile' to create a file)`);
    }
  } catch (error) {
    console.log(`Please enter a valid path`);
  }
}

module.exports = listFiles;
