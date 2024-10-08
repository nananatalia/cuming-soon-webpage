// date we are counting down to
var countDownDate = new Date("Mar 23, 2025 19:23:25").getTime(); 

// updating every 1 second
var x = setInterval(function() {
    // date from today
    var now = new Date().getTime();

    // time period from today to cunt down date
    var distance = countDownDate - now;

    // time calculation for how many days are left
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    // time calculation for how many hours are left
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // time calculation for how many minutes are left
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    // time calculation for how many seconds are left
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // displaying the count down 'clock' in <p> with id="demo"
    document.getElementById("demo").innerHTML = days + " days " + hours + " hours "
    + minutes + " minutes " + seconds + " seconds ";


    // when the count down is finished, it will display 'EXPIRED' in the place,
    // where was the 'count down clock' 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);