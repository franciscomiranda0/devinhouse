export const toString = date => {
    const rawDate = new Date(date);
    const formattedDate = `${rawDate.getDate()}/${rawDate.getMonth() + 1}/${rawDate.getFullYear()}`;
    return formattedDate;
}