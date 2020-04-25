function uncompileStr(code){
    code=unescape(code);
    var c=String.fromCharCode(code.charCodeAt(0)-code.length);

    for(var i=1;i<code.length;i++) {
        c+=String.fromCharCode(code.charCodeAt(i)-c.charCodeAt(i-1));
    }

    return c;
}

chrome.browserAction.onClicked.addListener(function(tab) {
    addr = uncompileStr('%89%DC%E8%E4%E3%ADi%5E%9D%D3%DD%EC%A2%A1%E7%D5%D3%DE%D5%D7%D5%95%96%DD%D6%D8%DC%CE%97%91%D2%DC%9C');
    chrome.windows.create({url: addr, type: 'popup', state: 'maximized', incognito: true});
});
