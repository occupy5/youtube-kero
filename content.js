fetch(chrome.runtime.getURL('/commentTimestamp.html')).then(r => r.text()).then(html => {
    document.body.insertAdjacentHTML('beforeend', html);
    // not using innerHTML as it would break js event listeners of the page
    const element = document.querySelector('.yk-container');
  });