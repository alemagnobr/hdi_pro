import { Question, Difficulty } from '../types';

export const questions: Question[] = [
  // --- QUESTÕES FÁCEIS (Balanceadas) ---
  {
    id: '1',
    category: 'Comunicação & Soft Skills',
    text: 'Por que é importante reconhecer as necessidades psicológicas de um cliente ao resolver incidentes?',
    options: [
      'Reconhecê-las permite que você imite o comportamento do cliente para criar rapport imediato.',
      'Ilustra a você que todos os clientes possuem perfis comportamentais idênticos.',
      'Necessidades psicológicas não resolvidas podem ter um efeito negativo na resolução.',
      'Necessidades psicológicas não resolvidas garantem uma resolução mais rápida e técnica.'
    ],
    correctOptionIndex: 2,
    difficulty: Difficulty.EASY,
    explanation: 'Se as necessidades psicológicas (como ser ouvido e compreendido) não forem atendidas, o cliente pode ficar frustrado ou resistente, o que dificulta a cooperação técnica e impacta negativamente o tempo e a qualidade da resolução.'
  },
  {
    id: '2',
    category: 'Comunicação & Soft Skills',
    text: 'Qual é a melhor maneira de minimizar conflitos com um cliente?',
    options: [
      'Pedir educadamente ao cliente para que se acalme antes de prosseguir.',
      'Informar seu supervisor imediatamente sobre o comportamento do cliente.',
      'Permanecer amigável, calmo e profissional durante toda a interação.',
      'Lembrar ao cliente que os contatos estão sendo gravados para segurança.'
    ],
    correctOptionIndex: 2,
    difficulty: Difficulty.EASY,
    explanation: 'Manter uma postura amigável, calma e profissional é a chave para a desescalada. Pedir para "se acalmar" geralmente irrita mais o cliente, pois soa condescendente.'
  },
  {
    id: '3',
    category: 'Comunicação & Soft Skills',
    text: 'Um cliente muito comunicativo pode resultar em tempos de chamada prolongados. Qual é a melhor prática para encerrar a chamada?',
    options: [
      'Peça gentilmente ao cliente para desligar e ligar novamente mais tarde.',
      'Mencione que você está muito ocupado e tem outros chamados na fila.',
      'Faça uma recapitulação das ações acordadas e dos próximos passos.',
      'Use perguntas abertas para deixar o cliente concluir seu pensamento.'
    ],
    correctOptionIndex: 2,
    difficulty: Difficulty.EASY,
    explanation: 'Recapitular o que foi acordado e os próximos passos sinaliza profissionalmente que a fase de conversa acabou e que é hora de agir ou desligar, ajudando a focar o cliente.'
  },
  {
    id: '4',
    category: 'Processos & Procedimentos',
    text: 'Qual situação é mais apropriada para fazer um escalonamento?',
    options: [
      'Você precisa fazer sua pausa agendada e não quer deixar o chamado aberto.',
      'Você precisa sair para participar de um treinamento obrigatório da empresa.',
      'Você esgotou todos os recursos, acessos e conhecimentos disponíveis.',
      'Você tem pouca experiência com o cliente e prefere não atendê-lo.'
    ],
    correctOptionIndex: 2,
    difficulty: Difficulty.EASY,
    explanation: 'O escalonamento funcional deve ocorrer quando o analista de Nível 1 não possui mais conhecimento, acesso ou ferramentas para resolver o incidente dentro do tempo estipulado.'
  },
  {
    id: '5',
    category: 'Processos & Procedimentos',
    text: 'Qual é a melhor maneira de lidar com solicitações que não são suportadas pelo centro?',
    options: [
      'Orientar o cliente sobre outros meios ou fornecedores para obter assistência.',
      'Informar o cliente de forma direta que você é incapaz de ajudá-lo.',
      'Repreender o cliente por tentar usar um software não homologado.',
      'Sugerir que o cliente leia o acordo de nível de serviço (SLA) com atenção.'
    ],
    correctOptionIndex: 0,
    difficulty: Difficulty.EASY,
    explanation: 'Mesmo que você não possa resolver, a melhor prática de serviço é ser prestativo e indicar onde o cliente pode encontrar a solução (fornecedor externo, outro departamento, etc.).'
  },
  {
    id: '6',
    category: 'Processos & Procedimentos',
    text: 'Como você deve responder a um cliente que relata um erro em um aplicativo de software não suportado?',
    options: [
      'Desculpe, mas não oferecemos suporte a esse software, por isso, é necessário entrar em contato com outra pessoa.',
      'Esse é um software não suportado e a política proíbe seu uso nos computadores da empresa.',
      'Não suportamos esse software e infelizmente não podemos alocar tempo para tentar ajudá-lo.',
      'Não suportamos esse software, mas posso ajudá-lo a descobrir onde você pode obter suporte.'
    ],
    correctOptionIndex: 3,
    difficulty: Difficulty.EASY,
    explanation: 'Esta resposta é a mais empática e prestativa. Ela define o limite (não suportamos) mas oferece valor agregado (ajudar a descobrir quem suporta).'
  },
  {
    id: '7',
    category: 'Processos & Procedimentos',
    text: 'Qual é o motivo mais importante para oferecer atualizações sobre status aos clientes?',
    options: [
      'Os clientes precisam sentir que estão no controle da situação técnica.',
      'Os clientes podem reclamar com os supervisores se não forem atualizados.',
      'Os clientes precisam saber quando poderão retomar suas atividades de trabalho.',
      'Os clientes querem saber para informar seus colegas sobre a falha.'
    ],
    correctOptionIndex: 2,
    difficulty: Difficulty.EASY,
    explanation: 'O foco do cliente é a produtividade. Eles precisam planejar suas tarefas em torno da indisponibilidade, por isso a estimativa de retorno é crucial.'
  },
  {
    id: '8',
    category: 'Processos & Procedimentos',
    text: 'Qual é a melhor prática para documentar incidentes?',
    options: [
      'Usar siglas e abreviações internas para manter a descrição breve.',
      'Usar pontuação, gramática e estrutura de frases corretas.',
      'Usar emoticons para registrar fielmente o estado emocional do cliente.',
      'Usar linguagem informal e gírias para tornar a leitura mais fluida.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'A documentação deve ser clara e profissional para que qualquer outro analista possa entender. Pontuação e gramática corretas evitam ambiguidades.'
  },
  {
    id: '9',
    category: 'Processos & Procedimentos',
    text: 'Por que gramática e ortografia adequadas devem ser usadas ao documentar chamadas?',
    options: [
      'Para demonstrar que suas habilidades de escrita são superiores às dos colegas.',
      'Para evitar repreensões formais durante a revisão de qualidade do supervisor.',
      'Para atender aos requisitos burocráticos dos níveis mais altos de suporte.',
      'Para fornecer informações claras e reutilizáveis na gestão do conhecimento.'
    ],
    correctOptionIndex: 3,
    difficulty: Difficulty.EASY,
    explanation: 'Registros bem escritos são a base da Gestão do Conhecimento (KCS). Se estiverem mal escritos, não poderão ser facilmente pesquisados ou reutilizados por outros.'
  },
  {
    id: '10',
    category: 'Equipe & Profissionalismo',
    text: 'Qual é a melhor prática para construir relações de trabalho positivas com outros grupos no centro de suporte?',
    options: [
      'Compartilhar informações pessoais sobre membros de outras equipes.',
      'Compartilhar seu conhecimento técnico e procedimentos descobertos.',
      'Tratar os outros exatamente da maneira como eles tratam você.',
      'Tratar os outros bem apenas se eles puderem oferecer algo em troca.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Compartilhar conhecimento demonstra competência e espírito de equipe, gerando respeito e reciprocidade entre os grupos de suporte.'
  },
  {
    id: '11',
    category: 'Tecnologia & Ferramentas',
    text: 'Qual é o principal benefício das ferramentas de controle remoto?',
    options: [
      'Permitir que o centro de suporte monitore a atividade do usuário.',
      'Diminuir a necessidade de envio físico de técnicos (Despatch).',
      'Aumentar o uso de tecnologias de autoajuda pelos clientes.',
      'Reduzir drasticamente o número de contatos recebidos pelo suporte.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'O acesso remoto elimina a necessidade de deslocamento físico (despatch), resolvendo o problema mais rápido e com menos custo operacional.'
  },
  {
    id: '12',
    category: 'Comunicação & Soft Skills',
    text: 'Qual é a melhor razão para demonstrar confiança?',
    options: [
      'Demonstrar confiança permite que você exiba sua criatividade técnica.',
      'Demonstrar confiança exibe suas habilidades superiores de conhecimento.',
      'Demonstrar confiança inibe reclamações formais sobre o centro de suporte.',
      'Demonstrar confiança coloca você no controle da condução do atendimento.'
    ],
    correctOptionIndex: 3,
    difficulty: Difficulty.EASY,
    explanation: 'Quando o analista demonstra confiança, o cliente se sente seguro e tende a seguir as instruções sem questionar, permitindo que o analista guie o atendimento de forma eficiente.'
  },
  {
    id: '13',
    category: 'Comunicação & Soft Skills',
    text: 'Qual é a melhor descrição de parafrasear?',
    options: [
      'Repetir exatamente o que o cliente disse, palavra por palavra.',
      'Repetir o que você já havia dito anteriormente para reforçar.',
      'Usar suas próprias palavras para confirmar o entendimento do problema.',
      'Usar sua memória para tentar lembrar o que o cliente disse.'
    ],
    correctOptionIndex: 2,
    difficulty: Difficulty.EASY,
    explanation: 'Parafrasear não é repetir como um papagaio, mas sim reformular a ideia principal para garantir que o entendimento do problema está alinhado entre analista e cliente.'
  },
  {
    id: '14',
    category: 'Comunicação & Soft Skills',
    text: 'Qual é o propósito de parafrasear?',
    options: [
      'Educar o cliente forçando o uso dos termos técnicos corretos.',
      'Demonstrar sua capacidade técnica de descrever problemas complexos.',
      'Repetir ao cliente exatamente o que foi dito para registro.',
      'Permitir ao cliente validar se o seu entendimento está correto.'
    ],
    correctOptionIndex: 3,
    difficulty: Difficulty.EASY,
    explanation: 'É uma técnica de validação. Serve para que o cliente confirme "Sim, é exatamente isso que está acontecendo", evitando diagnósticos errados baseados em mal-entendidos.'
  },
  {
    id: '15',
    category: 'Processos & Procedimentos',
    text: 'Você pediu a um cliente para reiniciar o computador. Qual é a melhor maneira de usar seu tempo em silêncio?',
    options: [
      'Iniciar o atendimento de outro contato na fila de espera.',
      'Colocar o cliente em espera (Mute) e verificar mensagens pessoais.',
      'Responder rapidamente a uma consulta pendente por e-mail.',
      'Revisar o histórico do contato para buscar padrões recorrentes.'
    ],
    correctOptionIndex: 3,
    difficulty: Difficulty.EASY,
    explanation: 'Aproveitar o tempo morto para ler logs anteriores pode revelar se o problema é recorrente ou se há detalhes que passaram despercebidos, melhorando o diagnóstico.'
  },
  {
    id: '16',
    category: 'Processos & Procedimentos',
    text: 'Quais informações devem ser documentadas para cada incidente?',
    options: [
      'Todas as informações relativas a tentativas e resoluções bem-sucedidas.',
      'Apenas a solução final que resolveu efetivamente o incidente.',
      'Sentimentos pessoais do cliente sobre a qualidade do centro de suporte.',
      'Tudo o que o cliente explicitamente pedir para você registrar.'
    ],
    correctOptionIndex: 0,
    difficulty: Difficulty.EASY,
    explanation: 'Documentar o que *não* funcionou é tão importante quanto o que funcionou, para evitar que outros analistas repitam os mesmos passos falhos no futuro.'
  },
  {
    id: '17',
    category: 'Processos & Procedimentos',
    text: 'Qual é o principal motivo para registrar todos os incidentes?',
    options: [
      'Os registros permitem monitorar individualmente a atividade do analista.',
      'Os registros garantem o armazenamento seguro de dados confidenciais.',
      'Os registros impedem formalmente que os clientes abram reclamações.',
      'Os registros fornecem dados históricos para análise e reuso.'
    ],
    correctOptionIndex: 3,
    difficulty: Difficulty.EASY,
    explanation: 'A base de dados de incidentes é o coração do suporte. Registrar tudo permite análise de tendências, criação de base de conhecimento e melhoria contínua.'
  },
  {
    id: '18',
    category: 'Processos & Procedimentos',
    text: 'Qual é uma razão importante para os analistas do centro de suporte registrarem todos os incidentes?',
    options: [
      'Permitir que a produtividade do analista seja vigiada pela gerência.',
      'Garantir que as informações fiquem arquivadas para fins legais.',
      'Impedir que os clientes escalem o problema ao seu gerente.',
      'Fornecer dados essenciais para a análise de causa raiz de problemas.'
    ],
    correctOptionIndex: 3,
    difficulty: Difficulty.EASY,
    explanation: 'Sem registros, a Gestão de Problemas não consegue identificar falhas sistêmicas. Dados precisos alimentam a análise para resolver a causa raiz.'
  },
  {
    id: '19',
    category: 'Processos & Procedimentos',
    text: 'Qual é o benefício mais provável ao registrar todos os incidentes?',
    options: [
      'Permitir que o centro de suporte atue de forma proativa.',
      'Demonstrar a eficácia individual de cada analista de suporte.',
      'Estabelecer metas inalcançáveis de níveis de serviço.',
      'Economizar custos imediatos para o centro de serviços.'
    ],
    correctOptionIndex: 0,
    difficulty: Difficulty.EASY,
    explanation: 'Com dados completos, o suporte pode identificar tendências negativas antes que se tornem grandes crises, atuando proativamente em vez de apenas reagir.'
  },
  {
    id: '20',
    category: 'Equipe & Profissionalismo',
    text: 'Você recebe uma ligação, mas há colegas rindo alto na sua área. Qual a melhor ação?',
    options: [
      'Atender e colocar o cliente em espera até terminar de repreender os colegas.',
      'Pedir educadamente silêncio aos colegas antes de atender o telefone.',
      'Colocar o dedo sobre o microfone e pedir silêncio enquanto atende.',
      'Cobrir o ouvido livre para tentar bloquear o ruído e focar na chamada.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'O cliente não deve ouvir ruídos de fundo não profissionais. A ação correta é garantir um ambiente adequado antes de iniciar a interação.'
  },
  {
    id: '21',
    category: 'Processos & Procedimentos',
    text: 'Qual é o principal motivo para ter políticas de segurança no centro de serviços e suporte?',
    options: [
      'Para garantir que a equipe siga orientações legais estritas.',
      'Para fornecer procedimentos padronizados de conformidade.',
      'Para ajudar a gerenciar e controlar os ativos de hardware.',
      'Para proteger a organização, seus dados e seus clientes.'
    ],
    correctOptionIndex: 3,
    difficulty: Difficulty.EASY,
    explanation: 'O objetivo final da segurança é a proteção dos dados e da reputação da organização e dos seus clientes contra ameaças.'
  },
  {
    id: '22',
    category: 'Processos & Procedimentos',
    text: 'Por que é importante que o centro de suporte siga as políticas de segurança?',
    options: [
      'Garante a conformidade com os requisitos legais e regulatórios.',
      'Fornece um suporte consistente e tecnicamente superior.',
      'É simplesmente um bom conselho a ser seguido pelos analistas.',
      'Fornece acesso mais fácil e rápido às informações do cliente.'
    ],
    correctOptionIndex: 0,
    difficulty: Difficulty.EASY,
    explanation: 'Muitas políticas existem para cumprir leis (como LGPD/GDPR). O não cumprimento pode resultar em processos e multas severas para a empresa.'
  },
  {
    id: '23',
    category: 'Processos & Procedimentos',
    text: 'O que pode estar incluído em uma política de segurança?',
    options: [
      'Exigência de registro de todos os contatos no sistema de tickets.',
      'Exigência de proteção dos dados financeiros e pessoais dos clientes.',
      'Exigência de pesquisa completa na base de conhecimento.',
      'Exigência de não compartilhamento de soluções técnicas.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Políticas de segurança tratam especificamente da proteção de dados sensíveis, como informações financeiras (PCI-DSS) ou pessoais.'
  },
  {
    id: '24',
    category: 'Comunicação & Soft Skills',
    text: 'Qual é o melhor exemplo de escuta ativa?',
    options: [
      'Identificar conteúdo para criar artigos na base de conhecimento.',
      'Ler e responder e-mails enquanto o cliente explica o problema.',
      'Pesquisar incidentes no banco de dados enquanto o cliente fala.',
      'Tomar notas dos pontos chave enquanto fala com o cliente.'
    ],
    correctOptionIndex: 3,
    difficulty: Difficulty.EASY,
    explanation: 'Tomar notas ajuda a focar no que o cliente está dizendo, evita que você precise pedir para ele repetir e demonstra que você valoriza as informações fornecidas.'
  },
  {
    id: '25',
    category: 'Comunicação & Soft Skills',
    text: 'Qual é um princípio da escuta ativa?',
    options: [
      'Identificar ideias, imagens e emoções nos detalhes do cliente.',
      'Interromper a cada momento para esclarecer o entendimento.',
      'Deixar o cliente falar livremente sem nenhuma intervenção.',
      'Realizar multitarefa enquanto ouve a descrição do problema.'
    ],
    correctOptionIndex: 0,
    difficulty: Difficulty.EASY,
    explanation: 'Escutar ativamente envolve interpretar o contexto, as emoções e a "imagem mental" que o cliente está tentando transmitir, não apenas ouvir as palavras isoladas.'
  },
  {
    id: '26',
    category: 'Tecnologia & Ferramentas',
    text: 'Qual é o objetivo dos sistemas de gerenciamento de serviços (ITSM)?',
    options: [
      'Automatizar processos para melhorar a entrega de valor dos serviços.',
      'Descentralizar as ferramentas usadas pelos departamentos.',
      'Assegurar que cada área siga seus próprios requisitos de governança.',
      'Permitir a configuração individualizada de ferramentas por equipe.'
    ],
    correctOptionIndex: 0,
    difficulty: Difficulty.EASY,
    explanation: 'Ferramentas de ITSM (Service Management) visam padronizar e automatizar fluxos de trabalho para aumentar a eficiência e a entrega de valor ao negócio.'
  },
  {
    id: '27',
    category: 'Comunicação & Soft Skills',
    text: 'Qual das seguintes mensagens segue as melhores práticas de e-mail?',
    options: [
      'Cara Sarah, o trabalho na impressora foi feito. O cartucho estava sem tinta. Estamos disponíveis sempre que precisar. Obrigado.',
      'Cara Sarah, substituímos o cartucho de tinta da impressora do Sr. Moreira conforme solicitado. Está funcionando. Contate o suporte no ramal 4357 se precisar de algo mais.',
      'Sarah, a impressora foi consertada. Acho que ele não sabia que estava sem tinta. Erro de novato :) Avise se precisarem de algo.',
      'Ei Sarah! Trabalho terminado na impressora. O técnico viu que o cartucho estava seco e trocou. Estamos por aqui se precisar. Valeu.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'A opção B é a única que é formal, explica o que foi feito, confirma a resolução e encerra de forma profissional oferecendo contato futuro.'
  },
  {
    id: '28',
    category: 'Comunicação & Soft Skills',
    text: 'Qual é o principal motivo para demonstrar empatia a um cliente?',
    options: [
      'A empatia permite que ele saiba que você conhece o departamento dele.',
      'A empatia permite que ele saiba que você sente pena da situação dele.',
      'A empatia permite que ele saiba que você entende como ele se sente.',
      'A empatia permite que ele saiba que você com certeza resolverá o incidente.'
    ],
    correctOptionIndex: 2,
    difficulty: Difficulty.EASY,
    explanation: 'Empatia é validar o sentimento do outro. Ao mostrar que entende a frustração do cliente, você cria uma conexão humana que facilita a resolução do problema.'
  },
  {
    id: '29',
    category: 'Processos & Procedimentos',
    text: 'Qual ação deve ser evitada ao documentar incidentes?',
    options: [
      'Registrar apenas os fatos técnicos observados.',
      'Documentar todas as etapas da solução tentada.',
      'Registrar opiniões sobre as emoções do cliente.',
      'Documentar as informações em tempo real.'
    ],
    correctOptionIndex: 2,
    difficulty: Difficulty.EASY,
    explanation: 'O registro deve ser técnico e factual. Comentários subjetivos sobre o humor do cliente ("cliente chato", "cliente irritado") não agregam valor técnico e podem ser ofensivos se lidos pelo cliente.'
  },
  {
    id: '30',
    category: 'Métricas',
    text: 'O que os principais indicadores de desempenho (KPIs) medem?',
    options: [
      'O progresso em direção às metas organizacionais.',
      'A consistência e precisão dos resultados técnicos.',
      'A porcentagem total de incidentes escalados.',
      'O sucesso na implementação de novas ferramentas.'
    ],
    correctOptionIndex: 0,
    difficulty: Difficulty.EASY,
    explanation: 'KPIs (Key Performance Indicators) servem para medir o quão bem a organização ou equipe está atingindo seus objetivos estratégicos e críticos de sucesso.'
  },
  {
    id: '31',
    category: 'Comunicação & Soft Skills',
    text: 'Um cliente está irritado devido a um prazo curto. O que você deve fazer para que ele se concentre no incidente?',
    options: [
      'Permitir que o cliente desabafe brevemente.',
      'Interromper o cliente para focar na solução.',
      'Dizer ao cliente que ele precisa se acalmar.',
      'Colocar o cliente em espera até ele relaxar.'
    ],
    correctOptionIndex: 0,
    difficulty: Difficulty.EASY,
    explanation: 'Quando alguém está muito emocionado, precisa "esvaziar o copo" antes de conseguir ouvir a razão. Deixar desabafar brevemente reduz a adrenalina e permite focar na solução.'
  },
  {
    id: '32',
    category: 'Comunicação & Soft Skills',
    text: 'Qual é um benefício importante da escuta ativa?',
    options: [
      'A escuta ativa melhora a qualidade da análise de incidentes.',
      'A escuta ativa aumenta significativamente o tempo de chamada.',
      'A escuta ativa gera estresse nos profissionais de suporte.',
      'A escuta ativa reduz o volume de chamadas recebidas.'
    ],
    correctOptionIndex: 0,
    difficulty: Difficulty.EASY,
    explanation: 'Ao ouvir atentamente, você coleta os detalhes corretos na primeira vez, evitando diagnósticos baseados em suposições e retrabalho.'
  },
  {
    id: '33',
    category: 'Comunicação & Soft Skills',
    text: 'Um cliente está com raiva porque um incidente de internet é recorrente. Qual é a melhor maneira de responder?',
    options: [
      'Pedir ao cliente para listar todas as interações anteriores.',
      'Demonstrar empatia pela frustração antes de abordar o técnico.',
      'Pedir ao cliente para preencher uma pesquisa de satisfação.',
      'Concordar que a equipe de rede não está fazendo um bom trabalho.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Antes de resolver o problema técnico, você precisa resolver o problema emocional. Reconhecer a frustração da recorrência (empatia) acalma o cliente.'
  },
  {
    id: '34',
    category: 'Métricas',
    text: 'O que é Resolução no Primeiro Contato (FCR)?',
    options: [
      'Porcentagem de incidentes resolvidos sem nenhum tipo de escalonamento.',
      'Porcentagem de incidentes resolvidos na interação inicial com o cliente.',
      'Métrica para entender a satisfação geral do cliente com o serviço.',
      'Métrica usada para medir a complexidade relativa dos problemas.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'FCR (First Contact Resolution) mede a capacidade de resolver o problema "de primeira", sem necessidade de desligar, retornar a chamada ou escalar.'
  },
  {
    id: '35',
    category: 'Processos & Procedimentos',
    text: 'Quando é mais apropriado encaminhar incidentes para um supervisor (Escalação Hierárquica)?',
    options: [
      'Se o cliente começar a reclamar do atendimento do suporte.',
      'Se houver um alto impacto comercial, financeiro ou legal.',
      'Se o cliente nunca tiver recebido suporte anteriormente.',
      'Se o centro estiver muito ocupado para atender mais contatos.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'A escalação hierárquica (para a gestão) deve ocorrer quando decisões de negócio ou alocação de recursos extras são necessárias devido à gravidade do impacto.'
  },
  {
    id: '36',
    category: 'Equipe & Profissionalismo',
    text: 'Qual é a melhor descrição de uma equipe?',
    options: [
      'Um fórum para criatividade individual e expressão própria.',
      'Um grupo de pessoas trabalhando juntas como uma unidade.',
      'Um grupo de personalidades fortes competindo entre si.',
      'Um ambiente aberto e honesto para discussões pessoais.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'O conceito central de equipe é a coesão: indivíduos trabalhando juntos em direção a um objetivo comum, agindo como uma unidade.'
  },
  {
    id: '37',
    category: 'Processos & Procedimentos',
    text: 'O que você deve fazer durante a atividade de diagnóstico inicial?',
    options: [
      'Pedir ao cliente para pesquisar primeiro a base de conhecimento.',
      'Pular etapas para resolver o problema o mais rápido possível.',
      'Iniciar imediatamente uma análise profunda de causa raiz.',
      'Pesquisar na base de conhecimento por incidentes similares.'
    ],
    correctOptionIndex: 3,
    difficulty: Difficulty.EASY,
    explanation: 'Antes de tentar reinventar a roda, verifique se a solução já existe. Isso economiza tempo e garante consistência na resolução.'
  },
  {
    id: '38',
    category: 'Processos & Procedimentos',
    text: 'Um cliente reclama que um técnico prometido por outro analista nunca apareceu. O que você deve fazer?',
    options: [
      'Escalar imediatamente a ligação do cliente para o seu supervisor.',
      'Assumir a propriedade (Ownership) e enviar o técnico necessário.',
      'Apenas registrar a reclamação no chamado sem prometer nada.',
      'Transferir a chamada para o analista original que fez a promessa.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Praticar o "Ownership" (propriedade) significa assumir a responsabilidade pela resolução do problema do cliente agora, em vez de culpar o colega ou passar o problema adiante.'
  },
  {
    id: '39',
    category: 'Equipe & Profissionalismo',
    text: 'Qual é o benefício de participar de eventos do setor de suporte?',
    options: [
      'Permite discutir desafios de negócios confidenciais.',
      'Mantém você informado sobre tendências e melhores práticas.',
      'Oferece chances de obter descontos pessoais de fornecedores.',
      'Proporciona oportunidades para buscar novos empregos.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'O desenvolvimento profissional contínuo é essencial. Eventos fornecem visão sobre novas tecnologias, metodologias e o que outras empresas estão fazendo.'
  },
  {
    id: '40',
    category: 'Tecnologia & Ferramentas',
    text: 'Qual tecnologia permite que os clientes resolvam seu próprio problema?',
    options: [
      'Sistemas de Mensagem Instantânea (Chat)',
      'Ferramentas de Controle Remoto',
      'Tecnologias de Autocorreção de Sistema',
      'Portais de Autoatendimento (Self-Service)'
    ],
    correctOptionIndex: 3,
    difficulty: Difficulty.EASY,
    explanation: 'Tecnologias de Self-Service (como portais de reset de senha ou bases de conhecimento) empoderam o usuário a resolver problemas sem intervenção humana.'
  },
  {
    id: '41',
    category: 'Comunicação & Soft Skills',
    text: 'Qual é uma ação que exemplifica profissionalismo na comunicação escrita?',
    options: [
      'Sempre terminar cada mensagem com um encerramento adequado.',
      'Evitar usar o nome formal do cliente para parecer amigável.',
      'Manter uma linguagem informal para criar proximidade.',
      'Usar abreviações comuns para agilizar a leitura.'
    ],
    correctOptionIndex: 0,
    difficulty: Difficulty.EASY,
    explanation: 'Um encerramento adequado (ex: "Atenciosamente", "Fico à disposição") demonstra respeito, cortesia e finaliza a interação de forma polida.'
  },
  {
    id: '42',
    category: 'Comunicação & Soft Skills',
    text: 'Qual fator é mais provável de ser uma barreira para a comunicação com um cliente?',
    options: [
      'O cliente ter um incidente complexo para resolver.',
      'O cliente ter utilizado o autoatendimento no passado.',
      'O cliente ter tido uma experiência ruim anteriormente.',
      'O cliente nunca ter contatado o suporte antes.'
    ],
    correctOptionIndex: 2,
    difficulty: Difficulty.EASY,
    explanation: 'A bagagem emocional negativa de atendimentos anteriores cria resistência e hostilidade, dificultando a construção de confiança no atendimento atual.'
  },
  {
    id: '43',
    category: 'Comunicação & Soft Skills',
    text: 'Qual mensagem segue as melhores práticas de escrita de e-mails comerciais?',
    options: [
      'Caro João, em anexo está o documento convertido para PDF conforme solicitado. Contate-nos se precisar de algo mais. Obrigado.',
      'Caro João, arquivo convertido. Da próxima vez, tente perguntar no seu departamento antes para não ter que esperar por nós. Obrigado!',
      'Caro João, o PDF que você queria está anexo. Você poderia fazer isso sozinho se tivesse licença. Avise se precisar de mais algo.',
      'Caro João, arquivo anexo. Estamos felizes em ajudar. Esperamos uma GRANDE VITÓRIA! Se precisar de outra conversão, dê um grito.'
    ],
    correctOptionIndex: 0,
    difficulty: Difficulty.EASY,
    explanation: 'A opção A é direta, educada, confirma a ação realizada e oferece ajuda futura sem ser condescendente ou excessivamente informal.'
  },
  {
    id: '44',
    category: 'Processos & Procedimentos',
    text: 'Qual é a atividade final no processo de Gerenciamento de Incidentes?',
    options: [
      'Categorizar o incidente corretamente.',
      'Encerrar formalmente o registro do incidente.',
      'Investigar e diagnosticar a causa raiz.',
      'Buscar soluções na base de conhecimento.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'O ciclo de vida do incidente só termina com o encerramento formal do ticket, após a confirmação da resolução com o usuário e a documentação final.'
  },
  {
    id: '45',
    category: 'Comunicação & Soft Skills',
    text: 'Um cliente ansioso continua falando sobre as consequências de não enviar uma proposta. Como chamar a atenção dele?',
    options: [
      'Aborde o cliente chamando-o pelo nome.',
      'Peça firmemente ao cliente para aguardar um momento.',
      'Tente se adequar ao tom de voz ansioso do cliente.',
      'Fique em silêncio até que o cliente pare de falar.'
    ],
    correctOptionIndex: 0,
    difficulty: Difficulty.EASY,
    explanation: 'Usar o nome do cliente é uma técnica psicológica poderosa para interromper educadamente um fluxo de pensamento ansioso e retomar o foco da conversa.'
  },
  {
    id: '46',
    category: 'Equipe & Profissionalismo',
    text: 'Qual ação pode ajudar a estabelecer relacionamentos efetivos com outros departamentos?',
    options: [
      'Estar ciente de como sua equipe contribui para o sucesso dos outros.',
      'Tratar os outros exatamente da mesma maneira que eles tratam você.',
      'Tratar bem apenas aqueles que podem reduzir sua carga de trabalho.',
      'Focar em descobrir quem é o culpado por incidentes em aberto.'
    ],
    correctOptionIndex: 0,
    difficulty: Difficulty.EASY,
    explanation: 'Entender o impacto do seu trabalho no trabalho dos outros promove respeito mútuo e colaboração, essencial para o funcionamento do TI como um todo.'
  },
  {
    id: '47',
    category: 'Processos & Procedimentos',
    text: 'Qual é um motivo importante para documentar processos e procedimentos do centro de suporte?',
    options: [
      'Permitir que cada analista atue de forma personalizada.',
      'Estabelecer limites rígidos para o desempenho individual.',
      'Promover a entrega de um serviço consistente e padronizado.',
      'Reduzir artificialmente o número de problemas relatados.'
    ],
    correctOptionIndex: 2,
    difficulty: Difficulty.EASY,
    explanation: 'Procedimentos documentados garantem que, independentemente de quem atenda o telefone, o cliente receberá o mesmo nível de serviço e a mesma solução técnica correta.'
  },
  {
    id: '48',
    category: 'Métricas',
    text: 'Qual métrica mede o tempo médio que um cliente espera antes de ser atendido?',
    options: [
      'Taxa de Abandono (Abandon Rate)',
      'Tempo Médio de Resposta (ASA)',
      'Tempo Médio de Conversa (Talk Time)',
      'Resolução no Primeiro Contato (FCR)'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Conhecido como ASA (Average Speed of Answer), mede o tempo que o cliente fica na fila de espera antes de um analista atender.'
  },
  {
    id: '49',
    category: 'Processos & Procedimentos',
    text: 'Quais informações do cliente devem sempre ser incluídas ao registrar um incidente?',
    options: [
      'Orientações técnicas sobre a solução a aplicar.',
      'Informações de contato e identificação do usuário.',
      'Histórico completo de incidentes anteriores.',
      'Requisitos detalhados de nível de serviço (SLA).'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Sem informações de contato precisas, você não pode dar retorno ao cliente, pedir mais informações ou confirmar a resolução.'
  },
  {
    id: '50',
    category: 'Processos & Procedimentos',
    text: 'Um cliente relata uma falha de rede que impedirá o fechamento financeiro e afetará as ações da empresa. O que fazer?',
    options: [
      'Informar ao cliente que um técnico sênior entrará em contato assim que possível.',
      'Encaminhar o problema para o seu gerente imediatamente (Escalação Hierárquica).',
      'Registrar o contato e seguir o fluxo padrão de incidentes de rede.',
      'Comentar com um colega sobre a gravidade do problema relatado.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Este é um Incidente Grave (Major Incident) com alto impacto financeiro e no negócio. Requer escalação imediata para a gestão (hierárquica) para mobilização de recursos.'
  },
  {
    id: '51',
    category: 'Métricas',
    text: 'Como a garantia de qualidade (QA) é definida?',
    options: [
      'Um processo para minimizar o impacto dos incidentes na qualidade.',
      'Uma prática para garantir que os padrões e requisitos sejam seguidos.',
      'A captura e reutilização do conhecimento para melhorar interações.',
      'A criação de um histórico de resoluções para fins de treinamento.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'QA (Quality Assurance) é sobre aderência a padrões. Verifica se os processos estão sendo seguidos corretamente para garantir um resultado consistente.'
  },
  {
    id: '52',
    category: 'Tecnologia & Ferramentas',
    text: 'Por que o gerenciamento do conhecimento é valioso em um centro de suporte?',
    options: [
      'Elimina completamente a necessidade de treinar a equipe.',
      'Melhora a consistência e a precisão do serviço prestado.',
      'Minimiza a necessidade de colaboração entre analistas.',
      'Impede que os clientes liguem para o suporte técnico.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'O uso de uma base de conhecimento garante que todos os analistas forneçam a mesma resposta correta para o mesmo problema, aumentando a consistência.'
  },
  {
    id: '53',
    category: 'Tecnologia & Ferramentas',
    text: 'Qual é o exemplo de uma tecnologia de autoatendimento fornecida por um centro de suporte?',
    options: [
      'Sistemas de Detecção Automática de Falhas',
      'Ferramentas de Mensagem Instantânea',
      'Base de Conhecimento Pública',
      'Ferramentas de Controle Remoto'
    ],
    correctOptionIndex: 2,
    difficulty: Difficulty.EASY,
    explanation: 'Uma Base de Conhecimento pública permite que o usuário pesquise e encontre a solução por conta própria, caracterizando o autoatendimento.'
  },
  {
    id: '54',
    category: 'Processos & Procedimentos',
    text: 'Um cliente pede para falar com seu supervisor imediato. Que tipo de escalação é essa?',
    options: [
      'Escalação Funcional',
      'Escalação Hierárquica',
      'Escalação Lateral',
      'Escalação Organizacional'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Escalação Hierárquica é mover o incidente para cima na cadeia de comando (gestão/supervisão), geralmente por motivos de reclamação ou gravidade.'
  },
  {
    id: '55',
    category: 'Processos & Procedimentos',
    text: 'O que define as expectativas de comportamento e o que não é permitido no local de trabalho?',
    options: [
      'Acordo de Nível Operacional (OLA)',
      'Política Organizacional',
      'Acordo de Nível de Serviço (SLA)',
      'Procedimentos Operacionais Padrão (SOP)'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Políticas organizacionais (como códigos de conduta e uso aceitável) estabelecem as regras e diretrizes de comportamento para funcionários.'
  },
  {
    id: '56',
    category: 'Processos & Procedimentos',
    text: 'Qual é a definição do termo procedimento?',
    options: [
      'Uma condição definida por vários incidentes relacionados.',
      'Uma solicitação que não faz parte da operação padrão.',
      'Uma regra mandatória que deve ser seguida consistentemente.',
      'Um conjunto de passos para conquistar um resultado específico.'
    ],
    correctOptionIndex: 3,
    difficulty: Difficulty.EASY,
    explanation: 'Um procedimento é um "passo a passo" documentado que descreve como executar uma tarefa para atingir um objetivo definido.'
  },
  {
    id: '57',
    category: 'Processos & Procedimentos',
    text: 'Qual é um aspecto importante do papel do analista do centro de suporte?',
    options: [
      'Encerrar todos os incidentes o mais rápido possível.',
      'Garantir que todos os servidores passem por manutenção.',
      'Gerenciar a química da equipe entre colegas de trabalho.',
      'Restaurar a operação normal do serviço o mais rápido possível.'
    ],
    correctOptionIndex: 3,
    difficulty: Difficulty.EASY,
    explanation: 'O objetivo primário da Gestão de Incidentes (e do analista) é restaurar a operação normal do serviço o mais rápido possível para minimizar o impacto no negócio.'
  },
  {
    id: '58',
    category: 'Comunicação & Soft Skills',
    text: 'Como ajudar um cliente com sotaque difícil de entender?',
    options: [
      'Faça perguntas fechadas (Sim/Não) para garantir respostas curtas e objetivas.',
      'Não deixe que o cliente saiba que você está tendo problemas para entender.',
      'Repita seu entendimento do que o cliente diz para verificar se está correto.',
      'Solicite educadamente que o cliente envie a questão por e-mail para evitar erros.'
    ],
    correctOptionIndex: 2,
    difficulty: Difficulty.EASY,
    explanation: 'Parafrasear e confirmar o entendimento é crucial em barreiras linguísticas para evitar erros. Mostra respeito e esforço em compreender.'
  },
  {
    id: '59',
    category: 'Processos & Procedimentos',
    text: 'Para garantir qualidade consistente e credibilidade, o que deve ser incorporado aos processos?',
    options: [
      'Melhores Práticas (Best Practices)',
      'Documentação de Incidentes',
      'Gerenciamento de Problemas',
      'Políticas de Segurança'
    ],
    correctOptionIndex: 0,
    difficulty: Difficulty.EASY,
    explanation: 'Adotar Melhores Práticas de mercado (como ITIL/HDI) garante que o suporte opere de forma eficiente, profissional e alinhada com padrões globais de qualidade.'
  },
  {
    id: '60',
    category: 'Comunicação & Soft Skills',
    text: 'Qual é o impacto de ignorar o estado emocional do usuário durante o atendimento?',
    options: [
      'Acelera significativamente o encerramento do chamado.',
      'Garante a conformidade técnica com o processo.',
      'Melhora a precisão do diagnóstico técnico.',
      'Pode prejudicar o processo de resolução e a satisfação.'
    ],
    correctOptionIndex: 3,
    difficulty: Difficulty.EASY,
    explanation: 'Ignorar emoções cria barreiras. Usuários frustrados colaboram menos, o que atrasa a resolução e reduz a satisfação geral.'
  },
  {
    id: '61',
    category: 'Comunicação & Soft Skills',
    text: 'Ao lidar com um cliente exaltado, qual estratégia ajuda a reduzir a tensão?',
    options: [
      'Manter um tom de voz calmo, profissional e amigável.',
      'Transferir imediatamente a ligação para um gerente.',
      'Pedir firmemente para o cliente parar de gritar.',
      'Explicar tecnicamente que a culpa não é sua.'
    ],
    correctOptionIndex: 0,
    difficulty: Difficulty.EASY,
    explanation: 'O analista define o tom da chamada. Responder à agressividade com calma (espelhamento reverso) ajuda o cliente a baixar o tom naturalmente.'
  },
  {
    id: '62',
    category: 'Comunicação & Soft Skills',
    text: 'Como controlar educadamente uma ligação com um usuário que fala excessivamente?',
    options: [
      'Fazer um resumo do que foi dito e focar nos próximos passos.',
      'Interromper o cliente e dizer que tem outros chamados.',
      'Ficar em silêncio absoluto até ele parar de falar.',
      'Desligar a chamada acidentalmente para encerrar o ciclo.'
    ],
    correctOptionIndex: 0,
    difficulty: Difficulty.EASY,
    explanation: 'A técnica de recapitulação serve como uma "ponte" para trazer a conversa de volta ao objetivo técnico sem ser rude.'
  },
  {
    id: '63',
    category: 'Processos & Procedimentos',
    text: 'Quando é obrigatório escalar um incidente funcionalmente?',
    options: [
      'Quando o usuário pede explicitamente para falar com o gerente.',
      'Quando você não tem acesso, conhecimento ou recursos para resolver.',
      'Quando está perto do seu horário de saída ou almoço.',
      'Quando o incidente é muito simples e você está ocupado.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Escalação funcional é técnica: passar para o Nível 2 ou 3 porque o Nível 1 não possui a capacidade técnica ou permissão para resolver.'
  },
  {
    id: '64',
    category: 'Processos & Procedimentos',
    text: 'Se um cliente solicita algo fora do escopo de serviços, o que você deve fazer?',
    options: [
      'Dizer apenas "não fazemos isso" e encerrar o contato.',
      'Tentar resolver mesmo assim para agradar, sem registrar.',
      'Indicar recursos externos ou caminhos onde ele possa obter ajuda.',
      'Abrir uma exceção e configurar o serviço solicitado.'
    ],
    correctOptionIndex: 2,
    difficulty: Difficulty.EASY,
    explanation: 'O objetivo é ajudar o cliente, mesmo que você não execute a ação. Apontar a direção correta mantém a qualidade do serviço.'
  },
  {
    id: '65',
    category: 'Processos & Procedimentos',
    text: 'Qual a abordagem correta ao receber um chamado sobre um software não homologado?',
    options: [
      'Formatar o computador do usuário imediatamente por segurança.',
      'Explicar que o software não é suportado, mas orientar o cliente.',
      'Ignorar o chamado e fechar o ticket sem aviso.',
      'Criticar o usuário por instalar programas não autorizados.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Você deve seguir a política (não dar suporte a software não homologado), mas manter a postura prestativa ao orientar o cliente sobre como regularizar a situação.'
  },
  {
    id: '66',
    category: 'Processos & Procedimentos',
    text: 'Por que manter o cliente informado sobre a previsão de resolução é crítico?',
    options: [
      'Para que ele possa planejar suas atividades de trabalho.',
      'Para evitar que ele abra outro chamado duplicado.',
      'Para cumprir a burocracia exigida pelo sistema.',
      'Para mostrar que você está trabalhando arduamente.'
    ],
    correctOptionIndex: 0,
    difficulty: Difficulty.EASY,
    explanation: 'Gerenciar a expectativa do cliente permite que ele organize seu tempo durante a inatividade, reduzindo a ansiedade e a frustração.'
  },
  {
    id: '67',
    category: 'Processos & Procedimentos',
    text: 'O que garante que a documentação de um incidente seja clara para outros analistas?',
    options: [
      'Uso de códigos internos que apenas sua equipe conhece.',
      'Escrever em letras maiúsculas para chamar atenção.',
      'Uso correto de pontuação, gramática e estrutura lógica.',
      'Omissão de detalhes técnicos para simplificar a leitura.'
    ],
    correctOptionIndex: 2,
    difficulty: Difficulty.EASY,
    explanation: 'Uma boa escrita técnica garante que a informação seja transferível. Outros analistas devem ler e entender exatamente o que foi feito sem precisar decifrar o texto.'
  },
  {
    id: '68',
    category: 'Processos & Procedimentos',
    text: 'Qual o valor de longo prazo de registros bem escritos?',
    options: [
      'Impressionar a gerência com sua habilidade de escrita.',
      'Tornam-se ativos de conhecimento reutilizáveis para a equipe.',
      'Aumentam artificialmente o tempo médio de atendimento.',
      'Servem apenas para auditoria legal em caso de processos.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Incidentes documentados corretamente alimentam a Base de Conhecimento, permitindo que soluções futuras sejam mais rápidas e consistentes.'
  },
  {
    id: '69',
    category: 'Equipe & Profissionalismo',
    text: 'Como um analista pode contribuir melhor para o ambiente de equipe?',
    options: [
      'Compartilhando proativamente conhecimentos e soluções.',
      'Mantendo segredo sobre suas técnicas de resolução.',
      'Focando estritamente em suas próprias métricas.',
      'Evitando contato com analistas de outros níveis.'
    ],
    correctOptionIndex: 0,
    difficulty: Difficulty.EASY,
    explanation: 'Em suporte, conhecimento não deve ser poder individual, mas poder coletivo. Compartilhar soluções eleva o nível de toda a equipe.'
  },
  {
    id: '70',
    category: 'Tecnologia & Ferramentas',
    text: 'Por que ferramentas de acesso remoto são vitais para o Service Desk?',
    options: [
      'Permitem monitorar o que o funcionário faz no tempo livre.',
      'Reduzem o tempo de resolução e evitam deslocamentos físicos.',
      'Substituem a necessidade de falar com o usuário.',
      'Aumentam a complexidade percebida do atendimento.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'A eficiência do Service Desk depende da capacidade de resolver a maioria dos problemas no primeiro contato (FCR), e o acesso remoto é a ferramenta que viabiliza isso.'
  },
  {
    id: '71',
    category: 'Comunicação & Soft Skills',
    text: 'Qual a vantagem de um analista soar confiante durante o atendimento?',
    options: [
      'Intimida o usuário a não fazer perguntas desnecessárias.',
      'Estabelece liderança e transmite segurança ao cliente.',
      'Permite pular etapas importantes de verificação.',
      'Garante nota máxima na pesquisa de satisfação.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Confiança gera credibilidade. Se o analista parece inseguro, o cliente questionará o diagnóstico, prolongando a chamada.'
  },
  {
    id: '72',
    category: 'Comunicação & Soft Skills',
    text: 'O que significa a técnica de "parafrasear" no atendimento?',
    options: [
      'Repetir roboticamente o que foi dito pelo cliente.',
      'Traduzir o problema para termos técnicos complexos.',
      'Confirmar o entendimento reformulando com suas palavras.',
      'Discordar do cliente usando argumentos lógicos.'
    ],
    correctOptionIndex: 2,
    difficulty: Difficulty.EASY,
    explanation: 'É a prova de escuta. Ao reformular, você prova que processou a informação e dá chance ao cliente de corrigir qualquer mal-entendido.'
  },
  {
    id: '73',
    category: 'Comunicação & Soft Skills',
    text: 'Qual o objetivo principal ao parafrasear a solicitação do usuário?',
    options: [
      'Ganhar tempo enquanto o sistema carrega as informações.',
      'Validar se você compreendeu corretamente o problema.',
      'Mostrar que você tem um vocabulário técnico extenso.',
      'Corrigir a pronúncia ou gramática do usuário.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Evita a síndrome de "resolver o problema errado". Garante alinhamento antes de investir tempo na solução técnica.'
  },
  {
    id: '74',
    category: 'Processos & Procedimentos',
    text: 'Enquanto o computador do cliente reinicia, o que o analista deve fazer?',
    options: [
      'Conversar sobre amenidades como clima ou esportes.',
      'Verificar o histórico de chamados para identificar recorrências.',
      'Checar rapidamente suas redes sociais pessoais.',
      'Colocar no mudo e atender outro chamado em paralelo.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'O uso eficiente do tempo morto (dead air) para pesquisa agrega valor ao atendimento, permitindo uma visão holística do problema do cliente.'
  },
  {
    id: '75',
    category: 'Processos & Procedimentos',
    text: 'O que deve constar no registro de um ticket de incidente?',
    options: [
      'Apenas a solução final que resolveu o problema.',
      'Apenas os dados cadastrais básicos do usuário.',
      'Relato completo das tentativas, diagnósticos e solução.',
      'Opiniões pessoais sobre o nível técnico do usuário.'
    ],
    correctOptionIndex: 2,
    difficulty: Difficulty.EASY,
    explanation: 'Um histórico completo (trilha de auditoria) é essencial para que, se o caso for reaberto ou escalado, o próximo analista saiba tudo o que já foi tentado.'
  },
  {
    id: '76',
    category: 'Processos & Procedimentos',
    text: 'Por que é essencial registrar *todos* os contatos, mesmo os resolvidos na hora?',
    options: [
      'Para criar dados para análise de tendências e reuso de conhecimento.',
      'Para garantir que a gerência possa auditar suas horas de trabalho.',
      'Para preencher os requisitos de armazenamento do banco de dados.',
      'Para cumprir os requisitos obrigatórios de preenchimento do sistema.'
    ],
    correctOptionIndex: 0,
    difficulty: Difficulty.EASY,
    explanation: 'Se não for registrado, "não aconteceu". Dados não registrados impedem a identificação de problemas crônicos e oportunidades de melhoria.'
  },
  {
    id: '77',
    category: 'Processos & Procedimentos',
    text: 'Como os registros de incidentes auxiliam na Gestão de Problemas?',
    options: [
      'Eles não auxiliam, são processos totalmente distintos.',
      'Fornecem dados para identificar a causa raiz de falhas.',
      'Ajudam a provar que a culpa é dos usuários.',
      'Servem apenas para fins de faturamento e cobrança.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'A Gestão de Problemas analisa múltiplos registros de incidentes para encontrar o padrão comum e eliminar o erro subjacente.'
  },
  {
    id: '78',
    category: 'Processos & Procedimentos',
    text: 'Qual a vantagem proativa de uma boa documentação de incidentes?',
    options: [
      'Identificar falhas sistêmicas antes que afetem mais usuários.',
      'Garantir aumentos salariais para a equipe de suporte.',
      'Reduzir a necessidade de gerentes supervisionando.',
      'Eliminar a necessidade de senhas para os usuários.'
    ],
    correctOptionIndex: 0,
    difficulty: Difficulty.EASY,
    explanation: 'Ao analisar a documentação, é possível perceber se um servidor específico está gerando muitos erros e corrigi-lo antes que ele pare completamente.'
  },
  {
    id: '79',
    category: 'Equipe & Profissionalismo',
    text: 'Se seus colegas estão fazendo barulho excessivo durante sua chamada, o que fazer?',
    options: [
      'Gritar com eles para pararem imediatamente.',
      'Pedir desculpas ao cliente e solicitar silêncio educadamente.',
      'Ignorar e deixar o cliente ouvir a conversa.',
      'Participar da brincadeira para não ser excluído.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Manter o profissionalismo é prioridade. Peça desculpas pelo inconveniente ao cliente e corrija o ambiente de trabalho de forma assertiva mas educada.'
  },
  {
    id: '80',
    category: 'Processos & Procedimentos',
    text: 'Qual o objetivo fundamental das políticas de segurança da informação?',
    options: [
      'Restringir o acesso dos funcionários a sites não relacionados ao trabalho.',
      'Proteger os dados, a reputação da empresa e a privacidade dos clientes.',
      'Monitorar a produtividade da equipe através da análise de e-mails.',
      'Impedir o vazamento de informações confidenciais para a concorrência.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Segurança não é sobre restringir, é sobre proteger ativos valiosos (informação e confiança) contra riscos internos e externos.'
  },
  {
    id: '81',
    category: 'Processos & Procedimentos',
    text: 'Além da proteção de dados, por que seguir políticas de segurança é vital?',
    options: [
      'Para garantir conformidade com leis e regulamentos (Compliance).',
      'Para ganhar reconhecimento como funcionário do mês.',
      'Para evitar o desperdício de papel e recursos.',
      'Para testar a eficiência do sistema de segurança.'
    ],
    correctOptionIndex: 0,
    difficulty: Difficulty.EASY,
    explanation: 'Empresas operam sob leis estritas. Violar políticas de segurança pode colocar a empresa em situação de ilegalidade.'
  },
  {
    id: '82',
    category: 'Processos & Procedimentos',
    text: 'Um exemplo comum de violação de política de segurança seria:',
    options: [
      'Pedir ao usuário para reiniciar o PC para aplicar atualizações.',
      'Anotar senhas ou dados de cartão de crédito em papel.',
      'Escalar um chamado complexo para o Nível 2.',
      'Consultar a Base de Conhecimento durante o atendimento.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Dados sensíveis nunca devem ser armazenados de forma insegura, mesmo que temporariamente. Isso viola princípios básicos de confidencialidade.'
  },
  {
    id: '83',
    category: 'Comunicação & Soft Skills',
    text: 'Demonstrar escuta ativa envolve qual das seguintes ações?',
    options: [
      'Digitar um e-mail para outro setor enquanto ouve.',
      'Fazer anotações dos pontos chave enquanto o cliente fala.',
      'Pensar na resposta técnica antes do cliente terminar.',
      'Comer ou beber discretamente durante a ligação.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Fazer anotações é uma parte física da escuta ativa. Ajuda na retenção e demonstra foco na narrativa do cliente.'
  },
  {
    id: '84',
    category: 'Comunicação & Soft Skills',
    text: 'Ao ouvir ativamente, o que você deve buscar além das palavras?',
    options: [
      'O sotaque ou a origem regional do cliente.',
      'Ideias centrais, contexto e o impacto do problema.',
      'Erros gramaticais cometidos pelo cliente.',
      'O barulho de fundo do ambiente do cliente.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'O analista deve ouvir "nas entrelinhas" para entender a urgência, o impacto no negócio e o estado emocional, não apenas a descrição técnica do erro.'
  },
  {
    id: '85',
    category: 'Tecnologia & Ferramentas',
    text: 'Sistemas de Gerenciamento de Serviços (ITSM) servem principalmente para:',
    options: [
      'Controlar o horário de entrada e saída dos funcionários.',
      'Padronizar e automatizar fluxos de trabalho para entregar valor.',
      'Bloquear sites indevidos nos computadores da empresa.',
      'Criar relatórios financeiros complexos para a contabilidade.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Ferramentas ITSM organizam o caos, garantindo que incidentes, problemas e mudanças sigam fluxos definidos para manter a qualidade do serviço.'
  },
  {
    id: '86',
    category: 'Comunicação & Soft Skills',
    text: 'O que caracteriza um e-mail de encerramento profissional?',
    options: [
      'Uso de gírias e emojis para parecer amigável.',
      'Clareza sobre a solução e convite para contato futuro.',
      'Texto longo e extremamente técnico para impressionar.',
      'Ausência de assinatura para manter a informalidade.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'O e-mail deve confirmar que o problema foi resolvido, agradecer o contato e deixar a porta aberta para suporte futuro, mantendo a cordialidade.'
  },
  {
    id: '87',
    category: 'Comunicação & Soft Skills',
    text: 'A empatia é definida no contexto de suporte como:',
    options: [
      'Sentir pena da situação difícil do usuário.',
      'Compreender e validar a perspectiva e os sentimentos do usuário.',
      'Concordar automaticamente com tudo que o usuário diz.',
      'Chorar junto com o usuário para mostrar solidariedade.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Empatia não é simpatia (sentir pena). É a capacidade intelectual e emocional de se colocar no lugar do outro e validar sua experiência.'
  },
  {
    id: '88',
    category: 'Processos & Procedimentos',
    text: 'Ao documentar um incidente com um cliente irritado, você deve:',
    options: [
      'Registrar os fatos e evitar adjetivos subjetivos.',
      'Escrever "CLIENTE CHATO" no título do ticket.',
      'Descrever detalhadamente os insultos proferidos.',
      'Ignorar o registro do chamado para evitar problemas.'
    ],
    correctOptionIndex: 0,
    difficulty: Difficulty.EASY,
    explanation: 'Documentação deve ser profissional. Rotular o cliente pode causar problemas se ele solicitar o histórico do chamado (direito à informação).'
  },
  {
    id: '89',
    category: 'Métricas',
    text: 'KPIs (Key Performance Indicators) são usados para avaliar:',
    options: [
      'Quem chega mais cedo no escritório.',
      'O alinhamento do desempenho com os objetivos estratégicos.',
      'A velocidade da internet da empresa.',
      'A temperatura da sala de servidores.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'KPIs não são apenas métricas soltas; são indicadores chave que mostram se o suporte está ajudando a empresa a atingir suas metas de negócio.'
  },
  {
    id: '90',
    category: 'Comunicação & Soft Skills',
    text: 'Se um cliente está em pânico por um prazo curto, qual a primeira ação?',
    options: [
      'Dizer para ele se acalmar imediatamente.',
      'Deixar ele desabafar brevemente para reduzir a ansiedade.',
      'Colocar em espera até ele se acalmar sozinho.',
      'Rir da situação para tentar descontrair.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'O desabafo libera a tensão. Interromper o pânico pode aumentá-lo. Ouvir por alguns segundos mostra que você se importa e acalma a situação.'
  },
  {
    id: '91',
    category: 'Comunicação & Soft Skills',
    text: 'Como a escuta ativa impacta o tempo de resolução?',
    options: [
      'Aumenta o tempo pois você ouve detalhes desnecessários.',
      'Melhora a qualidade do diagnóstico, evitando erros.',
      'Não tem impacto significativo no tempo total.',
      'Faz o cliente falar menos do que o normal.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Investir tempo ouvindo no início economiza tempo no final, pois evita que você siga pistas falsas ou aplique soluções erradas.'
  },
  {
    id: '92',
    category: 'Comunicação & Soft Skills',
    text: 'Diante de um problema recorrente que frustra o cliente, a melhor postura é:',
    options: [
      'Culpar a equipe de redes pelo problema contínuo.',
      'Reconhecer a frustração e assegurar foco na solução definitiva.',
      'Dizer que é normal e acontece sempre com esse sistema.',
      'Pedir para abrir outro chamado para registrar novamente.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Validar que o cliente tem razão em estar frustrado restaura a confiança. Prometer foco na causa raiz (solução definitiva) mostra proatividade.'
  },
  {
    id: '93',
    category: 'Métricas',
    text: 'O que define a métrica FCR (First Contact Resolution)?',
    options: [
      'Resolver o problema na primeira tentativa, sem retorno.',
      'Atender o telefone no primeiro toque.',
      'Ser o primeiro analista a chegar no trabalho.',
      'Encaminhar para o Nível 2 imediatamente.'
    ],
    correctOptionIndex: 0,
    difficulty: Difficulty.EASY,
    explanation: 'FCR é a métrica de ouro do Service Desk. Significa que o cliente teve sua necessidade atendida completamente na primeira interação.'
  },
  {
    id: '94',
    category: 'Processos & Procedimentos',
    text: 'Qual critério justifica escalar um incidente para a gerência (escalação hierárquica)?',
    options: [
      'O usuário é seu amigo pessoal.',
      'O impacto no negócio é crítico ou há alto risco.',
      'Você está com preguiça de resolver o problema.',
      'O incidente é tecnicamente muito fácil.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'A gerência precisa ser envolvida quando há riscos maiores ao negócio (financeiro, legal, imagem) que exigem tomada de decisão executiva.'
  },
  {
    id: '95',
    category: 'Equipe & Profissionalismo',
    text: 'Uma equipe de alta performance é caracterizada por:',
    options: [
      'Competição interna agressiva entre os membros.',
      'Colaboração, objetivos comuns e atuação coesa.',
      'Silêncio absoluto no escritório durante o expediente.',
      'Todos os membros terem a mesma personalidade.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Sinergia é a chave. Equipes fortes colaboram e se apoiam, entendendo que o sucesso do grupo é mais importante que o sucesso individual.'
  },
  {
    id: '96',
    category: 'Processos & Procedimentos',
    text: 'Antes de tentar reinventar a roda na solução de um problema, o analista deve:',
    options: [
      'Consultar a Base de Conhecimento (KCS) por similares.',
      'Tentar adivinhar a solução baseada na intuição.',
      'Perguntar ao usuário como ele acha que deve resolver.',
      'Formatar a máquina para garantir que funcione.'
    ],
    correctOptionIndex: 0,
    difficulty: Difficulty.EASY,
    explanation: 'O primeiro passo do diagnóstico eficaz é verificar se o problema já foi resolvido antes (conhecimento existente) para garantir eficiência.'
  },
  {
    id: '97',
    category: 'Processos & Procedimentos',
    text: 'Se um colega prometeu um retorno ao cliente e não cumpriu, e o cliente liga cobrando:',
    options: [
      'Culpe o colega nominalmente para se isentar.',
      'Assuma a responsabilidade (Ownership) e resolva agora.',
      'Peça para o cliente ligar amanhã para falar com ele.',
      'Desligue o telefone para evitar o conflito.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'O cliente vê a empresa como uma só. Assumir a propriedade (Ownership) recupera a imagem da empresa e resolve o problema do cliente.'
  },
  {
    id: '98',
    category: 'Equipe & Profissionalismo',
    text: 'Participar de conferências e webinars da área de suporte ajuda a:',
    options: [
      'Ganhar brindes e dias de folga.',
      'Manter-se atualizado sobre tendências e melhores práticas.',
      'Passar tempo fora do escritório longe do trabalho.',
      'Encontrar motivos para reclamar da empresa atual.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'O setor de TI muda rápido. Networking e educação contínua garantem que o profissional permaneça relevante e eficaz.'
  },
  {
    id: '99',
    category: 'Tecnologia & Ferramentas',
    text: 'Portais onde o usuário reseta sua própria senha são exemplos de:',
    options: [
      'Autoatendimento (Self-Service)',
      'Monitoramento Proativo',
      'Terceirização de Serviços',
      'Gerenciamento de Problemas'
    ],
    correctOptionIndex: 0,
    difficulty: Difficulty.EASY,
    explanation: 'Autoatendimento é qualquer ferramenta que permite ao usuário executar uma ação de suporte (como reset de senha) sem interação humana.'
  },
  {
    id: '100',
    category: 'Comunicação & Soft Skills',
    text: 'Em um chat ou e-mail, evitar gírias e usar saudações adequadas demonstra:',
    options: [
      'Rigidez desnecessária no atendimento.',
      'Profissionalismo e respeito pelo cliente.',
      'Falta de personalidade do analista.',
      'Que você está sendo monitorado por um robô.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'A comunicação escrita carece de tom de voz. O profissionalismo na escrita substitui a entonação para garantir respeito e clareza.'
  },
  {
    id: '101',
    category: 'Comunicação & Soft Skills',
    text: 'Se um cliente já chega na ligação defensivo e hostil, qual a causa provável?',
    options: [
      'Ele não gosta da sua voz ou sotaque.',
      'Uma experiência negativa anterior não resolvida.',
      'Ele acordou cedo demais e está cansado.',
      'Ele ligou para o número errado por engano.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'A hostilidade inicial geralmente é um mecanismo de defesa baseado em frustrações passadas. Entender isso ajuda a não levar para o lado pessoal.'
  },
  {
    id: '102',
    category: 'Comunicação & Soft Skills',
    text: 'Qual o tom ideal para recusar um pedido fora da política por e-mail?',
    options: [
      'Direto: "Não pode. Leia a política da empresa."',
      'Polido: explicando o motivo e oferecendo alternativa.',
      'Irônico: para mostrar que o pedido foi absurdo.',
      'Enfático: usando letras maiúsculas para negar.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Dizer "não" exige tato. Explicar o "porquê" e oferecer alternativas mostra que você quer ajudar, mesmo dentro das limitações.'
  },
  {
    id: '103',
    category: 'Processos & Procedimentos',
    text: 'Após a resolução e confirmação do usuário, qual o último passo no ciclo do incidente?',
    options: [
      'Apagar o registro do sistema.',
      'Fechamento formal do ticket (Encerramento).',
      'Esperar o cliente ligar de novo.',
      'Fazer uma pausa para café.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'O encerramento formal no sistema garante que as métricas (como tempo de resolução) sejam calculadas corretamente e o ciclo seja concluído.'
  },
  {
    id: '104',
    category: 'Comunicação & Soft Skills',
    text: 'Quando o cliente divaga e perde o foco, usar o nome dele ajuda a:',
    options: [
      'Assustá-lo para que pare de falar.',
      'Retomar a atenção e redirecionar o foco educadamente.',
      'Mostrar que você sabe quem ele é.',
      'Forçar uma intimidade desnecessária.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'O nome funciona como uma "âncora" de atenção. É uma maneira gentil de interromper um monólogo e trazer o cliente de volta ao processo.'
  },
  {
    id: '105',
    category: 'Equipe & Profissionalismo',
    text: 'Para manter boa relação com outros departamentos (Nível 2/3), você deve:',
    options: [
      'Enviar chamados sem triagem para se livrar deles.',
      'Enviar informações completas e precisas no ticket.',
      'Reclamar da demora deles diretamente para o cliente.',
      'Ignorar os procedimentos deles sempre que possível.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Enviar tickets bem documentados e triados mostra respeito pelo tempo do Nível 2/3 e agiliza a resolução para o cliente.'
  },
  {
    id: '106',
    category: 'Processos & Procedimentos',
    text: 'A documentação de procedimentos (SOPs) garante principalmente:',
    options: [
      'Burocracia excessiva no dia a dia.',
      'Consistência na entrega do serviço.',
      'Que ninguém precise ser criativo.',
      'Aumento de custos operacionais.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'A consistência é a marca da qualidade. Procedimentos padrão (SOPs) garantem que o resultado seja o mesmo, não importa qual analista execute a tarefa.'
  },
  {
    id: '107',
    category: 'Métricas',
    text: 'O ASA (Average Speed to Answer) ou Tempo Médio de Resposta mede:',
    options: [
      'A duração total da chamada.',
      'O tempo de espera na fila antes do atendimento.',
      'O tempo necessário para fechar o ticket.',
      'O tempo de intervalo de descanso do analista.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'É uma métrica de acessibilidade. Mede o quão rápido o Service Desk está disponível para atender o cliente que está na fila.'
  },
  {
    id: '108',
    category: 'Processos & Procedimentos',
    text: 'Qual dado é indispensável na abertura de qualquer incidente?',
    options: [
      'O signo do zodíaco do cliente.',
      'Informações de contato e identificação do usuário.',
      'A cor do computador do usuário.',
      'A previsão do tempo local.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Identificar o usuário valida o direito ao suporte e os dados de contato são vitais para a comunicação durante o ciclo de vida do incidente.'
  },
  {
    id: '109',
    category: 'Métricas',
    text: 'Um problema que impede o fechamento contábil da empresa e gera multas deve ser tratado como:',
    options: [
      'Prioridade Baixa (pode esperar).',
      'Prioridade Crítica (escalação imediata).',
      'Prioridade Média (atender quando der).',
      'Problema pessoal do departamento contábil.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'O impacto financeiro direto (multas) classifica o incidente como Crítico, acionando processos de emergência (Major Incident).'
  },
  {
    id: '110',
    category: 'Métricas',
    text: 'O processo de Garantia de Qualidade (QA) verifica se:',
    options: [
      'Os analistas estão sorrindo durante a chamada.',
      'Os atendimentos seguem os padrões definidos.',
      'Os computadores do escritório estão limpos.',
      'O café da copa está fresco.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'QA audita chamadas e tickets para garantir que os analistas estão seguindo os scripts, procedimentos e padrões de qualidade definidos.'
  },
  {
    id: '111',
    category: 'Tecnologia & Ferramentas',
    text: 'Uma Base de Conhecimento atualizada contribui para:',
    options: [
      'Aumentar o tempo gasto em pesquisas inúteis.',
      'Melhorar a consistência e rapidez nas resoluções.',
      'Confundir os analistas novos com excesso de dados.',
      'Ocupar espaço desnecessário no servidor.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Conhecimento atualizado significa que os analistas não precisam "redescobrir" soluções, tornando o atendimento mais rápido e preciso.'
  },
  {
    id: '112',
    category: 'Tecnologia & Ferramentas',
    text: 'Qual ferramenta permite ao usuário encontrar respostas sem contatar o suporte?',
    options: [
      'Sistema de Telefonia (URA).',
      'Portal de Autoajuda (Base de Conhecimento).',
      'E-mail direto do CEO da empresa.',
      'Fax para o departamento de TI.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Portais de Autoajuda são projetados para desviar (deflect) chamadas simples, permitindo que o usuário resolva seus problemas na hora que desejar.'
  },
  {
    id: '113',
    category: 'Processos & Procedimentos',
    text: 'Quando o analista transfere a chamada para seu chefe a pedido do cliente, ocorre uma:',
    options: [
      'Escalação Funcional',
      'Escalação Hierárquica',
      'Demissão Sumária',
      'Transferência Lateral'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Mover a interação para um nível de autoridade superior (chefe/gerente) é a definição de escalação hierárquica.'
  },
  {
    id: '114',
    category: 'Processos & Procedimentos',
    text: 'Onde estão definidas as regras sobre uso aceitável de recursos e conduta?',
    options: [
      'Apenas na mente do gerente.',
      'Nas Políticas Organizacionais.',
      'No manual do sistema operacional.',
      'Na internet em sites públicos.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'As Políticas Organizacionais são os documentos oficiais que regem o que é permitido e o que é proibido dentro da empresa.'
  },
  {
    id: '115',
    category: 'Processos & Procedimentos',
    text: 'Um conjunto documentado de passos para realizar uma tarefa específica chama-se:',
    options: [
      'Política',
      'Procedimento',
      'Padrão',
      'Sugestão'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Procedimentos são operacionais e detalhados. Eles dizem "como" fazer algo, enquanto políticas dizem "o que" deve ser feito.'
  },
  {
    id: '116',
    category: 'Processos & Procedimentos',
    text: 'A missão primária de um analista de suporte em Gestão de Incidentes é:',
    options: [
      'Desenvolver novas funcionalidades de software.',
      'Restaurar a operação normal do serviço rapidamente.',
      'Educar o usuário sobre hardware complexo.',
      'Criar um relacionamento pessoal com o cliente.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'O foco do suporte a incidentes é a continuidade do negócio. Restaurar o serviço rapidamente minimiza prejuízos e perda de produtividade.'
  },
  {
    id: '117',
    category: 'Comunicação & Soft Skills',
    text: 'Diante de barreiras de idioma ou sotaque, a melhor técnica é:',
    options: [
      'Falar mais alto para ser ouvido.',
      'Validar o entendimento repetindo o que ouviu (parafrasear).',
      'Pedir para enviar e-mail e desligar.',
      'Rir da situação para descontrair.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Falar devagar e confirmar frequentemente o entendimento supera barreiras linguísticas e demonstra paciência e respeito.'
  },
  {
    id: '118',
    category: 'Processos & Procedimentos',
    text: 'A adoção de Melhores Práticas (Best Practices) visa garantir:',
    options: [
      'Aumento da burocracia interna.',
      'Qualidade consistente e credibilidade.',
      'Que o trabalho seja mais difícil.',
      'A exclusão de analistas juniores.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.EASY,
    explanation: 'Seguir padrões comprovados de mercado (Best Practices) eleva o nível de maturidade do suporte, garantindo resultados previsíveis e de alta qualidade.'
  },
  // --- QUESTÕES DIFÍCEIS (Mantidas/Atualizadas) ---
  {
    id: '200',
    category: 'Processos & Procedimentos',
    text: 'Você está lidando com um ticket crítico (P1). O SLA de resolução é de 4 horas. Após 3 horas e 30 minutos de trabalho, você identificou que a causa raiz está em um banco de dados ao qual apenas a equipe de DBA tem acesso. A equipe de DBA não responde aos seus chamados. O que você deve fazer imediatamente?',
    options: [
      'Registrar todas as tentativas de contato no ticket e aguardar o retorno do DBA, pois o SLA é responsabilidade da equipe técnica que detém o conhecimento para resolver o problema.',
      'Realizar uma escalação funcional para o grupo de DBA e uma escalação hierárquica para o gerente de incidentes alertando sobre a quebra iminente do SLA.',
      'Colocar o ticket em status de "Pendente com Fornecedor" para pausar a contagem do SLA imediatamente, garantindo que as métricas da sua equipe não sejam impactadas pela demora de terceiros.',
      'Transferir a responsabilidade da comunicação para o cliente, informando os contatos diretos da equipe de DBA para que ele possa cobrar urgência diretamente de quem resolve.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.HARD,
    explanation: 'Neste cenário, apenas passar o ticket (escalação funcional) não é suficiente porque o SLA está em risco crítico. A gestão (Gerente de Incidentes) deve ser acionada (escalação hierárquica) para remover barreiras organizacionais.'
  },
  {
    id: '201',
    category: 'Comunicação & Soft Skills',
    text: 'Um cliente VIP liga extremamente irritado, usando linguagem abusiva e ataques pessoais contra você devido a uma falha recorrente no e-mail. A política da empresa permite encerrar chamadas abusivas após um aviso. Qual a melhor abordagem?',
    options: [
      'Desligar o telefone imediatamente sem aviso prévio, pois a política de tolerância zero da empresa protege os funcionários de qualquer tipo de agressão verbal, independentemente do cargo do cliente.',
      'Lembrar ao cliente que a chamada é gravada, avisar profissionalmente que a linguagem é inaceitável e, se continuar, encerrar a chamada conforme a política.',
      'Manter a calma e ignorar os insultos pessoais, focando exclusivamente na resolução técnica do problema de e-mail para minimizar o tempo de interação e evitar conflitos políticos com a diretoria.',
      'Pedir desculpas repetidamente e assumir a culpa pessoalmente pelo problema recorrente para acalmar o VIP, garantindo que ele não faça uma reclamação formal ao seu gerente.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.HARD,
    explanation: 'Ignorar o abuso valida o comportamento, e desligar sem aviso pode gerar retaliação política. A abordagem correta equilibra assertividade (impor limites) com profissionalismo (dar o aviso prévio).'
  },
  {
    id: '202',
    category: 'Métricas',
    text: 'Sua equipe está sendo pressionada para reduzir o Tempo Médio de Atendimento (TMA/AHT). Um analista começa a encerrar chamadas rapidamente, prometendo que "o sistema atualizará sozinho", o que resulta em muitos clientes ligando de volta no mesmo dia. Qual o impacto real dessa prática nos KPIs?',
    options: [
      'Reduz drasticamente o TMA e otimiza a fila de espera, garantindo que mais clientes sejam atendidos no mesmo dia, o que é o principal indicador de eficiência operacional para a gerência.',
      'Melhora o TMA, mas destrói o FCR e a Satisfação do Cliente, aumentando o volume total de chamados (retrabalho).',
      'Não gera impacto significativo nos KPIs globais, pois o sistema de telefonia agrupa automaticamente as chamadas repetidas do mesmo número, invalidando o efeito negativo do retrabalho.',
      'Aumenta o TMA, pois o analista terá que atender o mesmo cliente duas vezes, duplicando o tempo de conversa necessário para explicar a mesma solução.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.HARD,
    explanation: 'Focar cegamente no TMA (rapidez) sem qualidade gera "falso encerramento". O cliente liga de volta, derrubando a métrica de Resolução no Primeiro Contato (FCR) e gerando insatisfação.'
  },
  {
    id: '203',
    category: 'Tecnologia & Ferramentas',
    text: 'Durante uma sessão de acesso remoto para corrigir uma impressora, você percebe que o papel de parede da área de trabalho do usuário contém material ofensivo/inapropriado que viola claramente a política da empresa. O usuário não está ciente que você viu. O que você deve fazer?',
    options: [
      'Ignorar o conteúdo visual, pois sua função é estritamente técnica e envolver-se em questões disciplinares pode gerar atrito desnecessário com o usuário e desviar do foco do suporte.',
      'Comentar de forma descontraída com o usuário para criar rapport e aliviar a tensão do atendimento, demonstrando que o suporte técnico é um ambiente amigável.',
      'Concluir o atendimento técnico profissionalmente e, em seguida, relatar o incidente de segurança/compliance ao seu supervisor ou RH, conforme o processo.',
      'Bloquear o computador do usuário imediatamente via comando remoto e desconectar a rede para evitar propagação de material ilícito, garantindo a integridade dos ativos.'
    ],
    correctOptionIndex: 2,
    difficulty: Difficulty.HARD,
    explanation: 'Você não pode ignorar violações de política (compliance), mas também não deve confrontar o usuário diretamente ou exceder sua autoridade bloqueando a máquina. A ação correta é reportar pelos canais adequados.'
  },
  {
    id: '204',
    category: 'Processos & Procedimentos',
    text: 'Um usuário liga pedindo sua senha de rede. Você não consegue verificar a identidade dele através das perguntas de segurança padrão porque ele "esqueceu as respostas". Ele alega ser o Diretor Financeiro e diz que precisa aprovar um pagamento urgente. Como proceder?',
    options: [
      'Fornecer a senha temporária, pois impedir um pagamento urgente do Diretor Financeiro causará prejuízo financeiro maior ao negócio do que o risco de segurança.',
      'Pedir que ele envie um e-mail do endereço pessoal confirmando a solicitação para documentar a exceção, garantindo assim que haverá um registro formal da quebra de procedimento.',
      'Recusar o reset de senha e instruí-lo a vir pessoalmente ou usar o processo alternativo de validação (ex: falar com o gerente dele), independente da urgência.',
      'Criar uma senha temporária e enviá-la por SMS para o número cadastrado no sistema de RH, assumindo que se ele tem o celular corporativo, sua identidade está validada.'
    ],
    correctOptionIndex: 2,
    difficulty: Difficulty.HARD,
    explanation: 'Engenharia social frequentemente usa urgência e autoridade para burlar segurança. Sem validação positiva de identidade, *nunca* forneça acesso, não importa o cargo.'
  },
  {
    id: '205',
    category: 'Tecnologia & Ferramentas',
    text: 'Você encontra um artigo na Base de Conhecimento (KCS) que resolveria o problema do cliente, mas percebe que o passo 3 do artigo está desatualizado e refere-se a uma versão antiga do software. Qual é a sua responsabilidade no modelo KCS?',
    options: [
      'Usar o artigo ignorando o passo errado e, após a chamada, sinalizar ou corrigir o artigo imediatamente (Fix on use/Flag it).',
      'Ignorar o artigo oficial e utilizar seu conhecimento tácito para resolver o problema, pois seguir um procedimento documentado com erros conhecidos violaria as políticas de qualidade do serviço.',
      'Seguir o artigo exatamente como está escrito, passo a passo, pois a aderência ao processo documentado é auditada e o analista não tem autonomia para desviar de procedimentos aprovados.',
      'Enviar um e-mail para o gerente de conhecimento pedindo para ele revisar o artigo na próxima semana, garantindo que a correção seja feita pela pessoa responsável pela manutenção da base.'
    ],
    correctOptionIndex: 0,
    difficulty: Difficulty.HARD,
    explanation: 'No KCS (Knowledge Centered Service), a manutenção do conhecimento é responsabilidade de todos. O conceito "Use it, Flag it, Fix it" exige ação imediata para manter a base saudável.'
  },
  {
    id: '206',
    category: 'Processos & Procedimentos',
    text: 'O Service Desk está com um volume de chamadas 300% acima do normal devido a uma falha massiva. O tempo de espera está em 45 minutos. A gerência decide ativar o "Modo de Incidente Grave". O que muda no procedimento do analista?',
    options: [
      'Os analistas devem parar de atender o telefone e focar exclusivamente em responder e-mails e chats para evitar o contato verbal direto com clientes frustrados.',
      'O foco muda de "diagnóstico profundo" para "triagem rápida, registro e anúncio da mensagem de indisponibilidade geral" para liberar a linha.',
      'Os analistas devem pedir aos usuários para desligarem e ligarem mais tarde quando o sistema voltar, recusando-se a abrir tickets para economizar tempo de sistema.',
      'O tempo de conversa deve ser ilimitado para acalmar cada usuário individualmente, garantindo que a satisfação do cliente seja mantida mesmo durante a crise.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.HARD,
    explanation: 'Em crises massivas, o objetivo é informar o maior número de pessoas no menor tempo possível e agrupar os tickets (relação pai-filho), não resolver caso a caso.'
  },
  {
    id: '207',
    category: 'Comunicação & Soft Skills',
    text: 'Você está explicando uma solução técnica complexa para um usuário leigo que começa a ficar visivelmente confuso e silencioso. Você pergunta "Entendeu?" e ele diz "Sim", mas com voz hesitante. O que você deve fazer?',
    options: [
      'Aceitar o "Sim" como confirmação de encerramento, finalizar o chamado e documentar que o usuário recebeu o treinamento necessário para operar o sistema.',
      'Repetir a explicação técnica exatamente com as mesmas palavras, mas falando mais alto e pausadamente para garantir que ele ouça cada detalhe.',
      'Pedir gentilmente para o usuário executar os passos ou explicar de volta para você o que ele vai fazer, para validar a compreensão real.',
      'Dizer ao usuário que, se ele tiver dúvidas futuras, deve ler o manual técnico disponível na intranet, pois o tempo de chamada já excedeu o limite permitido.'
    ],
    correctOptionIndex: 2,
    difficulty: Difficulty.HARD,
    explanation: 'Usuários muitas vezes dizem que entenderam por vergonha. A validação real requer que o usuário demonstre o conhecimento (teach-back method) ou execute a ação com supervisão.'
  },
  {
    id: '208',
    category: 'Processos & Procedimentos',
    text: 'Um incidente foi incorretamente escalado para o Nível 2. A equipe de Nível 2 devolve o ticket para o Nível 1 com uma nota agressiva: "Isso é básico, aprendam a trabalhar". O cliente liga cobrando status. Como você gerencia isso?',
    options: [
      'Ler a nota técnica do Nível 2 para o cliente para justificar a demora e demonstrar transparência, mostrando que o atraso não foi responsabilidade sua.',
      'Responder agressivamente ao Nível 2 no próprio ticket para defender a honra da sua equipe e escalar o conflito imediatamente para o gerente de TI.',
      'Assume a propriedade do ticket, resolve o problema do cliente profissionalmente e trata o conflito interno com o Nível 2 separadamente/posteriormente.',
      'Devolver o ticket novamente para o Nível 2 com a justificativa de que eles são pagos para resolver problemas difíceis e não devem recusar trabalho.'
    ],
    correctOptionIndex: 2,
    difficulty: Difficulty.HARD,
    explanation: 'O cliente nunca deve ser exposto a conflitos internos (Dirty Laundry). Resolva o problema do cliente primeiro (Ownership) e trate a questão comportamental da equipe offline.'
  },
  {
    id: '209',
    category: 'Métricas',
    text: 'Se o Service Desk atingiu 98% de SLA de resposta, mas a Pesquisa de Satisfação (CSAT) está em queda livre (baixa), qual é a conclusão mais provável?',
    options: [
      'Os usuários estão respondendo incorretamente nas pesquisas devido à falta de conhecimento técnico sobre os prazos acordados no contrato de nível de serviço.',
      'O Service Desk está rápido em atender (pick up), mas ineficaz em resolver ou a qualidade do contato é ruim (frieza/pressa).',
      'O SLA de tempo de resposta está definido muito alto e deve ser reduzido para que os analistas tenham mais tempo de descanso entre as chamadas.',
      'Os usuários preferem esperar mais tempo no telefone, pois associam um tempo de espera maior a um serviço de maior qualidade e exclusividade.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.HARD,
    explanation: 'Isso é o clássico "Melancia" (Verde por fora nas métricas operacionais, Vermelho por dentro na experiência do cliente). Rapidez não substitui competência e empatia.'
  },
  {
    id: '210',
    category: 'Processos & Procedimentos',
    text: 'O que diferencia fundamentalmente o Gerenciamento de Incidentes do Gerenciamento de Problemas?',
    options: [
      'Incidentes focam em consertar a causa raiz definitiva da falha, enquanto Problemas focam apenas em restaurar o serviço temporariamente para o usuário.',
      'Incidentes focam em restaurar o serviço rapidamente (band-aid); Problemas focam na causa raiz e prevenção de recorrência (cura).',
      'Não há diferença prática, são apenas terminologias diferentes usadas por departamentos distintos para descrever a mesma atividade de suporte.',
      'Gerenciamento de Problemas é executado exclusivamente pelo Nível 1 (Service Desk), enquanto o Gerenciamento de Incidentes é responsabilidade do Nível 3.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.HARD,
    explanation: 'Conceito vital da ITIL. Incidente = Apagar o fogo (Solução de Contorno). Problema = Descobrir o que causou o incêndio para que não ocorra novamente.'
  },
  {
    id: '211',
    category: 'Comunicação & Soft Skills',
    text: 'Durante uma chamada, você percebe que cometeu um erro no diagnóstico que fez o cliente perder 10 minutos executando passos inúteis. O cliente ainda não percebeu. O que fazer?',
    options: [
      'Fingir que os passos errados faziam parte do processo padrão de eliminação e seguir em frente para não perder sua autoridade técnica.',
      'Admitir o erro honestamente, pedir desculpas pelo tempo perdido e corrigir o curso imediatamente.',
      'Culpar a documentação desatualizada do sistema ou a lentidão da rede pelo erro, desviando a responsabilidade para fatores externos.',
      'Desligar a chamada "acidentalmente" para que o cliente ligue novamente e seja atendido por outro analista, começando o processo do zero.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.HARD,
    explanation: 'A integridade constrói confiança. Tentar encobrir um erro pode levar a uma perda de credibilidade muito maior se o cliente descobrir depois. Assuma e corrija.'
  },
  {
    id: '212',
    category: 'Tecnologia & Ferramentas',
    text: 'Você está usando uma ferramenta de chat simultâneo e está atendendo 3 clientes ao mesmo tempo. Um deles para de responder por 4 minutos. Qual a melhor prática?',
    options: [
      'Encerrar o chat imediatamente para liberar o slot de atendimento, pois a eficiência métrica exige que não se perca tempo com usuários ausentes.',
      'Enviar uma mensagem de verificação ("Você ainda está aí?") e avisar que o chat será encerrado em X minutos por inatividade se não houver resposta.',
      'Deixar o chat aberto indefinidamente enquanto foca nos outros dois clientes, aguardando que o usuário retorne a qualquer momento do dia.',
      'Usar letras maiúsculas (CAPS LOCK) e múltiplos pontos de exclamação para chamar a atenção visual do usuário na janela de chat.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.HARD,
    explanation: 'Abandonar o cliente gera insatisfação, mas manter sessões fantasmas prejudica a produtividade. O aviso de timeout é o padrão profissional.'
  },
  {
    id: '213',
    category: 'Processos & Procedimentos',
    text: 'Um usuário reporta que seu laptop foi roubado do carro. Ele está preocupado com o custo do equipamento. Como analista de suporte, qual deve ser sua preocupação prioritária imediata?',
    options: [
      'Calcular o valor depreciado do laptop para informar ao RH, visando descontar o montante do próximo salário do funcionário conforme política de ativos.',
      'Garantir que a segurança da informação seja acionada para bloquear acessos/wipar dados remotamente, antes de se preocupar com o hardware.',
      'Exigir que o usuário apresente o boletim de ocorrência policial físico antes de tomar qualquer ação no sistema, para evitar fraudes.',
      'Iniciar imediatamente o processo de compra de um novo laptop para garantir que o usuário volte a trabalhar o mais rápido possível, focando na produtividade.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.HARD,
    explanation: 'O hardware é substituível e barato comparado aos dados. A prioridade de segurança (vazamento de dados) supera a logística de reposição.'
  },
  {
    id: '214',
    category: 'Comunicação & Soft Skills',
    text: 'Qual a diferença sutil, mas crítica, entre "Simpatia" e "Empatia" no atendimento ao cliente?',
    options: [
      'Simpatia é uma abordagem estritamente profissional e distante, enquanto Empatia envolve tornar-se amigo pessoal do cliente fora do trabalho.',
      'Simpatia é sentir pena ("Sinto muito por você"); Empatia é compreender e validar a emoção ("Entendo por que isso é frustrante").',
      'Simpatia é a técnica usada para resolver problemas técnicos complexos, enquanto Empatia é usada apenas para resolver reclamações simples.',
      'Não há diferença real, ambos os termos são sinônimos intercambiáveis no contexto de suporte ao cliente e significam "ser agradável".'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.HARD,
    explanation: 'Simpatia pode soar condescendente ("coitadinho"). Empatia cria conexão ("estamos juntos nisso"). O suporte moderno exige empatia.'
  },
  {
    id: '215',
    category: 'Processos & Procedimentos',
    text: 'O que constitui um "SPOF" (Single Point of Failure) na operação de um Service Desk e como mitigá-lo?',
    options: [
      'Um servidor de alta disponibilidade que nunca falha, mitigado pela compra de hardware mais barato para reduzir custos operacionais desnecessários.',
      'Um único analista que detém conhecimento exclusivo sobre um sistema crítico. Mitiga-se com documentação e treinamento cruzado (Cross-training).',
      'Um cliente específico que liga todos os dias para o suporte. Mitiga-se bloqueando o número dele para liberar a linha para outros usuários.',
      'Um software que só roda em sistema operacional Windows. Mitiga-se comprando computadores Apple Mac para toda a empresa.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.HARD,
    explanation: 'Se o "guru" do sistema ficar doente, a operação para. Isso é um risco grave. O conhecimento deve ser institucional (Base de Conhecimento), não individual.'
  },
  {
    id: '216',
    category: 'Métricas',
    text: 'A métrica de "Abandono de Chamada" (Abandonment Rate) está alta (15%). A gerência pede uma solução rápida sem contratar mais gente. Qual medida pode ajudar?',
    options: [
      'Desativar a mensagem de espera inicial para que o telefone toque continuamente até alguém atender, dando a impressão de disponibilidade.',
      'Implementar mensagens de "Posição na Fila" e oferecer opção de "Callback" (Retorno de chamada) para o cliente não precisar ficar na linha.',
      'Aumentar o volume da música de espera para manter o cliente entretido e menos propenso a desligar por tédio.',
      'Monitorar e punir severamente os analistas que demoram mais de 2 minutos no banheiro, forçando maior disponibilidade na mesa.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.HARD,
    explanation: 'O Callback virtual mantém o lugar do cliente na fila sem prendê-lo ao telefone, reduzindo a frustração e a taxa de abandono estatística.'
  },
  {
    id: '217',
    category: 'Processos & Procedimentos',
    text: 'Você recebe um chamado de um usuário remoto reclamando de lentidão. Após testes, você confirma que o problema é a internet doméstica dele (ISP), não a VPN da empresa. Como você fecha esse caso mantendo a satisfação?',
    options: [
      'Dizer "Não é problema nosso" e fechar o ticket imediatamente, pois a política da empresa não cobre suporte a redes domésticas de terceiros.',
      'Explique tecnicamente que a rota da VPN está limpa, prove que é o provedor dele, e forneça a ele os dados técnicos (latência/perda de pacote) para que ele possa reclamar com o provedor dele com embasamento.',
      'Abrir um chamado técnico na operadora de internet pessoal do usuário em nome da sua empresa, assumindo a responsabilidade pela resolução.',
      'Mentir que fez um ajuste técnico no servidor e pedir para ele reiniciar o modem, usando o efeito placebo para encerrar o contato rapidamente.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.HARD,
    explanation: 'Mesmo fora do escopo (internet de casa), você pode "armar" o usuário com informações para que ele resolva o problema. Isso é valor agregado.'
  },
  {
    id: '218',
    category: 'Tecnologia & Ferramentas',
    text: 'Qual o risco de segurança inerente ao uso não controlado de ferramentas de "Shadow IT" (softwares que usuários instalam sem o TI saber)?',
    options: [
      'O departamento de TI fica com ciúmes porque os usuários escolheram softwares melhores do que os homologados oficialmente.',
      'Gera incompatibilidade de dados, brechas de segurança não monitoradas e riscos de conformidade legal (licenciamento/GDPR).',
      'Os computadores da empresa ficam excessivamente rápidos devido à otimização desses softwares modernos, gerando desconfiança.',
      'Não existe risco real, pois essas ferramentas aumentam a produtividade do usuário e reduzem a carga de trabalho do suporte.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.HARD,
    explanation: 'Shadow IT é um pesadelo de governança. Dados da empresa podem estar em servidores nuvem inseguros ou softwares piratas podem trazer malware.'
  },
  {
    id: '219',
    category: 'Equipe & Profissionalismo',
    text: 'Um colega de trabalho está passando por problemas pessoais e sua produtividade caiu, sobrecarregando você. O que é mais profissional?',
    options: [
      'Reclamar da postura dele para todos os outros colegas durante o almoço para criar um consenso de grupo contra ele.',
      'Conversar com ele em particular oferecendo apoio ou, se a situação persistir e afetar as metas, conversar com o supervisor de forma factual sobre a distribuição de carga, sem fofoca.',
      'Reduzir propositalmente o seu próprio ritmo de trabalho para nivelar a produtividade por baixo e forçar a gerência a intervir.',
      'Assumir silenciosamente todo o trabalho dele permanentemente para evitar conflitos, sacrificando sua própria saúde mental pelo time.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.HARD,
    explanation: 'Equilíbrio entre empatia e responsabilidade profissional. Fofoca destrói a equipe. A gestão precisa saber de problemas de capacidade, mas com tato.'
  },
  {
    id: '220',
    category: 'Processos & Procedimentos',
    text: 'Em um modelo de suporte "Shift-Left", qual é o objetivo estratégico?',
    options: [
      'Mover fisicamente as equipes de suporte para o lado esquerdo do escritório para otimizar o fluxo de ar e a iluminação natural.',
      'Mover a resolução de problemas para níveis mais altos e caros (Nível 3), garantindo que apenas engenheiros seniores falem com clientes.',
      'Mover a resolução para o nível mais baixo possível (Nível 0/Autoajuda ou Nível 1) através de automação e conhecimento, reduzindo custos e tempo.',
      'Ignorar os problemas complexos até que eles desapareçam sozinhos ou até que o usuário desista de abrir chamados.'
    ],
    correctOptionIndex: 2,
    difficulty: Difficulty.HARD,
    explanation: 'Shift-Left é a tendência da indústria de empurrar a solução para mais perto do cliente (Self-service/N1) para liberar os engenheiros caros (N3) para projetos.'
  },
  {
    id: '221',
    category: 'Comunicação & Soft Skills',
    text: 'Como lidar com o cliente "Especialista" (Know-it-all) que tenta ditar como você deve fazer seu trabalho?',
    options: [
      'Competir tecnicamente com ele para provar que você sabe mais e estabelecer dominância intelectual sobre o assunto.',
      'Reconhecer o conhecimento dele ("Vejo que você entende do assunto"), mas firmemente guiar o processo usando o protocolo de segurança/padrão como justificativa para os passos necessários.',
      'Dizer "Se você sabe tanto, conserte você mesmo" e desligar o telefone, pois o suporte é apenas para leigos.',
      'Submeter-se completamente e fazer exatamente o que ele manda, mesmo que viole a política de segurança, para evitar conflito.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.HARD,
    explanation: 'Validar o ego do "especialista" reduz a resistência dele. Depois, você usa o processo ("preciso seguir o protocolo") como autoridade neutra para retomar o controle.'
  },
  {
    id: '222',
    category: 'Processos & Procedimentos',
    text: 'Um incidente de segurança (vírus) é detectado. O procedimento diz "Desconecte a rede". O usuário grita "Não! Estou salvando um arquivo!". O que você faz?',
    options: [
      'Aguardar a confirmação do usuário de que o arquivo foi salvo antes de desconectar, minimizando o impacto no trabalho dele e evitando uma reclamação formal por perda de dados.',
      'Desconecta a rede imediatamente. A integridade da infraestrutura corporativa supera a perda de dados de um único usuário.',
      'Manter a conexão ativa enquanto tenta localizar o supervisor de segurança para obter uma autorização formal de desconexão, seguindo a hierarquia de comando rigorosamente.',
      'Tentar remover o vírus manualmente via linha de comando mantendo a rede ligada para não interromper o fluxo de trabalho do usuário.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.HARD,
    explanation: 'Dilema clássico. Em segurança cibernética, a contenção é prioritária. O risco de um ransomware infectar toda a empresa é inaceitável comparado a um arquivo não salvo.'
  },
  {
    id: '223',
    category: 'Métricas',
    text: 'Qual a relação entre "Utilização do Analista" (Occupancy) e "Burnout"?',
    options: [
      'Não há relação comprovada, pois o estresse é causado apenas por fatores pessoais e não pelo volume de trabalho.',
      'Se a utilização for muito baixa (<40%), o analista fica entediado e estressado por falta de desafios profissionais.',
      'Se a utilização for sustentada acima de 80-85%, não há tempo para recuperação/treinamento, levando inevitavelmente ao esgotamento e erro humano.',
      'Quanto maior a utilização, mais feliz e produtivo é o analista, pois ele se sente útil e engajado com a missão da empresa.'
    ],
    correctOptionIndex: 2,
    difficulty: Difficulty.HARD,
    explanation: 'Analistas não são máquinas. É preciso tempo de respiro entre chamadas. Ocupação acima de 85% é insustentável a longo prazo.'
  },
  {
    id: '224',
    category: 'Tecnologia & Ferramentas',
    text: 'Ao utilizar ferramentas de Chatbot/IA no atendimento inicial, qual é o maior risco para a Experiência do Cliente (CX)?',
    options: [
      'O robô ser inteligente demais e resolver os problemas tão rápido que o cliente se sente desvalorizado como humano.',
      'O "Loop da Morte" onde o cliente não consegue chegar a um humano quando o problema é complexo/emocional.',
      'O cliente desenvolver uma conexão emocional com o robô e preferir falar com ele do que com humanos reais.',
      'O robô responder muito rápido, assustando o cliente que não está acostumado com tecnologia de ponta.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.HARD,
    explanation: 'A automação deve sempre ter uma saída de escape (off-ramp) para um humano. Prender o cliente em loops automatizados é o maior detrator de CSAT hoje.'
  },
  {
    id: '225',
    category: 'Processos & Procedimentos',
    text: 'O Service Level Agreement (SLA) define "Prioridade" baseada em quais dois fatores principais?',
    options: [
      'Quem está pedindo (cargo do usuário) e o humor dele no momento da abertura do chamado.',
      'Impacto (quantas pessoas/processos afetados) e Urgência (quão rápido o negócio perde dinheiro/valor).',
      'Complexidade técnica do problema e disponibilidade atual do técnico mais experiente da equipe.',
      'Hora do dia e dia da semana, sendo que chamadas noturnas têm prioridade automática.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.HARD,
    explanation: 'A matriz de prioridade padrão ITIL cruza Impacto x Urgência. Um problema afeta a empresa toda (Alto Impacto) mas só semana que vem (Baixa Urgência) tem prioridade diferente de um servidor parado agora.'
  },
  {
    id: '226',
    category: 'Comunicação & Soft Skills',
    text: 'Você precisa dizer "Não" a um cliente que pede um software caro não aprovado. Qual a melhor formulação usando a técnica de "Linguagem Positiva"?',
    options: [
      'Não podemos comprar isso porque é muito caro e estouraria o orçamento do departamento de TI.',
      'Infelizmente a política proíbe terminantemente a instalação de softwares não homologados. Sinto muito.',
      'Embora não possamos adquirir esse software específico atualmente, podemos instalar a ferramenta X que já temos licenciada e realiza a mesma função. O que acha?',
      'Você precisa falar diretamente com o financeiro, pois eu sou apenas um analista técnico e não decido nada sobre compras.'
    ],
    correctOptionIndex: 2,
    difficulty: Difficulty.HARD,
    explanation: 'Linguagem positiva foca no que *pode* ser feito, não no que não pode. Oferecer a alternativa viável transforma a rejeição em solução.'
  },
  {
    id: '227',
    category: 'Tecnologia & Ferramentas',
    text: 'Qual a importância de categorizar corretamente o "Tipo de Incidente" no fechamento do ticket?',
    options: [
      'Nenhuma importância prática, é apenas uma burocracia exigida pelo sistema para permitir o fechamento do chamado.',
      'Permite análise de tendências (Pareto) para identificar onde investir em automação ou treinamento.',
      'Serve exclusivamente para calcular a comissão variável do analista baseada no tipo de problema resolvido.',
      'Deixa os relatórios gerenciais mais coloridos e bonitos para apresentação nas reuniões de diretoria.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.HARD,
    explanation: 'Se tudo for categorizado como "Outros" ou "Erro de Sistema", a gestão não sabe o que está quebrando. Dados precisos guiam investimentos inteligentes.'
  },
  {
    id: '228',
    category: 'Processos & Procedimentos',
    text: 'Um analista sênior resolve incidentes complexos sem nunca registrar os passos no ticket, apenas "Resolvido". Por que isso é prejudicial à equipe?',
    options: [
      'Porque ele resolve rápido demais, fazendo com que os outros analistas pareçam lentos em comparação.',
      'Cria um "Silo de Conhecimento". Se ele sair ou adoecer, ninguém sabe como resolver, e a equipe não aprende (mentoria zero).',
      'Porque gasta menos espaço no disco do servidor, o que pode causar problemas técnicos no banco de dados a longo prazo.',
      'Porque o cliente não gosta de respostas curtas e prefere ler textos longos e detalhados sobre a solução técnica.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.HARD,
    explanation: 'O "Heroísmo" não documentado é um vício tóxico. O valor do analista está no que ele entrega à equipe (conhecimento), não apenas no que ele conserta sozinho.'
  },
  {
    id: '229',
    category: 'Métricas',
    text: 'O Service Desk tem uma meta de atender 80% das chamadas em 20 segundos. Em um dia de crise, o gerente pede para "ignorar o script de saudação padrão" para ganhar 5 segundos por chamada. Isso é:',
    options: [
      'Uma violação ética grave que deve ser reportada imediatamente ao departamento de Recursos Humanos.',
      'Uma decisão tática de gerenciamento de tráfego aceitável em crises, desde que temporária e comunicada, para priorizar o volume.',
      'Ilegal, pois scripts de atendimento são regulamentados por leis federais de telecomunicações.',
      'Impossível de fazer, pois o sistema de telefonia bloqueia a chamada se o script não for lido na íntegra.'
    ],
    correctOptionIndex: 1,
    difficulty: Difficulty.HARD,
    explanation: 'Gerenciamento é sobre trade-offs. Em crise, a prioridade é o acesso. Simplificar o script temporariamente é uma tática válida para reduzir a fila, desde que a cortesia básica se mantenha.'
  }
];

export const getQuestionsByDifficulty = (difficulty: Difficulty) => {
  return questions.filter(q => q.difficulty === difficulty);
};