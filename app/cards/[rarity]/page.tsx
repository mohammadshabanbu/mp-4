import CurrentCards from "@/components/CurrentCards";
import Loading from "@/components/Loading";
import {Suspense} from "react"
import getCards from "@/lib/getCards";

interface PageProps {
    params: { rarity: string };
}

export default async function CityPage({ params }: PageProps) {
    const rarity = decodeURIComponent(params.rarity);
    const cards = await getCards();

    return (
        <Suspense
            fallback={
                <main className="flex flex-col items-center center pt-48">
                    <Loading/>
                </main>
            }
        >
            <CurrentCards rarity={rarity} cards={cards ?? []} />
        </Suspense>
    );
}