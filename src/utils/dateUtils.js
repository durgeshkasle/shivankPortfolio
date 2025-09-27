/**
 * Format a given date into a custom string.
 *
 * @param {Date} date - The date object to format.
 * @param {string} [format="DD-MM-YYYY"] - The format string (supports DD, MM, MMM, YYYY).
 * @param {string} [locale="en-IN"] - The locale for formatting.
 * @returns {string} Formatted date string.
 *
 * @example
 * formatDate(new Date("2025-02-06"), "DD-MM-YYYY"); // "06-02-2025"
 * formatDate(new Date("2025-02-06"), "MMM DD, YYYY"); // "Feb 06, 2025"
 */
export const formatDate = (date, format = 'DD-MM-YYYY', locale = 'en-IN') => {
  const options = {
    year: format.includes('YYYY') ? 'numeric' : undefined,
    month: format.includes('MM') ? '2-digit' : format.includes('MMM') ? 'short' : undefined,
    day: format.includes('DD') ? '2-digit' : undefined,
  };
  return new Intl.DateTimeFormat(locale, options).format(date);
};

/**
 * Format a given date into a custom time string.
 *
 * @param {Date} date - The date object to format.
 * @param {string} [format="hh:mm:ss A"] - The format string (supports hh, mm, ss, A).
 * @param {string} [locale="en-IN"] - The locale for formatting.
 * @returns {string} Formatted time string.
 *
 * @example
 * formatTime(new Date("2025-02-06T22:15:30"), "hh:mm:ss A"); // "10:15:30 PM"
 */
export const formatTime = (date, format = 'hh:mm:ss A', locale = 'en-IN') => {
  const options = {
    hour: format.includes('hh') ? '2-digit' : undefined,
    minute: format.includes('mm') ? '2-digit' : undefined,
    second: format.includes('ss') ? '2-digit' : undefined,
    hour12: format.includes('A'),
  };
  return new Intl.DateTimeFormat(locale, options).format(date);
};

/**
 * Format a given date and time in one string.
 *
 * @param {Date} date - The date object to format.
 * @param {string} [format="DD-MM-YYYY hh:mm:ss A"] - The format string.
 * @param {string} [locale="en-IN"] - The locale for formatting.
 * @returns {string} Formatted date-time string.
 *
 * @example
 * formatDateTime(new Date("2025-02-06T22:15:30")); // "06-02-2025 10:15:30 PM"
 */
export const formatDateTime = (date, format = 'DD-MM-YYYY hh:mm:ss A', locale = 'en-IN') => {
  return `${formatDate(date, format, locale)} ${formatTime(date, format, locale)}`;
};

/**
//  * Get Unix timestamp (in seconds).
 *
 * @param {Date} [date=new Date()] - The date object.
 * @returns {number} Unix timestamp in seconds.
 *
 * @example
 * getUnixTimestamp(new Date("2025-02-06T22:15:30")); // 1738879530
 */
export const getUnixTimestamp = (date = new Date()) => Math.floor(date.getTime() / 1000);

/**
 * Get ISO timestamp (ISO 8601 format).
 *
 * @param {Date} [date=new Date()] - The date object.
 * @returns {string} ISO timestamp string.
 *
 * @example
 * getISOTime(new Date("2025-02-06T22:15:30Z")); // "2025-02-06T22:15:30.000Z"
 */
export const getISOTime = (date = new Date()) => date.toISOString();

/**
 * Convert a date to Indian Standard Time (IST).
 *
 * @param {Date} date - The date object to convert.
 * @returns {string} Date-time in IST format.
 *
 * @example
 * convertToIST(new Date("2025-02-06T16:45:30Z")); // "06 Feb 2025, 10:15:30 PM"
 */
export const convertToIST = (date) => {
  return new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(date);
};

/**
 * Calculate time difference between two dates (human-readable).
 *
 * @param {Date} date1 - First date.
 * @param {Date} date2 - Second date.
 * @returns {string} Time difference (e.g., "5 days, 2 hours, 10 minutes, 5 seconds").
 *
 * @example
 * timeDifference(new Date("2025-02-06"), new Date("2025-02-01")); // "5 days, 0 hours, 0 minutes, 0 seconds"
 */
export const timeDifference = (date1, date2) => {
  const diff = Math.abs(date1.getTime() - date2.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
};

/**
 * Get relative time from now (e.g., "2 hours ago").
 *
 * @param {Date} date - The past date.
 * @returns {string} Relative time string.
 *
 * @example
 * getRelativeTime(new Date(Date.now() - 2 * 60 * 60 * 1000)); // "2 hours ago"
 */
export const getRelativeTime = (date) => {
  const now = new Date();
  const diff = Math.floor((now - date) / 1000);
  if (diff < 60) return `${diff} seconds ago`;
  const minutes = Math.floor(diff / 60);
  if (minutes < 60) return `${minutes} minutes ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hours ago`;
  const days = Math.floor(hours / 24);
  return `${days} days ago`;
};

/**
 * Get start of the day (00:00:00).
 *
 * @param {Date} date - The date object.
 * @returns {Date} New Date at start of day.
 *
 * @example
 * getStartOfDay(new Date("2025-02-06T15:30:00")); // Thu Feb 06 2025 00:00:00 GMT+0530
 */
export const getStartOfDay = (date) => new Date(new Date(date).setHours(0, 0, 0, 0));

/**
 * Get end of the day (23:59:59).
 *
 * @param {Date} date - The date object.
 * @returns {Date} New Date at end of day.
 *
 * @example
 * getEndOfDay(new Date("2025-02-06T15:30:00")); // Thu Feb 06 2025 23:59:59 GMT+0530
 */
export const getEndOfDay = (date) => new Date(new Date(date).setHours(23, 59, 59, 999));

/**
 * Get start of the month.
 *
 * @param {Date} date - The date object.
 * @returns {Date} First day of the month.
 *
 * @example
 * getStartOfMonth(new Date("2025-02-15")); // Sat Feb 01 2025 00:00:00 GMT+0530
 */
export const getStartOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1);

/**
 * Get end of the month.
 *
 * @param {Date} date - The date object.
 * @returns {Date} Last day of the month.
 *
 * @example
 * getEndOfMonth(new Date("2025-02-15")); // Fri Feb 28 2025 23:59:59 GMT+0530
 */
export const getEndOfMonth = (date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59, 999);

/**
 * Get start of the year.
 *
 * @param {Date} date - The date object.
 * @returns {Date} First day of the year.
 *
 * @example
 * getStartOfYear(new Date("2025-09-22")); // Wed Jan 01 2025 00:00:00 GMT+0530
 */
export const getStartOfYear = (date) => new Date(date.getFullYear(), 0, 1);

/**
 * Get end of the year.
 *
 * @param {Date} date - The date object.
 * @returns {Date} Last day of the year.
 *
 * @example
 * getEndOfYear(new Date("2025-09-22")); // Wed Dec 31 2025 23:59:59 GMT+0530
 */
export const getEndOfYear = (date) => new Date(date.getFullYear(), 11, 31, 23, 59, 59, 999);

/**
 * Add days to a given date.
 *
 * @param {Date} date - The date object.
 * @param {number} days - Number of days to add.
 * @returns {Date} New date after addition.
 *
 * @example
 * addDays(new Date("2025-02-06"), 5); // Tue Feb 11 2025
 */
export const addDays = (date, days) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

/**
 * Subtract days from a given date.
 *
 * @param {Date} date - The date object.
 * @param {number} days - Number of days to subtract.
 * @returns {Date} New date after subtraction.
 *
 * @example
 * subtractDays(new Date("2025-02-06"), 5); // Sat Feb 01 2025
 */
export const subtractDays = (date, days) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() - days);
  return newDate;
};

/**
 * Convert 12-hour format to 24-hour format.
 *
 * @param {string} time - Time in 12-hour format (e.g., "10:15 PM").
 * @returns {string} Time in 24-hour format.
 *
 * @example
 * to24HourFormat("10:15 PM"); // "22:15"
 * to24HourFormat("12:30 AM"); // "00:30"
 */
export const to24HourFormat = (time) => {
  const [hours, minutes, period] = time.match(/(\d+):(\d+)\s?(AM|PM)/i).slice(1);
  let hh = parseInt(hours, 10);
  if (period.toLowerCase() === 'pm' && hh !== 12) hh += 12;
  if (period.toLowerCase() === 'am' && hh === 12) hh = 0;
  return `${hh.toString().padStart(2, '0')}:${minutes}`;
};

/**
 * Convert 24-hour format to 12-hour format.
 *
 * @param {string} time - Time in 24-hour format (e.g., "22:15").
 * @returns {string} Time in 12-hour format.
 *
 * @example
 * to12HourFormat("22:15"); // "10:15 PM"
 * to12HourFormat("00:30"); // "12:30 AM"
 */
export const to12HourFormat = (time) => {
  const [hours, minutes] = time.split(':');
  const h = parseInt(hours, 10);
  const period = h >= 12 ? 'PM' : 'AM';
  const hh = h % 12 || 12;
  return `${hh}:${minutes} ${period}`;
};
