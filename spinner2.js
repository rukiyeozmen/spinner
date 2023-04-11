//process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spin = ["\r|", "\r/", "\r-", "\r\\", "\r/", "\r-", "\r\\", "\r| "];
let delay = 0;
for (let s of spin) {
  setTimeout(() => {
    process.stdout.write(s);
  }, delay += 300);
}


