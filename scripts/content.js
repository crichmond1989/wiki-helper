function clickAll(text) {
  Array.from(document.querySelectorAll("a")).filter(x => x.textContent?.includes(text)).forEach(x => x.click());
}

chrome.runtime.onMessage.addListener(msg => {
  switch(msg){
    case "clear selection":
      return clickAll("Clear selection");
    case "uncheck all":
      return clickAll("uncheck all");
  }
});
