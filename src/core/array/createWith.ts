export default function createWith<T>(func: () => T, len: number): T[] {
    if (len === 0) {
        return [];
    }
    return [func(), ...createWith(func, len - 1)];
}
