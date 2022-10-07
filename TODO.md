- [x] setup db
- [x] install dependencies 

### Home / List page
- [x] displays all movies
- [] onClick sends to `/details` view for movie clicked
### MovieDetails comp
- [] Create Component - `MovieDetails.jsx`
- [] create Route to componnent in App.jsx
- [] dispatch to fetchMovies saga type : `SET_MOVIES` 
- [] GET movie from "/api/movie" from server
- [] put dispatch type : `SET_MOVIES`
- [] render with useSelector store => store.movie

 [x] Display all movies
- [ ] When a movie is clicked on, log that movie to console.
- [ ] Dispatch that movie to a reducer (selectedMovie reducer).
- [ ] Navigate (history.push) to the /detail page.
- [ ] Display the selected movie on the /detail page.
- [ ] On the detail page, dispatch an action to GET movies
- [ ] Saga that makes a GET request for genres.
- [ ] Saga sends genres to a reducer.