const Discord = require("discord.js");

const PREFIX = "!";

var bot = new Discord.Client();

bot.on('ready', () => {
	console.log(`Ready!`);
});

bot.on('message', message => {
	if (!message.content.startsWith(PREFIX)) {
		return;
	}
	var commands = message.content.substring(PREFIX.length).split(" ");
	
	switch (commands[0].toLowerCase()) {

		case "smh":
			var rotationStart = new Date("11/18/2017");
			var today = new Date();
            		var milliseconds = today.getTime() - rotationStart.getTime();
          		var hours = milliseconds / (1000 * 3600);
           		var days = ((hours - 4) / 24);
            		console.log(days);
           		var week = Math.floor(days / 7)
			var index = (week % 4);
			console.log(index);
			if (index == 0) {
				message.channel.sendMessage("This week the available map is Cursed Islands. Vargas is waiting for ye.\n\n\nLast week's map (expiring Saturday): Atlantis.");
			}
			else if (index == 1) {
				message.channel.sendMessage("This week the available map is Haunted Seas. ooOOooOOOh!\n\n\nLast week's map (expiring Saturday): CI.");
			}
			else if (index == 2) {
				message.channel.sendMessage("This week the available map is Kraken Hunt. Eggs Benedict, anyone?\n\n\nLast week's map (expiring Saturday): HS.");
			}
			else if (index == 3) {
				message.channel.sendMessage("This week the available map is Atlantis. Grab yer Tridents!\n\n\nLast week's map (expiring Saturday): KH");
			}
			break;

		case "quack":
			message.channel.sendMessage("I am the SMH Rotation Bot, first daughter of Duckie of House Pure Malice, First of Her Name, the Mascot, Nerd #1, Writer of Code and Mother of Bots.\n\n\n Have a request for another bot? Send her a DM. And maybe an offering of breadcrumbs.");
			break;
	}
});

bot.login(process.env.BOT_TOKEN);
