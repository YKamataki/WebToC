function createOutline() {
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  const outline = [];
  
  headings.forEach(heading => {
    const level = parseInt(heading.tagName[1]);
    const text = heading.textContent.trim();
    outline.push({ level, text });
  });

  return outline;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getOutline') {
    const outline = createOutline();
    sendResponse({ outline });
  }
  // sendResponseを同期的に呼び出しているため、trueを返す必要はない
});
