const fs = require("fs");

function createDirectory(directoryPath) {
  try {
    fs.mkdirSync(directoryPath);
    console.log(`Directory created: ${directoryPath}`);
  } catch (error) {
    console.log(`No path found or enter the different name`);
  }
}

module.exports = createDirectory;
