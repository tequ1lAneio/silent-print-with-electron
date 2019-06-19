const {app, BrowserWindow} = require('electron')

const createWindow = () => {
	let window = new BrowserWindow({
		width: 1920,
		height: 1080,
		webPreference: true
	})
	window.loadFile('index.html')
	window.webContents.openDevTools()
	window.on('closed', () => {
		window = null
	})
	
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
	// if (process.)
})

app.on('activate', () => {
  if (window === null) {
    createWindow()
  }
})