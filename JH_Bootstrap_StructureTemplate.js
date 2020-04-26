document.addEventListener('DOMContentLoaded',()=>{
  // Create and inject navbar1
  let navbar1 = document.createElement('div');
  document.body.appendChild(navbar1);
  navbar1.id='navbar1';
  // Navbar1 Content
  document.getElementById('navbar1').innerHTML='\t \\(\\Gamma \\Gamma\\)';

  // Create and inject navbar2 and create its unordered list of links
  let navbar2 = document.createElement('div');
  document.body.appendChild(navbar2);
  navbar2.id='navbar2';
  // Navbar2 Content
  let item1 = document.createElement('div');
  document.getElementById('navbar2').appendChild(item1);
  item1.id='ourGames';
  item1.innerHTML='Our games:';

  let item2 = document.createElement('div');
  document.getElementById('navbar2').appendChild(item2);
  item2.className='navbar2_link';
  item2.innerHTML='<a href="countdown.html">Countdown<\a>';

  let item3 = document.createElement('div');
  document.getElementById('navbar2').appendChild(item3);
  item3.className='navbar2_link';
  item3.innerHTML='<a href="skunk.html">Skunk<\a>';

  // script to help navbar 2 stick to the top of the screen when scrolling
  window.onscroll = () => {
    if(window.scrollY >= 100) {
      document.getElementById('navbar2').style.position = 'fixed';}
    else {document.getElementById('navbar2').style.position = 'static';};
  };

  // Create and inject navbarleft
  let navbarleft = document.createElement('div');
  document.body.appendChild(navbarleft);
  navbarleft.id='navbarleft';
  navbarleft.innerHTML='This is going to be navbarleft';

  // Create and inject a space to hold the site content, then a container for your site content that can itself be a grid
  let sitecontentspace = document.createElement('div');
  document.body.appendChild(sitecontentspace);
  sitecontentspace.id='sitecontentspace';
  let sitecontentcontainer = document.createElement('div');
  document.getElementById('sitecontentspace').appendChild(sitecontentcontainer);
  sitecontentcontainer.id='sitecontentcontainer';

  // Create and inject navbarright
  let navbarright = document.createElement('div');
  //document.body.appendChild(navbarright); --- don't want this so I commented it out.
  navbarright.id='navbarright';

  // Create and inject footer1
  let footer1 = document.createElement('div');
  document.body.appendChild(footer1);
  footer1.id='footer1';
  //footer1.innerHTML='This is going to be footer1';

  // Create and inject footer2
  let footer2 = document.createElement('div');
  document.body.appendChild(footer2);
  footer2.id='footer2';
  //footer2.innerHTML='This is going to be footer2';


// This ends the DOMContentLoaded listener
})
