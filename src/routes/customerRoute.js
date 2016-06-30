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
                path: '/login/{user}',
                config: {
                    handler: controller.login,
                    validate: null
                }
            },
            {
                method: 'GET',
                path: '/user',
                config: {
                    handler: controller.findAll
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
