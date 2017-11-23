
var castFunctions = {
    topcasts : function (res) {
      var casts = [];
      for (var i = 0; i < 5; i++) {
        casts.push(res.cast[i].name);
      };

      return casts;
    }
}

const movieFunctions = {
  idMovie: function (r) {
    return r.results[0].id;
  },
  photoMovie : function (r) {
    return r.results[0].poster_path;
  },
  //overview
  ovMovie : function (res) {
    return res.results[0].overview;
  },
  rateMovie : function (r) {

      return r.results[0].vote_average;


  },
  gifsMovie: function (rs){
    var gifs = [];
   for (var i = 0; i< 10; i++){
    gifs.push(rs.data[i].images.downsized.url);
    }
    return gifs;
  },
  nameMovie: function (res) {
   return res.results[0].title;
 }
};




if (typeof module !== 'undefined') {
  module.exports = {
    movieFunctions:movieFunctions,
    castFunctions:castFunctions
  }
}
