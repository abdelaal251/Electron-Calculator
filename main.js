const { app, BrowserWindow } = require('electron')
const path = require('node:path')


const createWindow = () => {
    const win = new BrowserWindow({
      width: 300,
      height: 500,
      resizable: true,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: true,
        contextIsolation: false, 
        
      }
    })
    win.loadFile('index.html')
}
app.whenReady().then(() => {
createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
