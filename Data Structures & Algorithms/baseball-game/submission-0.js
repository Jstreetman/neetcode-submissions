class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let scores = [];
        let total = 0;

        for(const op of operations){
            if(op === "+"){
                scores.push(scores[scores.length -1] + scores[scores.length -2])
                // scores[scores.length -1] + scores[scores.length -2].push();
            }
           else if(op === "D"){
                scores.push(2*scores[scores.length -1])
            }
           else if(op === "C"){
                scores.pop();
            }
            else{
                scores.push(parseInt(op))
            }
        }
        for(let i = 0; i < scores.length; i++){
            total += scores[i]
        }
        return total
    }

}
