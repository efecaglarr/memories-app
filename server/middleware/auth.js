import jwt from "jsonwebtoken";

const secret = 'test';

const auth = async (req, res, next) => {
  try {

    const token = req.headers.authorization

    if (token) {
        const tokenParts = token.split(" ")
        const isCustomAuth = token.length < 500;
        if (tokenParts.length === 2) {
            const token = tokenParts[1];
            
            let decodedData;

            if (isCustomAuth) {      
              decodedData = jwt.verify(token, secret);
        
              req.userId = decodedData?.id;
            } else {
              decodedData = jwt.decode(token);
        
              req.userId = decodedData?.sub;
            }    
        }
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;