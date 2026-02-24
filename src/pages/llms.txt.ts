import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { HOME, BITS, ATOMS, MIND } from "@consts";

export const GET: APIRoute = async (context) => {
    const site = context.site?.href.replace(/\/$/, "") ?? "";

    const bits = (await getCollection("bits"))
        .filter(post => !post.data.draft)
        .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());

    const atoms = (await getCollection("atoms"))
        .filter(post => !post.data.draft)
        .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());

    const mind = (await getCollection("mind"))
        .filter(post => !post.data.draft)
        .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());

    let content = `# ${HOME.TITLE}\n\n`;
    content += `> ${HOME.DESCRIPTION}\n\n`;

    content += `## Sections\n\n`;
    content += `- [Bits](${site}/es/bits): ${BITS.DESCRIPTION}\n`;
    content += `- [Atoms](${site}/es/atoms): ${ATOMS.DESCRIPTION}\n`;
    content += `- [Mind](${site}/es/mind): ${MIND.DESCRIPTION}\n\n`;

    content += `## ${BITS.TITLE}\n\n`;
    bits.forEach(post => {
        const slug = post.slug.split('/');
        const lang = slug[0];
        const realSlug = slug.slice(1).join('/');
        content += `- [${post.data.title}](${site}/${lang}/bits/${realSlug}): ${post.data.description}\n`;
    });
    content += `\n`;

    content += `## ${ATOMS.TITLE}\n\n`;
    atoms.forEach(post => {
        const slug = post.slug.split('/');
        const lang = slug[0];
        const realSlug = slug.slice(1).join('/');
        content += `- [${post.data.title}](${site}/${lang}/atoms/${realSlug}): ${post.data.description}\n`;
    });
    content += `\n`;

    content += `## ${MIND.TITLE}\n\n`;
    mind.forEach(post => {
        const slug = post.slug.split('/');
        const lang = slug[0];
        const realSlug = slug.slice(1).join('/');
        content += `- [${post.data.title}](${site}/${lang}/mind/${realSlug}): ${post.data.description}\n`;
    });

    return new Response(content, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
    });
};
