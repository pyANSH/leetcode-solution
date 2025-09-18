function productExceptSelf(nums) {
    const length = nums.length
    const arr = new Array(length).fill(1);
    let p = 1
    let s = 1;
    for (let i = 0; i < length; i++) {
        arr[i] = p;
        p *= nums[i];
    }
    for (let j = length - 1; j > -1; j--) {
        arr[j] *= s
        s *= nums[j]
    }

    return arr;
}