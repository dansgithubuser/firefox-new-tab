browser.commands.onCommand.addListener(function(command){
	if(command=='new-tab-extension-command')
		browser.storage.local.get().then((results)=>{
			browser.tabs.create({url: results.url});
		});
});
