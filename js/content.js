chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "insertText") {
    const activeElement = document.activeElement;
    if (activeElement && (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA" || activeElement.isContentEditable)) {
      const text = request.text;
      if (activeElement.isContentEditable) {
        document.execCommand("insertText", false, text);
      } else {
        const start = activeElement.selectionStart;
        const end = activeElement.selectionEnd;
        const val = activeElement.value;
        activeElement.value = val.slice(0, start) + text + val.slice(end);
        activeElement.selectionStart = activeElement.selectionEnd = start + text.length;
      }
      sendResponse({success: true});
    } else {
      sendResponse({success: false, error: "No focused input found"});
    }
  }
  return true;
});
