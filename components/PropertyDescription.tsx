'use client';

interface PropertyDescriptionProps {
  dict: {
    description: {
      title: string;
      mainText: string;
      location: string;
      details: string;
    };
  };
}

export default function PropertyDescription({ dict }: PropertyDescriptionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            {dict.description.title}
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              {dict.description.mainText}
            </p>

            <div className="space-y-6">
              <p>{dict.description.location}</p>
              <p>{dict.description.details}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 