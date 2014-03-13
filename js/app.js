$(document).ready(function() {
    var isIE = detectIE();
    if(!isIE){
        $('.input-label').hide();
        console.log('user not in IE, hiding labels');
    }
    else{
        //they are already visible, so why show them
        console.log('user in IE, showing labels');
    }
});

/**
 * Detects if user is in IE
 * @return {boolean} true/false
 */
function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');

    if (msie > 0) {
        return true;
    }
    if (trident > 0) {
        return true;
    }
    // other browser
    return false;
}

