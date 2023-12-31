const fs = require("fs");

function deleteDirectory(directoryPath) {
  try {
    fs.rmdirSync(directoryPath, { recursive: true });
    console.log(`Directory deleted: ${directoryPath}`);
  } catch (error) {
    console.log(`No such directory found`);
  }
}

module.exports = deleteDirectory;
