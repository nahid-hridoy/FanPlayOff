(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        /* MOBILE DETECTION */
        var is_mobile = ((/Mobile|Android|iPhone|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera) ? true : false);

        /* BROWSER WINDOW DETECTION */
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        if (is_mobile || (w < 767)) {
            var ps8 = new PerfectScrollbar('.players-table tbody');
            var ps9 = new PerfectScrollbar('.draft-summary-table tbody');
            var ps10 = new PerfectScrollbar('.pick-history-table tbody');
            
        }



        var ps8 = new PerfectScrollbar('.players-table tbody');
        var ps9 = new PerfectScrollbar('.draft-summary-table tbody');
        var ps10 = new PerfectScrollbar('.pick-history-table tbody');

    });

    jQuery(window).load(function ($) {

    });
})(jQuery);