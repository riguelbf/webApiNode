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

    /**
     * Register rental movie by customer
     * 
     * @param {object} model of rental
     * @param {function} callback
     */
    rental(model, callback) {

        let query = "INSERT INTO Rental (`idMovie`, `idCustomer`, `Delivery`) VALUES (?, ?, ?)";

        let params = [
            model.idMovie,
            model.idCustomer,
            model.delivery
        ];

        let modelQuery = {
            sql: query,
            values: params,
            callback: callback
        };

        this.executeQuery(modelQuery);
    }

    /**
     * Register delivery movie
     * 
     * @param {integer} idRental
     * @param {function} callback
     */
    delivery(idRental, callback) {

        let query = "UPDATE `rental` SET `Delivery`='1' WHERE `idRental`=?";

        let params = [
            "'"+idRental+"'"
        ];

        let modelQuery = {
            sql: query,
            values:  params,
            callback: callback
        };

        this.executeQuery(modelQuery);
    }
};

export default RentalRepository;
