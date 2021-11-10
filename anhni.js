let n = parseInt(prompt('n toog oruulna uu'));
let isPrime = true;
if (n === 1) {
    console.log("ontsgoi uy");
    isPrime = false;
} else {
    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log('anhnii too');
} else {
    console.log(' anhnii too bish');
}