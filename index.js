import { fromEvent } from "most/src/source/fromEvent"

var eventName = "<chrome-event>"

/**
 * Create a stream from Chrome's "special snowflake" of an event emitter
 * @param {ChromeEvent} source A library implementing the "addListener(<func>)"
 *                             and "removeListener(<func>)" interface
 * @returns {Stream} stream containing all events from that chrome event source
 */
export default function fromChromeEvent (eventSource) {
  var emitter = {
    addListener: function (_, listener) {
      eventSource.addListener(listener)
    },

    removeListener: function (_, listener) {
      eventSource.removeListener(listener)
    }
  }

  return fromEvent(eventName, emitter)
}
