"use server";
import {ClashCard} from "@/components/cards";

const CLASH_ROYALE_API_KEY = process.env.CLASH_ROYALE_API_KEY;

export default async function getCards(): Promise<ClashCard[] | undefined | null> {
    try {
        const res = await fetch("https://api.clashroyale.com/v1/cards", {
            headers: {
                Authorization: `Bearer ${CLASH_ROYALE_API_KEY}`,
                "Content-Type": "application/json",
            },
        });

        if (res.status === 429) {
            return null;
        } else if (res.status !== 200) {
            return undefined;
        }

        const jsonRes = await res.json();
        console.log("API response:", jsonRes);

        return jsonRes.items as ClashCard[];

    } catch (error) {
        console.log("error occurred:", error);
        return undefined;
    }
}
