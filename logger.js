let count = 0;

export function logger (req, res, next) {
    count++;
    console.log(count);
    next();
}