import DbConnection from './dbConnection.js';

/**
 *  Class responsible for the persistence and search customer data
 */
class CustomerRepository extends DbConnection {

    /**
     * Authenticates the user
     * @param userName - Name of user
     * @param password - Password of user
     * @param callback - function reply of request
     */
    login(userName, password, callback) {
        let params = [
            userName,
            password
        ];

        let query = "SELECT * FROM CUSTOMER";
        let modelQuery = {
            sql: query,
            values: params,
            callback: callback
        };

        this.executeQuery(modelQuery);
    }

    /**
     * Get all customers
     * 
     * @param {function} callback
     */
    findAll(callback) {

        var userName = "";
        var password = "";

        let params = [
            userName,
            password
        ];

        let query = "SELECT * FROM CUSTOMER";
        let modelQuery = {
            sql: query,
            values: params,
            callback: callback
        };

        this.executeQuery(modelQuery);
    }

    /**
     *  Add customer
     * 
     * @param {CustomerModel} model
     * @param {function} callback
     */
    add(model, callback) {

        let query = "INSERT INTO Customer (`Name`, `Password`, `Email`) VALUES (?, ?, ?)";

        let params = [
            model.name,
            model.password,
            model.email
        ];

        let modelQuery = {
            sql: query,
            values: params,
            callback: callback
        };

        this.executeQuery(modelQuery);
    }

};

export default CustomerRepository;
