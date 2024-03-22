module.exports.config = {
	name: "info",
	version: "1.0.1", 
	permssion: 0,
	premium: false,
	prefix: true,
	credits: "Joshua Sy", //don't change the credits please
	description: "Admin and Bot info.",
	category: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =["https://i.imgur.com/UwAOBrH.jpg","https://i.imgur.com/BL7g14V.jpg", "https://i.imgur.com/rxOzAxj.jpg",];
var callback = () => api.sendMessage({body:`➢🄾🅆🄽🄴🅁   🄰🄽🄳   🄱🄾🅃  🄸🄽🄵🄾🤙❗

⁂𝘽𝙤𝙩 𝙉𝙖𝙢𝙚: ${global.config.BOTNAME}

✡𝘽𝙤𝙩 𝙋𝙧𝙚𝙛𝙞𝙭: ${global.config.PREFIX}

✫𝘽𝙤𝙩 𝙊𝙬𝙣𝙚𝙧🌼 :♦️A͟n͟i͟n͟d͟a͟😙🌸♦️,

✬𝐅𝐛 𝐋𝐢𝐧𝐤: ♣️
https://www.facebook.com/aninda.sarkar.tridip

➳✴️𝙈𝘼𝙎𝙏𝙀𝙍 𝙊𝙁 𝘽𝙊𝙏'𝙎 𝙄𝙉𝙎𝙄𝘿𝙀✴️

🔰𝘽𝙤𝙩 𝘼𝙙𝙢𝙞𝙣𝙨🔰: [𝗔𝗻𝗶𝗻𝗱𝗮🖤]


➳𝙐𝙥𝙩𝙞𝙢𝙚 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 ✨: 30.0.1

✬𝐌𝐨𝐝𝐢𝐟𝐢𝐞𝐝 𝐁𝐲 : 🇦 🇳 🇮 🇳 🇩 🇦 🔰

✬𝙏𝙤𝙙𝙖𝙮 𝙞𝙨📜: ${juswa} 

➳𝘽𝙤𝙩 𝙞𝙨 𝙍𝙪𝙣𝙣𝙞𝙣𝙜⌚ ${hours}:${minutes}:${seconds}.

🔻𝐁𝐎𝐓 𝐔𝐍𝐃𝐄𝐑 𝐏𝐑𝐎𝐓𝐄𝐂𝐓𝐄𝐃 𝐁𝐘 𝐀𝐃𝐌𝐈𝐍𝐒🔺 

✫𝙏𝙝𝙖𝙣𝙠𝙨 𝙁𝙤𝙧 𝙐𝙨𝙞𝙣𝙜 ${global.config.BOTNAME} Bot!`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
