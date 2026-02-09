import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { HOME } from "@consts";

type Context = {
  site: string
}

export async function GET(context: Context) {
  const bits = (await getCollection("bits"))
    .filter(post => !post.data.draft);

  const atoms = (await getCollection("atoms"))
    .filter(post => !post.data.draft);

  const mind = (await getCollection("mind"))
    .filter(post => !post.data.draft);

  const items = [...bits, ...atoms, ...mind]
    .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());

  return rss({
    title: HOME.TITLE,
    description: HOME.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/${item.collection.split('/')[0]}/${item.slug}/`, // Handle localized slugs if needed, usually collection is just 'bits'
    })),
  });
}
