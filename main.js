browser.commands.onCommand.addListener(function(command){
	if(command=="new-tab-extension-command"){
		browser.tabs.create({url: "https://dansgithubuser.github.io/dansBookmarks/"});
	}
});
