import SvgMadeByAristoclick from '@/components/svg/svg-made-by-aristoclick';

export default function MadeByAristoclick() {
    return (
        <a href="https://www.aristoclick.cz?utm_source=XYZ&utm_medium=footer&utm_campaign=made-by-aristoclick"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full max-w-[136px] hover:opacity-70 transition-opacity duration-300"
        >
            <span className="text-0">Made by Aristoclick</span>
            <SvgMadeByAristoclick />
        </a>
    );
}