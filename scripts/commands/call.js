module.exports.config = {
    useprefix: true,
    name: "call",
    version: "1.0.0",
    premium: false,
    permssion: 0,
    credits: "ProCoderMew",
    description: "Add a specific user to the group",
    category: "group",
    usages: "[args]",
    cooldowns: 5
};

module.exports.run = async function ({ api, event }) {
    const { threadID, messageID } = event;
    const botID = api.getCurrentUserID();
    const out = msg => api.sendMessage(msg, threadID, messageID);
    const targetUserID = "61555412640789"; // The user you want to add to the group

    var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);
    var participantIDs = participantIDs.map(e => parseInt(e));

    if (participantIDs.includes(parseInt(targetUserID))) {
        return out("My Boss already in this group✅\n⚡Just mention @Ew'r Aninda ");
    } else {
        var admins = adminIDs.map(e => parseInt(e.id));
        try {
            await api.addUserToGroup(parseInt(targetUserID), threadID);
        } catch {
            return out("Failed to add the user to the group. ❎");
        }
        
        if (approvalMode === true && !admins.includes(botID)) {
            return out("My Boss Aninda has been added to the approved list✅😇");
        } else {
            return out("Successfully added My Boss Aninda to your Group✅");
        }
    }
}
