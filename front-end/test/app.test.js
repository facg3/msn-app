var app = require('../js/app.js');
var test = require('tape');
var responseGifs = {
  data: [{
    type: "gif",
    id: "JQtjrjz75ttYY",
    slug: "sundays-JQtjrjz75ttYY",
    url: "https://giphy.com/gifs/sundays-JQtjrjz75ttYY",
    bitly_gif_url: "https://gph.is/19VVSD6",
    bitly_url: "https://gph.is/19VVSD6",
    embed_url: "https://giphy.com/embed/JQtjrjz75ttYY",
    username: "",
    source: "https://www.gifbay.com/gif/me_at_sundays-47486/",
    rating: "g",
    content_url: "",
    source_tld: "www.gifbay.com",
    source_post_url: "https://www.gifbay.com/gif/me_at_sundays-47486/",
    is_indexable: 0,
    import_datetime: "2013-10-03 00:45:46",
    trending_datetime: "2016-07-17 19:15:01",
    images: {
      fixed_height_still: {
        url: "https://media3.giphy.com/media/JQtjrjz75ttYY/200_s.gif",
        width: "299",
        height: "200"
      },
      original_still: {
        url: "https://media3.giphy.com/media/JQtjrjz75ttYY/giphy_s.gif",
        width: "500",
        height: "335"
      }
    }
  }]
};
var responseName = {
  id: 550,
  cast: [{
      cast_id: 4,
      character: "The Narrator",
      credit_id: "52fe4250c3a36847f80149f3",
      gender: 2,
      id: 819,
      name: "Edward Norton",
      order: 0,
      profile_path: "/eIkFHNlfretLS1spAcIoihKUS62.jpg"
    },
    {
      cast_id: 5,
      character: "Tyler Durden",
      credit_id: "52fe4250c3a36847f80149f7",
      gender: 2,
      id: 287,
      name: "Brad Pitt",
      order: 1,
      profile_path: "/ejYIW1enUcGJ9GS3Bs34mtONwWS.jpg"
    },
    {
      cast_id: 7,
      character: "Robert 'Bob' Paulson",
      credit_id: "52fe4250c3a36847f80149ff",
      gender: 2,
      id: 7470,
      name: "Meat Loaf",
      order: 2,
      profile_path: "/43nyfW3TxD3PxDqYB8tyqaKpDBH.jpg"
    },
    {
      cast_id: 30,
      character: "Angel Face",
      credit_id: "52fe4250c3a36847f8014a51",
      gender: 2,
      id: 7499,
      name: "Jared Leto",
      order: 3,
      profile_path: "/8qBnLfC6O360rnXSyVYniWYUxhx.jpg"
    },
    {
      cast_id: 6,
      character: "Marla Singer",
      credit_id: "52fe4250c3a36847f80149fb",
      gender: 1,
      id: 1283,
      name: "Helena Bonham Carter",
      order: 4,
      profile_path: "/rHZMwkumoRvhKV5ZvwBONKENAhG.jpg"
    }
  ]
}
var responseID = {
page:1,
results:[{
adult:false,
backdrop_path:"/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg",
genre_ids:[18],
id:550,
original_language:"en",
original_title:"Fight Club",
overview:"A ticking",
popularity:48.418775,
poster_path:"/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg",
release_date:"1999-10-15",
title:"Fight Club",
video:false,
vote_average:8.3,
vote_count: 10152
}]
}

test('gifs Movie', function(t) {
  var actual = app.gifsMovie(responseGifs);
  var expected = 'https://media3.giphy.com/media/JQtjrjz75ttYY/200_s.gif';
  t.deepEqual(actual, expected, 'TEST GIF FUN PASS');
  t.end();
});

test('Name Movie', function(t) {
  var actual = app.castFunctions.topcasts(responseName);
  var expected = ["Edward Norton", "Brad Pitt", "Meat Loaf", "Jared Leto", "Helena Bonham Carter"];;
  t.deepEqual(actual, expected, 'TEST NAME ACTORS PASS');
  t.end();
});

test('ID Movie', function(t) {
  var actual = app.movieFunctions.idMovie(responseID);

  var expected = 550;
  t.deepEqual(actual, expected, 'TEST ID MOVIES PASS');
  t.end();
});

test('PHOTO Movie', function(t) {
  var actual = app.movieFunctions.photoMovie(responseID);

  var expected = '/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg';
  t.deepEqual(actual, expected, 'TEST PHOTO MOVIES PASS');
  t.end();
});

test('OVERVIE Movie', function(t) {
  var actual = app.movieFunctions.ovMovie(responseID);

  var expected = 'A ticking';
  t.deepEqual(actual, expected, 'TEST OVERVIE MOVIES PASS');
  t.end();
});
test('RATE Movie', function(t) {
  var actual = app.movieFunctions.rateMovie(responseID);

  var expected = 8.3;
  t.deepEqual(actual, expected, 'TEST RATE MOVIES PASS');
  t.end();
});
