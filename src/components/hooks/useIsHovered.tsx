import React from 'react';

export default function useIsHovered(id: string) {
    const mouseEnter = (ev: React.MouseEvent) => {
        document.getElementById(id)?.classList.add('is-hovered');
    };
    const mouseLeave = (ev: React.MouseEvent) => {
        document.getElementById(id)?.classList.remove('is-hovered');
    };
    return [mouseEnter, mouseLeave];
}
