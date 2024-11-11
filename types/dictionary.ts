export interface FeatureItem {
    title: string;
    description: string;
}

export interface LocationItem {
    title: string;
    value: string;
}

export interface DistanceItem {
    name: string;
    time: string;
}

export interface Location {
    title: string;
    subtitle: string;
    pointsOfInterest: string;
    direction: {
        title: string;
        value: string;
    };
    access: {
        title: string;
        value: string;
    };
    transport: {
        title: string;
        value: string;
    };
    services: {
        title: string;
        value: string;
    };
    distances: {
        title: string;
        items: {
            laBarraManantiales: {
                name: string;
                time: string;
            };
            joseIgnacio: {
                name: string;
                time: string;
            };
            puntaDelEste: {
                name: string;
                time: string;
            };
            sanCarlos: {
                name: string;
                time: string;
            };
        };
    };
    coordinates: {
        lat: number;
        lng: number;
    };
    loadingText?: string;
    defaultLoadingText?: string;
    markerTitle?: string;
    defaultMarkerTitle?: string;
}

export interface GalleryImage {
    src: string;
    alt: string;
    title: string;
    description: string;
}

export interface Gallery {
    title: string;
    subtitle: string;
    images: {
        mainView: GalleryImage;
        pondView: GalleryImage;
        sideView: GalleryImage;
        frontView: GalleryImage;
        lateralView: GalleryImage;
        poolArea: GalleryImage;
        kitchen: GalleryImage;
        kitchenDetail: GalleryImage;
        kitchenView: GalleryImage;
        fullKitchen: GalleryImage;
        kitchenDining: GalleryImage;
        mainDining: GalleryImage;
        diningArea: GalleryImage;
        corridor: GalleryImage;
        livingArea: GalleryImage;
        garage: GalleryImage;
        mainLiving: GalleryImage;
        livingRoom: GalleryImage;
        additionalLiving: GalleryImage;
        masterBath: GalleryImage;
        exteriorView: GalleryImage;
        additionalView: GalleryImage;
        interiorView: GalleryImage;
        finalDetails: GalleryImage;
    };
}

export interface Contact {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    info: string;
    status: {
        sending: string;
        success: string;
        error: string;
    };
    validation: {
        nameRequired: string;
        nameMinLength: string;
        namePattern: string;
        emailRequired: string;
        emailInvalid: string;
        messageRequired: string;
        messageMinLength: string;
        messageMaxLength: string;
    };
}

export interface CarouselItem {
    title: string;
    description: string;
}

export interface Video {
    title: string;
    subtitle: string;
    browserError: string;
}

export interface DictionaryStructure {
    nav: {
        home: string;
        gallery: string;
        features: string;
        location: string;
        video: string;
        contact: string;
    };
    features: {
        title: string;
        bedrooms: {
            title: string;
            description: string;
            value: string;
        };
        bathrooms: {
            title: string;
            description: string;
            value: string;
        };
        garage: {
            title: string;
            description: string;
            value: string;
        };
        area: {
            title: string;
            description: string;
            value: string;
        };
    };
    gallery: Gallery;
    details: Details;
    video: Video;
    carousel: {
        kitchen: CarouselSection;
        livingRoom: CarouselSection;
        exterior: CarouselSection;
        bedroom: CarouselSection;
        closet: CarouselSection;
        pool: CarouselSection;
        hall: CarouselSection;
        gallery: CarouselSection;
        bathroom: CarouselSection;
        diningRoom: CarouselSection;
    };
    location: {
        title: string;
        subtitle: string;
        pointsOfInterest: string;
        direction: {
            title: string;
            value: string;
        };
        access: {
            title: string;
            value: string;
        };
        transport: {
            title: string;
            value: string;
        };
        services: {
            title: string;
            value: string;
        };
        distances: {
            title: string;
            items: {
                laBarraManantiales: {
                    name: string;
                    time: string;
                };
                joseIgnacio: {
                    name: string;
                    time: string;
                };
                puntaDelEste: {
                    name: string;
                    time: string;
                };
                sanCarlos: {
                    name: string;
                    time: string;
                };
            };
        };
        coordinates: {
            lat: number;
            lng: number;
        };
    };
    contact: {
        title: string;
        name: string;
        email: {
            title: string;
            value: string;
        };
        phone: {
            title: string;
            value: string;
        };
        direction: {
            title: string;
            value: string;
        };
        message: string;
        send: string;
        info: string;
        status: {
            sending: string;
            success: string;
            error: string;
        };
        validation: {
            nameRequired: string;
            nameMinLength: string;
            namePattern: string;
            emailRequired: string;
            emailInvalid: string;
            messageRequired: string;
            messageMinLength: string;
            messageMaxLength: string;
        };
    };
    description: {
        title: string;
        mainText: string;
        location: string;
        details: string;
    };
    hero: {
        title: string;
        subtitle: string;
    };
}

interface CarouselSection {
    title: string;
    description: string;
}

export interface DetailItem {
    title: string;
    value: string;
}

export interface Details {
    title: string;
    items: {
        neighborhood: { title: string; value: string; };
        view: { title: string; value: string; };
        orientation: { title: string; value: string; };
        waterLevel: { title: string; value: string; };
        terrainSurface: { title: string; value: string; };
        builtSurface: { title: string; value: string; };
        bedrooms: { title: string; value: string; };
        bathrooms: { title: string; value: string; };
        serviceBedroom: { title: string; value: string; };
        kitchen: { title: string; value: string; };
        living: { title: string; value: string; };
        diningRoom: { title: string; value: string; };
        warehouse: { title: string; value: string; };
        pool: { title: string; value: string; };
    };
}

export type DetailKey = string;

export interface ContactSection {
    contact: {
        title: string;
        name: string;
        email: {
            title: string;
            value: string;
        };
        phone: {
            title: string;
            value: string;
        };
        direction: {
            title: string;
            value: string;
        };
        message: string;
        send: string;
        info: string;
        status: {
            sending: string;
            success: string;
            error: string;
        };
        validation: {
            required: string;
            email: string;
        };
    };
}
