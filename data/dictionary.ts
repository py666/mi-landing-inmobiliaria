import { DictionaryStructure } from '@/types/dictionary';

export const dictionary: DictionaryStructure = {
    features: {
        title: "Características Principales",
        barrio: {
            title: "Barrio",
            value: "Residencial"
        },
        vista: {
            title: "Vista",
            value: "Panorámica"
        },
        orientacion: {
            title: "Orientación",
            value: "Norte"
        },
        nivelAgua: {
            title: "Nivel de Agua",
            value: "Óptimo"
        },
        superficieTerreno: {
            title: "Superficie Terreno",
            value: "400 m²"
        },
        superficieConstruida: {
            title: "Superficie Construida",
            value: "280 m²"
        },
        dormitorios: {
            title: "Dormitorios",
            value: "2 Suites"
        },
        banos: {
            title: "Baños",
            value: "3 Completos"
        },
        dormitorioServicio: {
            title: "Dormitorio Servicio",
            value: "1"
        },
        cocina: {
            title: "Cocina",
            value: "Equipada"
        },
        living: {
            title: "Living",
            value: "Amplio"
        },
        comedor: {
            title: "Comedor",
            value: "Independiente"
        },
        deposito: {
            title: "Depósito",
            value: "Sí"
        },
        piscina: {
            title: "Piscina",
            value: "Sí"
        }
    },
    details: {
        title: "Detalles de la Propiedad",
        items: {
            neighborhood: {
                title: "Barrio",
                value: "Residencial"
            },
            view: {
                title: "Vista",
                value: "Panorámica"
            },
            orientation: {
                title: "Orientación",
                value: "Norte"
            },
            waterLevel: {
                title: "Nivel de Agua",
                value: "Óptimo"
            },
            terrainSurface: {
                title: "Superficie Terreno",
                value: "400 m²"
            },
            builtSurface: {
                title: "Superficie Construida",
                value: "280 m²"
            },
            bedrooms: {
                title: "Dormitorios",
                value: "2 Suites"
            },
            bathrooms: {
                title: "Baños",
                value: "3 Completos"
            },
            serviceBedroom: {
                title: "Dormitorio Servicio",
                value: "1"
            },
            kitchen: {
                title: "Cocina",
                value: "Equipada"
            },
            living: {
                title: "Living",
                value: "Amplio"
            },
            diningRoom: {
                title: "Comedor",
                value: "Independiente"
            },
            warehouse: {
                title: "Depósito",
                value: "Sí"
            },
            pool: {
                title: "Piscina",
                value: "Sí"
            }
        }
    },
    location: {
        title: "Ubicación Privilegiada",
        subtitle: "Excelente ubicación con fácil acceso",
        pointsOfInterest: "Puntos de Interés",
        direction: {
            title: "Dirección",
            value: "Barrio Residencial, Manantiales"
        },
        access: {
            title: "Accesos",
            value: "Ruta 10 y Camino a La Barra"
        },
        transport: {
            title: "Transporte",
            value: "Líneas de bus a 200m"
        },
        services: {
            title: "Servicios",
            value: "Todos los servicios disponibles"
        },
        distances: {
            title: "Distancias",
            items: {
                laBarraManantiales: { name: "La Barra - Manantiales", time: "10 min" },
                joseIgnacio: { name: "José Ignacio", time: "20 min" },
                puntaDelEste: { name: "Punta del Este", time: "25 min" },
                sanCarlos: { name: "San Carlos", time: "15 min" }
            }
        },
        loadingText: "Cargando mapa...",
        markerTitle: "Ubicación de la Propiedad",
        defaultLoadingText: "Cargando...",
        defaultMarkerTitle: "Ubicación",
        coordinates: {
            lat: -34.91795,
            lng: -54.86916
        }
    },
    gallery: {
        title: "Galería",
        subtitle: "Explora nuestra propiedad",
        images: {
            mainView: {
                title: "Vista Principal",
                description: "Fachada principal de la casa"
            },
            pondView: {
                title: "Vista al Estanque",
                description: "Hermosa vista al área del estanque"
            },
            sideView: {
                title: "Vista Lateral",
                description: "Vista lateral de la casa"
            },
            frontView: {
                title: "Vista Frontal",
                description: "Vista frontal de la propiedad"
            },
            lateralView: {
                title: "Vista Lateral",
                description: "Vista lateral de la propiedad"
            },
            poolArea: {
                title: "Área de Piscina",
                description: "Zona de recreación"
            },
            kitchen: {
                title: "Cocina",
                description: "Cocina moderna equipada"
            },
            kitchenDetail: {
                title: "Detalles de Cocina",
                description: "Detalles y acabados de la cocina"
            },
            kitchenView: {
                title: "Vista de la Cocina",
                description: "Vista panorámica de la cocina"
            },
            fullKitchen: {
                title: "Cocina Completa",
                description: "Vista completa de la cocina"
            },
            kitchenDining: {
                title: "Comedor de Cocina",
                description: "Área de comedor en la cocina"
            },
            mainDining: {
                title: "Comedor Principal",
                description: "Comedor principal de la casa"
            },
            diningArea: {
                title: "Área de Comedor",
                description: "Espacio de comedor adicional"
            },
            corridor: {
                title: "Corredor",
                description: "Pasillo principal"
            },
            livingArea: {
                title: "Sala de Estar",
                description: "Área de estar principal"
            },
            garage: {
                title: "Garaje",
                description: "Espacio para vehículos"
            },
            mainLiving: {
                title: "Sala Principal",
                description: "Sala de estar principal"
            },
            livingRoom: {
                title: "Sala de Estar",
                description: "Sala de estar adicional"
            },
            additionalLiving: {
                title: "Sala Adicional",
                description: "Espacio de estar extra"
            },
            masterBath: {
                title: "Baño Principal",
                description: "Baño de la suite principal"
            },
            exteriorView: {
                title: "Vista Exterior",
                description: "Vista exterior de la propiedad"
            },
            additionalView: {
                title: "Vista Adicional",
                description: "Vista adicional de la propiedad"
            },
            interiorView: {
                title: "Vista Interior",
                description: "Vista interior de la propiedad"
            },
            finalDetails: {
                title: "Detalles Finales",
                description: "Detalles finales de la propiedad"
            }
        }
    },
    carousel: {
        kitchen: {
            title: "Cocina",
            description: "Cocina moderna totalmente equipada"
        },
        // ... resto de las imágenes según ImageCarousel.tsx
        // líneas 44-94
    },
    video: {
        title: "Recorrido Virtual",
        subtitle: "Conoce cada espacio de esta propiedad",
        browserError: "Tu navegador no soporta el elemento de video."
    },
    nav: {
        home: "Inicio",
        gallery: "Galería",
        features: "Características",
        location: "Ubicación",
        video: "Videos",
        contact: "Contacto"
    },
    contact: {
        title: "Contacto",
        name: "Nombre",
        email: {
            title: "Correo Electrónico",
            value: "info@ejemplo.com"
        },
        phone: {
            title: "Teléfono",
            value: "+598 99 123 456"
        },
        direction: {
            title: "Dirección",
            value: "Barrio Residencial, Manantiales"
        },
        message: "Mensaje",
        send: "Enviar",
        info: "Complete el formulario y nos pondremos en contacto",
        status: {
            sending: "Enviando...",
            success: "Mensaje enviado con éxito",
            error: "Error al enviar el mensaje"
        },
        validation: {
            nameRequired: "El nombre es requerido",
            nameMinLength: "El nombre debe tener al menos 3 caracteres",
            namePattern: "El nombre solo puede contener letras",
            emailRequired: "El correo es requerido",
            emailInvalid: "Correo electrónico inválido",
            messageRequired: "El mensaje es requerido",
            messageMinLength: "El mensaje debe tener al menos 10 caracteres",
            messageMaxLength: "El mensaje no puede exceder los 500 caracteres"
        }
    }
};
