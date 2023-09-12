function solution(N) {
    var next_power_of_2 = 1;
    for (var i = 1; i <= N; i++) {
        if (i == next_power_of_2) {
            next_power_of_2 *= 2;
            console.log("POWER");
        }
        else {
            console.log(i);
        }
    }
}
solution(16);
console.log("-----");
solution(7);
// move items from stack1, stack2, stack3 to stack4
// stack4 should have all items in descending order
// and all stacks will be sorted in ascending order
// for example:
// stack1 = [1, 2, 3, 4, 5]
// stack2 = [6, 7, 8, 9, 10]
// stack3 = [11, 12, 13, 14, 15]
// stack4 = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, ...]
// this should return a string of stack names in the order of which they are moved
// for example: "333332222211111"
// stack1, stack2, stack3 will be empty after the function is called
// stack4 will have all items in descending order
// another example:
// stack1 = [5,7]
// stack2 = [6,8]
// stack3 = [9,10]
// will return "332121"
function move_stack(stack1, stack2, stack3) {
    var totalLength = stack1.length + stack2.length + stack3.length;
    // Implement your solution here
    var stack4 = [];
    // 1. find the largest number in stack1, stack2, stack3
    // 2. move the largest number to stack4
    // 3. repeat until all stacks are empty
    var moves = "";
    while (stack4.length < totalLength) {
        var lastItems = [
            stack1[stack1.length - 1],
            stack2[stack2.length - 1],
            stack3[stack3.length - 1],
        ];
        if (lastItems[0] == undefined) {
            lastItems[0] = -Infinity;
        }
        if (lastItems[1] == undefined) {
            lastItems[1] = -Infinity;
        }
        if (lastItems[2] == undefined) {
            lastItems[2] = -Infinity;
        }
        var largest = Math.max.apply(Math, lastItems);
        if (largest == stack1[stack1.length - 1]) {
            stack4.push(stack1.pop());
            moves += "1";
        }
        else if (largest == stack2[stack2.length - 1]) {
            stack4.push(stack2.pop());
            moves += "2";
        }
        else if (largest == stack3[stack3.length - 1]) {
            stack4.push(stack3.pop());
            moves += "3";
        }
    }
    return moves;
}
console.log(move_stack([1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]));
console.log("-----");
console.log(move_stack([5, 7], [6, 8], [9, 10]));
console.log("-----");
console.log(move_stack([2, 7], [4, 5], [1]));
console.log("-----");
console.log(move_stack([10, 20, 30], [8], [1]));
console.log("-----");
console.log(move_stack([7], [], [9]));
