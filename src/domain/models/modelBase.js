import Joi from 'joi';

class ModelBase {

    validate(model, schema) {
        Joi.validate(model, schema, function (err, value) { });  // err === null -> valid
    }

};

export default ModelBase;