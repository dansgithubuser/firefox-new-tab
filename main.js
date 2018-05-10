document.getElementById('key_quitApplication').remove();
document.getElementById('key_closeWindow').remove();
browser.commands.onCommand.addListener(function(command){
	if(command=='new-tab-extension-command')
		browser.storage.local.get().then((results)=>{
			browser.tabs.create({url: results.url});
		});
});
