
// in films.js
let filmsByRatings
if(ratingRange == "91-100"){
  filmsByRatings = this.films.filter(film => (film.rt_score >= 91))
}
else if(ratingRange == "81-90"){
  filmsByRatings = this.films.filter(film => film.rt_score >=81 && film.rt_score <=90)
}
else if(ratingRange == "71-80"){
  filmsByRatings = this.films.filter(film => film.rt_score >=71 && film.rt_score <=80)
}
else {
  filmsByRatings = this.films.filter(film => film.rt_score >=1 && film.rt_score <=70)
}


PubSub.publish('Film:films-ready', filmsByRatings)
});
}
