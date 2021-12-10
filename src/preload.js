const { contextBridge, ipcRenderer } = require('electron');
const { NonFullScreenPageMode } = require('pdf-lib');

contextBridge.exposeInMainWorld('electron', {
	openDialog: () => {
		ipcRenderer.send('open-dialog');
	},
});

contextBridge.exposeInMainWorld('renderer', {
	send: (channel, data = None) => ipcRenderer.send(channel, data),
	receive: (channel, func) =>
		ipcRenderer.on(channel, (event, ...args) => func(args)),
});
