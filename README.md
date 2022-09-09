# random-color-gen

When a user enters `node index.js` in the command line, a block of approximately 31x9 `#` characters colored with a random color (using hex code, e.g. `#ff0000`) will be generated.

###Example:

![Screen Shot 2020-09-09 at 15 53 33](https://user-images.githubusercontent.com/1935696/92607675-b56bd700-f2b4-11ea-9085-67af9369fa71.png)

In addition to `node index.js`, it should also be able to accept the request for a:

- hue (e.g. green or red or blue)
- luminosity (e.g. light or dark)

...and then generate random colors that match those choices.

###Example:

![Screen Shot 2020-09-09 at 15 54 42](https://user-images.githubusercontent.com/1935696/92607766-daf8e080-f2b4-11ea-9d6d-3bd8501da443.png)

If a user types "ask" instead of a color name, print questions to ask the user for the name of the color and the luminosity.
