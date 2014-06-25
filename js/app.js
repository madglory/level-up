$(document).ready(function() {
    var userBrowser = BrowserDetect();
    console.log(BrowserDetect());
    if(userBrowser != 'MSIE' && userBrowser != 'Firefox'){
        $('.input-label').hide();
        console.log('user in webkit based browser, hiding labels');
    }
    else{
        //they are already visible, so why show them
        console.log('user in IE, showing labels');
    }
    // Scrolling Navigation
    // --------------------------------
    if($('.is-scroller-link').length) {
      $('.top-bar').singlePageNav({
        filter: '.is-scroller-link',
        updateHash: true,
        currentClass: 'active',
        offset: 60
      });
    }
}); 

function BrowserDetect() {
                
    //Check if browser is IE or not
    if (navigator.userAgent.search("MSIE") >= 0) {
        return 'MSIE';
    }
    //Check if browser is Chrome or not
    else if (navigator.userAgent.search("Chrome") >= 0) {
        return 'Chrome';
    }
    //Check if browser is Firefox or not
    else if (navigator.userAgent.search("Firefox") >= 0) {
        return 'Firefox';
    }
    //Check if browser is Safari or not
    else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
        return 'Safari';
    }
    //Check if browser is Opera or not
    else if (navigator.userAgent.search("Opera") >= 0) {
        return 'Opera';
    }
}

