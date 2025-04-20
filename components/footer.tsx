import Container from "@/components/container";

const currentYear = new Date().getFullYear();

export default function Footer() {

    return (
        <footer className="">
            <Container as="div"
                className=""
            >
                {currentYear}
            </Container>
        </footer>
    )
}