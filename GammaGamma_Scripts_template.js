// Scripts for templating each page on GammaGamma xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
document.addEventListener('DOMContentLoaded',function(){
// create navbar1, the upper navbar that is just there for stylistic purposes.
  let navbar1 = document.createElement('div');
  document.body.appendChild(navbar1);

// create navbar2, which is actually used for navigating the site.
  let navbar2 = document.createElement('div');
  document.body.appendChild(navbar2);
  navbar2.id = 'navbar2'
  // set up the unordered list in which to put the links
  let navbar2_ul = document.createElement('ul');
  navbar2.appendChild(navbar2_ul);
  // create and add the links for navbar2_ul ---------------------------------------
  // 'Home' link
  let navbar2_ul_index = document.createElement('li');
  navbar2_ul.appendChild(navbar2_ul_index);
  let navbar2_ul_index_link = document.createElement('a');
  navbar2_ul_index.appendChild(navbar2_ul_index_link);
      navbar2_ul_index_link.href = 'index.html';
      navbar2_ul_index_link.innerHTML = 'Home';
  // 'SKUNK' link
  let navbar2_ul_skunk = document.createElement('li');
  navbar2_ul.appendChild(navbar2_ul_skunk);
  let navbar2_ul_skunk_link = document.createElement('a');
  navbar2_ul_skunk.appendChild(navbar2_ul_skunk_link);
      navbar2_ul_skunk_link.href = 'skunk.html';
      navbar2_ul_skunk_link.innerHTML = 'SKUNK';
  // 'countdown' link
  let navbar2_ul_countdown = document.createElement('li');
  navbar2_ul.appendChild(navbar2_ul_countdown);
  let navbar2_ul_countdown_link = document.createElement('a');
  navbar2_ul_countdown.appendChild(navbar2_ul_countdown_link);
      navbar2_ul_countdown_link.href = 'countdown.html';
      navbar2_ul_countdown_link.innerHTML = 'Countdown';





// This closes the EventListere DOMContentLoaded
})
