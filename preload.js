const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  scan: (target) => ipcRenderer.invoke('scan', target)
});
