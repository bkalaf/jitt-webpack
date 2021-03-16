export default function isString(item: unknown): item is string {
    return typeof item === 'string';
}
