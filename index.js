import chalk from 'chalk';
import prompt from 'prompt';
import randomColor from 'randomcolor';

const hue = process.argv[2];
const luminosity = process.argv[3];
let colorHex = randomColor({ luminosity: luminosity, hue: hue });
let color = chalk.hex(colorHex);

function printColorfulHashtags(hexColor, colorChalk, x = 31) {
  const hashtags = [];

  for (let i = 0; i < x; i++) {
    hashtags.push('#');
  }

  for (let i = 0; i < 3; i++) {
    console.log(colorChalk(hashtags.join('')));
  }

  console.log(color('#####                     #####'));
  console.log(color(`#####      ${hexColor}        #####`));
  console.log(color('#####                     #####'));

  for (let i = 0; i < 3; i++) {
    console.log(colorChalk(hashtags.join('')));
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
