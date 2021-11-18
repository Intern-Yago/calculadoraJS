const {app, BrowserWindow, Tray} = require("electron")

let win

app.whenReady().then(function(){
    console.log(__dirname)
    
    win = new BrowserWindow({
        icon: __dirname+"/assets/calculadora.png",
        width: 456,
        height:264,
        fullscreen: false,
        resizable: false,
        frame:false,
    })
    win.loadFile("index.html")
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
})