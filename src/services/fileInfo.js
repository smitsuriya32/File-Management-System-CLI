const fs = require("fs");

function displayFileInfo(filePath) {
  try {
    const stats = fs.statSync(filePath);
    console.log(`File Information for ${filePath}:`);
    console.log(`Size: ${stats.size} bytes`);
    console.log(`Permissions: ${stats.mode.toString(8).slice(-3)}`);
    console.log(`Created At: ${stats.birthtime}`);
  } catch (error) {
    console.log(`File does not exist`);
  }
}

module.exports = displayFileInfo;
