import RentalController from '../controllers/rentalController.js';

/**
 * Class for routes requests of Rental model
 */
class RentalRoute {

    constructor() {
        return this.routes();
    }

    routes() {

        const controller = new RentalController();
        return [
            {
                method: 'GET',
                path: '/rental',
                config: {
                    handler: controller.findAll,
                    validate: null
                }
            }
        ]

    }
};

export default RentalRoute; 
