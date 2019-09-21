# logg.js
A simple log utility with date, colored text and code module display.

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
![Preview](preview)

<!--- Image Asset Links --->
[preview]: https://crugg.de/cdn/logg.js/assets/preview.png