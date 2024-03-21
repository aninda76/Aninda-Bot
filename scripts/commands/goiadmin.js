module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61555412640789","61555412640789","100012304818721") {
    var aid = ["100012304818721","100012304818721","100012304818721"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = [" mention na diye ja bolar amake bolen😙","Boss Tar gf er sathe busy☢️","mention na diye ja bolar amake bolo❤️","boss busy r akbar mention dile khobor ase🤬🤬🤬🤬😤", "Wait koro boss astese❗"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
