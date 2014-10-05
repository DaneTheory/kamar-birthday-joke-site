$(window).bind("load", function() {

    
    $(document).ready(function(){

			/*
			 * Instance CirclePlayer inside jQuery doc ready
			 *
			 * CirclePlayer(jPlayerSelector, media, options)
			 *   jPlayerSelector: String - The css selector of the jPlayer div.
			 *   media: Object - The media object used in jPlayer("setMedia",media).
			 *   options: Object - The jPlayer options.
			 *
			 * Multiple instances must set the cssSelectorAncestor in the jPlayer options. Defaults to "#cp_container_1" in CirclePlayer.
			 */

			var myCirclePlayer = new CirclePlayer("#jquery_jplayer_1",
			{
				m4a:"../audio/burfday.m4a",
                oga:"../audio/burfday.ogg"
			}, {
				cssSelectorAncestor: "#cp_container_1",
                autoplay: true
			});

			
		});
    
});