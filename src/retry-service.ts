import Retry from './interfaces/retry';

const retry: Retry<{data: Array<string>}> = (asyncFn, attemptsLimit, delayGenerator) => {
    return new Promise(async (resolve, reject) => {
        try {
            resolve(await asyncFn());
        } catch (err) {
            if (attemptsLimit == 1) {
                reject(err)
            } else {
                setTimeout(function () {
                    resolve(retry(asyncFn, attemptsLimit - 1, delayGenerator));
                }, delayGenerator.next().value * 1000);
            }
        }
    });
}

export default retry;