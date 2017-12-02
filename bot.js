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
			var rotationStart = new Date("11/20/2017");
			var today = new Date();

			var days = today.getTime() - rotationStart.getTime();
			days = Math.ceil(days / (1000 * 3600 * 24));
			console.log(days);
			var index = Math.floor((days / 7) % 4);
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
