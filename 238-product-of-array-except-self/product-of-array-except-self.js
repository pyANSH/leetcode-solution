function productExceptSelf(nums) {
    const arr = new Array(nums.length).fill(1);
    const length = nums.length
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