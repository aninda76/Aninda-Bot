module.exports.config = {
  name: "/",
  version: "1.0.0",
  permssion: 0,
  premium: false,
  prefix: true, 
  credits: "MrTomXxX",
  description: "log",
  category: "System",
  usages: "edit",
  cooldowns: 3,
  denpendencies: {
  }
};

module.exports.run = async function ({ api, event, Threads, getText }) {
  const fs = global.nodemodule["fs-extra"];
  var { threadID, messageID, senderID } = event;
  //if (senderID == global.data.botID) return;

  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data;
  //console.log(data)
  //var prefix = data.PREFIX;
  var rankup = data.rankup;
  var resend = data.resend;
  var log = data.log;
  var tagadmin = data.tagadmin;
  var guard = data.guard;
  var antiout = data.antiout;
  //prefix == null ? rankup = `!` : rankup = `${prefix}`;
  log == null ? log = `true` : log = `${log}`;
  rankup == null ? rankup = `false` : rankup = `${rankup}`;
  resend == null ? resend = `false` : resend = `${resend}`;
  tagadmin == null ? tagadmin = `true` : tagadmin = `${tagadmin}`;
  guard == null ? guard = `true` : guard = `${guard}`;
  antiout == null ? antiout = `true` : antiout = `${antiout}`;
return api.sendMessage(`🖤🅱🅾🆃 is ACTIVE now✔️

──🄾🅆🄽🄴🅁───

💌𝗞𝗶𝗻𝗴-  🔥𝗔𝗻𝗶𝗻𝗱𝗮🌸
💌ℚ𝕦𝕖𝕖𝕟- 🥺𝐌𝐨𝐡𝐨𝐧𝐚❤️‍🩹

🤍--------•🌹•--------🌸
  ☄️ Prefix: undefined
  🔱 Log: ON✅
  💌 Rankup: ON✅
  ❄️Resend: BAN⛔
  📛 TAG ADMIN: ON✅
  ⚜️ Antirobbery: ON✅
  ⚡ ANTIOUT: ON✅
🌸--------•🦋•--------🌸ᅠ`, threadID, messageID);
}
