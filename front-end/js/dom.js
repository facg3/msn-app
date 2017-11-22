window.onload = btnListener;
var searchInput= null;
function fetch(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var response = JSON.parse(xhr.responseText);
      callback(response);
    }
  }
  xhr.open('GET', url)
  xhr.send();
}


function btnListener(){
  var btn = document.querySelector('.search-btn');
  btn.addEventListener('click',function(){
    idMovies(searchInput,function (id) {
      castMovies(id,function (name) {
        castGify(name);
      });
    });
  });
}
var searchResult = document.querySelector('.search-results');
var ul = document.createElement('ul');
  searchResult.appendChild(ul);
function idMovies (searchInput,callback){
  var search = document.querySelector('.search_query').value;
  var url = 'https://api.themoviedb.org/3/search/movie?api_key=0bd7fd73d465ac05909aa27eb30a3bea&query=' + search;
  fetch(url, function (response){
    var rate = movieFunctions.rateMovie(response);
    var li = document.createElement('li');
    li.innerHTML = (rate);
    ul.appendChild(li);
    var poter = document.querySelector('.poster');
    var img = document.createElement('img');
    var imgUrl ='https://image.tmdb.org/t/p/w640'+movieFunctions.photoMovie(response);
    img.src = imgUrl;
    poter.appendChild(img);
    var divov = document.querySelector('.overview');
    var p = document.createElement('p');
    p.innerHTML = movieFunctions.ovMovie(response);
    divov.appendChild(p);
    var id = movieFunctions.idMovie(response);

    callback(id);
  })
}
function castMovies(id,callback) {
  var castName = document.querySelector('.cast-names');
  var url = "https://api.themoviedb.org/3/movie/"+id+"/casts?api_key=0bd7fd73d465ac05909aa27eb30a3bea";
  fetch(url, function (response) {
    var name = castFunctions.topcasts(response);
    var ul = document.createElement('ul');
    var casts=  name.forEach(function (value) {
      var li = document.createElement('li');
      li.innerHTML = value;
      ul.appendChild(li);
    })
    castName.appendChild(ul);
    callback(name);

  })
}

function castGify(name, callback) {
  var gifResult = document.querySelector('.gifs-results');
  var url = "http://api.giphy.com/v1/gifs/search?q="+name+"&api_key=lj5mU1p8ueKRo1mBPEfEVSsnkHPXBWPh";
  fetch(url, function (response) {
    var img = document.createElement('img');
    img.src = gifsMovie(response);
    gifResult.appendChild(img);
  })

}
