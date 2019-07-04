# Node CLI Boilerplate

This is a boilerplate for creating cli applications using node.

## Commands

```bash
# To link the command, build and start the watch process to rebuild.
npm run start

# to build the cli app
npm run build

# use this to remove the cli app from your machine.
npm unlink
```

## Code Setup

- All the commands go in the `/src/commands` folder. Ex: `loki.js`
- Each root level command needs to be configured in the `package.json` folder.
- The sub-commands need to be present in the same level as the main command. Ex: `loki-disguise.js`
- If you have more than one root level command, then consider putting them in their own folders.
- The commands need to have `#!/usr/bin/env node` as the first line in the file.

The code is put in the `./src` folder. This gets compiled down into the `./lib` directory.


### Project structure for Single Root level command
```
  /src
      /helpers
      /commands
          | - loki.js
          | - loki-program.js
          | - loki-disguise.js
```
In package.json we would setup the entry points like so:
```
  "bin": {
    "loki": "./lib/commands/loki.js"
  }
```

### Project structure for Multiple Root level command
```
  /src
      /helpers
      /commands
          /loki
              | - loki.js
              | - loki-program.js
              | - loki-disguise.js
          /thor
              | - thor.js
              | - thor-hammer.js
              | - thor-hair.js
```
In package.json we would setup the entry points like so:
```
  "bin": {
    "loki": "./lib/commands/loki/loki.js",
    "thor": "./lib/commands/thor/thor.js"
  }
```

### Using the commands
``` bash
# once you run the: npm run start you should have the
# commands liked up and ready to be used like so:
loki disguise "Thor"
thor hammer "smash"
```

## FAQ

### The link process fails.
It is probably due to the `./lib` folder not containing the file that you are trying to link. Run the `build` process first. (See **Commands** Section above).

### The link process fails after I changed my bin setup.
This is probably due to the old link remaining on your machine.
You can revert your `bin` config in `package.json` and run `npm unlink`. This should remove the old link.


