import { intiDialog } from "./dialog.js";

export function initEventFormDialog() {
    const dialog = intiDialog("event-form");

    document.addEventListener
    ("event-create-request", () => {
        dialog.open();
    });
}