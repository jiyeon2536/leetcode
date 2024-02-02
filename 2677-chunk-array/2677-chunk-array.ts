type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    const arrLen = arr.length
    const arrToMake = Math.ceil(arrLen / size)
    let idx = 0;
    let answer = []
    
    while (idx < arrLen) {
        let newArr = []
        for (let i = 0; i < size; i++) {
            
            if (arr[idx] != null) {
            newArr.push(arr[idx])
            idx ++
            }
        }
        answer.push(newArr)
    }
    
    return answer
};
