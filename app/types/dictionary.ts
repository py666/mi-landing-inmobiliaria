interface GalleryImage {
    title: string;
    description: string;
}

interface GalleryDictionary {
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

export interface DictionaryStructure {
    gallery: GalleryDictionary;
} 