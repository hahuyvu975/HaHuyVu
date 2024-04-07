// Cách 1
// Độ phức tạp: 
// Độ phức tạp thời gian: O(num) - Chạy từ 1 đến num do đó độ phức tạp thời gian là tuyến tính theo n.
// Độ phức tạp thời gian: O(1) - Hàm chỉ sử dụng một lượng không đổi bộ nhớ bổ sung bất kể giá trị của n.
function sum_to_n_a_way_1(num: number): number {
    let sum: number = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    };

    return sum;
}

// Cách 2
function sum_to_n_a_way_2(num: number): number {
    return (num * (num + 1))/ 2
}

// Cách 3
function sum_to_n_a_way_3(num: number): number {
    if(num === 0 ){
        return 0;
    };
    return num + sum_to_n_a_way_3(num - 1);
}

const num: number = 5;
console.log(sum_to_n_a_way_1(num));