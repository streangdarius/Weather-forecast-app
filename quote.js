let hello = document.getElementById("hello");
const quotes = [
    "Wherever you go, no matter what the weather, always bring your own sunshine", 
    "Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating; there is really no such thing as bad weather, only different kinds of good weather.", 
    "If you want to see the sunshine, you have to weather the storm.",
    "I love the rain. It is my favorite weather.",
    "There's no such thing as bad weather, just soft people.",
    "Sometimes I wish that I was the weather, you'd bring me up in conversation forever. And when it rained, I'd be the talk of the day.",
    "Bad weather always looks worse through a window."
 ];

 function greetings() {
    let day = new Date();
    let hr = day.getHours();
    if (hr >= 0 && hr < 12) {
        document.getElementById('hello').innerHTML = 'Good morning.';
    } else if (hr >= 12 && hr <= 17) {
        document.getElementById('hello').innerHTML = 'Good afternoon.';
    } else {
        document.getElementById('hello').innerHTML = 'Good evening.';
    }
}

 function newQuote() {
    var randomNumber = Math.floor(Math.random()*quotes.length);
    document.getElementById('quotes').innerHTML = quotes[randomNumber];
}

document.addEventListener("load", newQuote(), greetings());

// The small gretings



