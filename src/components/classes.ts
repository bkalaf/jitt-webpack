type Button = 'button'
type Contextual = 'success' | 'alert' | 'warning' | 'primary' | 'secondary';
type Size = 'tiny' | 'small' | 'large';
type Breakpoints = 'small' | 'medium' | 'large';
type Expanded = 'expanded';
type ResponsiveExpanded = `${Breakpoints}${'-only' | '-down' | ''}-expanded`;
type Hollow = 'hollow';
type Disabled = 'disabled';
type Clear = 'clear';
type Dropdown = 'dropdown';

type ShowForScreenReader = 'show-for-sr';

type ButtonGroup = 'button-group';
type NoGaps = 'no-gaps';
type Stacked = 'stacked' | 'stacked-for-small' | 'stacked-for-medium';
type ArrowOnly = 'arrow-only';
type AlignDirection = 'center' | 'right' | 'spaced' | 'justify';
type FlexboxAlign = `align-${AlignDirection}`;

type Arias = 'aria-hidden' | 'aria-label';
type DataClosable = 'data-closable';
type DataClose = 'data-close';
type CloseButton = 'close-button';
type CloseAnimation = 'slide-out-right';