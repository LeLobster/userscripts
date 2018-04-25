// ==UserScript==
// @name        Hide Likes on the letterboxd activity page
// @version     1.0
// @namespace   Violentmonkey Scripts
// @author      LeLobster
// @description Hide likes on the letterboxd activity page
// @include     https://letterboxd.com/activity/
// @grant       none
// ==/UserScript==
// 
var button = document.querySelector('.load-more-activity')
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if ( mutation.removedNodes.length != 0 ) {
      var unwantedStuff = document.querySelectorAll(".activity-row.-basic");
      unwantedStuff.forEach(function(row) {
        var summary = row.querySelector(".activity-summary").innerText;
        if ( summary.search(/.*\s(liked)\s.*\s(review)\s(of).*/) == 0 ) {
          row.remove();
          console.log('Removed: \'' + summary + '\'');
        }
      }); 
    }
    // Maybe build in a check to see when all new activity is being deleted after clicking the button
    // Because right now you sometimes have to click multiple times for new non-unwanted stuff to show
    // 
    // Current amount of activity items present
    // var elementCount = document.getElementById('activity-table-body').childElementCount;
    // console.log(elementCount);
  });
});
observer.observe(button, { childList: true });
