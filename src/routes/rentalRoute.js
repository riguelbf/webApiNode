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
            },
            {
                method: 'POST',
                path: '/delivery',
                config: {
                    handler: controller.delivery,
                    validate: null
                }
            },
            {
                method: 'POST',
                path: '/rental',
                config: {
                    handler: controller.rental,
                    validate: null
                }
            }
        ]

    }
};

export default RentalRoute; 
