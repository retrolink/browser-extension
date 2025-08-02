function loadPage(arrayOfTabs) {

  document.getElementById('desprotetorifr').src='http://desprotetor.com/ext.htm?u='+btoa(arrayOfTabs[0].url)+'&ext=chrome';

}

window.addEventListener('load', function(){

  try {

    if (typeof browser !== 'undefined') {
      
      browser.tabs.query({currentWindow: true, active: true}, function (tabs) {
        loadPage(tabs)
      });

      return
      
    }

    chrome.tabs.query({active: true, currentWindow: true},
      (arrayOfTabs) => { loadPage(arrayOfTabs) }
    )

  } catch(o) {}

}, false)