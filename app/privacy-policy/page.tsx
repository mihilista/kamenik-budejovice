import Container from '@/components/container';
import { getPageMetadata } from '@/helpers/metadata';

export const metadata = getPageMetadata({
    title: 'Zásady ochrany osobních údajů',
});

export default function GDPRPage() {
    return (
        <Container as="article" className="legal-page">
            <header>
                <h1>Zásady ochrany osobních údajů</h1>
                <p>
                    Tato stránka popisuje zásady ochrany osobních údajů dle nařízení (EU) 2016/679 (GDPR) pro osobu samostatně výdělečně činnou Tomáše Bíra.
                </p>
            </header>

            <section>
                <header><h2>Správce údajů</h2></header>
                <p>
                    Správcem osobních údajů je:<br />
                    <strong>Tomáš Bíro</strong><br />
                    Lomy 44, 378 53 Člunek<br />
                    IČ: 21919305<br />
                    E-mail: <a href="mailto:info@kamenikbudejovice.cz">info@kamenikbudejovice.cz</a>
                </p>
            </section>

            <section>
                <header><h2>Jaké osobní údaje zpracovávám</h2></header>
                <p>
                    V rámci své činnosti mohu zpracovávat následující osobní údaje:
                </p>
                <ul>
                    <li>Jméno a příjmení</li>
                    <li>E-mailová adresa</li>
                    <li>Telefonní číslo</li>
                    <li>Obsah zprávy nebo poptávky</li>
                    <li>Další údaje, které sami dobrovolně uvedete</li>
                </ul>
            </section>

            <section>
                <header><h2>Účel zpracování údajů</h2></header>
                <p>
                    Vaše údaje budou zpracovány za účelem:
                </p>
                <ul>
                    <li>Reakce na vaši poptávku nebo dotaz</li>
                    <li>Poskytnutí služeb a vyřízení objednávky</li>
                    <li>Zasílání obchodních sdělení (v případě souhlasu)</li>
                    <li>Plnění zákonných povinností (např. účetních)</li>
                </ul>
            </section>

            <section>
                <header><h2>Právní základ zpracování</h2></header>
                <p>
                    Osobní údaje zpracovávám na základě:
                </p>
                <ul>
                    <li>Plnění smlouvy</li>
                    <li>Oprávněného zájmu</li>
                    <li>Vámi uděleného souhlasu</li>
                    <li>Plnění zákonných povinností</li>
                </ul>
            </section>

            <section>
                <header><h2>Doba uchování údajů</h2></header>
                <p>
                    Vaše osobní údaje budou uchovány po dobu nezbytně nutnou k naplnění účelů zpracování, nejdéle však po dobu 3 let, nebo do odvolání souhlasu (v případě jeho udělení).
                </p>
            </section>

            <section>
                <header><h2>Vaše práva</h2></header>
                <ul>
                    <li>Právo na přístup k osobním údajům</li>
                    <li>Právo na opravu nepřesných údajů</li>
                    <li>Právo na výmaz (tzv. právo být zapomenut)</li>
                    <li>Právo na omezení zpracování</li>
                    <li>Právo na přenositelnost údajů</li>
                    <li>Právo vznést námitku</li>
                    <li>Právo podat stížnost u ÚOOÚ (www.uoou.cz)</li>
                </ul>
            </section>

            <section>
                <header><h2>Kontakt</h2></header>
                <p>
                    V případě jakýchkoli dotazů ohledně zpracování osobních údajů mě můžete kontaktovat na <a href="mailto:info@kamenikbudejovice.cz">info@kamenikbudejovice.cz</a>.
                </p>
            </section>
        </Container>
    )
}