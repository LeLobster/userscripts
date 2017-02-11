// PREFERENCES
    //
    // Names are very descriptive so they shouldn't require further explanation
    //
    // Booleans can be either true or false
    // Colors can be specified by their name ("red"), HEX value ("#FF0000") or RGB value ("rgb(255, 0, 0)")
    // Arrays ([]) contain multiple values enclosed in quotes (") and seperated by a comma (, )
    // 
    // GoodKeyword, OtherKeyword, NonRetailKeyword and UnwantedKeyword are case-insensitive
    // GoodUploader and UnwantedUploader are case-sensitive
    //
    // You can use this template to add highlights or hide what you don't want to see
    // Don't forget to reload the page when you're done
    //
    //
// PREFERENCES    

    // Torrent description text color
    // detDesc = 'Uploaded 08-05 15:10, Size 12.62 GiB, ULed by'
    detDescColor = "#1f2223"

    // Good torrents
    highlightGoodTor = true
    GoodHighlightColor = "#42B120CC"
    // In torrent title
    GoodKeyword = [
        "mfcorrea", "TuGAZx", "FGT",
		"WiKi", "SADPANDA", "HazMatt"
        ];    
    // ULed by
    GoodUploader = [
        "dhjudasx", "godcanjudgeme", "jalucian", "mfccorrea", 
		"vonRicht", "hazmatt69"
        ];    

    // Includes x265, web and other non-retail
    includeOther = true
    hideAllOtherInsteadOfHighlight = false
    // x265 or hevc
    affectx256 = true 
    x256Color = "#69A5CC"
    hidex265InsteadOfHighlight = false
    // OtherKeyword
    affectOther = true 
    otherColor = "#688de780"
    hideOtherInsteadOfHighlight = false
    OtherKeyword = [
        "hdrip", "webrip", "web-dl"
        ];    
    // NonRetailKeyword
    affectNonRetail = true
    NonRetailColor = "#a30101"
    hideNonRetailInsteadOfHighlight = true        
    NonRetailKeyword = [
        "cam", "hdcam", "camrip", "telesync", "ts", "hdts", "hd-ts", "hardcoded", "hc", "hdtc",
        "dvdscr", "screener", "dvdscreener", "TRUEFRENCH", "dublado", "upscale"
        ];    

    // Known unwanted uploaders or keyword found in title
    includeUnwanted = true
    affectUnwantedKeyword = true
    UnwantedHighlightColor = "#c81d1dcc"
    hideUnwantedKeywordInsteadOfHighlight = false
    // In torrent title
    UnwantedKeyword = [
        "Ganool", "AtlaN64", "rDX", "SWESUB"
        ];        
    affectUnwantedUploader = true
    UnwantedUserHighlightColor = "#8d0707cc"
    hideUnwantedUploaderInsteadOfHighlight = true
    // ULed by
    UnwantedUploader = [
        "nltrelease", "8Times993", "12watch"
        ];    

    // Hide potential fakes based on certain conditions
    affectPotentialFakes = true
    trustedTorrentsOnly = false
    maxSeedsWithoutTrust = 999
    dontHideJustHighlightPotentialFakes = true
    includeUntrustedTorrentsWithoutComments = false

    // CSS which is applied to potential fakes
    TorrentWarning = {"background" : "#ffb9b94d",
                    "background-image" : "url(warning.png)",
                    "background-position" : "85%",
                    "background-size" : "24px",
                    "background-repeat" : "no-repeat",
                    "opacity" : ".75"}