import { statusCode } from '../constants/statusCodes.js';
import { userSchema } from '../schema/userSchema.js';

export const validateUser = (req, res, next) => {
    const user = req.body;
    const { error } = userSchema.validate(user);
    if (error) {
        res.status(statusCode.BadRequest).json({ message: error.details[0].message });
        return;
    }
    next();
};