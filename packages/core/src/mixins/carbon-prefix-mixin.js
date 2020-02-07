import { settings as carbonSettings } from '@rocketsoftware/carbon-components';

export default {
  created() {
    this.carbonPrefix = carbonSettings.prefix;
  },
};
