const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
	openDialog: () => {
		ipcRenderer.send('open-dialog');
	},
});

ipcRenderer.on('done', (event, message) => {
	console.log(message);
});
