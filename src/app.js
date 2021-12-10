//select the button and add the event listener\
document.getElementById('splitButton').addEventListener('click', () => {
	electron.openDialog();
});

renderer.receive('done', (args) => {
	console.log(args);
});
