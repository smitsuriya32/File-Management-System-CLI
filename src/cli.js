const prompt = require("prompt-sync")();
const path = require("path");

const createDirectory = require("./services/createDir");
const deleteDirectory = require("./services/deleteDir");
const createFile = require("./services/createFile");
const deleteFile = require("./services/deleteFile");
const listFiles = require("./services/listFiles");
const displayFileInfo = require("./services/fileInfo");
const renameFile = require("./services/renameFile");
const moveFile = require("./services/moveFile");
const copyFile = require("./services/copyFile");
const changedir = require("./services/changeDir");
const backword = require("./services/backword");
const searchFile = require("./services/searchFile");
const displayHelp = require("./utils/displayHelp");

class CLI {
  static start() {
    console.log("Welcome to File Management System CLI");

    while (true) {
      const command = prompt("Enter a command (help for list of commands): ");

      switch (command.toLowerCase()) {
        case "help":
          this.displayHelp();
          break;
        case "createdir":
          this.createDirectory();
          break;
        case "deletedir":
          this.deleteDirectory();
          break;
        case "createfile":
          this.createFile();
          break;
        case "deletefile":
          this.deleteFile();
          break;
        case "listfiles":
          this.listFiles();
          break;
        case "fileinfo":
          this.fileInfo();
          break;
        case "renamefile":
          this.renameFile();
          break;
        case "movefile":
          this.moveFile();
          break;
        case "copyfile":
          this.copyFile();
          break;
        case "changedir":
          this.changeDir();
          break;
        case "back":
          this.backward();
          break;
        case "searchfile":
          this.searchFile();
          break;
        case "exit":
          console.log("Exiting File Management System CLI. Goodbye!");
          process.exit(0);
        default:
          console.log('Invalid command. Type "help" for a list of commands.');
      }
    }
  }

  static displayHelp() {
    displayHelp();
  }

  static createDirectory() {
    const dirName = prompt("Enter directory name: ");
    let currentDir = process.cwd();
    let currentPath = path.join(currentDir, dirName);
    createDirectory(currentPath);
  }

  static deleteDirectory() {
    const dirName = prompt("Enter directory name: ");
    let currentDir = process.cwd();
    let currentPath = path.join(currentDir, dirName);
    deleteDirectory(currentPath);
  }

  static createFile() {
    const fileName = prompt("Enter file name: ");
    const content = prompt("Enter file content (optional): ");
    let currentDir = process.cwd();
    let currentPath = path.join(currentDir, fileName);
    createFile(currentPath, content);
  }

  static deleteFile() {
    const fileName = prompt("Enter file name: ");
    let currentDir = process.cwd();
    let currentPath = path.join(currentDir, fileName);
    deleteFile(currentPath);
  }

  static listFiles() {
    let currentPath = process.cwd();
    listFiles(currentPath);
  }

  static fileInfo() {
    const fileName = prompt("Enter file/dir name: ");
    let currentDir = process.cwd();
    let currentPath = path.join(currentDir, fileName);
    displayFileInfo(currentPath);
  }

  static renameFile() {
    const oldFilename = prompt("Enter old name: ");
    const newFilename = prompt("Enter new name: ");
    let oldFilepath = path.join(process.cwd(), oldFilename);
    let newFilepath = path.join(process.cwd(), newFilename);
    renameFile(oldFilepath, newFilepath);
  }

  static moveFile() {
    const oldFilepath = prompt("Enter old path (including filename): ");
    const newFilepath = prompt("Enter new path (including filename): ");
    moveFile(oldFilepath, newFilepath);
  }

  static copyFile() {
    const oldFilepath = prompt("Enter old path: ");
    const newFilepath = prompt("Enter new path: ");
    copyFile(oldFilepath, newFilepath);
  }

  static changeDir() {
    const filePath = prompt("Enter file path/name: ");
    changedir(filePath);
  }

  static backward() {
    backword();
  }

  static searchFile() {
    const name = prompt("Enter file name/extension: ");
    searchFile(process.cwd(), name);
  }
}

CLI.start();
