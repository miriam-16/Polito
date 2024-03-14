# Film Library

In this exercise, you will implement a simple application to track the films that a person wants to watch and the ones they have already watched. Each film is represented by the following fields:
- A unique numerical id (mandatory)
- A title (mandatory)
- A Boolean value to represent whether the film is among the person’s favorites (default value: false)
- A date corresponding to the date when the person watched the film (optional)
- A numerical value between 1 and 5 to represent the rating that the person has given to the film after
watching it (optional)
- A numerical id representing the person (mandatory, default to 1).

Firstly, implement a constructor function to create Film objects.

Secondly, implement a constructor function to create a FilmLibrary, an object containing an array of Films.

Then, implement the addNewFilm method, which adds a new Film object, passed as parameter, to the FilmLibrary. Populate the FilmLibrary using this method.

To conclude, print in the console the entire list of Films stored in the FilmLibrary, with all their fields.

For instance, you can take inspiration from the following list:
```
Id: 1, Title: Pulp Fiction, Favorite: true, Watch date: March 10, 2024, Score: 5, User: 1
Id: 2, Title: 21 Grams, Favorite: true, Watch date: March 17, 2024, Score: 4, User: 1
Id: 3, Title: Star Wars, Favorite: false, Watch date: null, Score: 0, User: 1
Id: 4, Title: Matrix, Favorite: false, Watch date: null, Score: 0, User: 1
Id: 5, Title: Shrek, Favorite: false, Watch date: March 21, 2024, Score: 3, User: 1
```

Hint: you may use the day.js library to create and handle the dates.
Hint: To implement the required functionalities described above you may use the functional programming paradigm to manipulate the array of films.