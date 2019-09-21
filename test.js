const logg = require("./logg");
logg.info("This is a test log!");
logg.info("This is a test log!", "MODULE");

logg.warn("This is a test log!");
logg.warn("This is a test log!", "MODULE");

logg.error("This is a test log!");
logg.error("This is a test log!", "MODULE");

logg.fatal("This is a test log!");
logg.fatal("This is a test log!", "MODULE");

logg.debug("This is a test log!");
logg.debug("This is a test log!", "MODULE");