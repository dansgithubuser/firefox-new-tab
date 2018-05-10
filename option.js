document.querySelector('form').addEventListener('submit', (event)=>{
	browser.storage.local.set({url: document.getElementById('url').value});
});
browser.storage.local.get().then((results)=>{
	document.getElementById('url').value=results.url;
});
