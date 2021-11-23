//Time dependent greeting
var morning = 5; //24 hours
var afternoon = 12;
var evening = 18;

function greetingPhrase() {
    var sign = document.getElementById("greetingSign");
    var day = new Date().getDay();
    var hour = new Date().getHours();
    var mins = new Date().getMinutes();
    hour = hour + mins/60;

    if ( hour >= morning && hour < afternoon )  {
        sign.innerHTML = "Good morning";
        sign.className = "Morning";
    }
    else if ( hour >= afternoon && hour < evening ) { 
        sign.innerHTML = "Good afternoon";
        sign.className = "Morning";
    }
    else {
        sign.innerHTML = "Good evening";
        sign.className = "Morning";
    }
}

$(document).ready(function() {
    $('.noenter').keydown(function(e) {
        if(e.which == 13) {
            $(this).blur().next().focus();
            return false;
        }
    });
});

document.getElementById('username').onkeyup = function() {
    storeUserInput(this.id)
}

function storeUserInput(id) {
    var username = document.getElementById('username').value;
    localStorage.setItem('userInput', username);
}

function getUserInput() {
    if ( localStorage.getItem('userInput')) {
        var username = localStorage.getItem('userInput');
        document.getElementById('username').value = username;
    }
    else {
        document.getElementById('username').setAttribute('placeholder', 'Enter your name');
    }
}

function clearLocal() {
    clear: localStorage.clear();
    return false;
}

getUserInput();

function runClock(){
    var d = new Date();
    var nmonth = d.getMonth(), ndate = d.getDate(), nyear = d.getFullYear(), nday = d.getDay();
    var nhour = d.getHours(), nmin = d.getMinutes(), nsec = d.getSeconds(), ap;
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if (nhour == 0) { ap = " AM"; nhour = 12; }
    else if (nhour < 12){ ap =" AM"; }
    else if (nhour == 12){ ap =" PM"; }
    else if (nhour > 12){ ap =" PM"; nhour -= 12; }

    if (nmin <= 9) nmin = "0" + nmin;
    if (nsec <= 9) nsec = "0" + nsec;

    document.getElementById('clocktime').innerHTML = nhour + "." + nmin;
    document.getElementById('clockampm').innerHTML = ap;
    document.getElementById('clockdate').innerHTML = days[nday-1] + ", " + ( nmonth+1 ) + "." + ndate + "." + nyear;
}

window.onload = () => {
    greetingPhrase();
    runClock();
    setInterval(runClock, 1000);
}

// http://jsbin.com/arukov/1/edit?html,output //
(function() {
    var quotes = [
      {
        text: "If you keep moving in the right direction you'll get your dream or something better.",
        author: "Unkown"
      },
      {
        text: "It's not about ideas. It's about making ideas happen.",
        author: "Scott Belsky"
      },
      {
        text: "Always deliver more than expected.",
        author: "Larry Page"
      },
      {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
      },
      {
        text: "'Someday' is a disease that will take your dreams to the grave with you. Just do it and correct course along the way.",
        author: "Timothy Ferriss"
      },
      {
        text: "Timing, perseverance, and ten years of trying will eventually make you look like an overnight success.",
        author: "Biz Stone"
      },
      {
        text: "You may be disappointed if you fail, but you are doomed if you don't try.",
        author: "Beverly Sills"
      },
      {
        text: "The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.",
        author: "Michaelangelo"
      },
        {
        text: "A good plan violently executed now is better than a perfect plan executed next week.",
        author: "George Patton"
      },
      {
        text: "Do not focus on the victory, focus on the task.",
        author: "Erik Spoelstra"
      },
      {
        text: "The only thing standing between you and your goal is the bullshit story you keep telling yourself as to why you cant achieve it.",
        author: "Jordan Belfort"
      },
      {
        text: "Time is the capital of your life, so spend it wisely.",
        author: "Tony Robbins"
      },
      {
        text: "If you wait until you feel like doing something, you will likely never accomplish it.",
        author: "John C Maxwell"
      },
      {
        text: "The joy is in creating, not maintaining.",
        author: "Vince Lombardi"
      },
      {
        text: "All of the answers to your problems are outside your comfort zone.",
        author: "Keith Cunningham"
      },
      {
        text: "If everything seems under control, youre just not going fast enough.",
        author: "Mario Andrett"
      },
      {
        text: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
        author: "Henry Ford"
      },
      {
        text: "You shouldn't focus on why you cant do something, which is what most people do. You should focus on why perhaps you can, and be one of the exceptions.",
        author: "Steve Case"
      },
      {
        text: "Risk more than others think is safe. Dream more than others think is practical.",
        author: "Howard Schultz"
      },
      {
        text: "Be undeniably good. No marketing effort or social media buzzword can be a substitute for that.",
        author: "Anthony Volodkin"
      },
      {
        text: "You miss 100 percent of the shots you don't take.",
        author: "Wayne Gretzky"
      },
      {
        text: "If you only do what you can do, you'll never be anything more than who you are now.",
        author: "Alex MarzBar"
      },
      {
        text: "Do what no one else does&#39; follow through.",
        author: "Unkown"
      },
      {
        text: "We are kept from our goal not by obstacles but by a clear path to a lesser goal.",
        author: "Robert Brault"
      },
      {
        text: "Your most unhappy customers are your greatest source of learning.",
        author: "Bill Gates"
      },
      {
        text: "If you do what you've always done, you'll get what you've always gotten.",
        author: "Tony Robbins"
      },
      {
        text: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
      },
      {
        text: "People who don't take risks generally make about two big mistakes a year. People who do take risks generally make about two big mistakes a year.",
        author: "Peter F. Drucker"
      },
      {
        text: "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
        author: "Andre Gide"
      },
      {
        text: "The question isn't who is going to let me. It's who is going to stop me.",
        author: "Ayn Rand"
      },
    ];
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').innerHTML = quote.text;
    document.getElementById('author').innerHTML = quote.author;
})();