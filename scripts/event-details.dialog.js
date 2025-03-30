import { initDialog } from "./dialog.js";
import { eventTimeToDate } from "./event.js";

const eventDateFormatter = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric"
});

const eventTimeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric"
});

export function initEventDetailsDialog() {
    const dialog = initDialog("event-details");

    document.addEventListener("event-click", (event) => {
        fillEventDetailsDialog(dialog.dialogElement, event.detail.event);
        dialog.open();
    });
}

function fillEventDetailsDialog(parent, event) {
    const eventDetailsElement = parent.querySelector("[data-event-details]");
    const eventDetailsTitleElement = eventDetailsElement.querySelector("[data-event-details-title]");
    const eventDetailDateElement = eventDetailsElement.querySelector("[data-event-details-date]");
    const eventDetailStartTimeElement = eventDetailsElement.querySelector("[data-event-details-start-time]");
    const eventDetailEndTimeElement = eventDetailsElement.querySelector("[data-event-details-end-time]");

    eventDetailsTitleElement.textContent = event.title;
    eventDetailDateElement.textContent = eventDateFormatter.format(event.date);
    eventDetailStartTimeElement.textContent = eventTimeFormatter.format(
        eventTimeToDate(event, event.startTime)
    );
    eventDetailEndTimeElement.textContent = eventTimeFormatter.format(
        eventTimeToDate(event, event.endTime)
    );

    eventDetailsElement.style.setProperty("--event-color", event.color);
}