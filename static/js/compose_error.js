import $ from "jquery";

import * as common from "./common";

export function compose_error(error_html, bad_input) {
    $("#compose-send-status")
        .removeClass(common.status_classes)
        .addClass("alert-error")
        .stop(true)
        .fadeTo(0, 1);
    $("#compose-error-msg").html(error_html);
    $("#compose-send-button").prop("disabled", false);
    $("#sending-indicator").hide();
    if (bad_input !== undefined) {
        bad_input.trigger("focus").trigger("select");
    }
}

export function compose_not_subscribed_error(error_html, bad_input) {
    $("#compose-send-status")
        .removeClass(common.status_classes)
        .addClass("home-error-bar")
        .stop(true)
        .fadeTo(0, 1);
    $("#compose-error-msg").html(error_html);
    $("#compose-send-button").prop("disabled", false);
    $("#sending-indicator").hide();
    $(".compose-send-status-close").hide();
    if (bad_input !== undefined) {
        bad_input.trigger("focus").trigger("select");
    }
}
