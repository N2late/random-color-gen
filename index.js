import chalk from 'chalk';
import prompt from 'prompt';
import randomColor from 'randomcolor';

const hue = process.argv[2];
const luminosity = process.argv[3];
let colorHex = randomColor({ luminosity: luminosity, hue: hue });
let color = chalk.hex(colorHex);

// if (process.argv[2] && process.argv[2].match(/\d{2}\x\d{,2}/)){
// missing the logic for this one

function printColorfulHashtags(hexColor, colorChalk, x = 31) {
  const hashtags = '#'.repeat(31);

  for (let i = 0; i < 3; i++) {
    console.log(colorChalk(hashtags));
  }

  console.log(color('#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5)));
  console.log(
    color(
      '#'.repeat(5) + ' '.repeat(7) + colorHex + ' '.repeat(7) + '#'.repeat(5),
    ),
  );
  console.log(color('#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5)));

  for (let i = 0; i < 3; i++) {
    console.log(colorChalk(hashtags));
  }
}

function onErr(err) {
  console.log(err);
  return 1;
}

if (hue === 'ask') {
  prompt.start();
  prompt.get(['color', 'luminosity'], function (err, result) {
    if (err) {
      return onErr(err);
    }
    colorHex = randomColor({
      luminosity: result.luminosity,
      hue: result.color,
    });
    color = chalk.hex(colorHex);
    printColorfulHashtags(colorHex, color);
  });
} else {
  printColorfulHashtags(colorHex, color);
}
