import Hapi from 'hapi';
import RentalRepository from '../repository/rentalRepository.js';
import ReplyHelper from './helper/replyHelper.js';
import RentalModel from '../domain/models/rentalModel.js';

class RentalController {

    constructor() {

    }

    findAll(request, reply) {

        var replyHelper = new ReplyHelper(request, reply);
        let repository = new RentalRepository();
        repository.findAll(function (error, data) {
            replyHelper.findAll(error, data);
        });
    }

    delivery(request, reply) {

        var replyHelper = new ReplyHelper(request, reply);
        let repository = new RentalRepository();
        let idRental = request.params.idRental;
        repository.delivery(idRental, function (error, data) {
            replyHelper.findAll(error, data);
        });
    }

    rental(request, reply) {
        
        var replyHelper = new ReplyHelper(request, reply);
        let repository = new RentalRepository();
        let model = new RentalModel(request.payload.idMovie, request.payload.idCustomer);
        repository.rental(model, function (error, data) {
            replyHelper.findAll(error, data);
        });
    }

};

export default RentalController;
