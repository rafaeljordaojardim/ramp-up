import ErrorHandling from "../errorHandling/error";

class RetryApi {
    public static async retry(fn, count = 1){
        try {
            let response = await fn();
            return response;
        } catch (error) {
            if(count <= 3){
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        console.log('Try ', count);
                        const funcToCall = RetryApi.retry(fn, ++count);
                        return resolve(funcToCall);
                    }, 3000 * count)
                })
            }else{
                throw new ErrorHandling(error, 404);
            }
        }
    }
}

export default RetryApi.retry;
