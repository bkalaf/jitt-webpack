import { breakpoint, till_breakpoint, only_breakpoint } from './enums/breakpoints';

export const $columns = 'columns';
export type $columns = typeof $columns;

export type columnsFrom = `is-${breakpoint}`;
export type columnsTill = `until-${till_breakpoint}`;
export type columnsOnly = `${only_breakpoint}-only`;

export type $responsiveColumns = columnsFrom | columnsTill | columnsOnly;

const $multiline = 'is-multiline';
const $gapless = 'is-gapless';
export type $multiline = typeof $multiline;
export type $gapless = typeof $gapless;

const $centered = `is-centered`;
const $vcentered = `is-vcentered`;
export type $centered = typeof $centered;
export type $vcentered = typeof $vcentered;