//Number generator for the Daily Grand

export default function DailyGen() {
    const grandNum = Math.floor((Math.random() * 7) + 1);
    let dailyNums = [null, null, null, null, null];
    let i = 0;
    let num;

    while (i < dailyNums.length) {
        num = Math.floor((Math.random() * 49) + 1);

        if (!dailyNums.includes(num)) {
            dailyNums[i] = num;
            i++;
        }
    }

    dailyNums.sort(function (a, b) { return a - b })
    dailyNums.push(grandNum);
    
    return dailyNums;
};


