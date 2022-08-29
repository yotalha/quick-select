
const partition = (arr, l, h) => {
    let pivot = arr[h]
    let i = l
    for(let j = l; j <= h; j++){
        if(arr[j] < pivot){
            [arr[j], arr[i]] = [arr[i], arr[j]]
            i++
        }
    }
    // swapping i + 1 and p => last element in array
    [arr[i], arr[h]] = [arr[h], arr[i]]
    return i
}



const qs = (arr, l, h, k) => {
    let p = partition(arr, l, h)
    if(p == k - 1)
        return arr[p]
    else if(p < k - 1)
        return qs(arr, p + 1, h, k)
    else
        return qs(arr, l, p - 1, k)
}

const driver = () => {
    const arr = [7, 10, 4, 3, 20, 15]
    const k = 3
    const ans = qs(arr, 0, arr.length-1, k)
    console.log('Answer: ', ans)
}

driver()


