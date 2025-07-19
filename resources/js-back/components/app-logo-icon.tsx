import { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <img
            src="/logo.svg"
            alt="CourseApp Logo"
            className={`size-5 fill-current text-white dark:text-black ${props.className || ''}`}
        />
    );
}
