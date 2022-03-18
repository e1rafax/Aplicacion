(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    jQuery.extend(jimUtil, {
        "loadScrollBars": function() {
            jQuery(".s-6874d38d-eb89-4dc9-b61d-9cbeb7d88d8d .ui-page").overscroll({ showThumbs:true, direction:'multi', roundCorners:false, backgroundColor:'#333333', opacity:'0.7', thickness:'4'});
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .ui-page").overscroll({ showThumbs:true, direction:'multi', roundCorners:false, backgroundColor:'#333333', opacity:'0.7', thickness:'4'});
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);