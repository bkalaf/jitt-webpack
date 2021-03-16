export default function getRange(start: number, end: number): number[] {
    if (start === end) {
        return [end];
    }
    return [start, ...getRange(start + 1, end)];
}
