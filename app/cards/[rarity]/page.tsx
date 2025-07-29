import CurrentCards from "@/components/CurrentCards";
import Loading from "@/components/Loading";
import {Suspense} from "react"
import getCards from "@/lib/getCards";



export default async function RarityPage({ params }: { params: Promise<{ rarity: string }> }) {
    const { rarity } = await params;
    const deRarity = decodeURIComponent(rarity);
    const cards = await getCards();

    return (
        <Suspense
            fallback={
                <main className="flex flex-col items-center center pt-48">
                    <Loading/>
                </main>
            }
        >
            <CurrentCards rarity={deRarity} cards={cards ?? []} />
        </Suspense>
    );
}