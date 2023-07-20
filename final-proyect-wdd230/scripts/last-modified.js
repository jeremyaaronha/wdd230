
var lastModified = new Date(document.lastModified);
var lastModifiedElement = document.getElementById("last-modified");
lastModifiedElement.textContent = lastModified.toLocaleString();