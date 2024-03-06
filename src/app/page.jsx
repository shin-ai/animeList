import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime","limit=8")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime","entry")
  recommendedAnime = {data: recommendedAnime.slice(0, 4)}

  return (
    <>
      <section>
        {/* anime terpopuler */}
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        {/* anime rekomendasi */}
        <Header title="Rekomendasi" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
