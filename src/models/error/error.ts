class ErrorHandling extends Error {
    public status:number;
    public message:string
    constructor(message:string, status:number){
        super();
        this.message = message;
        this.status = status;
    }
}

export default ErrorHandling;