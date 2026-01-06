const asyncHandler = (fn) => {
    // console.log(fn)
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    }
}

export default asyncHandler;
