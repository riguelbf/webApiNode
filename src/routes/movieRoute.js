import MovieController from '../controllers/movieController.js';

/**
 * Class for routes requests of movie model
 */
class MovieRoute {

    constructor() {
        return this.routes();
    }

    routes() {

        const controller = new MovieController();
        return [
            {
                method: 'GET',
                path: '/movie',
                config: {
                    handler: controller.findAll,
                    validate: null
                }
            },
            {
                method: 'GET',
                path: '/movie/findByTitle/{movieName}',
                config: {
                    handler: controller.findByTitle,
                    validate: null
                }
            },
            {
                method: 'GET',
                path: '/movie/available',
                config: {
                    handler: controller.findAvailable,
                    validate: null
                }
            }

        ]

    }
};

export default MovieRoute; 
