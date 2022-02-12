import { mount } from '@vue/test-utils';
import App from '../app.vue';

describe('test App component', () => {
  it('renders', () => {
    const app =  mount(App);
    expect(app.element).toBeDefined();
  });
});
