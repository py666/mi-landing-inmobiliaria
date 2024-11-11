interface GalleryDictionary {
    title: string;
    subtitle: string;
    images: {
        mainView: GalleryImage;
        pondView: GalleryImage;
        sideView: GalleryImage;
        // ... resto de las imágenes
    };
}

interface GalleryImage {
    title: string;
    description: string;
}
