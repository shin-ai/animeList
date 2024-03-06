import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
    const { keyword } = params
    const descodeKeyword = decodeURI(keyword)

    const searchAnime =  await getAnimeResponse("anime",`q=${descodeKeyword}`)

    return (
        <>
            <Header title={`Pencarian Untuk ${descodeKeyword}...`} />
            <AnimeList api={searchAnime} />
        </>
    );
};

export default Page;
