var apiKey = '9cfe7036b90b3a13af1a88f6bf534b32'
var yelpKey = 'UtgYP3oNouVCO68pYnqcffLbhwiRsRDqK0BMJPKYrhzLexA0rNI8NHIK6E6TiyiOmkMtdUvyH5FChLj3mcXZMfR8t1dSCJZZqUeXWJ3M34Y_m9cNqxfmMnvZAEtYY3Yx'
var corse = 'https://cors-anywhere.herokuapp.com/'



var searchButton = document.getElementById('searchButton')
var displayWeather = document.querySelector('.hiddenWeather')

// min temp elements
var ntemp1 = document.getElementById('temp1')
var ntemp2 = document.getElementById('temp2')
var ntemp3 = document.getElementById('temp3')
var ntemp4 = document.getElementById('temp4')
var ntemp5 = document.getElementById('temp5')

var weekDay = moment().format('dddd')
var day1set = moment().add(1, 'days').format('dddd')
var day2set = moment().add(2, 'days').format('dddd')
var day3set = moment().add(3, 'days').format('dddd')
var day4set = moment().add(4, 'days').format('dddd')
var day5set = moment().add(5, 'days').format('dddd')

var day1Title = document.getElementById('cardDay1')
var day2Title = document.getElementById('cardDay2')
var day3Title = document.getElementById('cardDay3')
var day4Title = document.getElementById('cardDay4')
var day5Title = document.getElementById('cardDay5')

var rain1 = document.getElementById('chance1')
var rain2 = document.getElementById('chance2')
var rain3 = document.getElementById('chance3')
var rain4 = document.getElementById('chance4')
var rain5 = document.getElementById('chance5')

var formInput = document.getElementById('formInput')
var infoPull = document.querySelector('.infoHere')
var renderedInfoBox = document.querySelector('.renderedInfo')
var renderBtn = document.querySelector('.renderBtn')


// function to set days for weather cards 

function setDays() {
    day1Title.textContent = day1set
    day2Title.textContent = day2set
    day3Title.textContent = day3set
    day4Title.textContent = day4set
    day5Title.textContent = day5set
}
// function clear form

// function render weather

// function render yelp part

// function that takes in all other functions



function getApi(e) {
    e.preventDefault()
    setDays()
    displayWeather.style.display = 'block'

    var inputValue = document.getElementById('formInput').value

    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&appid=${apiKey}`

    fetch(requestUrl)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data)

            console.log(data.list[0].weather[0].icon)

            var minTemp1 = data.list[0].main.temp
            var conversion1 = Math.floor(((minTemp1 - 273.15) * 1.8 + 32))
            var newTemp1 = conversion1 + ' °F'
            ntemp1.textContent = newTemp1 

            var chanceRain1 = data.list[0].pop
            var perc1 = (chanceRain1 * 100) + '%'
            rain1.textContent = perc1

            var minTemp2 = data.list[8].main.temp
            var conversion2 = Math.floor(((minTemp2 - 273.15) * 1.8 + 32))
            var newTemp2 = conversion2 + ' °F'
            ntemp2.textContent = newTemp2 

            var chanceRain2 = data.list[8].pop
            var perc2 = (chanceRain2 * 100) + '%'
            rain2.textContent = perc2

            var minTemp3 = data.list[16].main.temp
            var conversion3 = Math.floor(((minTemp3 - 273.15) * 1.8 + 32))
            var newTemp3 = conversion3 + ' °F'
            ntemp3.textContent = newTemp3 

            var chanceRain3 = data.list[16].pop
            var perc3 = (chanceRain3 * 100) + '%'
            rain3.textContent = perc3
            
            var minTemp4 = data.list[24].main.temp
            var conversion4 = Math.floor(((minTemp4 - 273.15) * 1.8 + 32))
            var newTemp4 = conversion4 + ' °F'
            ntemp4.textContent = newTemp4 

            var chanceRain4 = data.list[24].pop
            var perc4 = (chanceRain4 * 100) + '%'
            rain4.textContent = perc4
            
            var minTemp5 = data.list[32].main.temp
            var conversion5 = Math.floor(((minTemp5 - 273.15) * 1.8 + 32))
            var newTemp5 = conversion5 + ' °F'
            ntemp5.textContent = newTemp5 

            var chanceRain5 = data.list[32].pop
            var perc5 = (chanceRain5 * 100) + '%'
            rain5.textContent = perc5


        })

    storeInfo()
}



searchButton.addEventListener('click', getApi)







var nameDisplay = document.querySelector('.name')
var priceDisplay = document.querySelector('price')
var ratingDisplay = document.querySelector('rating')
var urlDisplay = document.querySelector('url')
var realDisplay = document.querySelector('.activity-display-container')

function anotherHeader() {
    var head = activityDisplay
    head.textContent = "Activities Nearby"

}

function getYelp(e) {
    e.preventDefault()
    console.log($(this).siblings('#formInput').val())
    var city = $(this).siblings('#formInput').val()
    
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=12&location='+city,
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
            var price = document.createElement('p');
            price.classList.add("content");
            var rating = document.createElement('p');
            rating.classList.add("content");
            var url = document.createElement('p');
            url.classList.add("content");



            newP.textContent = data.businesses[i].name; 
            price.textContent = data.businesses[i].price;
            rating.textContent = data.businesses[i].rating;
            url.textContent = data.businesses[i].phone;

            
            
            newli.appendChild(newP);
            newli.appendChild(price);
            newli.appendChild(rating);
            newli.appendChild(url);
            realDisplay.appendChild(newli);

        }
    })
}

function storeInfo() {
    var savedInfo = formInput.value
    localStorage.setItem('info', savedInfo)
}

function renderInfo() {
    var pulledInfo = localStorage.getItem('info')
    infoPull.textContent = pulledInfo
    renderedInfoBox.style.display = 'block'
}

searchButton.addEventListener('click', getYelp)
            
            
searchButton.addEventListener('click', getApi)
            
renderBtn.addEventListener('click', renderInfo)



// function printHistory() {
//     var history = document.createElement('p')
//     history.textContent = inputButton.value;
//     srchHistory.appendChild(history);
// }


    
    
    

