function normalizeBase(value) {
    let base = value || "/";
  
    if (!base.startsWith("/")) {
      base = `/${base}`;
    }
  
    if (!base.endsWith("/")) {
      base = `${base}/`;
    }
  
    return base;
  }
  
  const SITE_BASE = normalizeBase(process.env.SITE_BASE || "/");
  
  function withBase(path = "") {
    return `${SITE_BASE}${path.replace(/^\/+/, "")}`;
  }
  
  export const decks = [
    {
      name: "openclass-gestionseguridad",
      entry: "slides.md",
      out: "dist",
      base: SITE_BASE,
      exportable: true,
    },
    {
      name: "gestionseguridad_semana1",
      entry: "gestionseguridad_semana1.md",
      out: "dist/semanas/gestionseguridad_semana1",
      base: withBase("semanas/gestionseguridad_semana1/"),
      exportable: true,
    },
    {
      name: "gestionseguridad_semana2",
      entry: "gestionseguridad_semana2.md",
      out: "dist/semanas/gestionseguridad_semana2",
      base: withBase("semanas/gestionseguridad_semana2/"),
      exportable: true,
    },
    {
      name: "gestionseguridad_semana3",
      entry: "gestionseguridad_semana3.md",
      out: "dist/semanas/gestionseguridad_semana3",
      base: withBase("semanas/gestionseguridad_semana3/"),
      exportable: true,
    },
    // Activa cada semana aquí cuando el contenido esté listo.
  ];