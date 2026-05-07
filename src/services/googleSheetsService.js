// ============================================================
// Wattex Solar CRM — Google Sheets Service
// No backend required — uses Google Apps Script Web App
// ============================================================

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby3_JPiTiAggLA6m_msR4Fc6K3VLuwsbraINqKNA11ZdeGYcLKItfoZ-EVFo8C2dJxfVA/exec";

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
