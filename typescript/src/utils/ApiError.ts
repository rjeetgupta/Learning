import { StatusCodes } from "http-status-codes";

export class ApiError extends Error {
    constructor(
        public readonly statusCode: number,
        message: string,
        public readonly errors: unknown[] = [],
    ) {
        super(message);

        this.name = this.constructor.name;

        Error.captureStackTrace?.(this, this.constructor);
    }

    static badRequest(message = "Bad Request", errors: unknown[] = []) {
        return new this(StatusCodes.BAD_REQUEST, message, errors);
    }

    static unauthorized(message = "Unauthorized", errors: unknown[] = []) {
        return new this(StatusCodes.UNAUTHORIZED, message, errors);
    }

    static forbidden(message = "Forbidden", errors: unknown[] = []) {
        return new this(StatusCodes.FORBIDDEN, message, errors);
    }

    static notFound(message = "Resource not found", errors: unknown[] = []) {
        return new this(StatusCodes.NOT_FOUND, message, errors);
    }

    static conflict(message = "Conflict", errors: unknown[] = []) {
        return new this(StatusCodes.CONFLICT, message, errors);
    }

    static internal(message = "Internal Server Error", errors: unknown[] = []) {
        return new this(StatusCodes.INTERNAL_SERVER_ERROR, message, errors);
    }
}

export default ApiError;