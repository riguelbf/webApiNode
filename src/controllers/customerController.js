import Hapi from 'hapi';
import CustomerRepository from '../repository/customerRepository.js';
import ReplyHelper from './helper/replyHelper.js';

class CustomerController {

    login(request, reply) {

        var replyHelper = new ReplyHelper(request, reply);
        var repository = new CustomerRepository();
        var params = request.plugin.createControllerParams(request.params);

        repository.login(params.userName, params.password, function (error, data) {
            replyHelper.login(error, data);
        });
    }

    findAll(request, reply) {

        var replyHelper = new ReplyHelper(request, reply);
        var repository = new CustomerRepository();
        //var params = request.plugins.createControllerParams(request.query);

        repository.findAll(function (error, data) {
            replyHelper.findAll(error, data);
        });
    }

};

export default CustomerController;
