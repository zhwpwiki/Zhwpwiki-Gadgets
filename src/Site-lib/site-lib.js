window.wgUXS = function (wg, hans, hant, cn, tw, hk, sg, zh, mo, my, en) {
    var ret = {
        'zh': zh || hans || hant || cn || tw || hk || sg || mo || my,
        'zh-hans': hans || cn || sg || my,
        'zh-hant': hant || tw || hk || mo,
        'zh-cn': cn || hans || sg || my,
        'zh-sg': sg || hans || cn || my,
        'zh-tw': tw || hant || hk || mo,
        'zh-hk': hk || hant || mo || tw,
        'zh-mo': mo || hant || hk || tw
    }
    return ret[wg] || en || zh || hans || hant || cn || tw || hk || sg || mo || my; //保證每一語言有值
}

window.wgULS = function (hans, hant, cn, tw, hk, sg, zh, mo, my, en) {
    return wgUXS(mw.config.get('wgUserLanguage'), hans, hant, cn, tw, hk, sg, zh, mo, my, en);
};

window.wgUVS = function (hans, hant, cn, tw, hk, sg, zh, mo, my, en) {
    return wgUXS(mw.config.get('wgUserVariant'), hans, hant, cn, tw, hk, sg, zh, mo, my, en);
};

/**
 * Map addPortletLink to mw.util
 *
 * @deprecated: Use mw.util.addPortletLink instead.
 */
mw.log.deprecate( window, 'addPortletLink', function () {
    return mw.util.addPortletLink.apply( mw.util, arguments );
}, 'Use mw.util.addPortletLink() instead' );

/**
 * Extract a URL parameter from the current URL
 *
 * @deprecated: Use mw.util.getParamValue with proper escaping
 */
mw.log.deprecate( window, 'getURLParamValue', function () {
    return mw.util.getParamValue.apply( mw.util, arguments );
}, 'Use mw.util.getParamValue() instead' );

/**
 * Test if an element has a certain class
 *
 * @deprecated:  Use $(element).hasClass() instead.
 */
mw.log.deprecate( window, 'hasClass', function ( element, className ) {
    return $( element ).hasClass( className );
}, 'Use jQuery.hasClass() instead' );

window.importScriptCallback = function(page, ready) {
    importScriptURICallback(mw.config.get('wgServer') + mw.config.get('wgScript') + '?title=' + mw.util.wikiUrlencode(page) + '&action=raw&ctype=text/javascript', ready);
};

window.importScriptURICallback = jQuery.getScript;