import DbConnection from 'dbConnection.js';

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

};

export default CustomerRepository;
