/**
 * Parses a date string into a numeric timestamp for sorting.
 * Supports:
 * - DD-MMM-YYYY (e.g., 01-Feb-2026)
 * - DD-MM-YYYY (e.g., 01-02-2026)
 * - YYYY-MM-DD (ISO standard)
 */
export function parseProjectDate(dateStr: string | undefined): number {
	if (!dateStr) return 0;

	// Trim whitespace
	const cleanDate = dateStr.trim();

	// 1. Try standard JS parsing (handles ISO and DD MMM YYYY)
	const standardDate = new Date(cleanDate);
	if (!isNaN(standardDate.getTime())) {
		return standardDate.getTime();
	}

	// 2. Handle DD-MM-YYYY (e.g., 01-02-2026) or DD/MM/YYYY
	const dmyMatch = cleanDate.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/);
	if (dmyMatch) {
		const [, day, month, year] = dmyMatch;
		// month is 0-indexed in JS Date constructor (1-12 -> 0-11)
		return new Date(parseInt(year), parseInt(month) - 1, parseInt(day)).getTime();
	}

	// Fallback for invalid formats
	console.warn(`[date-utils] Unable to parse date: "${dateStr}"`);
	return 0;
}
