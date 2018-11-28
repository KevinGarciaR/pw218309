//Load electron
const app = require('electron').app;
//Create OS Windows
const BrowserWindow = require('electron').BrowserWindow;
//OS file system path
const path = require('path');
const url = require('url');

//Constants to print PDF
const electron = require('electron');
//File System
const fs = require('fs')
//OS
const os = require('os')
//To declare a remote function
//IPC = Internal Procedure Call
const ipc = electron.ipcMain;
//Access to the terminal or command console
const shell = electron.shell;


//Another way of declaring a constant
//Main Window
let MainWindow;

function showMainWindow(){
	//Create an empty window
	MainWindow = new BrowserWindow({width : 1080, height : 640});
	//Load the content of the page
	MainWindow.loadURL(url.format({
		pathname : path.join(__dirname, 'index.html'),
		protocol : 'file',
		slashes  : true
	}))
	//Show Main Window
	MainWindow.show();
}

//Event for PDF (Declaration)
ipc.on('print-to-pdf', function(event){
	const pdfPath = path.join(os.tmpdir(), 'print.pdf')
	const win = BrowserWindow.fromWebContents(event.sender)
	win.webContents.printToPDF({}, function(error, data){
		if(error) throw error
		fs.writeFile(pdfPath, data, function(error){
			if(error) throw error
			shell.openExternal('file://' + pdfPath)
		})
	})
})

app.on('ready', showMainWindow);
