let movie1 = {
    name: "Conjuring",
    src: "https://musicart.xboxlive.com/7/60ce1000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
}

let movie2 = {
    name: "Insidious",
    src: "https://m.media-amazon.com/images/M/MV5BMjdlZjI4YTEtNjgzZi00NTA1LWIwZWYtMDc0MzhjOWNlYjcxXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
}

let movie3 = {
    name: "Annabelle: Creation",
    src: "https://flxt.tmsimg.com/assets/p12742365_p_v10_az.jpg"
}

let movies =[];
movies.push(movie1,movie2,movie3);

let movieContainer = document.getElementById("container");

movies.forEach((movie) => { 
    movieContainer.innerHTML += `
 <div class="movie">
 <img src="${movie.src}" alt="movie picture" />
 <h2>${movie.name}</h2>
 </div>
`;

});