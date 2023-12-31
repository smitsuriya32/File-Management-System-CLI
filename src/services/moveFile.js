const fs = require("fs");

function moveFile(oldFilepath, newFilepath) {
  try {
    fs.renameSync(oldFilepath, newFilepath);
    console.log(`File moved!!`);
  } catch (error) {
    console.log("File does not exist");
  }
}

module.exports = moveFile;
