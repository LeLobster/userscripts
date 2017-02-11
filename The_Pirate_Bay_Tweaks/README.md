![screenshot](usage_screenshot.png)

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

By default (as can be seen in the screenshot at the top of this page) red is used for torrents which contain `UnwantedKeyword`  
Lightblue is for torrents which are `OtherKeyword`, default = web-dl related.  
Darker lightblue is for torrents which use the x265(HEVC) encoding library.  
Green is for torrents which are by your favorite uploaders or contain a keyword specified in `GoodKeyword`.  
And torrents which could potentially be a fake are marked with the `warning.png` triangle.  

This can all be changed or completely disabled inside the `preferences.js` file. If you want to hide x265 encodes simply set `hidex265InsteadOfHighlight` to `true`, if you don't want to highlight web-dl related releases toggle `affectOther` to `false` etc. etc.

Fake torrents are often by untrusted accounts, and have huge amounts of S/L shorty after they are posted. To help against this you can use `maxSeedsWithoutTrust`, any torrent which exceeds this value in seeders will be marked fake (or completely hidden if you want). Obviously there is a chance of false positives using this method but it's better than nothing.

There are a couple other things you can set in `preferences.js` so have a look and you'll be able to figure out what they're for.

# Installation

1. If you don't have a script manager yet: for FireFox, I recommend [Greasemonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/) and for Google Chrome, [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) is the popular one. For other browsers, see [this page](http://wiki.greasespot.net/Cross-browser_userscripting).
2. Click on the filename (The_Pirate_Bay_Tweaks.user.js), wait for the new page to load, then click on the **Raw** button.
3. Your script manager will ask for permission to install the script.

**ALTERNATIVE**  
This same script can be found on Greasemonkey as well  
https://greasyfork.org/en/scripts/27293-the-pirate-bay-tweaks

# Help

I haven't tested with anything besides Greasemonkey 3.9 on Firefox, but others browsers/managers should work fine. If you run into any issues feel free to let me know.
