// import { fakeNetwork } from "./utils.js";
import { getCookie } from "./utils.js";


export async function fetchMoviesData() {
    let answer = await fetch("http://localhost:8080/api/movies");
    let data = await answer.json();
    return data;
}

export async function fetchMoviesFeatured() {
    let answer = await fetch("http://localhost:8080/api/movies/featured");
    let data = await answer.json();
    return data;
}

export async function fetchCategoriesData() {
    let answer = await fetch("http://localhost:8080/api/categories");
    let data = await answer.json();
    return data;
}

export async function fetchMovieData(movie) {
    let answer = await fetch(`http://localhost:8080/api/movie/${movie}`);
    let data = await answer.json();
    return data;
}

export async function fetchCategorieData(categorie) {
    let answer = await fetch(`http://localhost:8080/api/category/${categorie}`);
    let data = await answer.json();
    return data;
}

export async function fetchWatchList(id_user) {
    let answer = await fetch(`http://localhost:8080/api/watchlist/user/${id_user}`);
    let data = await answer.json();
    return data;
}


// export async function fetchUserConnected() {
//     let answer = await fetch("http://localhost:8080/api/user", {credentials: 'include'});
//     if(answer.redirected===true){
//         return window.location.href =  answer.url;
//     } else {
//         let data = await answer.json();
//         return data;
//     }

// } 

// export function ProtectedRoute({ children }) {
//   const user = getCookie('user');

//   if (!user) {
//     return <Redirect to="/login" />;
//   }

//   return children;
// }