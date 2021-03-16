export interface IClassListBuilder {
    (className: string | undefined, ...args: string[][]): string;
    of(className: string): string[];
    opt(className?: string): string[];
    surround(value: string | undefined, prefix: string, suffix: string): string[];
    prefix(value: string | undefined, prefix: string): string[];
    suffix(value: string | undefined, suffix: string): string[];
    flag(flag: boolean | undefined, cn: string): string[];
}
/** @deprecated */
const ClassList: IClassListBuilder = function(className: string | undefined, ...args: string[][]): string {
    const result = [ className ? [ className ] : [], ...args ].reduce((pv, cv) => [ ...pv, ...cv ], []);
    return result.join(' ');
} 
ClassList.of = function(className: string) { return [className]; }
ClassList.opt = function(className?: string) { return className ? [className] : [] }
ClassList.surround = function(value: string | undefined, prefix: string, suffix: string) { return value ? [`${prefix}-${value}-${suffix}`] : [] }
ClassList.prefix = function(value: any, prefix: string) { return value ? [ `${prefix}-${value.toString()}`] : []}
ClassList.flag = function(flag: boolean | undefined, cn: string) { return flag ? [cn] : [] }
ClassList.suffix = function(value: string | undefined, suffix: string) { return ClassList.surround(value, '', suffix); }

export default ClassList;