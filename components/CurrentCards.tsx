import {ClashCard} from "./cards";

type CurrentCardsProps = {
    rarity: string;
    cards: ClashCard[];
};

export default function CurrentCards({ rarity, cards }: CurrentCardsProps) {
    const filtered = cards.filter(
        (card: ClashCard) => card.rarity.toLowerCase() === rarity.toLowerCase()
    );

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {filtered.map((card: ClashCard) => (
                <div
                    key={card.id}
                    className="bg-pink-800 rounded-lg shadow p-4 text-center text-white "
                >
                    <h3 className="font-bold">{card.name}</h3>
                    <h5 className="text-sm font-medium text-purple-200">
                        Elixir Cost: {card.elixirCost}
                    </h5>

                </div>
            ))}
        </div>
    );
}
