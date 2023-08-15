// 引入 electron模块
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

// 引入 fs模块 (来自Node)
const fs = require('fs')

// 应用准备好时
app.whenReady().then(() => {

    console.log('main.js运转正常');

    createWindow(); // 创建窗口

    Handler();  // 处理来自渲染器对ping通道的调用(官方文档)

})
// 应用窗口全部关闭时
app.on('window-all-closed', () => {

    console.log('app:', '全部窗口关闭');

    app.quit();

})

function createWindow() {

    win = new BrowserWindow({
        title: '主窗口',
        icon: 'res/img/Anya.ico',
        width: 1600,
        height: 800,
        transparent: true, // 界面透明
        frame: false, // 可选，去掉窗口边框
        autoHideMenuBar: true, // 隐藏菜单栏
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            // __dirname 字符串指向当前正在执行的脚本的路径(在本例中，它指向你的项目的根文件夹)。
            // path.join API 将多个路径联结在一起，创建一个跨平台的路径字符串。
            nodeIntegration: true,
        }
    })

    // 加载主窗口
    win.loadFile('index.html')

    // 当主窗口关闭时
    win.on('close', () => {
        console.log('win:关闭')
    })
}

function Handler() {

    /**
     * script/renderer.js
     */
    ipcMain.handle('ping', () => {
        return 'ping返回成功';
    });

    /**
     * script/topbarCtrler.js
     */
    ipcMain.on('min', () => {
        win.minimize();
        console.log('最小化');
    });

    ipcMain.on('max', () => {
        if (win.isMaximized()) {
            win.unmaximize(); console.log('缩小');
        }
        else {
            win.maximize(); console.log('最大化');
        }
    });

    ipcMain.on('close', () => {
        win.close()
        console.log('关闭');
    });

}


