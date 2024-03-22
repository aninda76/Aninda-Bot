module.exports.config = {
	name: "help",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "PetterSever",
	description: "Beginner's Guide",
	commandCategory: "system",
	usages: "[Tên module]",
	cooldowns: 1,
	envConfig: {
		autoUnsend: true,
		delayUnsend: 300
	}
};

module.exports.languages = {
	//"vi": {
	//	"moduleInfo": "「 %1 」\n%2\n\n❯ Cách sử dụng: %3\n❯ Thuộc nhóm: %4\n❯ Thời gian chờ: %5 giây(s)\n❯ Quyền hạn: %6\n\n» Module code by %7 «",
	//	"helpList": '[ Hiện tại đang có %1 lệnh có thể sử dụng trên bot này, Sử dụng: "%2help nameCommand" để xem chi tiết cách sử dụng! ]"',
	//	"user": "Người dùng",
  //      "adminGroup": "Quản trị viên nhóm",
  //      "adminBot": "Quản trị viên bot"
//	},
	"en": {
		"moduleInfo": " ◤ %1 ◥\n%2\n\n●𝗨𝘀𝗮𝗴𝗲: %3\n●𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆: %4\n●𝗪𝗮𝗶𝘁𝗶𝗻𝗴 𝘁𝗶𝗺𝗲: %5 seconds(s)\n●𝗣𝗲𝗿𝗺𝗶𝘀𝘀𝗶𝗼𝗻: %6\n\n►𝗠𝗼𝗱𝘂𝗹𝗲 𝗰𝗼𝗱𝗲 𝗯𝘆 Aninda🤍🫶 ◄ ",
		"helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
		"user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
	}
};

module.exports.handleEvent = function ({ api, event, getText }) {
	const { commands } = global.client;
	const { threadID, messageID, body } = event;

	if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}

module.exports. run = function({ api, event, args, getText }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	if (!command) {
		const arrayInfo = [];
		const page = parseInt(args[0]) || 1;
    const numberOfOnePage = 15;
    //*số thứ tự 1 2 3.....cú pháp ${++i}*//
    let i = 0;
    let msg = "";
    
    for (var [name, value] of (commands)) {
      name += ``;
      arrayInfo.push(name);
    }

    arrayInfo.sort((a, b) => a.data - b.data);
    
    const startSlice = numberOfOnePage*page - numberOfOnePage;
    i = startSlice;
    const returnArray = arrayInfo.slice(startSlice, startSlice + numberOfOnePage);
    
for (let item of returnArray) msg += `╰─➣🔥${++i} ${prefix}${item}\n`;
    
    
    const siu = `╭────❯ 𝐀𝐍𝐈𝐍𝐃𝐀 𝘽𝙊𝙎𝙎⚡
│──❯ 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝙇𝙄𝙎𝙏✅
│❖══════════════❖
╰─➣`;const text = `${page}/${Math.ceil(arrayInfo.length/numberOfOnePage)}:${arrayInfo.length}
│ 💡Use: /help {Name?}
│ 💡Use: /help {Page?}
│ 💥Total: 459 CMD!
│ 🌸ADMIN: ANINDA
| ✔️File Edit by ☄️ :ʀɪꜰᴀᴛ❤️‍🩹
🄿🄰🄶🄴 »1/31< 🄻🄸🅂🅃`;
 
    return api.sendMessage(siu + "\n\n" + msg  + text, threadID, async (error, info) => {
			if (autoUnsend) {
				await new Promise(resolve => setTimeout(resolve, delayUnsend * 1000));
				return api.unsendMessage(info.messageID);
			} else return;
		}, event.messageID);
	}

	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 0) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
};
