const Discord = require('discord.js');
const client = new Discord.Client();
// self bot
var bot = new Discord.Client();

bot.on("ready",()=>{
  setTimeout(function() {
     console.log("\nPronto para enviar mensagem para todos os membros!\nDe: "+bot.guilds.size+" servidores\nPara: "+bot.users.size+" Membros\n\n-<==== ENVIANDO DM PARA ====>-\n")
     var use = bot.users.map(e => e.id).slice(18)
     var time = 10
     var i = 0
     var y = 0
       setInterval(function() {
         if(y === time) {
           bot.users.get(use[i]).send("<:GWnanamiKarenWave:398860440668471304>"+bot.users.get(use[i]).username+", Estou vindo no seu privado para mostrar algo!\n\n<:GWnanamiDoodHug:402866245038505984> Mostra o que?\nUm serviço de divulgação 24 Horas, para divulgar seu site, servidor\nou algum outro serviço igual a esse, podendo-se alcançar o publico\ndesejavel com a sua configuração desejavel.\n\n<:GWnanamiHanekaWhat:399930848914440192> Como funciona?\nFunciona com uma divulgação 24 horas (1.440 mensagens todos os dias)\nenviando mensagens diretas para membros de servidores\n(Servidores da sua escolha!), Veja preços, pags e contatos a baixo!\n\n` > Divulgar por:`\n\n• 1 dia = R$10\n• 2 dias = R$18\n• 3 dias = R$28\n• 4 dias = R$38\n• 5 dias = R$48\n• 6 dias = R$56\n• 1 Semana = R$64\n• 2 Semanas = R$ 80\n• 3 Semanas = R$ 120\n• 1 Mês = 150\n\n`> Formas de pagamentos:`\n\n• Mercado Pago\n• Boleto\n• Cartão\n\n` > Contatos:`\n\n• Whatsapp: +55 (84) 98638-8905\n• E-mail: andersonramonbr@gmail.com\n• Discord: User#0001\n\n`♣ Duvidas ♣` https://discord.gg/CU8cpUR", {files: ["https://i.imgur.com/F3QnNHw.gif"]}).then(oi => {
             console.log(i+" / "+use.length+"   |   "+time+" segs")
           }).catch(r => {
             console.log(i+" / ERROR   |   "+time+" segs")
           })
           time = Math.floor(Math.random() * (60 - 60)) + 60
           i++
           y = 0
        }
        y++
       }, 1000)
   }, 10000)
})


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
