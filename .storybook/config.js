import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/properties');
}

configure(loadStories, module);
