document.addEventListener('DOMContentLoaded', function(){
  let firstblock = document.createElement('h1');
  document.body.appendChild(firstblock);
  firstblock.id='firstblock'
  firstblock.innerHTML='This text is primary colour and the background is secondary colour.'
  let secblock = document.createElement('h1');
  document.body.appendChild(secblock);
  secblock.id='secblock'
  secblock.innerHTML='This text is tertiary colour and the background is quarternary colour.'
  let thirdblock = document.createElement('h1');
  document.body.appendChild(thirdblock);
  thirdblock.id='thirdblock'
  thirdblock.innerHTML='This text is secondary colour and the background is primary colour.'
  let fourthblock = document.createElement('h1');
  document.body.appendChild(fourthblock);
  fourthblock.id='fourthblock'
  fourthblock.innerHTML='This text is tertiary colour and the background is secondary colour.'
})
