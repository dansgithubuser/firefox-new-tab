function handleCreated(tab){
	browser.tabs.update(tab.id, {url: 'https://dansgithubuser.github.io/dansBookmarks'});
}

browser.tabs.onCreated.addListener(handleCreated);
