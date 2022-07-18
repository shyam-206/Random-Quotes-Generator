var quotes = ['Whatever the mind of man can conceive and believe, it can achieve.',
            'Strive not to be a success, but rather to be of value.',
            'Two roads diverged in a wood, and I took the one less traveled by, And     that has made all the difference.',
            'I attribute my success to this: I never gave or took any excuse.' ,
            'You miss 100% of the shots you do not take.',
            'Life is what happens when you are busy making other plans.',
            'Above all, don\'t fear difficult moments. The best comes from them.',
            'Impossible only means that you haven\'t found the solution yet.'
]


function NewQuotes(){
    
    var random_num = Math.floor(Math.random() * (quotes.length));
    document.getElementById('result').innerHTML = quotes[random_num];
}