function handleCreated(tab){
  console.log('hello '+tab.id);
}

browser.tabs.onCreated.addListener(handleCreated);
