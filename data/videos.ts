import { VideoLesson } from '../types';

export const videos: VideoLesson[] = [
  {
    id: '1',
    title: 'Como falar de forma que as pessoas queiram ouvir',
    description: 'Julian Treasure (TED) demonstra os "7 pecados capitais" da fala e como usar a voz para gerar autoridade e empatia no atendimento.',
    sourceType: 'youtube',
    youtubeId: 'eIho2S0ZahI', // TED Talk oficial (Sempre permitido)
    category: 'Comunicação',
    duration: '09:58'
  },
  {
    id: '2',
    title: 'O Poder da Empatia (RSA Animate)',
    description: 'A melhor explicação visual sobre a diferença crítica entre Empatia (conexão) e Simpatia (distanciamento) no suporte.',
    sourceType: 'youtube',
    youtubeId: '1Evwgu369Jw', // RSA Official (Sempre permitido)
    category: 'Soft Skills',
    duration: '02:53'
  },
  {
    id: '3',
    title: 'Como transformar o estresse em amigo',
    description: 'Kelly McGonigal explica como mudar sua mentalidade sobre o estresse pode mudar a resposta biológica do seu corpo.',
    sourceType: 'youtube',
    youtubeId: 'RcGyVTAoXEU', // TED Talk oficial
    category: 'Soft Skills',
    duration: '14:28'
  },
  {
    id: '4',
    title: 'Dentro da mente de um procrastinador mestre',
    description: 'Tim Urban fala de forma divertida sobre gerenciamento de tempo e prazos, crucial para cumprimento de SLAs.',
    sourceType: 'youtube',
    youtubeId: 'arj7oStGLkU', // TED Talk oficial
    category: 'Processos',
    duration: '14:03'
  },
  {
    id: '5',
    title: '5 Maneiras de ouvir melhor',
    description: 'Técnicas práticas para "limpar" os ouvidos e praticar a escuta ativa (Active Listening) em ambientes barulhentos.',
    sourceType: 'youtube',
    youtubeId: 'cSohjlYQI2A', // TED Talk oficial
    category: 'Comunicação',
    duration: '07:50'
  },
  {
    id: '6',
    title: 'Por que bons líderes fazem você se sentir seguro',
    description: 'Simon Sinek discute confiança, segurança e trabalho em equipe. Essencial para entender a dinâmica de um Service Desk.',
    sourceType: 'youtube',
    youtubeId: 'lmyZMtPVodo', // TED Talk oficial
    category: 'Equipe',
    duration: '11:59'
  }
];

export const getVideosByCategory = (category: string) => {
  if (category === 'Todos') return videos;
  return videos.filter(v => v.category === category);
};