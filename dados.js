let dados = [
        {
          heroi: 'Deadpool (Deadpool)',
          editora: 'Marvel',
          descricao: 'Deadpool, o mercenário tagarela com poderes regenerativos, é conhecido por seu humor ácido e quarto quebrando a quarta parede. Com um passado obscuro e uma habilidade única de curar quase qualquer ferimento, Deadpool se tornou um dos personagens mais populares da Marvel, tanto nos quadrinhos quanto nos filmes.',
          tags: 'heroi, cura, imortal, engraçado, violento'
        },
        {
          heroi: 'Wolverine (Logan)',
          editora: 'Marvel',
          descricao: 'Wolverine, também conhecido como Logan, é um mutante com um fator de cura acelerado que o torna praticamente imortal. Suas garras de adamantium, um metal quase indestrutível, e seus sentidos aguçados fazem dele um combatente formidável. Ele já fez parte de diversas equipes, como os X-Men, a Tropa Alfa e os Vingadores, e seu principal inimigo é o Dentes de Sabre.',
          tags: 'heroi, x-men, adamantium, cura, imortal, garras, ferocidade, lealdade, misterioso'
        },
        {
          heroi: 'Homem-Aranha (Spider-Man)',
          editora: 'Marvel',
          descricao: 'Homem-Aranha, também conhecido como Peter Parker, ganhou seus poderes aracnídeos após ser picado por uma aranha radioativa. Ele possui força, agilidade, sentidos aprimorados e a capacidade de aderir a superfícies. Ele é membro dos Vingadores e seu principal inimigo é o Duende Verde.',
          tags: 'heroi, vingadores, aranha, radioativo, força, agilidade, sentidos, teias, responsabilidade'
        },
        {
          heroi: 'Batman (Batman)',
          editora: 'DC Comics',
          descricao: 'Batman, também conhecido como Bruce Wayne, é um vigilante que usa tecnologia e inteligência para combater o crime em Gotham City. Ele não possui superpoderes, mas é um mestre em artes marciais, detetive e estrategista. Seus principais inimigos são o Coringa, o Charada e o Pinguim.',
          tags: 'heroi, vigilante, tecnologia, inteligência, artes marciais, detetive, estrategista, justiceiro, coringa'
        },
        {
          heroi: 'Mulher-Maravilha (Wonder Woman)',
          editora: 'DC Comics',
          descricao: 'Mulher-Maravilha, também conhecida como Diana Prince, é uma princesa amazona com superforça, velocidade, resistência e voo. Ela é membro da Liga da Justiça e sua principal inimiga é Ares, o Deus da Guerra.',
          tags: 'heroi, liga-da-justica, amazona, força, velocidade, resistencia, voo, escudo, laço'
        },
        {
          heroi: 'Super Homem (Superman)',
          editora: 'DC Comics',
          descricao: 'Superman, também conhecido como Clark Kent, é um alienígena do planeta Krypton com superforça, voo, visão de calor, super-respiração, visão de raio-x e super-audição. Ele é membro da Liga da Justiça e seu principal inimigo é Lex Luthor.',
          tags: 'heroi, liga-da-justica, kryptoniano, força, voo, calor, respiração, raio-x, audição, justiça'
        },
        {
          heroi: 'Homem de Ferro (Iron Man)',
          editora: 'Marvel',
          descricao: 'Homem de Ferro, também conhecido como Tony Stark, é um bilionário inventor que usa uma armadura de alta tecnologia para combater o crime. Ele é membro dos Vingadores e seu principal inimigo é o Mandarim.',
          tags: 'heroi, vingadores, armadura, tecnologia, inteligencia, inventor, genial, bilionário, mandarim'
        },
        {
          heroi: 'Capitão América (Captain America)',
          editora: 'Marvel',
          descricao: 'Capitão América, também conhecido como Steve Rogers, é um super-soldado que recebeu um soro experimental que o tornou fisicamente perfeito. Ele é membro dos Vingadores e seu principal inimigo é o Caveira Vermelha.',
          tags: 'heroi, vingadores, supersoldado, patriotismo, escudo, vibranium, força, estratégia, caveira-vermelha'
        },
        {
          heroi: 'Thor (Thor)',
          editora: 'Marvel',
          descricao: 'Thor é um deus asgardiano que possui força sobre-humana, voo, resistência e controla o clima. Ele é membro dos Vingadores e seu principal inimigo é Loki.',
          tags: 'heroi, vingadores, asgardiano, deus, força, voo, resistencia, martelo, tempestades, loki'
        },
        {
          heroi: 'Hulk (Hulk)',
          editora: 'Marvel',
          descricao: 'Hulk é um alter ego de Bruce Banner, que se transforma em um monstro verde de força colossal quando fica com raiva. Ele é membro dos Vingadores e seu principal inimigo é o General Ross.',
          tags: 'heroi, vingadores, força, raiva, transformação, verde, monstro, general-ross, bruce-banner'
        },
        {
          heroi: 'Pantera Negra (Black Panther)',
          editora: 'Marvel',
          descricao: 'Pantera Negra é o rei de Wakanda, uma nação africana tecnologicamente avançada. Ele possui força sobre-humana, velocidade, agilidade e usa um traje vibranium que o torna um combatente imbatível. Ele é membro dos Vingadores e seu principal inimigo é o Ulysses Klaw.',
          tags: 'heroi, vingadores, wakanda, vibranium, rei, força, velocidade, agilidade, klaw, tecnologia'
        },
        {
          heroi: 'Doutor Estranho (Doctor Strange)',
          editora: 'Marvel',
          descricao: 'Doutor Estranho é um cirurgião brilhante que, após um acidente, se torna um mestre das artes místicas. Ele usa seus poderes para proteger a Terra de ameaças mágicas. Ele é membro dos Vingadores e seu principal inimigo é Dormammu.',
          tags: 'heroi, vingadores, magia, arte-mistica, cirurgião, feiticeiro, dormammu, olho-de-agamoto, dimensões'
        },
        {
          heroi: 'Homem-Formiga (Ant-Man)',
          editora: 'Marvel',
          descricao: 'Homem-Formiga, também conhecido como Hank Pym ou Scott Lang, é um cientista que pode diminuir seu tamanho e controlar formigas. Ele é membro dos Vingadores e seu principal inimigo é o Homem-Formiga Amarelo.',
          tags: 'heroi, vingadores, formigas, tamanho, ciência, diminuto, gigante, amarelo, pym, lang'
        },
        {
          heroi: 'Viúva Negra (Black Widow)',
          editora: 'Marvel',
          descricao: 'Viúva Negra, também conhecida como Natasha Romanoff, é uma agente da S.H.I.E.L.D. e ex-assassina. Ela é uma mestre em espionagem, artes marciais e combate corpo-a-corpo. Ela é membro dos Vingadores e seu principal inimigo é o General Dreykov.',
          tags: 'heroi, vingadores, espionagem, assassina, artes-marciais, combate, shiled, Dreykov, romanov, vingadora'
        },
        {
          heroi: 'Gavião Arqueiro (Hawkeye)',
          editora: 'Marvel',
          descricao: 'Gavião Arqueiro, também conhecido como Clint Barton, é um mestre arqueiro que usa flechas especiais para combater o crime. Ele é membro dos Vingadores e seu principal inimigo é o Rei do Crime.',
          tags: 'heroi, vingadores, arqueiro, flechas, estratégia, combate, vingador, clint-barton, rei-do-crime'
        },
        {
          heroi: 'Mercúrio (Quicksilver)',
          editora: 'Marvel',
          descricao: 'Mercúrio, também conhecido como Pietro Maximoff, é um mutante com supervelocidade e reflexos. Ele é membro dos X-Men e seu principal inimigo é Magneto.',
          tags: 'heroi, x-men, mutante, velocidade, reflexos, magneto, pietro-maximoff, vingador, quicksilver'
        },
        {
          heroi: 'Feiticeira Escarlate (Scarlet Witch)',
          editora: 'Marvel',
          descricao: 'Feiticeira Escarlate, também conhecida como Wanda Maximoff, é uma mutante com poderes de manipulação de energia e probabilidade. Ela é membro dos Vingadores e seu principal inimigo é o Magneto.',
          tags: 'heroi, vingadores, mutante, magia, energia, probabilidade, magneto, wanda-maximoff, caos, vingadora'
        },
        {
          heroi: 'Visão (Vision)',
          editora: 'Marvel',
          descricao: 'Visão é um androide com poderes de densidade, voo e manipulação de energia. Ele é membro dos Vingadores e seu principal inimigo é Ultron.',
          tags: 'heroi, vingadores, androide, densidade, voo, energia, ultron, vingador, inteligencia, sintezoide'
        },
        {
          heroi: 'Demolidor (Daredevil)',
          editora: 'Marvel',
          descricao: 'Demolidor, também conhecido como Matt Murdock, é um advogado cego que possui sentidos sobre-humanos, incluindo a capacidade de "ver" usando o eco. Ele é um vigilante que luta contra o crime em Nova York e seu principal inimigo é o Rei do Crime.',
          tags: 'heroi, vigilante, cego, sentidos, eco, advogado, nova-york, rei-do-crime, justiça, matt-murdock'
        },
        {
          heroi: 'Punho de Ferro (Iron Fist)',
          editora: 'Marvel',
          descricao: 'Punho de Ferro, também conhecido como Danny Rand, aprendeu artes marciais e obteve o poder do Punho de Ferro ao entrar no coração de um dragão místico. Ele é um vigilante que luta contra o crime e seu principal inimigo é o Rei Dragão.',
          tags: 'heroi, vigilante, artes-marciais, dragão, punho-de-ferro, danny-rand, rei-dragão, místico'
        },
        {
          heroi: 'Justiceiro (Punisher)',
          editora: 'Marvel',
          editora: 'Marvel',
          descricao: 'Justiceiro, também conhecido como Frank Castle, é um ex-militar que utiliza métodos violentos para combater o crime. Ele não tem poderes sobre-humanos, mas é um mestre em armas e táticas militares. Seu principal inimigo é o Rei do Crime.',
          tags: 'anti-heroi, vigilante, armas, ex-militar, violência, vingança, frank-castle, rei-do-crime'
        },
        {
          heroi: 'Ciclope (Cyclops)',
          editora: 'Marvel',
          descricao: 'Ciclope, também conhecido como Scott Summers, é um mutante que dispara raios ópticos de seus olhos. Ele é membro dos X-Men e seu principal inimigo é Magneto.',
          tags: 'heroi, x-men, mutante, raios-opticos, lider, magneto, scott-summers, professor-x, vingador'
        },
        {
          heroi: 'Tempestade (Storm)',
          editora: 'Marvel',
          descricao: 'Tempestade, também conhecida como Ororo Munroe, é uma mutante que controla o clima. Ela é membro dos X-Men e seu principal inimigo é Magneto.',
          tags: 'heroi, x-men, mutante, clima, tempestades, ororo-munroe, magneto, x-men, controle'
        },
        {
          heroi: 'Vampira (Rogue)',
          editora: 'Marvel',
          descricao: 'Vampira, também conhecida como Anna Marie, é uma mutante que pode absorver os poderes e memórias de outras pessoas ao tocar nelas. Ela é membro dos X-Men e seu principal inimigo é Magneto.',
          tags: 'heroi, x-men, mutante, absorver-poderes, memórias, magneto, anna-marie, x-men, vingadora'
        },
        {
          heroi: 'Homem de Gelo (Iceman)',
          editora: 'Marvel',
          descricao: 'Homem de Gelo, também conhecido como Bobby Drake, é um mutante que pode controlar e manipular o gelo. Ele é membro dos X-Men e seu principal inimigo é Magneto.',
          tags: 'heroi, x-men, mutante, gelo, controle, bobbie-drake, magneto, x-men, vingador'
        },
        {
          heroi: 'Fera (Beast)',
          editora: 'Marvel',
          descricao: 'Fera, também conhecido como Hank McCoy, é um mutante com superforça, velocidade, agilidade e inteligência. Ele é membro dos X-Men e seu principal inimigo é Magneto.',
          tags: 'heroi, x-men, mutante, força, velocidade, agilidade, inteligencia, hank-mccoy, magneto, x-men'
        },
        {
          heroi: 'Anjo (Angel)',
          editora: 'Marvel',
          descricao: 'Anjo, também conhecido como Warren Worthington III, é um mutante que pode voar e possui superforça. Ele é membro dos X-Men e seu principal inimigo é Magneto.',
          tags: 'heroi, x-men, mutante, voo, força, warren-worthington, magneto, x-men, vingador'
        },
        {
          heroi: 'Professor X (Professor X)',
          editora: 'Marvel',
          descricao: 'Professor X, também conhecido como Charles Xavier, é um mutante com telepatia e telecinese. Ele é o fundador dos X-Men e seu principal inimigo é Magneto.',
          tags: 'heroi, x-men, mutante, telepatia, telecinese, charles-xavier, magneto, fundador, x-men, líder'
        },
        {
          heroi: 'Magneto (Magneto)',
          editora: 'Marvel',
          descricao: 'Magneto é um mutante com a capacidade de controlar campos magnéticos. Ele é um dos principais inimigos dos X-Men, mas também tem sido um aliado em algumas ocasiões.',
          tags: 'vilao, x-men, mutante, magnetismo, poder, controle, professor-x, ferro, metal, campos-magneticos'
        },
        {
          heroi: 'Lanterna Verde (Green Lantern)',
          editora: 'DC Comics',
          descricao: 'Lanterna Verde é um membro do Corpo dos Lanternas Verdes, que usa um anel de poder para criar construções de energia verde. Cada Lanterna Verde tem um setor do universo para proteger. Hal Jordan é o Lanterna Verde da Terra, e seu principal inimigo é Sinestro.',
          tags: 'heroi, lanterna-verde, anel-de-poder, energia, construções, hal-jordan, sinestro, corpo-dos-lanternas-verdes, setor'
        },
        {
          heroi: 'Aquaman (Aquaman)',
          editora: 'DC Comics',
          descricao: 'Aquaman é o rei de Atlântida e possui a capacidade de falar com os animais marinhos e respirar debaixo d´água. Ele é membro da Liga da Justiça e seu principal inimigo é o Rei Oceano.',
          tags: 'heroi, liga-da-justica, atlântida, rei, mar, oceanos, peixes, trident, rei-oceano, respirar-debaixo-dagua'
        },
        {
          heroi: 'Flash (Flash)',
          editora: 'DC Comics',
          descricao: 'Flash, também conhecido como Barry Allen, possui supervelocidade, reflexos aprimorados e a capacidade de vibrar através de objetos sólidos. Ele é membro da Liga da Justiça e seu principal inimigo é o Professor Zoom.',
          tags: 'heroi, liga-da-justica, velocidade, reflexos, vibrar, barry-allen, professor-zoom, velocista, força-da-velocidade'
        },
        {
          heroi: 'Cyborg (Cyborg)',
          editora: 'DC Comics',
          descricao: 'Cyborg, também conhecido como Victor Stone, é um ciborgue com partes mecânicas e tecnologia avançada. Ele é membro da Liga da Justiça e seu principal inimigo é o Doutor Luz.',
          tags: 'heroi, liga-da-justica, ciborgue, tecnologia, partes-mecânicas, victor-stone, doutor-luz, protheses, hacker'
        },
        {
          heroi: 'Shazam (Shazam)',
          editora: 'DC Comics',
          descricao: 'Shazam, também conhecido como Billy Batson, é um garoto que pode se transformar em um super-herói adulto com a capacidade de controlar raios, superforça, velocidade e resistência. Seu principal inimigo é o Doutor Thaddeus Sivana.',
          tags: 'heroi, criança, poder, raios, força, velocidade, resistencia, mago, shazam, billy-batson, siva'
        },
        {
          heroi: 'Arqueiro Verde (Green Arrow)',
          editora: 'DC Comics',
          descricao: 'Arqueiro Verde, também conhecido como Oliver Queen, é um bilionário que usa seu arco e flechas para combater o crime. Ele é um mestre arqueiro e estrategista, e seu principal inimigo é o Conde Vértigo.',
          tags: 'heroi, arco-e-flechas, vigilante, mestre-arqueiro, oliver-queen, conde-vertig, justiça, estratégia, tecnologia'
        },
        {
          heroi: 'Caçador de Marte (Martian Manhunter)',
          editora: 'DC Comics',
          descricao: 'Caçador de Marte, também conhecido como Jonn Jonzz, é um alienígena de Marte com a capacidade de mudar de forma, telecinese, telepatia e invisibilidade. Ele é membro da Liga da Justiça e seu principal inimigo é o General Zod.',
          tags: 'heroi, liga-da-justica, marciano, forma, telecinese, telepatia, invisibilidade, jonn-jonnz, general-zod, teletransporte'
        }
      ];