function backword() {
  try {
    let currentPath = process.cwd();
    const lastIndex = currentPath.lastIndexOf("\\");
    let backPath = currentPath.substring(0, lastIndex);
    process.chdir(backPath);
    console.log(`Into the directory...${process.cwd()}`);
  } catch (error) {
    console.log(`No directory at backside`);
  }
}

module.exports = backword;
