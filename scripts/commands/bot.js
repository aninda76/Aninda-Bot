const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Ariyan Chowdhury",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["ASSALA-MUA-LAIKUM ki korte pari apnar jnno"," ডাক দিয়েন নাহ আমি বিজি😴😗।","আমি বাংলাদেশ যাচ্ছি 🫣","এত্ত ডাকিস কেন বিয়ে করায় দিব🐸","আমার বস আমাকে ঠিক করতেছে ডাক দিয়েন না।🥹","এত্ত বট বট কইরেন না অনিন্দ্য  কে বলে দিব আপনি খারাপ","আমার রিফাত আসলেই ভালো","আহা জালাইও না আমাকে👽","এত্ত গ্রুপ এ আছি কেউ I Love you বলে নাহ🤧🙁","এই জীবন রেখে কি লাভ যদি আমার বস Aninda এর বিয়ে করায় দিতে না পারি","সব সময় ফাজলামি ভালো লাগে না","আমার বস Aninda এর গফ আছে🙂🫰।","আমাকে না ডাকি আমার বস Aninda এর সাথে তার গফ  এর বিয়ে করায় দেন😻🙂","আমিও বিদেশ যাব","তোমাকে আমার রাইতে ভালো লাগে","তোমার মনটা আমারে দিয়া দাও🙈","ভালবাসি তোমাকে🫰💫","মেয়ে হইলে ইনবক্স এ চলে আসো গু","এত্ত ভালবাসা কই রাখি","বেশি bot Bot করলে leave নিবো কিন্তু😒😒 ","শুনবো না😼তুমি আমাকে প্রেম করাই দাও নাই🥺পচা তুমি🥺","etto jalale Aninda ke bole diboh😒","এতো ডেকো না,প্রেম এ পরে যাবো তো🙈","Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋","বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑","হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?","এতো ডাকছিস কেন?গালি শুনবি নাকি? 🤬","I love you janu🥰","আরে Bolo আমার জান ,কেমন আছো?😚 ","Bot বলে অসম্মান করছি,😰😿","Hop beda😾,Boss বল boss😼","চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু","Bot না , জানু বল জানু 😘 ","বার বার Disturb করছিস কোনো😾,আমার জানুর সাথে  আছি😋"," এতো ডাকিস কেন🤬","আমাকে ডাকলে ,আমি কিন্তু কিস করে দিবো😘 ","আমারে এতো ডাকিস না আমি মজা করার mood এ নাই এখন😒","হ্যাঁ জানু , এইদিক এ আসো কিস দেই🤭 😘","দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣","তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 ","আমাকে ডেকো না,আমি ব্যাস্ত আছি","কি হলো , মিস্টেক করচ্ছিস নাকি🤣","বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏","কালকে দেখা করিস তো একটু 😈","হা বলো, শুনছি আমি 😏","আর কত বার ডাকবি ,শুনছি তো","হুম বলো কি বলবে😒","বলো কি করতে পারি তোমার জন্য","আমি তো অন্ধ কিছু দেখি না🐸 😎","Bot না জানু,বল 😌" , "বলো জানু 🌚","তোর কি চোখে পড়ে না আমি ব্যাস্ত আছি😒","হুম জান তোমার ওই খানে উম্মহ😑😘","আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😸😘","jan hanga korba😒😬","হুম জান তোমার অইখানে উম্মমাহ😷😘" , "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি..!🥰","আমাকে এতো না ডেকে AMAR BOSS Aninda ER SATEH TAR GF ER BIYE KORAI DAW 🙄" , "আমাকে এতো না ডেকে AMAR BOSS Aninda RE CALL DAW CHOLE ASHBE 🙄"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "love you bot") || (event.body.toLowerCase() == "love u bot")) {
     return api.sendMessage("GOD HAMIM কোনো মেয়ের সাথে কথা বলতে না করেছে🙂🤖", threadID);
   };

    if ((event.body.toLowerCase() == "ummah bot") || (event.body.toLowerCase() == "bot ummah")) {
     return api.sendMessage("লুচ্চা চুম্মা চুম্মি করোস কেন🥵", threadID);
   };
   
    if ((event.body.toLowerCase() == "i love u bot") || (event.body.toLowerCase() == "i love you bot")) {
     return api.sendMessage("আমাকে না আমার CREATOR GOD Aninda  কে ভালোবাসো😻🥀", threadID);
   };

   if ((event.body.toLowerCase() == "baler bot") || (event.body.toLowerCase() == "fuck bot") || (event.body.toLowerCase() == "heda bot")) {
     return api.sendMessage("কিরে আমাকে গালি দেস কেনো তোকে কিন্তু বেন করে দিমু😠 + GOD Aninda ke bole diboh ", threadID);
   };
  
   if ((event.body.toLowerCase() == "kiss bot") || (event.body.toLowerCase() == "bot kiss me")) {
     return api.sendMessage("আমি ভালো তুমি পঁচা😌", threadID);
   };

   if ((event.body.toLowerCase() == "bot koi") || (event.body.toLowerCase() == "bot koi")) {
     return api.sendMessage("এই তো আমি এখানে🙋‍♂️", threadID);
   };

  if ((event.body.toLowerCase() == "bsvv nha mng") || (event.body.toLowerCase() == "bsvv nha mng")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "bsvv nha mn")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "btvv nha mng") || (event.body.toLowerCase() == "btvv nha mng")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "hi ae") || (event.body.toLowerCase() == "hi ae")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "hiii") || (event.body.toLowerCase() == "hiii")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "btvv nha mn") || (event.body.toLowerCase() == "btvv nha mn")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };


   if ((event.body.toLowerCase() == "tt go mng") || (event.body.toLowerCase() == "tt go mng")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "let's go") || (event.body.toLowerCase() == "let's go")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "tt mng oi") || (event.body.toLowerCase() == "tt mng oi")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
     return api.sendMessage("️Sleep well <3 Wish you all super nice dreams <3", threadID);
   };

   if ((event.body.toLowerCase() == "tt go mn") || (event.body.toLowerCase() == "tt go mn")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "flop over") || (event.body.toLowerCase() == "flop over")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "bot dthw too") || (event.body.toLowerCase() == "bot dthw over")) {
     return api.sendMessage("️ that's very commendable hihi :>", threadID);
   };
  
   if ((event.body.toLowerCase() == "dm bot") || (event.body.toLowerCase() == "dm bot")) {
     return api.sendMessage("️Swear something to your dad :), you're a kid but you like to be alive :)", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody loves me")) {
     return api.sendMessage("️Come on, the bot loves you <3 <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love the admin bot") || (event.body.toLowerCase() == "does the bot love the admin bot")) {
     return api.sendMessage("Yes, love him the most, don't try to rob me", threadID);
   };
   
   if ((event.body.toLowerCase() == "bot im going") || (event.body.toLowerCase() == "bot im di")) {
     return api.sendMessage("Im cc :))) m stop barking for me, but tell me im :>>", threadID);
   };

   if ((event.body.toLowerCase() == "bot go away") || (event.body.toLowerCase() == "bot cut di")) {
     return api.sendMessage("You're gone, your dad's gone, don't make you speak :))))", threadID);
   };

   if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
     return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "Aninda ke") || (event.body.toLowerCase() == "aninda ke")) {
     return api.sendMessage("My cute admin aninda😇✔️", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "Rifat ke") || (event.body.toLowerCase() == "rifat ke")) {
     return api.sendMessage("single chele or inbox a sob meye ra jaw😒🤐 fb link....https://www.facebook.com/profile.php?id=100094752136558", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };
  
  if (event.body.indexOf("bot","bby") == 0 || (event.body.indexOf("Bot","bby") == 0)) {
    var msg = {
      body: `
╭──────────•◈
ꜰɪʟᴇ ᴇᴅɪᴛ ʙʏ ʀɪꜰᴀᴛ✔️
.....................
🗣️ Dear ${name}
😇  ${rand}
╰─────────•◈
ʙᴏᴛ ᴀᴅᴍɪn ᴀɴɪɴᴅᴀ❤️‍🩹`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
