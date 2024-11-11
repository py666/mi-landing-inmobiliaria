export interface Dictionary {
    hero: {
        title: string;
        subtitle: string;
    };
    nav: {
        home: string;
        gallery: string;
        features: string;
        location: string;
        video: string;
        contact: string;
    };
    carousel: {
        kitchen: { title: string; description: string; };
        livingRoom: { title: string; description: string; };
        exterior: { title: string; description: string; };
        bedroom: { title: string; description: string; };
        closet: { title: string; description: string; };
        pool: { title: string; description: string; };
        hall: { title: string; description: string; };
        gallery: { title: string; description: string; };
        bathroom: { title: string; description: string; };
        diningRoom: { title: string; description: string; };
    };
    gallery: {
        title: string;
        subtitle: string;
        images: {
            mainView: GalleryImage;
            pondView: GalleryImage;
            sideView: GalleryImage;
            frontView: GalleryImage;
            lateralView: GalleryImage;
            bedroom: GalleryImage;
            closet: GalleryImage;
            pool: GalleryImage;
            hall: GalleryImage;
            gallery: GalleryImage;
            bathroom: GalleryImage;
            diningRoom: GalleryImage;
            livingRoom: GalleryImage;
            finalDetails: GalleryImage;
        };
    };
    contact: {
        title: string;
        name: string;
        email: {
            title: string;
            value: string;
        };
        message: string;
        send: string;
        info: string;
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
        status: {
            sending: string;
            success: string;
            error: string;
        };
        recaptchaError: string;
        direction: {
            title: string;
            value: string;
        };
        phone: {
            title: string;
            value: string;
        };
        emailContact: {
            title: string;
            value: string;
        };
    };
}

export interface GalleryImage {
    title: string;
    description: string;
} 