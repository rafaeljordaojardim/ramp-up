import Auth from '../auth/auth';
import ErrorHandling from '../models/error/error';
import { STATUS_CODES } from 'http';
const auth = new Auth();

export default async (req, res, next) => {
    if (!req.headers.authorization) {
        next(new ErrorHandling(STATUS_CODES[401], 401));
    }
    try {
        const token = req.headers.authorization.replace('Bearer ', '');
        await auth.verifyTokenValid(token);
        next();
    } catch (error) {
        next(new ErrorHandling(STATUS_CODES[401], 401));
    }
}