function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let answer = []
    const length = arr.length
    for (let i = 0; i < length; i++) {
        answer.push(fn(arr[i], i))
    }
    return answer
};