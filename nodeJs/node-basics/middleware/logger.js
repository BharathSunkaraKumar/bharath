export const logger = (req, res, next) => {
  console.log(req.method, req.url);
//   console.log("next", next)
  next()
}