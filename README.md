# Bienstar Fitness — Sitio web

Rediseño del sitio de **Bienstar Fitness**, estudio de Pilates en San Martín (Bs. As.).
Sitio estático (HTML + CSS + JS), sin dependencias ni build.

## Qué incluye
- Indicador **“Abierto ahora / Cerrado”** y **próxima clase** en vivo (hora de Buenos Aires).
- **Horarios interactivos** por sala (Sala 1 Reformer & Funcional / Sala 2 Circuito) y por día, con la próxima clase marcada.
- **Test “¿Qué clase es para vos?”**: recomienda clase, sala y horarios, y abre WhatsApp con el mensaje listo.
- Clases, salas y Pase VIP, cómo funciona, opiniones reales de Google, Capacitaciones 2026, preguntas frecuentes y pautas.
- Botón flotante de WhatsApp, mapa, SEO local (schema.org) y diseño responsive.

## Editar contenido
Todo el contenido está en **`js/data.js`**: horarios, clases, foco del circuito, pautas, FAQ, capacitaciones, reseñas y contacto.

Pendiente de completar (marcado con `TODO`):
- `contacto.instagram` → link del Instagram del estudio.
- `contacto.appTurnos` → link de la agenda virtual.

## Ver localmente
```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Publicar
GitHub Pages: *Settings → Pages → Deploy from branch* y elegir la rama. También funciona arrastrando la carpeta a Netlify.
