import Container from "@/components/container";
import MadeByAristoclick from '@/components/made-by-aristoclick';

const currentYear = new Date().getFullYear();

export default function Footer() {

    return (
        <footer className="">
            <Container as="div"
                className="flex flex-col"
            >
                <span>{currentYear}</span>
                <MadeByAristoclick />
            </Container>
        </footer>
    )
}