const fs = require("fs");
const path = require("path");

function searchFile(directoryPath, searchTerm) {
  try {
    const files = fs.readdirSync(directoryPath);

    const matchingFiles = files.filter((file) => {
      const fileName = path.basename(file).toLowerCase();
      const fileExtension = path.extname(file).toLowerCase().substring(1);

      return fileName.includes(searchTerm) || fileExtension === searchTerm;
    });

    if (matchingFiles.length > 0) {
      console.log("\nMatching Files:");
      matchingFiles.forEach((file) => console.log(file));
    } else {
      console.log(`No files found matching the search term: ${searchTerm}`);
    }
  } catch (err) {
    console.error("Error reading directory:", err);
  }
}

module.exports = searchFile;
