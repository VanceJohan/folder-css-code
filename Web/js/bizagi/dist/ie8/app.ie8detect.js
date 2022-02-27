function IsIE8Browser() {
    var rv = -1;
    var ua = navigator.userAgent;
    var re = new RegExp("Trident\/([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null) {
        rv = parseFloat(RegExp.$1);
    }
    return (rv == 4);
}