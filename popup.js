document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'getOutline' }, (response) => {
      if (response && response.outline) {
        displayOutline(response.outline);
      } else {
        console.error('No outline received');
      }
    });
  });
});

function displayOutline(outline) {
  const outlineElement = document.getElementById('outline');
  outlineElement.innerHTML = '';  // 古いアウトラインをクリア
  outline.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `h${item.level}: ${item.text}`;
    listItem.classList.add(`indent-${item.level - 1}`);
    outlineElement.appendChild(listItem);
  });
}
