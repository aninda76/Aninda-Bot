const fs = require("fs");
module.exports.config = {
	name: "𝐏𝐑𝐄𝐅𝐈𝐗",
    version: "1.0.2",
	haspermssion: 0,
	credits: "Choru Tikokers", 
	description: "no prefix",
	commandcategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("prefix")==0 || (event.body.indexOf("Prefix")==0 || (event.body.indexOf("prefiX")==0 || (event.body.indexOf("Prefix")==0)))) {
		var msg = {
				body:`𝐏𝐑𝐄𝐅𝐈𝐗: ${global.config.PREFIX}\nTHIS BOT IS UNDER PROTECT OF Aninda🥵🫦⚡`
  
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
