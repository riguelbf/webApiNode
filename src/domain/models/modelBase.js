import Joi from 'joi';


/**
 * Model for validate all instances
 */
class ModelBase {

    validateModel(model, schema) {
        return true;
        Joi.validate('validation',schema, models, function (err, value) {
            return err == null;
        });  // err === null -> valid
    }

};

export default ModelBase;