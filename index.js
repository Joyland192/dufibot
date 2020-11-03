const Discord = require(`discord.js`); // discord.js를 불러옴
const client = new Discord.Client(); // 새로운 디스코드 클라이언트를 만듬
const token = process.env.token; //
const prefix = '+'

let allowedchannels = ['759689892174233611', '770211768063754300', '770613362446303252'];

client.once('ready', () => {
	console.log("Bot Login.");
	const dufimanageroom = client.channels.cache.get('770211768063754300');
	dufimanageroom.send('**온라인!**')
	client.user.setActivity(`${prefix}명령어                                `);
});

client.on('message', (message) => {
	const args = message.content.split(" ");
	const heherole = message.guild.roles.cache.find(role => role.name === '히히');
	const roleroom = client.channels.cache.get('682856541463904256');
	const defaultname = `두피봇`;
	const defaultavatarURL = `https://vignette.wikia.nocookie.net/pokemon/images/0/03/%EB%AA%A8%EB%8B%A4%ED%94%BC_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8.png/revision/latest/scale-to-width-down/340?cb=20170405013619&path-prefix=ko`
	if (message.author.id === '414266558974656518') {
		if (message.content.includes (`<@!744133186400813136>`)) {
		message.channel.send(`?`);
		}
	}
	if (message.author.id != '744133186400813136') {
		if (message.content.includes (`히히`)) {
			if (!message.member.roles.cache.some(role => role.name === "히히")) {
				message.member.roles.add(heherole);
				roleroom.send(`<@${message.author.id}> 히히 <#${message.channel.id}>`);
			}
		}
	}
	if (allowedchannels.includes(message.channel.id)) {
		if (message.content === `다바피보`) {
    	    message.channel.send(`바부`);
		}
		if (message.content === `${prefix}닉네임 재설정`) {
			if (message.author.id == `414266558974656518`) {
				client.user.setUsername(defaultname);
				message.channel.send(`닉네임을 성공적으로 변경했습니다.`);
			} else {
				message.channel.send(`관리자만 사용할 수 있는 기능입니다.`);
			}
		} else {
			if (message.content.startsWith(`${prefix}닉네임`)) {
				if (message.author.id == `414266558974656518`) {
					let changenickname = message.content.slice(`${prefix}닉네임 `.length);
					client.user.setUsername(changenickname);
					message.channel.send(`닉네임을 성공적으로 변경했습니다.`);
				} else {
					message.channel.send(`관리자만 사용할 수 있는 기능입니다.`);
				}
			}
		}
		if (message.content === `${prefix}프로필 재설정`) {
			if (message.author.id == `414266558974656518`) {
				client.user.setAvatar(defaultavatarURL);
				message.channel.send(`프로필을 성공적으로 변경했습니다.`);
			} else {
				message.channel.send(`관리자만 사용할 수 있는 기능입니다.`);
			}
		} else {
			if (message.content.startsWith(`${prefix}프로필`)) {
				if (message.author.id == `414266558974656518`) {
					let changeavatar = message.content.slice(`${prefix}프로필 `.length)
					client.user.setAvatar(changeavatar);
					message.channel.send(`프로필을 성공적으로 변경했습니다.`);
				} else {
					message.channel.send(`관리자만 사용할 수 있는 기능입니다.`);
				}
			}
		}
		if (message.content === `${prefix}다피 키우기`) {
			message.author.dafigrow = Math.floor(Math.random() * 4) + 1;
			if (message.author.dafigrow == 1) {
				message.channel.send(`미니다피를 쓰다듬어주기 시작했다!`)
				.then (message => {
					setTimeout(function() {
					message.edit(`미니다피를 쓰다듬어주기 시작했다!\n\n미니다피의 머리를 쓰다듬는중...`)
					}, 3000)
					setTimeout(function() {
					message.edit(`미니다피를 쓰다듬어주기 시작했다!\n\n미니다피의 머리를 쓰다듬는중..\n\n미니다피의 머리카락이 1 하락했다!`)
					}, 6000)
					setTimeout(function() {
					message.edit(`미니다피를 쓰다듬어주기 시작했다!\n\n미니다피의 머리를 쓰다듬는중..\n\n미니다피의 머리카락이 1 하락했다!\n\n어라..? 더이상 하락할 머리카락이 없다...️️️\n🤦‍♂️`)
					}, 8300)
				});
			}
			if (message.author.dafigrow == 2) {
				message.channel.send(`미니다피를 굴리기 시작했다!`)
				.then (message => {
					setTimeout(function() {
					message.edit(`미니다피를 굴리기 시작했다!\n\n미니다피를 굴리는 중...`)
					}, 3000)
					setTimeout(function() {
					message.edit(`미니다피를 굴리기 시작했다!\n\n미니다피를 굴리는 중...\n\n미니다피의 머리카락이 20 하락했다!`)
					}, 6000)
					setTimeout(function() {
					message.edit(`미니다피를 굴리기 시작했다!\n\n미니다피를 굴리는 중...\n\n미니다피의 머리카락이 20 하락했다!\n\n어라..? 더이상 하락할 머리카락이 없다...️️️\n🤦‍♂️`)
					}, 8300)
				});
			}
			if (message.author.dafigrow == 3) {
				message.channel.send(`앗, 미니다피가 도망갔다..`)
			}
			if (message.author.dafigrow == 4) {
				message.channel.send(`미니다피의 머리가 자라기 시작했다!`)
				.then (message => {
					setTimeout(function() {
					message.edit(`미니다피의 머리가 자라기 시작했다!\n\n머리가 자라는 중...`)
					}, 3000)
					setTimeout(function() {
					message.edit(`미니다피의 머리가 자라기 시작했다!\n\n머리가 자라는 중...\n\n미니다피의 머리카락이 400 상승했다!`)
					}, 6000)
				});
			}
		}
		if (message.content === `${prefix}test`) {
			message.channel.send('react this message').then(sentMessage => {
				sentMessage.react('👍');
				sentMessage.react('👎');
				const filter = (reaction, user) => {
					return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
				};
				sentMessage.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
				.then(collected => {
	  				const reaction = collected.first();
	  				if (reaction.emoji.name === '👍') {
						message.channel.send('1');
	  				} else {
						message.channel.send('2');
	  				}
				})
				.catch(collected => {
	  			
				});
			});
		}
		if (message.content === `${prefix}다피 퀴즈`) {
			message.author.dafiquiz = Math.floor(Math.random() * 5) + 1;
			if (message.author.dafiquiz == 1) {
				message.channel.send('다피쿤은 바보인가요?').then(sentMessage => {
					sentMessage.react('⭕');
					sentMessage.react('❌');
					const filter = (reaction, user) => {
						return ['⭕', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
					};
					sentMessage.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
					.then(collected => {
						const reaction = collected.first();
						if (reaction.emoji.name === '⭕') {
							message.channel.send('정답!');
						} else {
							message.channel.send('정답!');
						}
					})
					.catch(collected => {
					  
					});
				});
			} else if (message.author.dafiquiz == 2) {
				message.channel.send('다피쿤의 머리카락 수는?\n1 : 0\n2 : 3\n3 : 4800\n4 : 20억\n5 : 그냥 풍성충').then(sentMessage => {
					sentMessage.react('1️⃣');
					sentMessage.react('2️⃣');
					sentMessage.react('3️⃣');
					sentMessage.react('4️⃣');
					sentMessage.react('5️⃣');
					const filter = (reaction, user) => {
						return ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
					};
					sentMessage.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
					.then(collected => {
						const reaction = collected.first();
						if (reaction.emoji.name === '1️⃣') {
							message.channel.send('정답!');
						} else if (reaction.emoji.name === '2️⃣') {
							message.channel.send('땡!');
						} else if (reaction.emoji.name === '3️⃣') {
							message.channel.send('땡!');
						} else if (reaction.emoji.name === '4️⃣') {
							message.channel.send('땡!');
						} else {
							message.channel.send('정답!');
						}
					})
					.catch(collected => {
					});
				});
			} else if (message.author.dafiquiz == 3) {
				message.channel.send('다피쿤의 얼불춤 실력 순위는?\n1 : 뒤에서 1위\n2 : 상위 80%\n3 : 상위 30%\n4 : 1위\n5 : 0위').then(sentMessage => {
					sentMessage.react('1️⃣');
					sentMessage.react('2️⃣');
					sentMessage.react('3️⃣');
					sentMessage.react('4️⃣');
					sentMessage.react('5️⃣');
					const filter = (reaction, user) => {
						return ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
					};
					sentMessage.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
					.then(collected => {
						const reaction = collected.first();
						if (reaction.emoji.name === '1️⃣') {
							message.channel.send('땡!');
						} else if (reaction.emoji.name === '2️⃣') {
							message.channel.send('땡!');
						} else if (reaction.emoji.name === '3️⃣') {
							message.channel.send('땡!');
						} else if (reaction.emoji.name === '4️⃣') {
							message.channel.send('땡!');
						} else {
							message.channel.send('정답!');
						}
					})
					.catch(collected => {
						message.channel.send('정답은 5번이였습니다!');
					});
				});
			} else if (message.author.dafiquiz == 4) {
				message.channel.send('모다피 대학교 서버의 서버사진은?\n1 : 없음\n2 : 모다피\n3 : 피슈터 (Peashooter)\n4 : 다피쿤\n5 : 감자').then(sentMessage => {
					sentMessage.react('1️⃣');
					sentMessage.react('2️⃣');
					sentMessage.react('3️⃣');
					sentMessage.react('4️⃣');
					sentMessage.react('5️⃣');
					const filter = (reaction, user) => {
						return ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
					};
					sentMessage.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
					.then(collected => {
						const reaction = collected.first();
						if (reaction.emoji.name === '1️⃣') {
							message.channel.send('땡!');
						} else if (reaction.emoji.name === '2️⃣') {
							message.channel.send('정답!');
						} else if (reaction.emoji.name === '3️⃣') {
							message.channel.send('땡!');
						} else if (reaction.emoji.name === '4️⃣') {
							message.channel.send('땡!');
						} else {
							message.channel.send('땡!');
						}
					})
					.catch(collected => {
						message.channel.send('정답은 2번이였습니다!');
					});
				});
			} else if (message.author.dafiquiz == 5) {
				message.channel.send('다피쿤의 전역일은?\n1 : 평생 안함\n2 : 2020년 12월 31일\n3 : 2021년 2월 21일\n4 : 2022년 2월 21일\n5 : 2022년 4월 4일').then(sentMessage => {
					sentMessage.react('1️⃣');
					sentMessage.react('2️⃣');
					sentMessage.react('3️⃣');
					sentMessage.react('4️⃣');
					sentMessage.react('5️⃣');
					const filter = (reaction, user) => {
						return ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
					};
					sentMessage.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
					.then(collected => {
						const reaction = collected.first();
						if (reaction.emoji.name === '1️⃣') {
							message.channel.send('땡!');
						} else if (reaction.emoji.name === '2️⃣') {
							message.channel.send('땡!');
						} else if (reaction.emoji.name === '3️⃣') {
							message.channel.send('땡!');
						} else if (reaction.emoji.name === '4️⃣') {
							message.channel.send('땡!');
						} else {
							message.channel.send('정답!');
						}
					})
					.catch(collected => {
						message.channel.send('정답은 5번이였습니다!');
					});
				});
			}
		}
	}
	if (message.channel.id === '682856541463904256') {
		if (message.author.id != '744133186400813136') {
			const tklrole = message.guild.roles.cache.find(role => role.name === '떼껄룩');
			const mcnrole = message.guild.roles.cache.find(role => role.name === '미친놈');
			const baborole = message.guild.roles.cache.find(role => role.name === '바보');
			const satanrole = message.guild.roles.cache.find(role => role.name === '사탄');
			const adrole = message.guild.roles.cache.find(role => role.name === '악동');
			const coronarole = message.guild.roles.cache.find(role => role.name === '랜선백신');
			const bangsongrole = message.guild.roles.cache.find(role => role.name === '방송실 전파방해장치');
			if (message.content.startsWith (`${prefix}역할 부여`)) {
				if (message.member.roles.cache.some(role => role.name === "교감")) {
					message.author.givememberrole = args[3];
					message.author.givememberid = message.content.slice(`${prefix}역할 부여 <@!`.length,`${args[3]}`);
					message.channel.send(`${message.author.givememberid}`);
				} else {
					message.channel.send(`<@${message.author.id}> 당신은 관리자가 아닙니다.`);
				}
			}
			if (message.content === `${prefix}역할 리스트`) {
				message.channel.send(`역할 리스트\n\n자유 신청역할\n\n떼껄룩\n미친놈\n바보\n사탄\n악동\n랜선백신\n방송실 전파방해장치\n\n${prefix}역할 신청 (역할 이름) 이라고 말하시면 역할을 드립니다.`)
			}
			if (message.content.startsWith (`${prefix}역할 신청`)) {
				message.author.givemerole = message.content.slice(`${prefix}역할 신청 `.length);
				if (message.author.givemerole === '떼껄룩') {
					if (!message.member.roles.cache.some(role => role.name === "떼껄룩")) {
						message.member.roles.add(tklrole);
						roleroom.send(`<@${message.author.id}> Take a look.`);
					} else {
						roleroom.send(`<@${message.author.id}> 이미 그 역할을 가지고 있습니다.`)
					}
				} else if (message.author.givemerole === '미친놈') {
					if (!message.member.roles.cache.some(role => role.name === "미친놈")) {
						message.member.roles.add(mcnrole);
						roleroom.send(`<@${message.author.id}> He is Michinnom.`);
					} else {
						roleroom.send(`<@${message.author.id}> 이미 그 역할을 가지고 있습니다.`)
					}
				} else if (message.author.givemerole === '바보') {
					if (!message.member.roles.cache.some(role => role.name === "바보")) {
						message.member.roles.add(baborole);
						roleroom.send(`<@${message.author.id}> 바보래요`);
					} else {
						roleroom.send(`<@${message.author.id}> 이미 그 역할을 가지고 있습니다.`)
					}
				} else if (message.author.givemerole === '사탄') {
					if (!message.member.roles.cache.some(role => role.name === "사탄")) {
						message.member.roles.add(satanrole);
						roleroom.send(`<@${message.author.id}> 악마다`);
					} else {
						roleroom.send(`<@${message.author.id}> 이미 그 역할을 가지고 있습니다.`)
					}
				} else if (message.author.givemerole === '악동') {
					if (!message.member.roles.cache.some(role => role.name === "악동")) {
						message.member.roles.add(adrole);
						roleroom.send(`<@${message.author.id}> 악동? 도대체 왜...`);
					} else {
						roleroom.send(`<@${message.author.id}> 이미 그 역할을 가지고 있습니다.`)
					}
				} else if (message.author.givemerole === '랜선백신') {
					if (!message.member.roles.cache.some(role => role.name === "랜선백신")) {
						message.member.roles.add(coronarole);
						roleroom.send(`<@${message.author.id}> 코로나 백신 접종`);
					} else {
						roleroom.send(`<@${message.author.id}> 이미 그 역할을 가지고 있습니다.`)
					}
				} else if (message.author.givemerole === '방송실 전파방해장치') {
					if (!message.member.roles.cache.some(role => role.name === "방송실 전파방해장치")) {
						message.member.roles.add(bangsongrole);
						roleroom.send(`<@${message.author.id}> 방송 알림이 안갑니다`);
					} else {
						roleroom.send(`<@${message.author.id}> 이미 그 역할을 가지고 있습니다.`)
					}
				} else if (message.author.givemerole === ' ') {
					
				} else {
					message.channel.send(`<@${message.author.id}> 그 역할은 가질 수 없습니다.`);
				}
			}
			if (message.content.startsWith (`${prefix}역할 받기`)) {
				if ((message.member.roles.cache.some(role => role.name === `교감`)) || (message.member.roles.cache.some(role => role.name === `교장`)) || (message.author.id === '414266558974656518')) {
					message.author.givemerole = message.content.slice(`${prefix}역할 받기 `.length);
					if (!message.member.roles.cache.some(role => role.name === `${message.author.givemerole}`)) {
						message.author.giverole = message.guild.roles.cache.find(role => role.name === `${message.author.givemerole}`);
						message.member.roles.add(message.author.giverole);
						roleroom.send(`<@${message.author.id}> 역할을 부여했습니다.`);
					} else {
						roleroom.send(`<@${message.author.id}> 이미 그 역할을 가지고 있습니다.`)
					}
				} else {
					message.channel.send(`<@${message.author.id}> 관리자만 사용할 수 있는 기능입니다.`);
				}
			}
			if (message.content.startsWith (`${prefix}역할 빼기`)) {
				if ((message.member.roles.cache.some(role => role.name === `교감`)) || (message.member.roles.cache.some(role => role.name === `교장`)) || (message.author.id === '414266558974656518')) {
					message.author.removerole = message.content.slice(`${prefix}역할 빼기 `.length);
					if (message.member.roles.cache.some(role => role.name === `${message.author.removerole}`)) {
						message.author.giverole = message.guild.roles.cache.find(role => role.name === `${message.author.removerole}`);
						message.member.roles.remove(message.author.giverole);
						roleroom.send(`<@${message.author.id}> 역할을 수거했습니다.`);
					} else {
						roleroom.send(`<@${message.author.id}> 그 역할을 가지고 있지 않습니다.`)
					}
				} else {
					message.channel.send(`<@${message.author.id}> 관리자만 사용할 수 있는 기능입니다.`);
				}
			}
		}
	}
});

client.login(token);