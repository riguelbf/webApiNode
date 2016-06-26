import CustomerController from '../controllers/customerController.js';

/**
 * Class for routes Customer model
 */
class CustomerRoute {

    constructor() {
        return this.routes();
    }

    routes() {

        const controller = new CustomerController();
        return [
            {
                method: 'POST',
                path: '/user/{user}',
                config: {
                    handler: controller.login,
                    validate: null
                }
            }
        ]

    }
};

export default CustomerRoute; 
