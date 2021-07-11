// acquire references to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')

// Retrieve name and note content from cookies and localstorage
// Then apply them to elements on the page
// YOUR CODE HERE

var notes = localStorage.getItem('notes')
if (notes) {
  textarea.value = notes
} else {
  textarea.value = 'Type notes here and then press save!'
}

 var nameCookie = document.cookie.split(';')
  nameSpan.textContent = nameCookie

 
formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()
  // save name element's content to cookies
  // save textarea's content to localstorage
  // YOUR CODE HERE
  notes = textarea.value
  localStorage.setItem('notes', notes)
  textarea.textContent = notes
 
  var nameCookie = nameSpan.textContent
  document.cookie = nameCookie
  
  // triggers thumbs up animation
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
  // Clear localstorage's content
  // YOUR CODE HERE

//textarea.value.clear();
localStorage.removeItem('notes');
textarea.value = "Type notes here and then press save!";

  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp



//CODE GRAVEYARD

//var name = nameSpan.textContent;
//function name() {
  //document.cookie = nameSpan.textContent;
  //}
//var notes = localStorage.getItem('notes')
//if (notes) {
//var notesInput = textarea.value;
//localStorage.setItem ('textarea', notesInput);
//} else{
//textarea.textContent = 'No Notes'
//};


//if (notes) {
  //textarea.textContent = notes
  //textarea.value = notes
//} else {
  //textarea.textContent = 'No Notes'
//}

//textarea.value = localStorage.getItem('notes')


///if (notes) {
  //var notesInput = textarea.value; 
  //localStorage.setItem ('textarea', notesInput);
  //} else {
  //textarea.textContent = 'No Notes'
  //};

  //var textInput = document.getElementById('notes').value;
//localStorage.setItem('notes', textInput);
//textInput =localStorage.getItem('notes');
//console.log('title Saved')


//var nameCookie = document.cookie.split(';')
//.find(function(nameCookie) {
  //return nameCookie.startsWith('Name')
//})
//if(nameCookie) {
  //nameSpan.textContent = nameCookie
//}


//var nameCookie = "name=" + nameSpan.textContent
//nameCookie = document.cookie.split(';')

//var nameCookie = nameSpan.textContent
//document.cookie = "name=" + nameCookie




