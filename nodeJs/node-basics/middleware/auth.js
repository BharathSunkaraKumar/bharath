export const auth = (req, res, next) => {
    console.log(req.method, req.url);
    console.log("admin")
    next();
}