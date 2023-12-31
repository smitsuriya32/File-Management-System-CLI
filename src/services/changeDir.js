const fs = require("fs");
const path = require("path");

function changedir(filePath) {
  if (filePath.includes("\\")) {
    try {
      process.chdir(filePath);
    } catch (error) {
      console.log("Not found (Kindly check the name)");
    }
    console.log(`Into the directory...${process.cwd()}`);
  } else {
    const cwd = process.cwd();
    const files = fs.readdirSync(cwd);
    if (files.includes(filePath)) {
      const changePath = path.join(cwd, filePath);
      process.chdir(changePath);
      console.log(`Into the directory...${process.cwd()}`);
    } else {
      console.log("Not found");
    }
  }
}

module.exports = changedir;
