type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    const length = nums.length
    
    if (length === 0) {
        return init
        }
    
    let accum = init
    
    nums.map((num) => {
        accum = fn(accum, num)
    })
    return accum
};