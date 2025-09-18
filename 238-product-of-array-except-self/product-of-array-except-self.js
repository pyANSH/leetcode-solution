function productExceptSelf(nums) {
    const n = nums.length;
    const arr = new Array(n).fill(1);
    let p = 1;
    for (let i = 0; i < n; i++) {
        arr[i] = p;
        p *= nums[i];
    }
    let s = 1;
    for (let j = n - 1; j > -1; j--) {
        arr[j] *= s;
        s *= nums[j];
    }

    return arr;
}