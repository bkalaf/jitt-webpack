export default function isBoolean(item: unknown): item is boolean {
    return typeof item === 'boolean';
}
