module.exports.config = {
	name: "admin",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Mohammad rahad",
	description: "Admin info",
	commandCategory: "...",
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
var link =["https://i.postimg.cc/N0PsZWXm/inbound3182802385403042407.jpg", 
            
            "https://i.postimg.cc/N0PsZWXm/inbound3182802385403042407.jpg", 
            
"https://i.postimg.cc/N0PsZWXm/inbound3182802385403042407.jpg",
            
            "https://i.postimg.cc/N0PsZWXm/inbound3182802385403042407.jpg"];
  
var callback = () => api.sendMessage({body:`𝗗𝗢 𝗡𝗢𝗧 𝗧𝗥𝗨𝗦𝗧 𝗧𝗛𝗘 𝗕𝗢𝗧 𝗢𝗣𝗘𝗥𝗔 𝗧𝗢𝗥\n
------------------------------------------------\n𝗡𝗮𝗺𝗲       : Tanzid Ahmad Hamim \n𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : Hamim Hosenx\n𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻    : (𝗜𝘀𝗹𝗮𝗺)\n𝗣𝗲𝗿𝗺𝗮𝗻𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : ❤️‍🔥Chattogram🔥\n𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : NO NEED TO KNOW \n𝗚𝗲𝗻𝗱𝗲𝗿     : (𝗠𝗮𝗹𝗲)\n𝗔𝗴𝗲            :  16\n𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽 : with Kotha Ahmadx\n𝗪𝗼𝗿𝗸         :  Student  \n𝗚𝗺𝗮𝗶𝗹        :  hamimhosenx@gmail.com\n𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :  wa.me/+8801876401888\n𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺  : chalai nah vaiya\n𝗙𝗯 𝗹𝗶𝗻𝗸   : https://www.facebook.com/HACKER.HAMIM.BHAI
`,attachment: fs.createReadStream(__dirname + "")}, event.threadID, () => fs.unlinkSync(__dirname + "")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"")).on("close",() => callback());
   };
