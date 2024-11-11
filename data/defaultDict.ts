import { DictionaryStructure } from '@/types/dictionary';

export const defaultDict: DictionaryStructure = {
    hero: {
        title: "Casa de Campo en Pago de la Paja",
        subtitle: "Una propiedad única en un entorno natural privilegiado"
    },
    nav: {
        home: "Inicio",
        gallery: "Galería",
        features: "Características",
        location: "Ubicación",
        video: "Video",
        contact: "Contacto"
    },
    features: {
        title: "Características Principales",
        bedrooms: {
            title: "2 Dormitorios en Suite",
            description: "Amplias habitaciones con vista al jardín",
            value: "2"
        },
        bathrooms: {
            title: "3 Baños",
            description: "Baños completos con acabados de lujo",
            value: "3"
        },
        garage: {
            title: "Garaje - Galpón",
            description: "Con espacio adicional de almacenamiento",
            value: "Sí"
        },
        area: {
            title: "400 m²",
            description: "Terreno amplio con jardín",
            value: "400"
        }
    },
    carousel: {
        kitchen: {
            title: "Cocina Moderna",
            description: "Espaciosa y completamente equipada"
        },
        livingRoom: {
            title: "Sala de estar",
            description: "Amplia y luminosa"
        },
        exterior: {
            title: "Vista Exterior",
            description: "Diseño moderno y elegante"
        },
        bedroom: {
            title: "Dormitorio Principal",
            description: "Espacioso y confortable"
        },
        closet: {
            title: "Vestidor",
            description: "Amplio espacio de almacenamiento"
        },
        pool: {
            title: "Piscina",
            description: "Perfecta para relajarse"
        },
        hall: {
            title: "Hall",
            description: "Recibidor elegante"
        },
        gallery: {
            title: "Galería",
            description: "Espacio versátil"
        },
        bathroom: {
            title: "Baño Principal",
            description: "Moderno y funcional"
        },
        diningRoom: {
            title: "Comedor",
            description: "Perfecto para reuniones familiares"
        }
    },
    gallery: {
        title: "Galería",
        subtitle: "Explora nuestra propiedad",
        images: {
            mainView: {
                src: "/images/casa-landing.jpeg",
                alt: "Vista principal",
                title: "Vista Principal",
                description: "Vista frontal de la propiedad"
            },
            pondView: {
                src: "/images/casa2.jpeg",
                alt: "Vista del estanque",
                title: "Vista del Estanque",
                description: "Vista hacia el estanque"
            },
            sideView: {
                src: "/images/casacostado.jpeg",
                alt: "Vista lateral",
                title: "Vista Lateral",
                description: "Vista lateral de la propiedad"
            },
            frontView: {
                src: "/images/frente-casa.jpeg",
                alt: "Vista frontal",
                title: "Vista Frontal",
                description: "Vista frontal detallada"
            },
            lateralView: {
                src: "/images/costado-casa.jpeg",
                alt: "Vista lateral",
                title: "Vista Lateral",
                description: "Otra vista lateral"
            },
            poolArea: {
                src: "/images/piscina-casa.jpeg",
                alt: "Área de piscina",
                title: "Área de Piscina",
                description: "Zona de piscina"
            },
            kitchen: {
                src: "/images/cocina.jpeg",
                alt: "Cocina",
                title: "Cocina",
                description: "Cocina principal"
            },
            kitchenDetail: {
                src: "/images/cocina1.jpeg",
                alt: "Detalle cocina",
                title: "Detalle de Cocina",
                description: "Detalles de la cocina"
            },
            kitchenView: {
                src: "/images/cocina2.jpeg",
                alt: "Vista cocina",
                title: "Vista de Cocina",
                description: "Vista completa de la cocina"
            },
            fullKitchen: {
                src: "/images/cocina3.jpeg",
                alt: "Cocina completa",
                title: "Cocina Completa",
                description: "Vista completa de la cocina"
            },
            kitchenDining: {
                src: "/images/cocina5.jpeg",
                alt: "Comedor de cocina",
                title: "Comedor de Cocina",
                description: "Área de comedor en la cocina"
            },
            mainDining: {
                src: "/images/comedor.jpeg",
                alt: "Comedor principal",
                title: "Comedor Principal",
                description: "Comedor principal"
            },
            diningArea: {
                src: "/images/comedor2.jpg",
                alt: "Área de comedor",
                title: "Área de Comedor",
                description: "Zona de comedor"
            },
            corridor: {
                src: "/images/corredor.jpeg",
                alt: "Corredor",
                title: "Corredor",
                description: "Pasillo principal"
            },
            livingArea: {
                src: "/images/estar.jpeg",
                alt: "Área de estar",
                title: "Área de Estar",
                description: "Sala de estar"
            },
            garage: {
                src: "/images/garage.jpeg",
                alt: "Garaje",
                title: "Garaje",
                description: "Área de garaje"
            },
            mainLiving: {
                src: "/images/sala.jpeg",
                alt: "Sala principal",
                title: "Sala Principal",
                description: "Sala principal"
            },
            livingRoom: {
                src: "/images/sala1.jpeg",
                alt: "Sala de estar",
                title: "Sala de Estar",
                description: "Sala de estar adicional"
            },
            additionalLiving: {
                src: "/images/sala2.jpeg",
                alt: "Sala adicional",
                title: "Sala Adicional",
                description: "Sala adicional"
            },
            masterBath: {
                src: "/images/baño_suite.jpg",
                alt: "Baño principal",
                title: "Baño Principal",
                description: "Baño de la suite principal"
            },
            exteriorView: {
                src: "/images/vista-casa-exterior.jpeg",
                alt: "Vista exterior",
                title: "Vista Exterior",
                description: "Vista exterior de la casa"
            },
            additionalView: {
                src: "/images/ima5.png",
                alt: "Vista adicional",
                title: "Vista Adicional",
                description: "Vista adicional de la propiedad"
            },
            interiorView: {
                src: "/images/ima9.jpeg",
                alt: "Vista interior",
                title: "Vista Interior",
                description: "Vista interior de la casa"
            },
            finalDetails: {
                src: "/images/ima10.jpg",
                alt: "Detalles finales",
                title: "Detalles Finales",
                description: "Detalles finales de la propiedad"
            }
        }
    },
    details: {
        title: "Detalles de la Propiedad",
        items: {
            neighborhood: {
                title: "Barrio",
                value: "Quinta de Medina"
            },
            view: {
                title: "Vista",
                value: "Al campo"
            },
            orientation: {
                title: "Orientación",
                value: "Norte"
            },
            waterLevel: {
                title: "Nivel sobre el mar",
                value: "14 metros sobre el nivel del mar"
            },
            terrainSurface: {
                title: "Superficie del terreno",
                value: "5 hectáreas"
            },
            builtSurface: {
                title: "Superficie edificada",
                value: "700 m² aprox."
            },
            bedrooms: {
                title: "Dormitorios",
                value: "2"
            },
            bathrooms: {
                title: "Baños",
                value: "3"
            },
            serviceBedroom: {
                title: "Dormitorio de servicio",
                value: "1"
            },
            kitchen: {
                title: "Cocina",
                value: "Amplia y bien equipada"
            },
            living: {
                title: "Living",
                value: "Sí"
            },
            diningRoom: {
                title: "Comedor",
                value: "Sí"
            },
            warehouse: {
                title: "Galpón",
                value: "Sí"
            },
            pool: {
                title: "Piscina",
                value: "Sí"
            }
        }
    },
    contact: {
        title: "Contáctanos",
        name: "Nombre",
        email: {
            title: "Email",
            value: "arturo.nieto@gmail.com"
        },
        phone: {
            title: "Teléfono",
            value: "+595 991 475 069"
        },
        direction: {
            title: "Dirección",
            value: "Pago de la Paja, Maldonado"
        },
        message: "Mensaje",
        send: "Enviar",
        info: "Información de contacto",
        status: {
            sending: "Enviando...",
            success: "¡Mensaje enviado!",
            error: "Error al enviar"
        },
        validation: {
            nameRequired: "El nombre es requerido",
            nameMinLength: "El nombre debe tener al menos 2 caracteres",
            namePattern: "El nombre solo puede contener letras",
            emailRequired: "El correo electrónico es requerido",
            emailInvalid: "Por favor, introduce un correo electrónico válido",
            messageRequired: "El mensaje es requerido",
            messageMinLength: "El mensaje debe tener al menos 10 caracteres",
            messageMaxLength: "El mensaje no puede exceder los 500 caracteres"
        }
    },
    video: {
        title: "Video Tour",
        subtitle: "Recorrido virtual de la propiedad",
        browserError: "Tu navegador no soporta el elemento de video."
    },
    location: {
        title: "Ubicación",
        subtitle: "Ubicación privilegiada en Pago de la Paja",
        pointsOfInterest: "Puntos de Interés",
        direction: {
            title: "Dirección",
            value: "Pago de la Paja, Maldonado, Uruguay"
        },
        access: {
            title: "Acceso",
            value: "Fácil acceso por ruta principal"
        },
        transport: {
            title: "Transporte",
            value: "Transporte público disponible"
        },
        services: {
            title: "Servicios",
            value: "Todos los servicios básicos"
        },
        distances: {
            title: "Distancias",
            items: {
                laBarraManantiales: {
                    name: "La Barra - Manantiales",
                    time: "10 min"
                },
                joseIgnacio: {
                    name: "José Ignacio",
                    time: "20 min"
                },
                puntaDelEste: {
                    name: "Punta del Este",
                    time: "30 min"
                },
                sanCarlos: {
                    name: "San Carlos",
                    time: "5 min"
                }
            }
        },
        coordinates: {
            lat: -34.798603974645275,
            lng: -54.886729731300775
        }
    },
    description: {
        title: "Descripción de la Propiedad",
        mainText: "Casa de Campo ideal para vivir todo el año en Pago de la Paja, Maldonado - Uruguay",
        location: "Ubicada en el encantador y pintoresco camino Pago de la Paja, entre la Ruta 104 y el Camino Eguzquiza, esta propiedad ofrece un acceso inmejorable a los destinos más atractivos de la región: a solo 10 minutos de La Barra y Manantiales, 20 minutos de José Ignacio, 30 minutos de Punta del Este, y a tan solo 5 minutos de San Carlos.",
        details: "La residencia principal de 400 m² se caracteriza por su excelente construcción y diseño pensado para el confort y la funcionalidad. Cuenta con dos amplias master suites con vestidor, una gran cocina equipada, espacioso living, comedor, toilette y dependencia de servicio. El área social se complementa con un parrillero, lavadero y una piscina, ofreciendo espacios ideales para disfrutar del entorno natural. Además, incluye un galpón/garaje de gran tamaño con capacidad para autos, herramientas y almacenamiento adicional, totalizando aproximadamente 700 m² construidos. En sus 5 hectáreas de terreno, esta chacra dispone de un hermoso tajamar, un camino de acceso arbolado y una gran variedad de frutales, creando un ambiente acogedor y en total armonía con la naturaleza. Esta propiedad es perfecta para quienes buscan la serenidad del campo sin renunciar a la proximidad de los principales puntos turísticos de Maldonado."
    }
};
