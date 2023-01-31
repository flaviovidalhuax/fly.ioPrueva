//? Este archivo tendra funciones que hagan acciones a la base de datos (tienen que retornar una promesa)

const moviesDB = []
let baseId = 1

const findAllMovies = async () => {
    return await moviesDB
}

//* findAllMovies()


const findMovieById = async (id) => {
    const filteredMovie = await moviesDB.find(movie => movie.id === id) 
    return filteredMovie
}

//* findMovieById(3)


const createNewMovie = async (movieObj) => {
    const newMovie = {
        id: baseId++,
        title: movieObj.title,
        synopsis: movieObj.synopsis,
        director: movieObj.director,
        year: movieObj.year
    }

    await moviesDB.push(newMovie)

    return newMovie
}

//* createNewMovie({
//*     title: 'Harry Potter',
//*     synopsis: 'Un maguito guay',
//*     director: 'JK',
//*     year: 2007
//* })

module.exports = {
    findAllMovies,
    findMovieById,
    createNewMovie,
}
