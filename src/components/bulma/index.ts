import { columnSize } from './columnSize';
import { breakpoint } from './enums/breakpoints';

const columns = 'columns';
const column = 'column';

type half = 'half';
type third = 'third';
type quarter = 'quarter';
type fifth = 'fifth';
type full = 'full';

type isWidth = `is-${columnSize}`;

type fraction =
    | half
    | `one-${quarter | third | fifth}`
    | `two-${third | fifth}s`
    | `three-${quarter | fifth}`
    | `four-fifths`;

type isFractionWidth = `is-${fraction | 'full'}`;
type isOffsetWidth = `is-offset-${columnSize}`; // DONE
type isOffsetFraction = `is-offset-${fraction}`; // DONE
type isNarrow = 'is-narrow'; // DONE
type isNarrowModified = `is-narrow-${breakpoint}`; // DONE
type responsiveUpwards = `is-${breakpoint}`; // DONE
type responsiveAt = `${isFractionWidth}-${breakpoint}`; // DONE
type gapless = 'is-gapless'; // DONE
type multiline = 'is-multiline'; // DONE
type verticalCenter = 'is-vcentered'; // DONE
type horizontalCenter = 'is-centered'; // DONE

interface ColumnsClasses {
    columns: typeof columns;
    centered: {
        vertical: verticalCenter;
        horizontal: horizontalCenter;
    };
    multiline: multiline;
    gapless: gapless;
    columnsUpFrom: { [P in breakpoint]: `is-${P}` };
}
interface ColumnClasses {
    column: typeof column;
    fractionSize: {
        [P in breakpoint]: { [S in fraction | 'full']: `is-${S}-${P}` };
    } & {
        undefined: { [P in fraction | 'full']: `is-${P}` };
    };
    fixedSize: { [P in columnSize]: `is-${P}` };
    offset: {
        fixedSize: { [P in columnSize]: `is-offset-${P}` };
        fractionSize: { [P in fraction]: `is-offset-${P}` };
    };
    narrow: { [P in breakpoint]: `is-narrow-${P}` } & {
        undefined: 'is-narrow';
    };
}

// ELEMENTS

const block = 'block';
const box = 'box';
const button = 'button';

// COLORS 
// $colors sass map

const white = 'white';
const light = 'light';
const dark = 'dark';
const black = 'black';
const text = 'text';
const ghost = 'ghost';

const primary = 'primary';
const link = 'link';
const info = 'info';
const success = 'success';
const warning = 'warning';
const danger = 'danger';

// SIZES

const small = 'small';
const normal = 'normal';
const medium = 'medium';
const large = 'large';

const buttons = 'buttons';
const are = 'are';
const is = 'is';

const fullwidth = 'fullwidth';
const outlined = 'outlined';
const inverted = 'inverted';
const rounded = 'rounded';

const hovered = 'hovered';
const focused = 'focused';
const active = 'active';
const loading = 'loading';

const static_ = 'static';
const disabled = 'disabled'; // attribute

const icon = 'icon';

const grouped = 'grouped'; // on field container
const addons = 'addons'; // has-addons on field container

const centered = 'centered'; // buttons
const right = 'right'; // buttons

const selected = 'selected';

const content = 'content'; // p ul ol dl h1 h6 blockquote em strong table tr th rd tr
const roman = 'roman';
const alpha = 'alpha';
const lower = 'lower';
const upper = 'upper';
type letterType = typeof alpha | typeof roman;
type caseType = typeof lower | typeof upper;
type orderedListBullet = `is-${caseType}-${letterType}`;

type sizeType = typeof small | typeof medium | typeof large;
type contentSize = `is-${sizeType}`;

const delete_ = 'delete'; // on button
type deleteSize = `is-${sizeType}`

const $icon = 'icon'; // on span
const icon_text = 'icon-text'; // on span or div around icon

const has = 'has';
type context = typeof info | typeof success | typeof warning | typeof danger | 
    typeof primary | typeof link;
type $textColor = `${typeof has}-${typeof text}-${context}`; // on icon or icon-text
type $iconSize = `is-${sizeType}`

const faFixedWidth = 'fa-fw';
const faBordered = 'fa-border';
const faSpinner = 'fa-spinner';
const faPulse = 'fa-pulse';
const faLarge = 'fa-lg';
const fa2x = 'fa-2x';

const $image = 'image';
type ImageSide = 16 | 24 | 32 | 48 | 64 | 96 | 128;
type $ImageSize = `is-${ImageSide}-${ImageSide};`