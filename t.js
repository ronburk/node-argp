"use strict"

var argv = require("./lib")
		.main()
				.body ()
						.help()
						.usage()
						.end ()
		.command ("config")
				.body ()
						.argument ("set", { trailing: { eq: 2 } })
						.argument ("get", { trailing: { max: 1 } })
						.argument ("list")
						.end ()
		.command ("install", { trailing: { max: Infinity } })
				.body ()
						.option ({ short: "g", long: "global" })
						.end ()
		.command ("foo")
				.body ()
						.argument ("x", { trailing: { eq: 2 } })
						.argument ("y", { trailing: { eq: 1 } })
						.end ()
		.argv ()
console.log(argv)