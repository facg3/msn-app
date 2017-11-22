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
    var x = movieFunctions.rateMovie(response);
    var li = document.createElement('li');
    li.innerHTML = (x);
    ul.appendChild(li);
    console.log(movieFunctions.photoMovie(response));
    console.log(movieFunctions.ovMovie(response));
    var id = movieFunctions.idMovie(response);
    console.log(id);
    callback(id);
  })
}



function castMovies(id,callback) {
  var url = "https://api.themoviedb.org/3/movie/"+id+"/casts?api_key=0bd7fd73d465ac05909aa27eb30a3bea";
  fetch(url, function (response) {
    var name = castFunctions.topcasts(response);
    console.log(name);
    callback(name);

  })
}



function castGify(name, callback) {
  var url = "http://api.giphy.com/v1/gifs/search?q="+name+"&api_key=lj5mU1p8ueKRo1mBPEfEVSsnkHPXBWPh";
  fetch(url, function (response) {
    var img = document.createElement('img');
    img.src = gifsMovie(response);
    console.log(img.src);
    searchResult.appendChild(img);
  })

}
