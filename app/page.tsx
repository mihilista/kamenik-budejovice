import Container from '@/components/container';
import Link from 'next/link';

export default function Home() {
    return (
        <Container as="section" className="flex flex-col items-center text-center">
            <header className="mb-8">
                <h1 className="text-[32px] leading-[1.2] md:text-[48px] md:leading-[1.2] font-bold">
                    Kameník z Budějovic
                </h1>
            </header>

            <Link href="/privacy-policy" className="underline hover:no-underline">
                Zásady ochrany osobních údajů
            </Link>
        </Container>
    );
}
