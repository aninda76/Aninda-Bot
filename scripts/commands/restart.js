module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "manhIT",
	description: "Restart the Bot",
	commandCategory: "system",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`╭───────😇
│Aninda BOT Aɪ 🅅-1.9 is 
│🤖RESTARTING...
│=============
│么System RESTART Successful🥳
│么Processing time: 4s
│===============
│BOT CREATOR GOD ANINDA💫🫶
╰───────😇`, threadID, () => process.exit(1));
}
