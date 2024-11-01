'use client';

interface PropertyVideoProps {
  dict: {
    video: {
      title: string;
      subtitle: string;
    };
  };
}

export default function PropertyVideo({ dict }: PropertyVideoProps) {
  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">{dict.video.title}</h2>
          <p className="text-gray-300 text-xl">{dict.video.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Video Original */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <video 
              className="w-full h-full object-cover"
              controls
              poster="/images/principal.jpeg"
            >
              <source src="/videos/tour-casa.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>

          {/* Nuevo Video */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <video 
              className="w-full h-full object-cover"
              controls
              poster="/images/vista-casa-exterior.jpeg"
              preload="metadata"
            >
              <source src="/videos/casa.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
} 