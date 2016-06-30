import DbConnection from './dbConnection.js';

/**
 *  Class responsible for the persistence and search movie data
 */
class MovieRepository extends DbConnection {

    /**
     * Geal all movies
     * 
     * @param {function} callback
     */
    findAll(callback) {

        let query = "SELECT * FROM Movie";

        let modelQuery = {
            sql: query,
            values: null,
            callback: callback
        };

        this.executeQuery(modelQuery);
    }

    /**
     * Get all movies by title 
     * 
     * @param {string} movieName
     * @param {function} callback
     */
    findByTitle(movieName, callback) {

        let query = "SELECT * FROM Movie WHERE title LIKE ?";

        let params = [
            '%' + movieName + '%'
        ];

        let modelQuery = {
            sql: query,
            values: params,
            callback: callback
        };

        this.executeQuery(modelQuery);
    }

    /**
     * Search all movies available in rental movie
     * 
     * @param {function} callback
     */
    findAvailable(callback) {

        let query = "SELECT *  FROM movie WHERE Copy_Number > (SELECT COUNT(idmovie) FROM rental WHERE delivery = 0 AND idmovie = movie.idMovie)";

        let modelQuery = {
            sql: query,
            values: null,
            callback: callback
        };

        this.executeQuery(modelQuery);
    }
};

export default MovieRepository;
