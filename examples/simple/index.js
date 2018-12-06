"use strict";

let { ServiceBroker } 	= require("moleculer");
let MyService 			= require("../../index");

// Create broker
let broker = new ServiceBroker({
	logger: console
});

const bucketName = "mybucket"

// Load my service
broker.createService(MyService);

// Start server
broker.start().then(() => {

	// Call action
	broker
		.call("storage-google-cloud.test", { bucketName: bucketName })
		.then(broker.logger.info)
		.catch(broker.logger.error);

});
