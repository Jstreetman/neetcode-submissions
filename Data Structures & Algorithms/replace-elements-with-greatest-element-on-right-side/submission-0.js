class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */

    replaceElements(arr) {
                    let maxVal = -1;

        for(let i = arr.length -1; i >= 0; i--){
            let currentVal = arr[i]
            arr[i] = maxVal;
            maxVal = Math.max(maxVal, currentVal)           
        }
         return arr;
    }
}
