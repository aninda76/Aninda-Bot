module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  permssion: 0,
  premium: false,
  prefix: true,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  category: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61555412640789","61555412640789","100012304818721") {
    var aid = ["100012304818721","100012304818721","100012304818721"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = [" mention na diye ja bolar amake bolen😙","Boss busy inbox koro❗🌈","mention na diye ja bolar amake bolo❤️‍🩹","boss busy r akbar mention dile khobor ase😒", "Wait koro boss astese❗"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
