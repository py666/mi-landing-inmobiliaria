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
    if (!dict?.description) {
        return null;
    }

    return (
        <section className="bg-primary-dark py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-light-green mb-12">
                    {dict.description.title}
                </h2>
                <div className="max-w-4xl mx-auto space-y-6">
                    <p className="text-xl text-light-green font-semibold">
                        {dict.description.mainText}
                    </p>
                    <p className="text-secondary-green leading-relaxed">
                        {dict.description.location}
                    </p>
                    <p className="text-secondary-green leading-relaxed">
                        {dict.description.details}
                    </p>
                </div>
            </div>
        </section>
    );
} 