import 'styled-components';

declare module 'styled-components' {
    export interface InfoSectionProps {
        lightBg: boolean;
        imgStart: string;
        lightTopLine: boolean;
        lightTextDesc: boolean;
        buttonLabel: string;
        description: string;
        headline: string;
        lightText: boolean;
        primary: boolean;
        topLine: string;
        img: string;
        alt: string;
        start: string;
    }
}