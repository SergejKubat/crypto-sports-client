export const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

export const getEllipsisText = (str, n = 8) => {
    if (!str) return;
    return `${str.substr(0, n)}...${str.substr(str.length - n, str.length)}`;
};
