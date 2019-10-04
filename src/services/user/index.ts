

class UserService {
    constructor() {
        
    }

    sendHello = (req, res) => {
        console.log(JSON.stringify(req));
        const mensagem = req.params.hello; 
        return mensagem;
    }
}

export default UserService;