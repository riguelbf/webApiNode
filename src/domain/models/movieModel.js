import Joi from 'joi';
import ModelBase from './modelBase.js';

/**
 * Schema of movie table for validate entity
 */
var schema = Joi.object().keys({
    idMovie: Joi.number().integer(),
    title: Joi.string().min(1).max(150),
    director: Joi.string().min(1).max(100),
    copyNumber: Joi.number().integer()
});

/**
 * Model responsible of movie table
 */
class MovieModel extends ModelBase {

    constructor(title, director, copyNumber, idMovie = 0) {
        super();

        let model = {
            idMovie,
            title,
            director,
            copyNumber
        }

        const isValid = super.validateModel(model, schema);
        if (isValid) return model;

        return null;
    };
};

export default MovieModel;
