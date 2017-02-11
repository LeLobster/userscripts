# Usage

After you first install the script, a `preferences.js` file will be downloaded and placed in the same folder as the userscript. This file contains a basic template which you can expand on, and prefs which can be toggled on `true` or off `false`.  
The folder can be found in different places depending on your browser/script manager and operating system.  
With Firefox it can be found at 

WINDOWS  
* `C:\Users\<Windows login/user name>\AppData\Roaming\Mozilla\Firefox\Profiles\<profile folder>`  

LINUX  
* `~/.mozilla/firefox/<profile folder>`  

MAC  
* `~/Library/Application Support/Firefox/Profiles/<profile folder>`  
or
* `~/Library/Mozilla/Firefox/Profiles/<profile folder>`

After you've found the folder simply open the `preferences.js` file with your text editor of choice.

# preferences.js

Pref names are very descriptive so they shouldn't require further explanation.
* Booleans can be either true or false
* Colors can be specified by their name `"red"`, HEX value `"#FF0000"` or RGB value `"rgb(255, 0, 0)"`
* Arrays `[]` contain multiple values enclosed in quotes `"` and seperated by a comma `, `

`GoodKeyword`, `OtherKeyword`, `NonRetailKeyword` and `UnwantedKeyword` are case-insensitive.  
`GoodUploader` and `UnwantedUploader` are case-sensitive.


# Installation

1. If you don't have a script manager yet: for FireFox, I recommend [Greasemonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/) and for Google Chrome, [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) is the popular one. For other browsers, see [this page](http://wiki.greasespot.net/Cross-browser_userscripting).
2. Click on the filename (The_Pirate_Bay_Tweaks.user.js), wait for the new page to load, then click on the **Raw** button.
3. Your script manager will ask for permission to install the script.

# Help

I haven't tested with anything besides Greasemonkey 3.9 on Firefox, but others browsers/managers should work fine. If you run into any issues feel free to let me know.
