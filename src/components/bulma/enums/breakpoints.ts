const mobile = 'mobile';
const tablet = 'tablet';
const desktop = 'desktop';
const widescreen = 'widescreen';
const touch = 'touch';
const fullhd = 'fullhd';

export type mobile = typeof mobile;
export type tablet = typeof tablet;
export type touch = typeof touch;
export type desktop = typeof desktop;
export type widescreen = typeof widescreen;
export type fullhd = typeof fullhd;

export type breakpoint =
    | mobile
    | tablet
    | desktop
    | widescreen
    | widescreen
    | fullhd
    | touch;
export type till_breakpoint = widescreen | fullhd;
export type only_breakpoint = tablet | desktop | widescreen;