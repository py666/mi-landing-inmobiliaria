interface PropertyDescriptionProps {
    dict: {
        features: {
            bedrooms: {
                title: string;
                description: string;
            };
            bathrooms: {
                title: string;
                description: string;
            };
            garage: {
                title: string;
                description: string;
            };
            area: {
                title: string;
                description: string;
            };
        };
    };
}

type FeatureKey = 'bedrooms' | 'bathrooms' | 'garage' | 'area';

interface PropertyDetailsProps {
    dict: {
        details: {
            title: string;
            items: {
                neighborhood: DetailItem;
                view: DetailItem;
                orientation: DetailItem;
                waterLevel: DetailItem;
                terrainSurface: DetailItem;
                builtSurface: DetailItem;
                bedrooms: DetailItem;
                bathrooms: DetailItem;
                serviceBedroom: DetailItem;
                kitchen: DetailItem;
                living: DetailItem;
                diningRoom: DetailItem;
                warehouse: DetailItem;
                pool: DetailItem;
            };
        };
    };
}

interface DetailItem {
    title: string;
    value: string;
}

type DetailKey = keyof PropertyDetailsProps['dict']['details']['items'];

interface PropertyGalleryProps {
    dict: {
        gallery: {
            title: string;
            images: {
                [key: string]: {
                    title: string;
                    description: string;
                };
            };
        };
    };
}

interface ImageCarouselProps {
    dict: {
        carousel: {
            kitchen: CarouselItem;
            livingRoom: CarouselItem;
            exterior: CarouselItem;
            bedroom: CarouselItem;
            closet: CarouselItem;
            pool: CarouselItem;
            hall: CarouselItem;
            gallery: CarouselItem;
            bathroom: CarouselItem;
            diningRoom: CarouselItem;
        };
    };
}

interface CarouselItem {
    title: string;
    description: string;
}