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
                path: '/login',
                config: {
                    handler: controller.login,
                    validate: null
                }
            },
            {
                method: 'POST',
                path: '/user/add',
                config: {
                    handler: controller.add
                }
            }
        ]

    }
};

export default CustomerRoute; 
