import {PROCESSED} from '../modules/emails/processed.const';

const layout = PROCESSED.layout;
const style = PROCESSED.css;

export const AUTOMATIC_EMAILS_COLLECTION = {
  name: 'automatic-emails',
  documents: [
    {
      id: 'inquiry-notification-admin',
      name: 'Inquiry Notification Admin',
      recipient: 'Admin',
      description: 'Sent to admins when someone fills out an inquiry request.',
      subject: 'New website inquiry',
      dynamicValues: {
        name: 'Customer\'s name',
        email: 'Customer\'s email',
        message: 'Customer\'s message',
      },
      content: {
        layout,
        style,
        template: 'newsletter',
        segments: [
          {
            id: 'section',
            name: 'Section',
            content:
              '<h1>Dragi admin,</h1>\n<p>Neko se upravo javio preko web stranice, podaci o upitu su ispod.</p>',
          },
          {
            id: 'section',
            name: 'Section',
            content:
              [
                '<p>Ime: <b>{{name}}</b></p>',
                '<p>Email: <b>{{email}}</b></p>',
                '<p>Poruka: <b>{{message}}</b></p>',
              ].join('\n'),
          },
        ]
      },
      active: true
    },
	]
};
