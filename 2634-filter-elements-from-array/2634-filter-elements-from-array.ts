type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    let answer = [];
    
    arr.map((num, i) => {
        if (fn(num, i)) {
            answer.push(num)
            }
    })
    
    return answer
};