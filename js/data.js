/* =========================================================
   BIENSTAR FITNESS — Contenido editable del sitio
   ---------------------------------------------------------
   Todo el texto que cambia seguido vive acá.
   Lo marcado con "TODO" son datos de ejemplo: reemplazalos
   con la información real del estudio.
   ========================================================= */

window.BIENSTAR = {
  contacto: {
    nombre: "Bienstar Fitness",
    telefono: "011 3522-5045",
    whatsapp: "5491135225045",
    direccion: "Bartolomé Mitre 3731 2B",
    localidad: "San Martín, Provincia de Buenos Aires",
    cp: "B1650",
    instagram: "https://instagram.com/", // TODO: reemplazar con el Instagram real
    appTurnos: "#", // TODO: link a la app de turnos (App Store / Google Play / web)
    mapsQuery: "Bienstar fitness, Bartolomé Mitre 3731, San Martín, Buenos Aires",
  },

  // Horario de atención (0 = domingo ... 6 = sábado). null = cerrado.
  // TODO: confirmar horarios de sábado y domingo
  horarioAtencion: {
    0: null,
    1: [8, 21],
    2: [8, 21],
    3: [8, 21],
    4: [8, 21],
    5: [8, 21],
    6: [9, 13],
  },

  rating: { valor: 4.9, cantidad: 150 },

  // TODO: ajustar las clases que realmente ofrece el estudio
  clases: [
    {
      id: "reformer",
      nombre: "Pilates Reformer",
      descripcion:
        "Trabajo en máquina con resortes que acompañan y desafían cada movimiento. Fuerza, control y postura en grupos reducidos.",
      nivel: "Todos los niveles",
      duracion: "50 min",
      intensidad: 3,
      icono: "reformer",
    },
    {
      id: "mat",
      nombre: "Pilates Mat",
      descripcion:
        "Pilates en colchoneta con elementos: aros, pelotas y bandas. Ideal para conectar respiración, centro y movimiento.",
      nivel: "Principiante · Intermedio",
      duracion: "50 min",
      intensidad: 2,
      icono: "mat",
    },
    {
      id: "postural",
      nombre: "Pilates Postural",
      descripcion:
        "Clase suave y terapéutica, pensada para cuidar la espalda, mejorar la movilidad y aliviar tensiones del día a día.",
      nivel: "Suave · Rehabilitación",
      duracion: "50 min",
      intensidad: 1,
      icono: "postural",
    },
    {
      id: "funcional",
      nombre: "Funcional",
      descripcion:
        "Entrenamiento dinámico de fuerza y resistencia con tu propio peso y elementos. Energía, sudor y buena onda.",
      nivel: "Intermedio · Avanzado",
      duracion: "50 min",
      intensidad: 4,
      icono: "funcional",
    },
  ],

  // TODO: reemplazar con la grilla real. clase = id de la lista de arriba
  horarios: [
    { dia: 1, hora: "08:00", clase: "reformer", profe: "Vale" },
    { dia: 1, hora: "09:00", clase: "mat", profe: "Sandy" },
    { dia: 1, hora: "11:00", clase: "postural", profe: "Vale" },
    { dia: 1, hora: "17:00", clase: "reformer", profe: "Sandy" },
    { dia: 1, hora: "18:00", clase: "funcional", profe: "Caro" },
    { dia: 1, hora: "19:00", clase: "reformer", profe: "Vale" },
    { dia: 1, hora: "20:00", clase: "mat", profe: "Caro" },

    { dia: 2, hora: "08:00", clase: "mat", profe: "Sandy" },
    { dia: 2, hora: "09:00", clase: "reformer", profe: "Vale" },
    { dia: 2, hora: "10:00", clase: "postural", profe: "Sandy" },
    { dia: 2, hora: "18:00", clase: "reformer", profe: "Caro" },
    { dia: 2, hora: "19:00", clase: "funcional", profe: "Caro" },
    { dia: 2, hora: "20:00", clase: "reformer", profe: "Vale" },

    { dia: 3, hora: "08:00", clase: "reformer", profe: "Vale" },
    { dia: 3, hora: "09:00", clase: "mat", profe: "Sandy" },
    { dia: 3, hora: "11:00", clase: "postural", profe: "Vale" },
    { dia: 3, hora: "17:00", clase: "reformer", profe: "Sandy" },
    { dia: 3, hora: "18:00", clase: "funcional", profe: "Caro" },
    { dia: 3, hora: "19:00", clase: "reformer", profe: "Vale" },
    { dia: 3, hora: "20:00", clase: "mat", profe: "Caro" },

    { dia: 4, hora: "08:00", clase: "mat", profe: "Sandy" },
    { dia: 4, hora: "09:00", clase: "reformer", profe: "Vale" },
    { dia: 4, hora: "10:00", clase: "postural", profe: "Sandy" },
    { dia: 4, hora: "18:00", clase: "reformer", profe: "Caro" },
    { dia: 4, hora: "19:00", clase: "funcional", profe: "Caro" },
    { dia: 4, hora: "20:00", clase: "reformer", profe: "Vale" },

    { dia: 5, hora: "08:00", clase: "reformer", profe: "Vale" },
    { dia: 5, hora: "09:00", clase: "postural", profe: "Sandy" },
    { dia: 5, hora: "17:00", clase: "mat", profe: "Sandy" },
    { dia: 5, hora: "18:00", clase: "reformer", profe: "Caro" },
    { dia: 5, hora: "19:00", clase: "funcional", profe: "Caro" },

    { dia: 6, hora: "09:00", clase: "reformer", profe: "Vale" },
    { dia: 6, hora: "10:00", clase: "mat", profe: "Sandy" },
    { dia: 6, hora: "11:00", clase: "postural", profe: "Vale" },
  ],

  // TODO: reemplazar con precios reales
  planes: [
    {
      nombre: "Clase de prueba",
      precio: "Gratis",
      periodo: "tu primera vez",
      items: ["Conocé el estudio", "Evaluación postural inicial", "Sin compromiso"],
      destacado: false,
      cta: "Reservar prueba",
    },
    {
      nombre: "2 veces por semana",
      precio: "$ 38.000",
      periodo: "por mes",
      items: ["8 clases mensuales", "Reprogramación flexible", "Reservas desde la app"],
      destacado: true,
      cta: "Quiero este plan",
    },
    {
      nombre: "3 veces por semana",
      precio: "$ 48.000",
      periodo: "por mes",
      items: ["12 clases mensuales", "Reprogramación flexible", "Seguimiento personalizado"],
      destacado: false,
      cta: "Quiero este plan",
    },
  ],

  // TODO: completar con el equipo real (nombres, formación)
  equipo: [
    {
      nombre: "Vale",
      rol: "Profesora de Pilates",
      bio: "Corazón del estudio. Formada en Pilates Reformer y Mat, con capacitación constante en Pilates terapéutico.",
    },
    {
      nombre: "Sandy",
      rol: "Profesora de Pilates",
      bio: "Especialista en Mat y Postural. Clases claras, atentas y adaptadas a cada cuerpo.",
    },
    {
      nombre: "Caro",
      rol: "Profesora de Funcional",
      bio: "Energía pura. Entrenamiento funcional y Reformer para quienes buscan un desafío extra.",
    },
  ],

  // Reseñas reales de Google Maps
  opiniones: [
    {
      autor: "Mariana Andrea Krezic",
      texto:
        "Un lugar muy humano, con excelentes profesoras que se capacitan constantemente y que realmente se preocupan por sus alumnas en todo sentido. No sólo podés entrenar sino que aprendés cada día a conocerte un poquito más.",
      respuesta:
        "¡Qué emoción leer un mensaje tan lindo! 💛 Para nosotras es muy importante que el estudio sea mucho más que un lugar para entrenar.",
    },
    {
      autor: "Yasmin Moreno",
      texto:
        "Hermoso centro de Pilates. ❤️ Horarios accesibles, excelente limpieza y algo que para mí hizo la diferencia: la flexibilidad para reprogramar las clases.",
      respuesta:
        "¡Qué lindas palabras! 💛 Entendemos que cada persona tiene una rutina diferente y queremos acompañarte.",
    },
    {
      autor: "Karina de Alzaga",
      texto:
        "Desde que tuve que mudarme por motivos laborales, nunca pude encontrar un lugar como éste, con la calidez de sus profesoras y de todo el grupo humano. Para Vale cualquier comentario va a ser poco. No existe un lugar mejor para hacer pilates.",
      respuesta: "Gracias Kariii 💛",
    },
    {
      autor: "Alumna de Bienstar",
      texto: "Excelente trato, profesionalismo y puntualidad de los profes en cada clase.",
    },
    {
      autor: "Alumna de Bienstar",
      texto: "Tiene una app practiquísima para gestionar los turnos.",
    },
  ],
};
