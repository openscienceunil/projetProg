import { Meteor } from 'meteor/meteor';
import '../imports/api/tranches.js';
import '../imports/api/disponibilites.js';

Meteor.startup(() => {
  // code to run on server at startup
});

if(Meteor.isServer) {
	Meteor.publish("matches", function() {
		return Meteor.users.find();
	});
}