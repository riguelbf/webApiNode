import Joi from 'joi';
import ModelBase from './modelBase.js';

/**
 * Schema of rental table for validate entity
 */
var schema = Joi.object().keys({
    idRental: Joi.number().integer(),
    idMovie: Joi.number().integer(),
    idCustomer: Joi.number().integer(),
    delivery: Joi.boolean()
});

/**
 * Model responsible of rental table
 */
class RentalModel extends ModelBase {

    constructor(idRental, idMovie, idCustomer, delivery = false) {
        super();

        let model = {
            idRental,
            idMovie,
            idCustomer,
            delivery
        }

        const isValid = super.validateModel(model, schema);
        if (isValid) return model;

        return null;
    };

};

export default RentalModel;
