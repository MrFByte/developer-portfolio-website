/**
 * Live "open to work" status, fetched client-side at page load so it can be
 * toggled without a redeploy.
 *
 * Backed by a GitHub Gist: https://gist.github.com/MrFByte/06f34b5beafedfb1ad517551ed9a1a16
 * To update it: edit that gist's status.json (web UI, or `gh gist edit` from the CLI)
 * to change the values below. The raw URL (no revision hash) always serves the
 * latest edit, so no code change is needed here.
 *
 *   { "openToWork": true, "message": "Open to Work" }
 *
 * "message" is optional — omit it to fall back to "Open to Work" / "Not available
 * right now" based on "openToWork" alone.
 */
export const STATUS_URL =
  'https://gist.githubusercontent.com/MrFByte/06f34b5beafedfb1ad517551ed9a1a16/raw/status.json';
