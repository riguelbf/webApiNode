import Hapi from 'hapi';
import MovieRepository from '../repository/movieRepository.js';
import ReplyHelper from './helper/replyHelper.js';
import MovielModel from '../domain/models/movieModel.js';

class MovieController {

    constructor() {

    }

    findAll(request, reply) {

        var replyHelper = new ReplyHelper(request, reply);
        let repository = new MovieRepository();
        repository.findAll(function (error, data) {
            replyHelper.findAll(error, data);
        });
    }

    findByTitle(request, reply) {

        var replyHelper = new ReplyHelper(request, reply);
        let repository = new MovieRepository();
        let movieName = request.params.movieName;
        repository.findByTitle(movieName, function (error, data) {
            replyHelper.findAll(error, data);
        });
    }

};

export default MovieController;
