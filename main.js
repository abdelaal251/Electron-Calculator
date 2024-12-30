const { app, BrowserWindow, Menu, shell  } = require('electron')
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

    // Create a custom menu
    const menu = Menu.buildFromTemplate([
      {
        label: 'Help',
        submenu: [
          {
            label: 'Documentation',
            click: async () => {
              const repoUrl = 'https://github.com/abdelaal251/Electron-Calculator';
              shell.openExternal(repoUrl); // Open in default browser
            },
          },
          {
            label: 'Check for Updates',
            click: () => {
              const { dialog } = require('electron');
              dialog.showMessageBox(win, {
                type: 'info',
                title: 'Check for Updates',
                message: 'This feature will be implemented soon!',
              });
            },
          },
        ],
      },
    ]);
  
    // Set the custom menu
    Menu.setApplicationMenu(menu);
}
app.whenReady().then(() => {
createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
