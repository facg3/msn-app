

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
    // console.log(res.results[0].overview);
    return res.results[0].overview;
  },
  rateMovie : function (r) {
    // console.log(r.results[0].vote_average);
    return r.results[0].vote_average;
  }
};


 function gifsMovie (rs) {
    return rs.data[0].images.fixed_height_still.url;
  }

// window.module = {};
if (typeof module !== 'undefined') {
  module.exports = {
    movieFunctions:movieFunctions,
    gifsMovie:gifsMovie,
    castFunctions:castFunctions
  }
}
