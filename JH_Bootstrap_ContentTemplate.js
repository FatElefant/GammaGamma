document.addEventListener('DOMContentLoaded',()=>{

  // Site Content ---> Be sure to append to id = 'sitecontentcontainer'
  var welcomemessage = document.createElement('h1');
  welcomemessage.id='welcomemessage';
  document.getElementById('sitecontentcontainer').appendChild(welcomemessage);
  welcomemessage.innerHTML="Five minutes to spare at the end of class?<br><br>Try one of our games!";


// This ends the DOMContentLoaded listener
})
