import Joi from 'joi';
import ModelBase from './modelBase.js';


/**
 * Schema of customer table
 */
var schema = Joi.object().keys({
    idCustomer: Joi.number().integer(),
    name: Joi.string().min(1).max(50),
    password: Joi.string().min(1).max(50),
    email: Joi.string().email()
});

/**
 * Model responsible of customer table
 */
class CustomerModel extends ModelBase {

    constructor(name, password, email, idCustomer = 0) {
        super();

        let model = {
            idCustomer: idCustomer,
            name: name,
            password: password,
            email: email
        };
 
        const isValid = super.validateModel(model, schema);
        if (isValid) return model;

        return null;
    }
};

export default CustomerModel;
