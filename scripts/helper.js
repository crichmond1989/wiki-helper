async function handleClick(msg) {
  await sendMsg(msg);

  window.close();
}

async function sendMsg(msg) {
  const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});

  await chrome.tabs.sendMessage(tab.id, msg);
}

document.getElementById("ClearSelection").addEventListener("click", () => handleClick("clear selection"));

document.getElementById("UncheckAll").addEventListener("click", () => handleClick("uncheck all"));
