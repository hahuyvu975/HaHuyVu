// Way 1
// Complexity::
// Time Complexity: O(num) - The function iterates from 1 to n, resulting in linear time complexity.
// Space Complexity:  O(1) - The function uses constant space regardless of the input n.
function sum_to_n_a_way_1(num: number): number {
  let sum: number = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
}

// Way 2
function sum_to_n_a_way_2(num: number): number {
  return (num * (num + 1)) / 2;
}

// Way 3
function sum_to_n_a_way_3(num: number): number {
  if (num === 0) {
    return 0;
  }
  return num + sum_to_n_a_way_3(num - 1);
}

const num: number = 5;
console.log(sum_to_n_a_way_1(num));
