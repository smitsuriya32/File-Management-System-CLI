const fs = require("fs");

function renameFile(oldFilepath, newFilepath) {
  try {
    fs.renameSync(oldFilepath, newFilepath);
    console.log(`File renamed!!`);
  } catch (error) {
    console.log(`File not found to rename`);
  }
}

module.exports = renameFile;
