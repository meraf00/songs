import { keyframes } from '@emotion/react';

export const spin = keyframes`
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(-360deg);
    }
`;
