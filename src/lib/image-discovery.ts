import fs from "node:fs";
import path from "node:path";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"]);

/**
 * Discovers images for a content entry by scanning the public directory.
 * 
 * Convention: images for a content entry live in `public/{collection}/{slug}/`
 * where `slug` is the markdown filename without extension (language-agnostic).
 * 
 * Example: `src/content/atoms/es/sierra-circular.md` → `public/atoms/sierra-circular/`
 * 
 * @param collection - The collection name ("atoms" or "bits")
 * @param contentId  - The content entry id (e.g. "es/sierra-circular.md")
 * @returns Array of public paths like ["/atoms/sierra-circular/IMG_001.jpg"]
 */
export function getImagesForContent(collection: string, contentId: string): string[] {
    // Extract the filename without extension from the content id
    // contentId is like "es/sierra-circular.md" → we want "sierra-circular"
    const basename = path.basename(contentId, path.extname(contentId));

    const dirPath = path.join(process.cwd(), "public", collection, basename);

    if (!fs.existsSync(dirPath) || !fs.statSync(dirPath).isDirectory()) {
        return [];
    }

    return fs
        .readdirSync(dirPath)
        .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
        .sort()
        .map((file) => `/${collection}/${basename}/${file}`);
}
