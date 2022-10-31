var apiKey = '9cfe7036b90b3a13af1a88f6bf534b32'
var yelpKey = 'UtgYP3oNouVCO68pYnqcffLbhwiRsRDqK0BMJPKYrhzLexA0rNI8NHIK6E6TiyiOmkMtdUvyH5FChLj3mcXZMfR8t1dSCJZZqUeXWJ3M34Y_m9cNqxfmMnvZAEtYY3Yx'
var corse = 'https://cors-anywhere.herokuapp.com/'


var searchButton = document.getElementById('searchButton')
var displayWeather = document.querySelector('.hiddenWeather')


// function clear form

// function render weather

// function render yelp part

// function that takes in all other functions

function getApi(e) {
    e.preventDefault()
    displayWeather.style.display = 'block'

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

function getYelp(e) {
    e.preventDefault()
    console.log($(this).siblings('#formInput').val())
    var city = $(this).siblings('#formInput').val()
    
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=by-chloe&location='+city,
        type: "GET",
        headers: {
            "accept": "application/json",
            "x-requested-with": "xmlhttprequest",
            "Access-Control-Allow-Origin":"*",
            "Authorization": `Bearer ${yelpKey}`

         },
        dataType:'json',
        error: function() {
            alert('no')

        },
        success: function(rest) {

            console.log(rest)
    
        }
    
    
    })
    
}

searchButton.addEventListener('click', getApi)

