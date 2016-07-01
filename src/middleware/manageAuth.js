import CustomerRepository from '../repository/customerRepository';
import Bcrypt from 'bcrypt';

class ManageAuth {

    authentication(request, username, password, callback) {

        let repository = new CustomerRepository();
        let customer = repository.login(username, password, function (err, customer) {

            if (err) return callback(err, false);
            callback(err, true, { id: customer.idCustomer, name: customer.name });
        });
    }
};

export default ManageAuth;