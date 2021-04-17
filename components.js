var attributeExceptions = [
    'role'
];

function appendText(el, text) {
    var textNode = document.createTextNode(text);
    el.appendChild(textNode);
}

function appendArray(el, children) {
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (Array.isArray(child)) {
            appendArray(el, child);
        } else if (child instanceof window.Element) {
            el.appendChild(child);
        } else if (typeof child === 'string') {
            appendText(el, child);
        }        
    }
}

function setStyles(el, styles) {
    if (!styles) {
        el.removeAttribute('styles');
        return;
    }
    for (var i = 0; i < Object.keys(styles).length; i++) {
        var styleName = Object.keys(styles)[i];
        if (styleName in el.style) {
            el.style[styleName] = styles[styleName]; // eslint-disable-line no-param-reassign
        } else {
            console.warn(styleName + ' is not a valid style for a ' + el.tagName.toLowerCase());
        }        
    }
}

function makeElement(type, textOrPropsOrChild, otherChildren) {    
    otherChildren = otherChildren == null ? [] : restArgs(otherChildren);
    if(arguments.length > 3){
        for (var i = 3; i < arguments.length; i++) {
            otherChildren.push(arguments[i]);
        }
    }    
    var el = document.createElement(type);

    if (Array.isArray(textOrPropsOrChild)) {
        appendArray(el, textOrPropsOrChild);
    } else if (textOrPropsOrChild instanceof window.Element) {
        el.appendChild(textOrPropsOrChild);
    } else if (typeof textOrPropsOrChild === 'string') {
        appendText(el, textOrPropsOrChild);
    } else if (typeof textOrPropsOrChild === 'object') {
        for (var i = 0; i < Object.keys(textOrPropsOrChild).length; i++) {
            var propName = Object.keys(textOrPropsOrChild)[i];  
            var value = textOrPropsOrChild[propName];          
            if (propName in el) {    
                if (propName === 'style') {
                    setStyles(el, value);
                } else if (value) {
                    el[propName] = value;
                }
            } else {
                el.setAttribute(propName,value);
            }
        }
    }
    appendArray(el, otherChildren);
    return el;
}
function restArgs() {
    return Array.prototype.slice.call(arguments);
}
function argsToArray(eleType,args) {
    argsArray= [eleType];    
    for (var i = 0; i < args.length; i++) {
        argsArray.push(args[i]);
    }    
    return argsArray;
}
var a = function () {return makeElement.apply(this, argsToArray('a',arguments));};
var button = function () {return makeElement.apply(this, argsToArray('button',arguments));};
var div = function () {return makeElement.apply(this, argsToArray('div',arguments));};
var h1 = function () {return makeElement.apply(this, argsToArray('h1',arguments));};
var header = function () {return makeElement.apply(this, argsToArray('header',arguments));};
var p = function () {return makeElement.apply(this, argsToArray('p',arguments));};
var span = function () {return makeElement.apply(this, argsToArray('span',arguments));};
var input = function () {return makeElement.apply(this, argsToArray('input',arguments));};
var textarea = function () {return makeElement.apply(this, argsToArray('textarea',arguments));};
var label = function () {return makeElement.apply(this, argsToArray('label',arguments));};
var image = function () {return makeElement.apply(this, argsToArray('img',arguments));};
var table = function () {return makeElement.apply(this, argsToArray('table',arguments));};
var thead = function () {return makeElement.apply(this, argsToArray('thead',arguments));};
var tbody = function () {return makeElement.apply(this, argsToArray('tbody',arguments));};
var trow = function () {return makeElement.apply(this, argsToArray('tr',arguments));};
var tdata = function () {return makeElement.apply(this, argsToArray('td',arguments));};