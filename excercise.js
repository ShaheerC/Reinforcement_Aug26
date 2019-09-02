// 003111 # 3 = 1 + 1 + 1
// 813372 # 8 + 1 + 3 = 3 + 7 + 2
// 17935 # 1 + 7 = 3 + 5
// 56328116

const luckCheck = (str) => {
    let half = Math.ceil(str.length/2);
    let leftHalf = str.slice(0, half);
    let rightHalf = str.slice(half);

    console.log(leftHalf);
    console.log(rightHalf);

    if (!isNaN(str)) {
            let totalLeft = 0;
            for (let num of leftHalf) {
                totalLeft += +num;
            }
            let totalRight = 0;
            for(let num of rightHalf) {
                totalRight += +num;
            }
        if(totalLeft === totalRight) {
            return true;
        }else{
            return false;
        }

    }else{
        return "Please enter a valid string";
    }
};

console.log(luckCheck('003111'));
console.log(luckCheck('813372'));
console.log(luckCheck('17935'));
console.log(luckCheck('56328116'));
console.log(luckCheck('a281818'));