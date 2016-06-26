import CustomerController from '../controllers/customerController.js';

/**
 * Class for routes Customer model
 */
class CustomerRoute {

    constructor() {
        return this.routes();
    }

    routes() {
        return [
            {
                method: 'POST',
                path: '/user/{user}',
                config: {
                    handler: userController.findByID,
                    validate: taskValidate.findByID
                }
            }
        ]

    }
};

export default CustomerRoute; 
