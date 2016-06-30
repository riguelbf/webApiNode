import Hapi from 'hapi';
import CustomerRepository from '../repository/customerRepository.js';
import ReplyHelper from './helper/replyHelper.js';
import CustomerModel from '../domain/models/customerModel';

class CustomerController {

    constructor() {
    }

    login(request, reply) {

        let replyHelper = new ReplyHelper(request, reply);
        let params = null;//request.plugin.createControllerParams(request.params);
        let repository = new CustomerRepository();

        repository.login(params.userName, params.password, function (error, data) {
            replyHelper.login(error, data);
        });
    }

    findAll(request, reply) {

        var replyHelper = new ReplyHelper(request, reply);
        let repository = new CustomerRepository();
        repository.findAll(function (error, data) {
            replyHelper.findAll(error, data);
        });
    }

    add(request, reply) {

        let replyHelper = new ReplyHelper(request, reply);
        let model = new CustomerModel(request.payload.name, request.payload.password, request.payload.email);
        if (model == null) replyHelper.error("Incorrect parameters");

        let repository = new CustomerRepository();

        repository.add(model, function (error, data) {
            replyHelper.findAll(error, data);
        });
    }

};

export default CustomerController;
