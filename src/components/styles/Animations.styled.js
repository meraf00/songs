import { keyframes } from '@emotion/react';

export const spin = keyframes`
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(-360deg);
    }
`;

export const bounce = keyframes`
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(0.2rem);
    }

    100% {
        transform: translateY(0);
    }
`;

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`;
