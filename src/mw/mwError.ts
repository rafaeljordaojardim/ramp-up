//just to receive a error and send that to the user
export default (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ message:err.message, status: err.status || 500 });
}