const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

const createWindow = () => {
    let window = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            javascript: true,
            plugins: true,
            webSecurity: false,
            preload: path.join(__dirname, './client/dist/rederer.js') // 但预加载的 js 文件内仍可以使用 Nodejs 的 API
        }

    })
    window.loadURL('http://127.0.0.1:9000')
    // window.loadFile('index.html')
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