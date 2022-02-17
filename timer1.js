let timer = process.argv.slice(2);

for (let i = 0; i < timer.length; i++) {
  if(timer[i] > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timer[i] * 1000)
  }
}