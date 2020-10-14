//Creating the number generator
export default function numGen() {
    let numbers = [null, null, null, null, null, null, null];
    let num;
    let i = 0;

    //Generate 7 numbers from 1 - 49 and append them to the numbers array.
    while (i < numbers.length) {
        num = Math.floor(1 + (Math.random() * 49));
        if (!numbers.includes(num)) {
            numbers[i] = num;
            i++
        }
    }

    numbers.sort(function(a,b) {return a - b})
    return numbers;
}
