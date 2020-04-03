import { DateTime } from "luxon";

export function getYearRage(month) {
    let year = month.year;
    let end = year;
    let start = year - 11;
    return { start, end };
}

export function getCentury(month) {
    let year = month.year;
    let grap = year % 10;
    let start = year - 1;
    if (grap !== 0) {
        start = year - grap - 1;
    }
    let end = start + 11;
    return { start, end };
}