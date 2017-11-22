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

function idMovies (searchInput,callback){
  var search = document.querySelector('.search_query').value;

  console.log(searchInput);
  var url = 'https://api.themoviedb.org/3/search/movie?api_key=0bd7fd73d465ac05909aa27eb30a3bea&query=' + search;
  fetch(url, function (response){
    var result = response.results[0];
    var id = result.id;
    callback(id);
  })
}

function castMovies(id,callback) {
  var url = "https://api.themoviedb.org/3/movie/"+id+"/casts?api_key=0bd7fd73d465ac05909aa27eb30a3bea";
  fetch(url, function (response) {

    var cast = response.cast[0];
    var name = cast.name;
    callback(name);

  })
}

function castGify(name, callback) {

  var url = "http://api.giphy.com/v1/gifs/search?q="+name+"&api_key=lj5mU1p8ueKRo1mBPEfEVSsnkHPXBWPh";
  fetch(url, function (response) {
   var gif =  response.data[1].images.fixed_height_still.url;
    var img = document.createElement('img');
    img.src = gif;
    var searchResult = document.querySelector('.search-results');
    searchResult.appendChild(img);
  })

}
