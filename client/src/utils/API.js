import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
// export default {
//   getRecipes: function(query) {
//     return axios.get("/api/recipes", { params: { q: query } });
//   }
// };

export default {
  searchTerms: function(query) {
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" + query
    );
  }
};

// + "&key=AIzaSyC87PjbAsexWmHEd40H6y4QbGTytNGeMKE
