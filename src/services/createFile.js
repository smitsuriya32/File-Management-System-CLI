const fs = require("fs");

function createFile(filePath, content = "") {
  try {
    fs.writeFileSync(filePath, content);
    console.log(`File created: ${filePath}`);
  } catch (error) {
    console.log(`Please enter a valid path`);
  }
}

module.exports = createFile;
