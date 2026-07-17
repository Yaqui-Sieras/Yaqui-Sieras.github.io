import { useEffect } from "react";

interface UseExternalCssProps {
  onlineUrl: string;
  localUrl: string;
}

export function useExternalCss({ onlineUrl, localUrl }: UseExternalCssProps) {
  useEffect(() => {
    // 1. Creamos el link para el CSS en línea
    const linkOnline = document.createElement("link");
    linkOnline.rel = "stylesheet";
    linkOnline.href = onlineUrl;

    // 2. Si falla, inyectamos el de respaldo local
    linkOnline.onerror = () => {
      console.warn(`Error al cargar: ${onlineUrl}. Usando respaldo local.`);

      const linkLocal = document.createElement("link");
      linkLocal.rel = "stylesheet";
      linkLocal.href = localUrl;
      linkLocal.id = "css-fallback-local";

      document.head.appendChild(linkLocal);
    };

    document.head.appendChild(linkOnline);

    // 3. Limpieza automática cuando el componente se desmonte
    return () => {
      if (document.head.contains(linkOnline)) {
        document.head.removeChild(linkOnline);
      }
      const fallbackLink = document.getElementById("css-fallback-local");
      if (fallbackLink && document.head.contains(fallbackLink)) {
        document.head.removeChild(fallbackLink);
      }
    };
  }, [onlineUrl, localUrl]);
}
