import jwt from 'jsonwebtoken';
import Users from "../models/users.models.js";

const validateAuthentication = async (req) => {

    const token = req.headers.authorization;
    try {
        const session = await jwt.verify(token, process.env.SECRET);
    
        return {
            user: session.user,
        }
    } catch (error){
        return {
            errorMessage: error.message,
        }
    }
};

export default validateAuthentication;
