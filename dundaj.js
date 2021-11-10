let N = parseInt(prompt('heden too'));

let sum = 0;
for (let i = 0; i < N; i++) {
    sum += parseInt(prompt((i + 1) + ' dahi toog oruul'));
}

console.log(sum / N);