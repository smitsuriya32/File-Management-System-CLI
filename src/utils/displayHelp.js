function displayHelp() {
  console.log("List of commands:");
  console.log("  createdir - Create a directory");
  console.log("  deletedir - Delete a directory");
  console.log("  createfile - Create a file");
  console.log("  deletefile - Delete a file");
  console.log("  listfiles - List files in a directory");
  console.log("  fileinfo - Display information about a file");
  console.log("  renamefile - Rename the file");
  console.log("  movefile - Move the file");
  console.log("  copyfile - Copy the file");
  console.log("  changedir - Change directory");
  console.log("  back - Back to the previous directory");
  console.log("  searchfile - Search the file in directory by name/extension");
  console.log("  exit - Exit the CLI");
}

module.exports = displayHelp;
