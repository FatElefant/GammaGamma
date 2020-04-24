document.addEventListener('DOMContentLoaded',function(){
// Create page elements -------------------------------------------------------------------------
    // div where numbers will be shown once they are selected
    number_display = document.createElement('div');
    document.body.appendChild(number_display);

    // Large number button for selecting a large number
    large_number_button = document.createElement('button');
    document.body.appendChild(large_number_button);
    large_number_button.id="large_number_button";
    large_number_button.innerHTML = "Pick Large Number";

    // small number button for selecting a small number
    small_number_button = document.createElement('button');
    document.body.appendChild(small_number_button);
    small_number_button.id="small_number_button";
    small_number_button.innerHTML = "Pick Small Number";

    // clock for counting down the 30 seconds
    clock = document.createElement('div');
    document.body.appendChild(clock);
    clock.id="clock";

    // target number that needs to be reached
    target = document.createElement('div');
    document.body.appendChild(target);
    target.id="target";

// Variables -------------------------------------------------------------------------------------
    // keeps track of how many numbers have been picked, will help when 6 have been picked
    let count_picks = 0;

    // large numbers
    let large_number_arr_start = [25, 50, 75, 100];
    let large_number_arr = large_number_arr_start;

    // small numbers
    let small_number_arr_start = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];
    let small_number_arr = small_number_arr_start;


// Functions ------------------------------------------------------------------------------------
    // Control what happens when a large number is picked ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    document.querySelector('#large_number_button').onclick = ()=>{
    const large_number_picked_index = Math.floor(Math.random()*large_number_arr.length);

    // Display the large number
    const picked_large_number = document.createElement('span');
    number_display.appendChild(picked_large_number);
    picked_large_number.innerHTML = `${large_number_arr[large_number_picked_index]}`;

    // Remove the number from the remaining large numbers
    large_number_arr.splice(large_number_picked_index,1);

    // Deactivate the large number button if there are no large numbers left
    if (large_number_arr.length == 0){document.querySelector('#large_number_button').disabled = true};

    // Increment the picks counter and check to see if game needs to be started
    count_picks += 1;
    if (count_picks == 6){startGame()};
    }

    // Control what happens when a small number is picked ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    document.querySelector('#small_number_button').onclick = ()=>{
    const small_number_picked_index = Math.floor(Math.random()*small_number_arr.length);

    // Display the small number
    const picked_small_number = document.createElement('span');
    number_display.appendChild(picked_small_number);
    picked_small_number.innerHTML = `${small_number_arr[small_number_picked_index]}`;

    // Remove the number from the remaining small numbers
    small_number_arr.splice(small_number_picked_index,1);

    // Increment the picks counter and check to see if game needs to be started
    count_picks += 1;
    if (count_picks == 6){
      document.querySelector('#small_number_button').disabled = true;
      startGame()};
    }

    // When six numbers have been picked, gameplay switches ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    function startGame(){
      target_number = Math.floor(Math.random()*1000);
      target.innerHTML = `${target_number}`;
    }

//This is closing the Event Listener for DOMContentLoaded
})
