// ==UserScript==
// @name         The Pirate Bay Tweaks
// @description  Hides unwanted torrents and adds colored highlights
// @author       Fork by Lelobster, original script by nicobelic (greasyfork.org/scripts/21980), 
// @namespace    https://github.com/LeLobster/userscripts/
// @icon         https://raw.githubusercontent.com/LeLobster/userscripts/master/The_Pirate_Bay_Tweaks/icon.png
// @require      https://raw.githubusercontent.com/LeLobster/userscripts/master/The_Pirate_Bay_Tweaks/preferences.js
// @locale       English
// @version      1.7
// @grant        none
// @include      https://thepiratebay.org/search/*	
// @include      https://thepiratebay.org/browse/*	
// @include      https://thepiratebay.org/user/*	
// @include      https://thepiratebay.org/recent
// @include      https://thepiratebay.org/recent/*
// ==/UserScript==
	
(function() {
	
// PREFERENCES

	// Configurable preferences can be found in the preferences.js file
	
// ACTUAL SCRIPT
// no need to modify anything here
// unless you want to change something
// and know what you're doing

	
	$('td .detDesc').css('color', detDescColor);

	if (highlightGoodTor == true) {
		$('#searchResult tbody tr').each(function( index ) {
			torrentTitle = $(this).find('td .detLink').text().search(
				new RegExp('\\b' + GoodKeyword.join('\\b|\\b') + '\\b'));
			userName = $(this).find('td .detDesc').text().search(
				new RegExp(GoodUploader.join('|')));
			if (torrentTitle != -1 || userName != -1) {
				$(this).css('background', GoodHighlightColor);
			}
		});
	}	
	
	if (includeOther == true) {
		$('#searchResult tbody tr').each(function( index ) {
			torrentTitle = $(this).find('td .detLink').text();
			if (hideAllOtherInsteadOfHighlight == true) {
				$(this).hide();
			} else			
				if (affectOther == true) {
					if (torrentTitle.search(
						new RegExp('\\b' + OtherKeyword.join('\\b|\\b') + '\\b', 'i')) != -1) {
						if (hideOtherInsteadOfHighlight == true) {
							$(this).hide();
						} else
							$(this).css('background', otherColor);
					}
				}
				if (affectx256 == true) {
					if (torrentTitle.search(
						new RegExp(/\bx265\b|\bHEVC\b|\bH265\b|\bH.265\b/ig)) != -1) {
						if (hidex265InsteadOfHighlight == true) {
							$(this).hide();
						} else						
							$(this).css('background', x256Color);
					}
				}
				if (affectNonRetail == true) {
					nonRetailTorrent = torrentTitle.search(
						new RegExp('\\b' + NonRetailKeyword.join('\\b|\\b') + '\\b', 'i'));
					if (hideNonRetailInsteadOfHighlight == true) {
						if (nonRetailTorrent != -1) {
							$(this).hide();
						}
					} else
						if (nonRetailTorrent != -1) {
							$(this).css('background', NonRetailColor);
						}
				}
		});
	}	
	
	if (includeUnwanted == true) {
		$('#searchResult tbody tr').each(function( index ) {
			torrentTitle = $(this).find('td .detLink').text();			
			if (affectUnwantedKeyword == true) {
				unwantedTorrent = torrentTitle.search(
					new RegExp('\\b' + UnwantedKeyword.join('\\b|\\b') + '\\b'));
				if (hideUnwantedKeywordInsteadOfHighlight == true) {
					if (unwantedTorrent != -1) {
						$(this).hide();
					}
				} else
					if (unwantedTorrent != -1) {
						$(this).css('background', UnwantedHighlightColor);
					}
			}
			userName = $(this).find('td .detDesc').text();
			if (affectUnwantedUploader == true) {
				unwantedUser = userName.search(
					new RegExp(UnwantedUploader.join('|')));
				if (hideUnwantedUploaderInsteadOfHighlight == true) {
					if (unwantedUser != -1) {
						$(this).hide();
					}
				} else
					if (unwantedUser != -1) {
						$(this).css('background', UnwantedUserHighlightColor);
					}
			}
		});
	}		
		
	if (affectPotentialFakes == true) {
		$('#searchResult tbody tr:not(:has(img[title="VIP"],img[title="Trusted"],\
		img[title="Moderator"],img[title="Helper"],td[style="text-align:center;"]))').each(function( index ) {
			if (trustedTorrentsOnly == true) {
				$(this).hide();}
			else {
				if (includeUntrustedTorrentsWithoutComments == true) {
					torrentSeeds = Number( $(this).children('td:nth-child(3)').text() );
					if ( (torrentSeeds >= maxSeedsWithoutTrust) || ( 
						$(this).has("img[src='//thepiratebay.org/static/img/icon_comment.gif']").length == 0) )  {
						if (dontHideJustHighlightPotentialFakes == true) {
							$(this).css(TorrentWarning);
						} else
							$(this).hide();	
					}
				} else {
					torrentSeeds = Number( $(this).children('td:nth-child(3)').text() );
					if (torrentSeeds >= maxSeedsWithoutTrust) {
						if (dontHideJustHighlightPotentialFakes == true) {
							$(this).css(TorrentWarning);
						} else
							$(this).hide();	
					}
				}
			}
		});	
	};	
})();
