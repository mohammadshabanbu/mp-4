import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-yellow-400 text-black-300 p-6">
            <div className="text-center">
                <Link href="/" className="text-4xl font-bold tracking-wide">
                    Clash Royale Cards
                </Link>
            </div>
        </header>
    );
}