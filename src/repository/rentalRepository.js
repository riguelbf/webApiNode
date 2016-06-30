import DbConnection from './dbConnection.js';

/**
 *  Class responsible for the persistence and search rentals data
 */
class RentalRepository extends DbConnection {

    /**
     * Geal all rentals
     * 
     * @param {function} callback
     */
    findAll(callback) {

        let query = "SELECT * FROM Rental";
       
        let modelQuery = {
            sql: query,
            values: null,
            callback: callback
        };

        this.executeQuery(modelQuery);
    }
};

export default RentalRepository;
