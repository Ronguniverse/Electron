const { contextBridge, ipcRenderer } = require('electron')

// 暴露全局对象versions --官方文档
contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  // 除函数之外，我们也可以暴露变量
  ping: () => ipcRenderer.invoke('ping')
  // 暴露一个名为ping的通道,并使用()包裹以防止暴露整个ipc模块
})

// 窗口管理器
contextBridge.exposeInMainWorld('topbarCtrler',{
  min: () => ipcRenderer.send('min'),
  max: () => ipcRenderer.send('max'),
  close: () => ipcRenderer.send('close')
})
