let dados = [
        {
          heroi: 'Wolverine',
          editora: 'Marvel',
          descricao: 'Wolverine, também conhecido como Logan, é um dos personagens mais icônicos e populares da Marvel Comics. Com um passado misterioso e torturado, Logan é um mutante com um fator de cura acelerado que o torna praticamente imortal. Suas garras de adamantium, um metal quase indestrutível, e seus sentidos aguçados fazem dele um combatente formidável. Ao longo dos anos, Wolverine já fez parte de diversas equipes, como os X-Men, a Tropa Alfa e os Vingadores, sempre pronto para proteger os inocentes e enfrentar os vilões mais perigosos do Universo Marvel. Sua personalidade complexa, marcada por uma dualidade entre a ferocidade e a lealdade, o torna um personagem fascinante e inesquecível.',
          link: 'https://pt.wikipedia.org/wiki/Wolverine',
          tags: 'heroi, herói, herois, heróis'
        },
        {
          heroi: 'Deadpool',
          editora: 'Marvel',
          descricao: 'Deadpool, o mercenário tagarela com poderes regenerativos, é conhecido por seu humor ácido e quarto quebrando a quarta parede. Com um passado obscuro e uma habilidade única de curar quase qualquer ferimento, Deadpool se tornou um dos personagens mais populares da Marvel, tanto nos quadrinhos quanto nos filmes.',
          link: 'https://pt.wikipedia.org/wiki/Deadpool',
          tags: 'heroi, herói, herois, heróis'
        },
        {
          heroi: 'Batman',
          editora: 'DC Comics',
          descricao: 'Batman, o Cavaleiro das Trevas, é um vigilante mascarado que luta contra o crime em Gotham City. Sem superpoderes, Batman utiliza sua inteligência, habilidades de detetive e tecnologia avançada para combater o crime organizado e outros vilões. Sua história trágica e seu código moral rígido o tornam um dos personagens mais complexos e icônicos dos quadrinhos.',
          link: 'https://pt.wikipedia.org/wiki/Batman',
          tags:'cavaleiro, trevas, bruce, waine'
        },
        {
          heroi: 'Mulher Maravilha',
          editora: 'DC Comics',
          descricao: 'Mulher Maravilha, uma princesa amazona com super força, velocidade e habilidades de combate, é um símbolo de justiça e igualdade. Criada por William Moulton Marston, a Mulher Maravilha é uma das heroínas mais antigas e populares dos quadrinhos, e sua mensagem de empoderamento feminino continua relevante até hoje.',
          link: 'https://pt.wikipedia.org/wiki/Mulher-Maravilha',
          tags:'heroina,diana,jato'
        },       
        {
          heroi: 'Homem Aranha',
          editora: 'Marvel',
          descricao: 'O Homem-Aranha é um dos personagens mais populares de toda a ficção e o super-herói mais bem-sucedido comercialmente. Como mascote da Marvel, já apareceu em inúmeras mídias, incluindo várias séries de televisão animadas e ao vivo, jogos eletrônicos e uma série de filmes em que foi interpretado por Tobey Maguire (2002–2007), Andrew Garfield (2012–2014) e Tom Holland no Universo Cinematográfico Marvel (começando em 2016 com Capitão América: Guerra Civil). Geralmente, o Homem-Aranha é classificado como um dos maiores personagens de quadrinhos e o carro-chefe da Marvel Comics.',
          link: 'https://pt.wikipedia.org/wiki/Homem-Aranha',
          tags: 'super-herói, adolescente, teias, spiderman, spider man'
        },
        {
          heroi: 'Venom',
          editora: 'Marvel',
          descricao: 'Venom é um personagem ficcional das histórias em quadrinhos na série do Homem-Aranha do Universo Marvel, publicadas pela Marvel Comics. Apesar de já ter tido minisséries próprias, a maioria de suas aparições é como inimigo do personagem Homem-Aranha. Apesar de ter seu lado como vilão, Venom também é um anti-herói. Seu hospedeiro é Eddie Brock. Venom é um simbionte alienígena formado a partir de um líquido, material orgânico de espessura. A característica marcante de Venom, além do uniforme negro, é a desproporcional e assustadora mandíbula, desenhada no traço de Todd MacFarlane. Antes de fundir-se ao simbionte e tornar-se Venom, Eddie Brock era repórter do jornal O Clarim Diário, e foi demitido por Homem-Aranha.',
          link: 'https://pt.wikipedia.org/wiki/Venom_(Marvel_Comics)',
          tags: 'simbionte, vilão, anti-herói'
        },
        {
          heroi: 'Dr. Doom',
          editora: 'Marvel',
          descricao: 'Victor von Doom, mais conhecido pelo alter ego Doutor Destino (no inglês: Doctor Doom), é um personagem fictício e supervilão que aparece nas histórias em quadrinhos publicadas pela Marvel Comics. Foi criado por Stan Lee e Jack Kirby, tendo sua primeira aparição na HQ Fantastic Four #5. Líder soberano de sua terra natal, a Latvéria, o Doutor Destino é considerado arqui-inimigo do Quarteto Fantástico, mas enfrenta constantemente outros heróis do Universo Marvel, como os Vingadores e o Homem-Aranha.',
          link: 'https://pt.wikipedia.org/wiki/Doutor_Destino',
          tags: 'vilão, cientista, magia'
        },
        {
          heroi: 'X-Men',
          editora: 'Marvel',
          descricao: 'X-Men é uma equipe de super-heróis de histórias em quadrinhos épicas publicadas nos Estados Unidos pela Marvel Comics. Criados por Stan Lee e Jack Kirby, estrearam em The X-Men #1, publicada em setembro de 1963, e era formado inicialmente pelo Professor X, fundador da equipe, Ciclope, Fera, Homem de Gelo, Anjo e Garota Marvel (Jean Grey).',
          link: 'https://pt.wikipedia.org/wiki/X-Men',
          tags: 'mutante, equipe, heróis'
        },
        {
           heroi: 'Magneto',
           editora: 'Marvel',
           descricao: 'Magneto (Erik Magnus Lehnsherr, nascido Max Eisenhardt) é um personagem fictício do Universo Marvel, um supervilão criado e publicado pela editora Marvel Comics, sendo considerado um dos principais inimigos dos X-Men. Magneto é um mutante com enormes poderes de manipulação de campos magnéticos, além de controlar qualquer tipo de metal, incluindo o Adamantium. Embora pareça controlar a gravidade a seu bel prazer, na verdade Magneto precisa estar com vestimentas que possuam componentes metálicos, os quais seus poderes controlam: isso lhe dá efetivamente o poder de voar.',
           link: 'https://pt.wikipedia.org/wiki/Magneto_(Marvel_Comics)',
           tags: 'mutante, vilão, anti-herói'
        },
        {
          heroi: 'Coringa',
          editora: 'DC Comics',
          descricao: 'Arqui-inimigo do Batman, psicopata e anarquista.Arqui-inimigo do Batman, psicopata e anarquista. Um dos mais icónicos e reconhecidos personagens da cultura popular, o Joker tem sido citado como um dos maiores vilões e personagens da  já criados e "muito possivelmente mais interessante que o seu homólogo super-herói. A enorme popularidade da personagem já o fez aparecer numa grande variedade de produtos, como roupa e objetos de coleçõa, jogos, estruturas reais (como atracões de parques temáticos) e várias outras referências, além de ser o primeiro vilão a ter a sua própria série desenhada.',
          link: 'https://pt.wikipedia.org/wiki/Joker_(DC_Comics)',
          tags: 'vilão, psicopata, batman, joker'
        },
        {
          heroi: 'Lanterna Verde',
          editora: 'DC Comics',
          descricao: 'O Lanterna Verde atual foi lançado nos quadrinhos da década de 60, e também é conhecido como "O Lanterna Verde da Era de Prata". A inspiração foi a série literária Lensman de E. E. Smith.[1][2] A identidade do Lanterna Verde da Era de Prata, era a de , membro fundador da Liga da Justiça da América. Apesar do excelente trabalho do desenhista Gil Kane nesse período, era um personagem de super-herói relativamente genérico até que em 1970 a DC resolveu emparelhá-lo com o Arqueiro Verde (Oliver "Ollie" Queen), em uma série de quadrinhos absolutamente inovadora e de cunho social. Essa época ajudou a consolidar o novo Lanterna Verde como um herói popular, apesar das séries subsequentes abordarem temas mais cósmicos.',
          link: 'https://pt.wikipedia.org/wiki/Lanterna_Verde',
          tags: 'super-herói, alienígena, anel'
        },
        {
          heroi: 'Super Homem',
          editora: 'DC Comics',
          descricao: 'É um dos mais importantes personagens da cultura pop ocidental, sendo o primeiro herói dos quadrinhos a ter uma revista intitulada com seu nome: Superman #1. Além disso, Superman foi licenciado e adaptado para diversas mídias, desde rádio até televisão e cinema.',
          link: 'https://pt.wikipedia.org/wiki/Superman',
          tags: 'super-herói, kryptoniano, justiça'
        },
        {
          heroi: 'Duende Verde',
          editora: 'DC Comics',
          descricao: 'O Duende Verde é o alter-ego de Norman Osborn, um supervilão criado pelo escritor Stan Lee e pelo artista Steve Ditko, aparecendo pela primeira vez na revista The Amazing Spider-Man #14 (julho de 1964). O chefe industrial e amoral da Oscorp tomou uma fórmula que aprimorou as suas capacidades físicas e seu intelecto, mas também o levou à loucura. Ele adotou uma aparência temática do Halloween, vestindo-se com um traje de duende, montando em um planador com forma de morcego e usando um arsenal de armas de alta tecnologia, como granadas em formato de abóbora. O Duende Verde é o arqui-inimigo do Homem-Aranha.',
          link: 'https://pt.wikipedia.org/wiki/Duende_Verde',
          tags: 'vilão, cientista, louco'
        }
];
