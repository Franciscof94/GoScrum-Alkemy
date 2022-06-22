export const truncate = (str = "", len) => {
    if (str.length > len) {
        return str.substring(0, len) + "...";
    }
    return str;
}

export const upperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}