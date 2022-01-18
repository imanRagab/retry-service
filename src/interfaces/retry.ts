export default interface Retry<T> {
    (asyncFn: () => Promise<T>, attemptsLimit: number, delayGenerator:
   Generator<number, undefined, undefined>): Promise<T>
}