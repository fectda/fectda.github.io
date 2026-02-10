/**
 * Reusable getStaticPaths for simple [lang] pages.
 * Returns paths for all supported languages.
 */
export function getLangStaticPaths() {
    return [
        { params: { lang: "es" } },
        { params: { lang: "en" } },
    ];
}
