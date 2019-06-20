const { app, BrowserWindow, ipcMain } = require('electron')

const createWindow = () => {
    let window = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreference: true
    })
    // window.loadFile('http://173.100.1.70:8080')
    window.loadFile('index.html')
    window.webContents.openDevTools()
    window.on('closed', () => {
        window = null
    })

}

ipcMain.on('getPrinterList', (event) => {
    //在主线程中获取打印机列表
    const list = mainWindow.webContents.getPrinters();
    //通过webContents发送事件到渲染线程，同时将打印机列表也传过去
    mainWindow.webContents.send('getPrinterList', list);
});

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    // if (process.)
})

app.on('activate', () => {
    if (window === null) {
        createWindow()
    }
})