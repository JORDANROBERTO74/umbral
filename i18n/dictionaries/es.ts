import type { Dictionary } from "./en";

export const es: Dictionary = {
  meta: {
    title: "Umbral — Soporte con IA que responde antes de escalar",
    description:
      "Umbral es una mesa de soporte con IA para equipos pequeños: una bandeja, respuestas con fuente, traspasos limpios y un informe semanal.",
    ogAlt: "Umbral — mesa de soporte con IA",
  },
  common: {
    skip: "Saltar al contenido",
  },
  nav: {
    label: "Navegación principal",
    product: "Producto",
    how: "Cómo funciona",
    channels: "Canales",
    pricing: "Precios",
    faq: "Preguntas",
    notes: "Notas",
    login: "Entrar",
    cta: "Empezar gratis",
    language: "Idioma",
  },
  hero: {
    eyebrow: "Mesa de soporte con IA",
    title: {
      lead: "Responde a cada cliente",
      emphasis: "antes que la cola.",
    },
    subtitle:
      "Umbral lee tu centro de ayuda, redacta la respuesta con la fuente adjunta y solo llama a una persona cuando de verdad hace falta.",
    primary: "Probar gratis",
    secondary: "Ver cómo funciona",
    note: "14 días · sin tarjeta · cancela cuando quieras",
    proofLabel: "Equipos de soporte en",
    proof: ["Halden", "Mira Labs", "Tessil", "Argo Freight", "Lumen Health"],
    imageAlt:
      "Detalle abstracto de papel oscuro plegado con un borde cálido de luz cobriza",
    stats: [
      { value: "62%", label: "de los tickets se cierran sin persona" },
      { value: "18 s", label: "de primera respuesta mediana" },
      { value: "4,8/5", label: "de satisfacción tras el traspaso" },
    ],
  },
  features: {
    eyebrow: "Producto",
    title: {
      lead: "Una mesa que sigue trabajando",
      emphasis: "cuando cierras sesión.",
    },
    subtitle:
      "Cuatro piezas, una bandeja. Sin otra pestaña que vigilar y sin un segundo sitio donde buscar contexto.",
    items: [
      {
        title: "Una bandeja, todos los canales",
        body: "Correo, chat web y mensajes dentro de la app llegan a una sola línea de tiempo, agrupados por cliente y no por herramienta.",
        points: [
          "Hilos duplicados que se unen solos",
          "Notas y menciones por cliente",
          "Objetivos de respuesta según el plan",
        ],
      },
      {
        title: "Respuestas con recibo",
        body: "El asistente redacta con tus artículos y resoluciones anteriores, y enlaza la fuente debajo de cada afirmación.",
        points: [
          "Citas en línea al centro de ayuda",
          "Se detiene y pregunta si baja la confianza",
          "Borradores editables, nunca envíos silenciosos",
        ],
      },
      {
        title: "Traspasos con contexto",
        body: "Cuando entra una persona, hereda el resumen, el historial y el siguiente paso sugerido.",
        points: [
          "Tomar la conversación en un clic",
          "Resumen en el idioma del cliente",
          "Nadie vuelve a pedir el número de pedido",
        ],
      },
      {
        title: "Un informe semanal",
        body: "Las preguntas sin respuesta se convierten en borradores de artículo, así el mismo hueco no cuesta dos veces.",
        points: [
          "Informe de huecos cada lunes",
          "Preguntas agrupadas por tema",
          "Borradores listos para editar",
        ],
      },
    ],
    panel: {
      title: "Bandeja",
      meta: "5 abiertas · ordenadas por espera",
      rows: [
        {
          initials: "NR",
          name: "Nadia Ruiz",
          question: "¿Puedo pasar mi plan a facturación anual?",
          tag: "Redactado",
          tone: "draft",
        },
        {
          initials: "OP",
          name: "Owen Pike",
          question: "En la exportación faltan dos facturas.",
          tag: "Revisar",
          tone: "review",
        },
        {
          initials: "SM",
          name: "Sofía Marchetti",
          question: "¿Cómo añado un segundo espacio de trabajo?",
          tag: "Resuelto",
          tone: "resolved",
        },
        {
          initials: "TL",
          name: "Theo Lindqvist",
          question: "¿Hay límite de respuestas guardadas?",
          tag: "Resuelto",
          tone: "resolved",
        },
      ],
      footnote: "Cada borrador conserva el enlace a su fuente.",
    },
  },
  how: {
    eyebrow: "Cómo funciona",
    title: {
      lead: "Tres pasos,",
      emphasis: "una tarde.",
    },
    subtitle:
      "La mayoría de los equipos responde su primer ticket real el mismo día. Sin fin de semana de migración ni centro de ayuda nuevo.",
    steps: [
      {
        label: "01",
        title: "Conecta",
        body: "Apunta Umbral a tu centro de ayuda y a la bandeja que ya usas. Importa resoluciones antiguas para que empiece con contexto.",
      },
      {
        label: "02",
        title: "Enseña",
        body: "Revisa los primeros borradores y corrige lo que falla. Fija las respuestas que no quieres que reescriba: cada corrección es una regla.",
      },
      {
        label: "03",
        title: "Resuelve",
        body: "Umbral responde, cita y traspasa cuando duda. Tú ves subir la tasa de resolución desde el panel.",
      },
    ],
    note: "Compilación de demostración: las conexiones y métricas son ilustrativas.",
  },
  channels: {
    eyebrow: "Canales",
    title: {
      lead: "Se conecta a lo que",
      emphasis: "ya abriste esta mañana.",
    },
    subtitle:
      "El acceso de lectura y escritura se limita por conexión, y cada acción del asistente queda registrada.",
    groups: [
      {
        title: "Conversación",
        items: ["Bandeja de correo", "Chat web", "Mensajes en la app", "Transcripciones de llamada"],
      },
      {
        title: "Conocimiento",
        items: ["Centro de ayuda", "Documentos internos", "Respuestas guardadas", "Resoluciones pasadas"],
      },
      {
        title: "Operaciones",
        items: ["Registros del CRM", "Eventos de facturación", "Webhooks", "Cambios de estado"],
      },
      {
        title: "Informes",
        items: ["Resumen semanal", "Informe de desvío", "Exportación CSV", "API de solo lectura"],
      },
    ],
    note: "Conexiones ilustrativas. Esta demo se entrega sin backend.",
  },
  pricing: {
    eyebrow: "Precios",
    title: {
      lead: "Precio por persona,",
      emphasis: "no por milagro.",
    },
    subtitle:
      "Todos los planes incluyen el asistente, las citas y el informe semanal. La facturación anual ahorra dos meses.",
    period: "/mes por persona",
    badge: "El más elegido",
    custom: "A medida",
    plans: [
      {
        name: "Base",
        price: 39,
        blurb: "Para una fundadora que responde sola.",
        features: [
          "Una bandeja, tres canales",
          "500 resoluciones de IA al mes",
          "Citas y borradores editables",
          "Soporte por correo",
        ],
        cta: "Empezar gratis",
        featured: false,
      },
      {
        name: "Equipo",
        price: 99,
        blurb: "Para un equipo de soporte de dos a diez.",
        features: [
          "Canales ilimitados",
          "5.000 resoluciones de IA al mes",
          "Resúmenes de traspaso",
          "Informe de huecos y borradores",
          "Soporte prioritario",
        ],
        cta: "Empezar gratis",
        featured: true,
      },
      {
        name: "Escala",
        price: null,
        blurb: "Para equipos regulados y rutas propias.",
        features: [
          "SSO y registro de auditoría",
          "Reglas de enrutado propias",
          "Incorporación dedicada",
          "Opciones de residencia de datos",
        ],
        cta: "Hablar con el equipo",
        featured: false,
      },
    ],
    footnote:
      "Precios en dólares estadounidenses. Esto es una demo: el pago no está implementado y no se cobra ninguna tarjeta.",
  },
  faq: {
    eyebrow: "Preguntas",
    title: {
      lead: "Lo que preguntan",
      emphasis: "antes de empezar.",
    },
    subtitle: "Respuestas directas, incluido lo que esta demo no hace.",
    items: [
      {
        q: "¿Hay prueba gratuita?",
        a: "Sí. Todos los planes empiezan con 14 días del asistente completo. Esta demo no pide tarjeta ni crea cuentas.",
      },
      {
        q: "¿Cuánto tarda la configuración?",
        a: "Una tarde para un solo centro de ayuda. Importar resoluciones antiguas tarda más solo si la documentación está dispersa.",
      },
      {
        q: "¿Sustituye a mi mesa de soporte?",
        a: "No. Umbral se sienta al lado de la bandeja que ya usas y se queda con la primera respuesta. Una persona cierra los casos difíciles.",
      },
      {
        q: "¿Qué pasa cuando duda?",
        a: "Deja de redactar, escribe un resumen corto para el siguiente compañero y marca la conversación para revisión.",
      },
      {
        q: "¿Puedo ver de dónde sale una respuesta?",
        a: "Cada borrador conserva el artículo o la resolución de la que salió, con un enlace que el cliente puede abrir.",
      },
      {
        q: "¿Qué idiomas admite?",
        a: "La interfaz está en inglés y español. El asistente responde en el idioma en el que escribe el cliente.",
      },
      {
        q: "¿Mis datos se usan para entrenar?",
        a: "En esta compilación no. No hay backend, ni conexión a bandejas, ni llamada a un modelo: la página es una demo de front-end.",
      },
      {
        q: "¿Puedo cancelar cuando quiera?",
        a: "Sí, desde facturación. Aquí no se cobra nada porque el pago no está implementado.",
      },
    ],
    more: {
      title: "¿Sigues con la duda?",
      body: "Envía la pregunta y contestamos con una respuesta real, no con una plantilla.",
      cta: "hola@umbral.example",
    },
  },
  resources: {
    eyebrow: "Notas",
    title: {
      lead: "Notas desde",
      emphasis: "la mesa.",
    },
    subtitle: "Lecturas cortas sobre desvío, traspasos y respuestas que se creen.",
    items: [
      {
        tag: "Operaciones",
        title: "Los tres tickets que conviene desviar primero",
        excerpt:
          "No toda conversación debe automatizarse. Un filtro simple para decidir dónde se gana su sitio el asistente.",
        readTime: "6 min de lectura",
        date: "oct 2026",
      },
      {
        tag: "Redacción",
        title: "Respuestas con recibo: la cita como señal de confianza",
        excerpt:
          "Por qué poner la fuente debajo de una respuesta de IA cambia cómo se lee el mensaje entero.",
        readTime: "5 min de lectura",
        date: "sep 2026",
      },
      {
        tag: "Métricas",
        title: "El desvío no es el único número que importa",
        excerpt:
          "Tres contadores que se leen junto a la tasa de resolución, y el que anticipa la baja.",
        readTime: "7 min de lectura",
        date: "sep 2026",
      },
    ],
  },
  cta: {
    title: {
      lead: "Dale a tu cola",
      emphasis: "un lunes tranquilo.",
    },
    body: "Empieza con la prueba gratuita y conserva la bandeja que ya tienes. Nada que migrar, nada que reaprender.",
    primary: "Probar gratis",
    note: "Compilación de demostración: no se crea ninguna cuenta.",
  },
  footer: {
    blurb:
      "Umbral es una mesa de soporte con IA ficticia, construida como demo bilingüe de front-end con Next.js y Tailwind CSS.",
    navTitle: "Secciones",
    contactTitle: "Contacto",
    contact: "hola@umbral.example",
    legal: "Producto ficticio. Sin bandejas, cobros ni datos reales de clientes.",
  },
  notFound: {
    title: "Esta página salió de la cola.",
    body: "El enlace está roto o la página se movió. El resto de la mesa sigue abierta.",
    back: "Volver al inicio",
  },
};
