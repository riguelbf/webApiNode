import Joi from 'joi';
import ModelBase from 'modelBase.js';


/**
 * Schema of customer table
 */
const schema = Joi.object().keys({
    idCustomer: Joi.number().integer(),
    name: Joi.string().min(0).max(150),
    password: Joi.string().min(0).max(50),
    email: Joi.string().min(0).max(150)
});

/**
 * Model responsible of customer table
 */
class CustomerModel extends ModelBase {

    constructor(id = 0, name, password, email) {

        const model = {
            idCustomer: id,
            name: name,
            password: password,
            email: email
        };

        const isValid = validate(model, schema);

        if (isValid) return model;
    }
};

export default CustomerModel;
