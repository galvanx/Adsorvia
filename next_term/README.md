# NexTherm – Thermal Recovery (prototipo)

Prototipo web para el caso **Arca Continental**: eficiencia energética y recuperación térmica para generación de frío sostenible. Incluye una landing con resumen del caso y propuesta, y dos dashboards (técnico y ejecutivo) con datos de ejemplo.

## Contenido

- **Landing** (`/`): introducción, objetivos, justificación Bonos Verdes, cifras clave y enlaces a los dashboards.
- **Dashboard técnico** (`/dashboard-tecnico`): KPIs, energía recuperada vs diseño, balance energético, circuito hidráulico, producción frío vs demanda, alarmas y degradación del COP.
- **Dashboard ejecutivo** (`/dashboard-ejecutivo`): impacto energético y económico, intensidad energética, reducción CO₂, programa 12 plantas y cumplimiento Bono Verde.

Los datos mostrados son **inventados pero realistas** según el proyecto (prototipo sin backend).

## Desarrollo local

```bash
cd next_term
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). En desarrollo no se usa `basePath`, por lo que la ruta base es `/`.

## Build estático (para GitHub Pages)

```bash
cd next_term
npm install
npm run build
```

La salida está en la carpeta **`out/`**. El build usa `basePath: '/Adsorvia'` en producción; al desplegar en GitHub Pages, el contenido de `out/` debe quedar dentro de una carpeta **Adsorvia** en la raíz del artifact (el workflow lo hace automáticamente).

## Publicar en GitHub Pages

### Opción 1: GitHub Actions (recomendado)

1. En el repositorio, ve a **Settings → Pages**.
2. En **Source** elige **GitHub Actions**.
3. El workflow en `.github/workflows/deploy-pages.yml` (en la raíz del repo) hace build de `next_term` y publica la carpeta `next_term/out` en la rama `gh-pages`. Tras cada push en `main`, se despliega automáticamente.
4. La URL del sitio será: `https://<usuario>.github.io/Adsorvia/`.

### Opción 2: Publicación manual

1. Ejecuta en tu máquina:
   ```bash
   cd next_term
   npm ci
   npm run build
   ```
2. En **Settings → Pages** del repo, elige la rama **gh-pages** y la carpeta **/ (root)**.
3. Copia el contenido de `next_term/out` a la rama `gh-pages` (por ejemplo con un script que haga push de `out` a `gh-pages`).

Si usas la raíz del repo para Pages en lugar de `gh-pages`, tendrías que servir el contenido de `next_term/out` desde la raíz; en ese caso la estructura de `out` (con subcarpeta `Adsorvia`) debe quedar en la raíz de la rama que sirve Pages.

## Tecnologías

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4
- Recharts (gráficos)
- Export estático (`output: 'export'`) para hospedaje estático

## Paleta de colores (del documento)

- Naranja: `#FF5B04`
- Gris claro: `#ebebeb`
- Teal: `#075056`
- Oscuro: `#16232A`
