import EventBus from './eventBus';

const _eventBus = new EventBus();

export default () => ({ eventBus: _eventBus });
