# JerryDOM
## A DOM Manipulation library.

## How To Implement?

ADD Library

Include the library within the head.

```
<script src="js/jerryDOM.js"></script>
```

## Purpose of index.html

You can use index.html to test some of the library functions

## Code

**appendHead**

Appends HTML to the head.

**Example**
```javascript
$.appendHead('<script>alert("Append head example!")</script>');
```

**appendBody**

Appends HTML to the body.

```javascript
$.appendBody('<h1>Append to body example!</h1>');
```

**prependHead**

Prepends HTML to the head.

**Example**
```javascript
$.prependHead('<script>alert("Prepend HTML to head example!")</script>');
```

**prependBody**

Prepends HTML to the body.

```javascript
$.prependBody('<h1>Prepend HTML to body example!</h1>');
```

**replaceHead**

Replaces the head with the HTML given.

```javascript
$.replaceHead("<style>body{background:black}</style>")
```

**replaceBody**

Replaces the body with the HTML given.

```javascript
$.replaceBody("<h1>Poof, and it's gone.</h1>")
```

**clearHead**

Clears all elements in the head.

```javascript
$.clearHead()
```

**clearBody**

Clears all elements in the body.

```javascript
$.clearBody()
```

**id**

Shortcut for document.getElementById.

```javascript
$.id('something') //equals document.getElementById
```

**tag**

Shortcut for document.getElementsByTagName.

```javascript
$.tag('div') //equals document.getElementsByTagName('div')
```

**name**

Shortcut for document.getElementsByName.

```javascript
$.name('fname') //equals document.getElementsByName('fname')
```

**head**

Shortcut for document.head.

```javascript
$.head.innerHTML = "<script>alert('Shortcut example!')</script>"s
```

**body**

Shortcut for document.body.

```javascript
$.body.innerHTML = "Shortcut example!"
```
