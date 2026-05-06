// ============================================================
// Wattex Solar CRM — Google Sheets Service
// No backend required — uses Google Apps Script Web App
// ============================================================

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyHQ7GPVBAECL9_CZ0OpAvWkmHRN7In6y5J4-orls1WBUDy_nuuHsC6yY4aYALTTSHT/exec";

/**
 * Submit form data to Google Sheets via Apps Script.
 * @param {Object} payload
 * @returns {Promise<{ success: boolean }>}
 */
export const submitToGoogleSheets = async (payload) => {
  try {
    await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(payload),
    });
    return { success: true };
  } catch (error) {
    console.error("❌ Google Sheets submission failed:", error);
    return { success: false, error: error.message };
  }
};