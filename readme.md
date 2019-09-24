# logg.js
[![NPM](https://nodei.co/npm/logg.js.png)](https://nodei.co/npm/logg.js/)

A simple log utility with date, colored text and code module display.

## Usage in Websites
While I haven't tried it yet, you should also be able to use logg.js on any website.
You can get the [latest release](https://github.com/OfficialCRUGG/logg.js/releases/latest) from GitHub or use JSDelivr
```html
<!-- Best method, using the NPM Mirror -->
<script src="https://cdn.jsdelivr.net/npm/logg.js@latest/logg.js"></script>

<!-- Alternative method, using the GitHub Mirror -->
<script src="https://cdn.jsdelivr.net/gh/OfficialCRUGG/logg.js@latest/logg.js"></script>
```

## How to use
I think the simplest way to explain how logg.js works, is through an example:
```javascript
const logg = require("logg.js");

logg.info("This is a test log!");
// OUTPUT: [21.09.2019 15:54:45][INFO]: This is a test log!

logg.info("This is a test log!", "MODULE");
// OUTPUT: [21.09.2019 15:54:45][INFO][MODULE]: This is a test log!

logg.warn("This is a test log!");
// OUTPUT: [21.09.2019 15:54:45][WARNING]: This is a test log!

logg.warn("This is a test log!", "MODULE");
// OUTPUT: [21.09.2019 15:54:45][WARNING][MODULE]: This is a test log!

logg.error("This is a test log!");
// OUTPUT: [21.09.2019 15:54:45][ERROR]: This is a test log!

logg.error("This is a test log!", "MODULE");
// OUTPUT: [21.09.2019 15:54:45][ERROR][MODULE]: This is a test log!

logg.fatal("This is a test log!");
// OUTPUT: [21.09.2019 15:54:45][FATAL]: This is a test log!

logg.fatal("This is a test log!", "MODULE");
// OUTPUT: [21.09.2019 15:54:45][FATAL][MODULE]: This is a test log!

logg.debug("This is a test log!");
// OUTPUT: [21.09.2019 15:54:45][DEBUG]: This is a test log!

logg.debug("This is a test log!", "MODULE");
// OUTPUT: [21.09.2019 15:54:45][DEBUG][MODULE]: This is a test log!
```
You can use a module, to display from what part of the code the log message comes from.

If your terminal supports colors, it should look like this:
![Preview](https://crugg.de/cdn/logg.js/assets/preview.png)
