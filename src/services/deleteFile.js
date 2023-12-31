const fs = require("fs");

function deleteFile(filePath) {
  try {
    fs.unlinkSync(filePath);
    console.log(`File deleted: ${filePath}`);
  } catch (error) {
    console.log(`No such file found`);
  }
}

module.exports = deleteFile;
