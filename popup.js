document.querySelector('.button').addEventListener('click', function() {
    chrome.storage.sync.set({
      enabled: true
    }, function() {
      alert('Phishing protection has been enabled.');
      window.close();
    });
  });
  