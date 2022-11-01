var apiKey = '9cfe7036b90b3a13af1a88f6bf534b32'
var yelpKey = 'UtgYP3oNouVCO68pYnqcffLbhwiRsRDqK0BMJPKYrhzLexA0rNI8NHIK6E6TiyiOmkMtdUvyH5FChLj3mcXZMfR8t1dSCJZZqUeXWJ3M34Y_m9cNqxfmMnvZAEtYY3Yx'
var corse = 'https://cors-anywhere.herokuapp.com/'



var searchButton = document.getElementById('searchButton')


// function clear form

// function render weather

// function render yelp part

// function that takes in all other functions

function getApi(e) {
    e.preventDefault()

    var inputValue = document.getElementById('formInput').value

    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&appid=${apiKey}`

    fetch(requestUrl)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
        console.log(data)
        })
}



searchButton.addEventListener('click', getApi)







var nameDisplay = document.querySelector('.name')
var priceDisplay = document.querySelector('price')
var ratingDisplay = document.querySelector('rating')
var urlDisplay = document.querySelector('url')
var realDisplay = document.querySelector('.activity-display-container')


function getYelp(e) {
    e.preventDefault()
    console.log($(this).siblings('#formInput').val())
    var city = $(this).siblings('#formInput').val()
    
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=5&location='+city,
        type: "GET",
        headers: {
            "accept": "application/json",
            "x-requested-with": "xmlhttprequest",
            "Access-Control-Allow-Origin":"*",
            "Authorization": `Bearer ${yelpKey}`
        },
        dataType:'json',
        success: function(rest) {
            console.log(rest);  
            
        },

        error: function() {
            alert('no')
        }

    }).then(function(data){
        console.log(data);

        realDisplay.innerHTML = ""

    for (var i = 0; i < data.businesses.length; i++) {

            console.log(data.businesses[i].name); 
            console.log(data.businesses[i].price); 
            console.log(data.businesses[i].rating); 
            console.log(data.businesses[i].url); 

            


            var newli = document.createElement('li');
            newli.classList.add("current-activity-display");
            realDisplay.classList.add("p-3");
            var newP = document.createElement('h1');
            newP.classList.add("title");
            var price = document.createElement('p');
            price.classList.add("content");
            var rating = document.createElement('p');
            rating.classList.add("content");
            var url = document.createElement('p');
            url.classList.add("content");


            newP.textContent = data.businesses[i].name; 
            price.textContent = data.businesses[i].price;
            rating.textContent = data.businesses[i].rating;
            url.textContent = data.businesses[i].url;

            
            
            newli.appendChild(newP);
            newli.appendChild(price);
            newli.appendChild(rating);
            newli.appendChild(url);
            realDisplay.appendChild(newli);






            
        }
    })


}
    
searchButton.addEventListener('click', getYelp)
            
            
            






    
    
    

