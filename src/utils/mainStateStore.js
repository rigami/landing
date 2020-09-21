import EventBus from "./eventBus";

const _eventBus = new EventBus();

console.log("Init store");

export default () => ({
    eventBus: _eventBus,
});
