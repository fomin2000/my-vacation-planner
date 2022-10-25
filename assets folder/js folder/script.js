var apiKey = '9cfe7036b90b3a13af1a88f6bf534b32'


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