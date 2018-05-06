// ==UserScript==
// @name Letterboxd User Ignorer
// @namespace Violentmonkey Scripts
// @match https://letterboxd.com/*
// @grant none
// ==/UserScript==

const currentUrl = window.url;
var alsoCheckForPeople = false;
runScript = false;
reviews = [];

// Prepare localStorage
if (window.localStorage.ignoredUsers == undefined) {
  window.localStorage.ignoredUsers = [];
}

// Where to get the username is dependent on which page we're on
if (currentUrl.endsWith(".com/") || currentUrl.endsWith(".com")) {
  var getThis = ".review-tile";
  runScript = true;
} else if (currentUrl.endsWith("/films/") || currentUrl.indexOf(".com/film/") != -1 || currentUrl.indexOf("/reviews/popular/") != -1) {
  var getThis = ".film-detail"; 
  alsoCheckForPeople = true;
  runScript = true;
} else if (currentUrl.indexOf("/people/") != -1) {
  var getThis = ".featured-person";
  runScript = true;
  alsoCheckForPeople = true;
} else {  
  // Do nothing
}

// We need to wait for the page to load past DOMContentLoaded
// While loop locks the browser, 100ms setInterval does the job
if (runScript) {
  var checkContent = setInterval(function() {
    // console.log("Checking for content.");
    reviews = document.querySelectorAll(getThis);

    if (reviews.length != 0) {
      // console.log("Content has loaded!");
      clearInterval(checkContent);
      cleanPage();
      // Add option to add user to ignore list on right click on the user's avatar
      document.querySelectorAll("a.avatar").forEach(function(a) {
        a.addEventListener("contextmenu", function(e) {
          var user = a.href.split("/")[3]
          e.preventDefault();
          var addToIgnore = confirm("Are you sure you want to add " + user + " to the ignore list?");
          if (addToIgnore && window.localStorage.ignoredUsers.split(",").includes(user) == false) {
            var currentUserList = window.localStorage.ignoredUsers.split(",");
            currentUserList.push(user);
            window.localStorage.ignoredUsers = currentUserList;
            console.log("'" + user + "' added to ignore list.")
            cleanPage();
          }
        });
      });
    }

  }, 100);
  runScript = false;
}

// Main function
function cleanPage() {
  if (alsoCheckForPeople) {
    
    var reviewers = document.querySelectorAll(".people-shortlist li");
    reviewers.forEach(function(r) {
      var name = r.querySelector(".follow-button-wrapper").dataset.username;
      if (window.localStorage.ignoredUsers.split(",").includes(name)) {
        r.remove();
        // console.log("Removed reviewer: " + name);
        cleanPage(reviews);
      }
    });
    
    var peopleList = document.querySelectorAll(".person-table tbody tr");
    if (peopleList != undefined) {
      peopleList.forEach(function(u) {
        var userName = u.querySelector(".table-person .avatar").href.split("/")[3];
        if (window.localStorage.ignoredUsers.split(",").includes(userName)) {
          u.remove();
          // console.log("Removed reviewer: " + name);
        }
      });
    }
  }

  reviews.forEach(function(u) {
    u.style.cssText = "position: relative !important;";
    var byUser = u.querySelector(".avatar").href.split("/")[3];
    if (window.localStorage.ignoredUsers.split(",").includes(byUser)) {
      u.remove();
      // console.log("Removed review from: " + byUser);
    }
  });  
}
