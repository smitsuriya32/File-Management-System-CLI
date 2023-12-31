const fs = require("fs");

function copyFile(oldFilepath, newFilepath) {
  try {
    fs.copyFileSync(oldFilepath, newFilepath);
    console.log(`File copied!!`);
  } catch (error) {
    console.log(`File not found`);
  }
}

module.exports = copyFile;
