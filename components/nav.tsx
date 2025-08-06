import Container from "@/components/container";
import LogoLink from "@/components/logo-link";

export default function Nav() {
    // const { burgerMenuActive } = useGlobalContext() as ContextState;
    // const [scrolled, setScrolled] = useState(false);

    // const handleScroll = useCallback(() => {
    //     setScrolled(window.scrollY > 100);
    // }, []);

    // useEffect(() => {
    //     handleScroll();

    //     window.addEventListener('scroll', handleScroll);

    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, [handleScroll]);

    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            <Container as="div"
                className="relative flex items-center justify-between gap-8 py-4"
            >
                <LogoLink className="relative z-50 shrink-0 w-[60px]" />

                {/* <NavDesktopMenu /> */}

                {/* <BurgerButton /> */}
                {/* <NavMobileMenu /> */}
            </Container>
        </nav>
    )
}