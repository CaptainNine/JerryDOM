(function() {
    var root = this
    var $ = function () {}
    $.appendHead = function (a) {
        document.head.innerHTML += a
    }
    $.appendBody = function (a) {
        document.body.innerHTML += a
    }

    $.prependHead = function (a) {
        var oldInnerHTML = document.head.innerHTML
        document.head.innerHTML = a + oldInnerHTML
    }
    $.prependBody = function (a) {
        var oldInnerHTML = document.head.innerHTML
        document.head.innerHTML = a + oldInnerHTML
    }

    $.replaceHead = function (a) {
        document.head.innerHTML = a
    }
    $.replaceBody = function (a) {
        document.body.innerHTML = a
    }

    //Clears the head of everything
    $.ClearHead = function () {
        document.head.innerHTML = ""
    }
    //Clears the body of everything
    $.ClearBody = function () {
        document.body.innerHTML = ""
    }
    
    $.id = function (a) {
        return document.getElementById(a)
    }
    
    $.tag = function (a) {
        return document.getElementsByTagName
    }
    
    $.name = function (a) {
        return document.getElementsByName
    }
    
    $.head = document.head
    
    $.body = document.body
    
    root['jerryDOM'] = $
    if (!root['$']) root['$'] = $
})()