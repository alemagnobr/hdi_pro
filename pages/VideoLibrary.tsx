import React, { useState, useMemo } from 'react';
import { Play, Clock, Tag, X, Youtube, FileVideo, ExternalLink } from 'lucide-react';
import { videos, getVideosByCategory } from '../data/videos';
import { VideoLesson } from '../types';

const VideoLibrary: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedVideo, setSelectedVideo] = useState<VideoLesson | null>(null);

  // Extrair categorias únicas dos dados
  const categories = useMemo(() => {
    const allCats = videos.map(v => v.category);
    return ['Todos', ...Array.from(new Set(allCats))];
  }, []);

  const filteredVideos = useMemo(() => {
    return getVideosByCategory(activeCategory);
  }, [activeCategory]);

  // Função auxiliar para renderizar a thumbnail correta
  const renderThumbnail = (video: VideoLesson) => {
    if (video.sourceType === 'youtube' && video.youtubeId) {
      return (
        <img 
          src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`} 
          alt={video.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
        />
      );
    } else {
      // Thumbnail genérica para vídeo local (ou poderia ser uma imagem personalizada no futuro)
      return (
        <div className="w-full h-full bg-gray-800 flex items-center justify-center opacity-80 group-hover:opacity-60 transition-opacity">
           <FileVideo size={48} className="text-gray-500" />
        </div>
      );
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      
      {/* Header Section */}
      <div className="text-center py-6">
         <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Vídeo Aulas</h2>
         <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
           Aprofunde seus conhecimentos com explicações visuais sobre os principais tópicos da certificação HDI SCA.
         </p>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide justify-center">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
              activeCategory === cat
                ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                : 'bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      {filteredVideos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map(video => (
            <div 
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 dark:border-dark-border transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            >
              {/* Thumbnail Area */}
              <div className="relative aspect-video bg-gray-900 overflow-hidden">
                 {renderThumbnail(video)}
                 
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-primary-600/90 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                       <Play size={24} fill="currentColor" className="ml-1" />
                    </div>
                 </div>
                 <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
                    {video.duration}
                 </div>
              </div>

              {/* Content Area */}
              <div className="p-5">
                 <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded-md flex items-center gap-1">
                      <Tag size={10} /> {video.category}
                    </span>
                    {video.sourceType === 'local' && (
                       <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md border border-green-100">
                         Upload
                       </span>
                    )}
                 </div>
                 <h3 className="font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                   {video.title}
                 </h3>
                 <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                   {video.description}
                 </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 opacity-50">
           <Youtube size={48} className="mx-auto mb-4 text-gray-300" />
           <p className="dark:text-white">Nenhum vídeo encontrado nesta categoria.</p>
        </div>
      )}

      {/* Video Player Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200">
           <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              {/* Close Button */}
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white/20 text-white rounded-full transition-colors"
              >
                <X size={24} />
              </button>

              {/* Player Logic Check */}
              <div className="aspect-video w-full bg-black flex items-center justify-center">
                 {selectedVideo.sourceType === 'youtube' && selectedVideo.youtubeId ? (
                    <iframe 
                      src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                      title={selectedVideo.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                 ) : selectedVideo.sourceType === 'local' && selectedVideo.url ? (
                    <video 
                      controls 
                      autoPlay 
                      className="w-full h-full"
                      controlsList="nodownload"
                    >
                      <source src={selectedVideo.url} type="video/mp4" />
                      Seu navegador não suporta a reprodução de vídeos.
                    </video>
                 ) : (
                    <div className="text-white text-center">
                       <p>Fonte de vídeo não encontrada.</p>
                    </div>
                 )}
              </div>

              {/* Video Details in Modal */}
              <div className="p-6 bg-white dark:bg-dark-card">
                 <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{selectedVideo.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{selectedVideo.description}</p>
                    </div>
                    
                    {/* Botão de Fallback para Youtube (Útil quando o Embed é bloqueado pelo ambiente) */}
                    {selectedVideo.sourceType === 'youtube' && (
                       <a 
                         href={`https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl text-sm font-bold hover:bg-red-50 hover:text-red-600 dark:hover:bg-gray-700 transition-colors flex-shrink-0"
                       >
                         <ExternalLink size={18} />
                         <span>Abrir no YouTube</span>
                       </a>
                    )}
                 </div>

                 <div className="mt-4 flex gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><Tag size={14} /> {selectedVideo.category}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {selectedVideo.duration}</span>
                 </div>
              </div>
           </div>
           
           {/* Close on click outside */}
           <div className="absolute inset-0 -z-10" onClick={() => setSelectedVideo(null)}></div>
        </div>
      )}

    </div>
  );
};

export default VideoLibrary;