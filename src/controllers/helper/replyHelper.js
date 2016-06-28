import Hapi from 'hapi';
import Boom from 'boom';

const CODE_NO_CONTENT = 204;
const CODE_OK = 200;
const CODE_UNAUTHORIZED = 401;
const CODE_NOT_FOUND = 404;
const CODE_INTERNAL_SERVER_ERROR = 500;

/**
 * Private method for exceptions
 * @param reply - request in
 * @param error - exception
 */
function responseError(reply, error) {
    reply(Boom.badImplementation(error));
}

/**
 * Assistant answers the requests 
 */
class ReplyHelper {
    constructor(request, reply) {
        this.request = request;
        this.reply = reply;
    }

    findOne(error, data) {
        if (error) return responseError(this.reply, error);

        if (data[0]) {
            this.reply(data[0]).type('application/json');
        } else {
            this.reply().code(CODE_NOT_FOUND);
        }
    }

    findAll(error, data) {
        if (error) return responseError(this.reply, error);
        var response = this.reply(data).hold();
        response.type('application/json').send();
    }

    add(error, data) {
        if (error) return responseError(this.reply, error);
        this.reply().code(CODE_OK);
    }

    login(error, data) {
        if (error) return error(this.reply, error);
        this.reply().code(CODE_OK);
    }
};

export default ReplyHelper;