export const round2 = (num: number) => Math.round((num + Number.EPSILON) * 100) / 100;
export const formatId = (x: string) => {
    return `..${x.substring(20, 24)}`
}