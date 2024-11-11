'use client';

interface PropertyVideoProps {
  dict: {
    video: {
      title: string;
      subtitle: string;
      browserError: string;
    };
  };
}

export default function PropertyVideo({ dict }: PropertyVideoProps) {
  if (!dict?.video) {
    return null;
  }

  return (
    <section id="video-section" className="bg-primary-dark py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-light-green mb-4">
            {dict.video.title}
          </h2>
          <p className="text-xl text-secondary-green">
            {dict.video.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Video 1 */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-secondary-green/20">
            <video
              className="w-full h-full object-cover"
              controls
              poster="/images/casa-landing.jpeg"
              preload="metadata"
            >
              <source src="/videos/casa.mp4" type="video/mp4" />
              {dict.video.browserError}
            </video>
          </div>

          {/* Video 2 */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-secondary-green/20">
            <video
              className="w-full h-full object-cover"
              controls
              poster="/images/casa.jpeg"
              preload="metadata"
            >
              <source src="/videos/tour-casa.mp4" type="video/mp4" />
              {dict.video.browserError}
            </video>
          </div>
        </div>
      </div>
    </section>
  );
} 