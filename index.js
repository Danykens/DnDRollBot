"use strict";
const Telegraf = require('telegraf')
const TelegrafInlineMenu = require('telegraf-inline-menu')
const Markup = require('telegraf/markup');
const Extra = require('telegraf/extra');

// Add your Token
const token = ''


const bot = new Telegraf(token)

function getRandom(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min))
}

function dice (min, max, sum) {
  let fn = getRandom (min, max)
 if (sum == 1) {
 return fn
 } else if ( sum == 2) {
  return fn + fn;
 } else if (sum == 3) {
return fn + fn + fn;
 } else if (sum == 4) {
  return fn + fn + fn + fn;
 } else if (sum == 5) {
  return fn + fn + fn + fn + fn;
 }
}

// Command for start Bot
bot.start((ctx) => ctx.reply(
`Добро пожаловать ${ctx.message.from.username} 
напиши команду /roll чтобы ролить кубики`
))

// Button for rolling 

bot.command('roll', (ctx) => {
  return ctx.reply('Да поможет тебе бог ролла', Extra.markup(
    Markup.keyboard(['1d20', '1d12', '1d10', '1d8', '1d6', '1d4'], {
      wrap: (btn, index, currentRow) => currentRow.length >= (index + 1) / 2
    })
  ))
})

bot.command('roll2', (ctx) => {
  return ctx.reply('Да поможет тебе бог ролла', Extra.markup(
    Markup.keyboard(['2d20', '2d12', '2d10', '2d8', '2d6', '2d4'], {
      wrap: (btn, index, currentRow) => currentRow.length >= (index + 1) / 2
    })
  ))
})

bot.command('roll3', (ctx) => {
  return ctx.reply('Да поможет тебе бог ролла', Extra.markup(
    Markup.keyboard(['3d20', '3d12', '3d10', '3d8', '3d6', '3d4'], {
      wrap: (btn, index, currentRow) => currentRow.length >= (index + 1) / 2
    })
  ))
})

bot.command('roll4', (ctx) => {
  return ctx.reply('Да поможет тебе бог ролла', Extra.markup(
    Markup.keyboard(['4d20', '4d12', '4d10', '4d8', '4d6', '4d4'], {
      wrap: (btn, index, currentRow) => currentRow.length >= (index + 1) / 2
    })
  ))
})

bot.command('roll5', (ctx) => {
  return ctx.reply('Да поможет тебе бог ролла', Extra.markup(
    Markup.keyboard(['5d20', '5d12', '5d10', '5d8', '5d6', '5d4'], {
      wrap: (btn, index, currentRow) => currentRow.length >= (index + 1) / 2
    })
  ))
})

bot.hears('1d20', ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,20,1)))
bot.hears('1d12', ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,12,1)))
bot.hears('1d10', ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,10,1)))
bot.hears('1d8',  ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,8,1)))
bot.hears('1d6',  ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,6,1)))
bot.hears('1d4',  ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,4,1)))

bot.hears('2d20', ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,20,2)))
bot.hears('2d12', ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,12,2)))
bot.hears('2d10', ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,10,2)))
bot.hears('2d8',  ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,8,2)))
bot.hears('2d6',  ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,6,2)))
bot.hears('2d4',  ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,4,2)))

bot.hears('3d20', ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,20,3)))
bot.hears('3d12', ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,12,3)))
bot.hears('3d10', ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,10,3)))
bot.hears('3d8',  ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,8,3)))
bot.hears('3d6',  ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,6,3)))
bot.hears('3d4',  ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,4,3)))

bot.hears('4d20', ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,20,4)))
bot.hears('4d12', ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,12,4)))
bot.hears('4d10', ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,10,4)))
bot.hears('4d8',  ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,8,4)))
bot.hears('4d6',  ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,6,4)))
bot.hears('4d4',  ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,4,4)))

bot.hears('5d20', ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,20,5)))
bot.hears('5d12', ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,12,5)))
bot.hears('5d10', ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,10,5)))
bot.hears('5d8',  ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,8,5)))
bot.hears('5d6',  ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,6,5)))
bot.hears('5d4',  ctx => ctx.reply(`${ctx.message.from.username} выбрасывает` +  `\n` + '—————' + `\n` + dice (1,4,5)))


bot.launch()


