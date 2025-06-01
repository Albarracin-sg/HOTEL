"use strict";
// src/utils/formatters.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateToYYYYMMDD = formatDateToYYYYMMDD;
/**
 * Formats a date object into YYYY-MM-DD string
 * @param date Date object
 * @returns string Formatted date string
 */
function formatDateToYYYYMMDD(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}
// Puedes agregar más funciones de formato aquí si es necesario
