export const isSimilar = (str1: string, str2: string): boolean => {
    return str1.toLowerCase().includes(str2.toLowerCase())
        || str2.toLowerCase().includes(str1.toLowerCase())
}
