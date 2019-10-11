import Token from "../db/schemas/Token"
import jwt from 'jsonwebtoken';

const passInTheBdToExcludeInvalidToken = async () => {
    console.log('Monitoring bd');
    const userTokens = await Token.find();
    if (userTokens) {
       for (const userToken of userTokens) {
            jwt.verify(userToken.token, 'secretKey', (err, decoded) => {
                if (!decoded) {
                    Token.findOneAndDelete({email:userToken.email}, (err, doc) =>{
                        console.log(doc, "deleted");
                    });
                }
            });
       }
    }
}
export default setInterval(passInTheBdToExcludeInvalidToken, 5000);

