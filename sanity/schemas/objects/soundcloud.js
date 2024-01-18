/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
import { PiSoundcloudLogoDuotone } from 'react-icons/pi';

export default {
  name: 'soundcloud',
  title: 'Soundcloud url',
  type: 'object',
  icon: PiSoundcloudLogoDuotone,
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Soundcloud url',
      description: 'https://soundcloud.com/...',
    },
  ],
};
