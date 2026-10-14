/* =========================================================
   BIENSTAR FITNESS — Contenido editable del sitio
   ---------------------------------------------------------
   Todo el texto que cambia seguido vive acá: horarios,
   clases, pautas, preguntas frecuentes, etc.
   Lo marcado con "TODO" falta completar con el dato real.
   ========================================================= */

window.BIENSTAR = {
  contacto: {
    nombre: "Bienstar Fitness",
    telefono: "11 3522-5045",
    whatsapp: "5491135225045",
    direccion: "Bartolomé Mitre 3731 2B",
    localidad: "San Martín, Buenos Aires",
    instagram: "https://www.instagram.com/bienstarsanmartin/",
    appTurnos: "#", // TODO: link a la agenda virtual / app de turnos
    mapsQuery: "Bienstar fitness, Bartolomé Mitre 3731, San Martín, Buenos Aires",
  },

  // Horario de atención para el indicador "Abierto ahora" (0 = domingo ... 6 = sábado)
  horarioAtencion: { 0: null, 1: [8, 21], 2: [8, 21], 3: [8, 21], 4: [8, 21], 5: [8, 21], 6: null },

  rating: { valor: 4.9, cantidad: 150 },
  anios: 18,
  vipPrecio: "$7.000",

  clases: [
    {
      id: "reformer",
      sala: 1,
      nombre: "Pilates Reformer",
      resumen: "Clásico y contemporáneo",
      descripcion:
        "Clases basadas en los principios del método Pilates con un plus: formato tradicional o en circuito, pasando por Reformer, Chair, Corrector Espinal, Media Torre y Cadillac. No hay una clase igual a la otra.",
      tags: ["50 min", "Turno fijo", "Todos los niveles"],
    },
    {
      id: "circuito",
      sala: 2,
      nombre: "Pilates Circuito",
      resumen: "Estaciones con foco diario",
      descripcion:
        "Clases organizadas en estaciones, con un foco distinto cada día. Combinan fuerza y control de forma dinámica, respetando siempre los principios del método.",
      tags: ["50 min", "Turno libre", "Todos los niveles"],
    },
    {
      id: "funcional",
      sala: 1,
      nombre: "Entrenamiento Funcional",
      resumen: "Fuerza, potencia y resistencia",
      descripcion:
        "Trabajo sobre los patrones naturales de movimiento: locomoción, empujes, tracción y cambios del centro de gravedad. Propuestas dinámicas que se adaptan a tu ritmo.",
      tags: ["50 min", "Turno fijo", "Adaptable"],
    },
  ],

  // Foco de cada día en Sala 2 (Pilates Circuito)
  circuitoFoco: {
    1: "Power Start",
    2: "Sculpt & Tone",
    3: "Force & Acro",
    4: "Fusion Mix",
    5: "Flow & Stretch",
  },

  // Grilla semanal. dia: 1 = lunes ... 5 = viernes
  // tipo: "reformer" | "power" | "funcional" | "circuito"
  horarios: (function () {
    const g = [];
    const add = (sala, dias, hora, tipo) => dias.forEach((dia) => g.push({ sala, dia, hora, tipo }));

    // ---- SALA 1 · Pilates / Entrenamiento Funcional ----
    // Turno mañana
    add(1, [1, 3, 5], "08:00", "reformer");
    add(1, [2, 4], "08:30", "reformer");
    add(1, [1, 3, 5], "09:00", "reformer");
    add(1, [2, 4], "09:30", "reformer");
    add(1, [1, 3, 5], "10:00", "reformer");
    // Turno tarde
    add(1, [1, 2, 4], "14:00", "reformer");
    add(1, [1, 2, 4], "15:00", "reformer");
    add(1, [1, 2, 3, 4, 5], "16:00", "reformer");
    add(1, [1, 3, 5], "17:00", "reformer");
    add(1, [2, 4], "17:00", "power");
    add(1, [1, 3, 5], "18:00", "reformer");
    add(1, [2, 4], "18:00", "funcional");
    add(1, [1, 3, 5], "19:00", "reformer");
    add(1, [2, 4], "19:00", "power");
    add(1, [1, 3], "20:00", "reformer");
    add(1, [2, 4, 5], "20:00", "funcional");

    // ---- SALA 2 · Pilates Circuito ----
    add(2, [2, 4], "09:00", "circuito");
    add(2, [2, 4], "10:00", "circuito");
    add(2, [1, 2, 4, 5], "17:00", "circuito");
    add(2, [1, 2, 3, 4, 5], "18:00", "circuito");
    add(2, [1, 2, 3, 4, 5], "19:00", "circuito");
    add(2, [2, 3, 4], "20:00", "circuito");

    return g;
  })(),

  tipoLabel: {
    reformer: "Pilates",
    power: "Pilates Power",
    funcional: "Entrenamiento Funcional",
    circuito: "Pilates Circuito",
  },

  pautas: [
    {
      titulo: "Duración y vigencia",
      items: [
        "Las clases duran 50 minutos.",
        "Los packs tienen vigencia del día 1 al último día de cada mes, sin excepción.",
        "Con turno fijo, si no vas a continuar el mes siguiente, avisanos antes del día 1 para liberar el cupo.",
      ],
    },
    {
      titulo: "Modalidad de pago",
      items: [
        "El servicio se abona mediante packs mensuales de clases.",
        "En Sala 1 (turnos fijos) a veces se ofrecen clases extra sin costo, según disponibilidad.",
      ],
    },
    {
      titulo: "Salas y aranceles",
      items: [
        "Cada sala funciona como un espacio independiente, con el mismo valor de pack.",
        "Para combinar salas se abona el Pase VIP / Acceso Plus de $7.000 además del pack.",
        "No se pueden reprogramar clases de una sala a otra.",
      ],
    },
    {
      titulo: "Agenda virtual y reprogramaciones",
      items: [
        "Cancelá con un mínimo de 2 horas de anticipación desde la agenda virtual.",
        "Cada clase puede reprogramarse una sola vez, dentro del mes abonado.",
        "Las cancelaciones fuera de término se consideran clase tomada.",
      ],
    },
    {
      titulo: "Feriados",
      items: [
        "Los feriados no se dictan clases y no se recuperan.",
        "Las clases pendientes se pueden usar sólo si hay lugares disponibles en la grilla.",
      ],
    },
    {
      titulo: "Otras consideraciones",
      items: ["Las clases son personales e intransferibles."],
    },
  ],

  faq: [
    {
      q: "¿Cómo es el manejo de los turnos?",
      a: "La gestión de turnos se realiza a través de la app virtual: podés descargarla o entrar directo desde cualquier navegador. En nuestro Instagram hay un tutorial paso a paso para reservar, cancelar y ver tus clases.",
    },
    {
      q: "¿Cómo reservo mis turnos?",
      a: "Con tu pack activo: en Sala 1 los turnos son fijos y los carga la administración; en Sala 2 los turnos son libres y los elegís vos desde la app según disponibilidad. Te recomendamos reservar con anticipación.",
    },
    {
      q: "¿Las clases tienen turno fijo o son libres?",
      a: "Sala 1 (Pilates Reformer y Funcional): turnos fijos. Sala 2 (Pilates Circuito): turnos libres a reservar en la app.",
    },
    {
      q: "¿Cómo se combinan las clases entre salas?",
      a: "Todas las salas tienen el mismo valor por clase. Para entrenar en ambos espacios se abona un Acceso Plus adicional al pack contratado.",
    },
    {
      q: "¿Cuáles son los aranceles?",
      a: "Trabajamos con packs mensuales de clases. Los valores se actualizan periódicamente: consultanos por WhatsApp para conocer los aranceles vigentes.",
    },
    {
      q: "¿Cómo funcionan las cancelaciones?",
      a: "Desde la app, con un mínimo de 2 horas de anticipación y una sola vez por clase. Se reprograman dentro de la misma sala y del mes abonado, sujeto a disponibilidad. No se acumulan.",
    },
    {
      q: "¿Cuánto duran las clases?",
      a: "Todas las clases duran 50 minutos.",
    },
    {
      q: "¿Necesito experiencia previa?",
      a: "No. Nuestras clases están adaptadas a todos los niveles y las profesoras te guían para que entrenes de forma segura desde el primer día.",
    },
  ],

  capacitaciones: [
    "Reformer Nivel 1",
    "Reformer Nivel 2",
    "Chair",
    "Corrector Espinal",
    "Ladder Barrel",
    "Cadillac",
    "Pilates en circuito",
    "Planificación de clases",
    "Pilates Power",
    "Pilates Pro System",
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
