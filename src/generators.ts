export function* arithmaticGen(start: number, commonDiff: number): Generator<number, undefined, undefined> {
    for (let i = start; ; i += commonDiff) {
        yield i;
    }
}

export function* geometricGen(start: number, commonRatio: number): Generator<number, undefined, undefined> {
    for (let i = start; ; i *= commonRatio) {
        yield i;
    }
}

