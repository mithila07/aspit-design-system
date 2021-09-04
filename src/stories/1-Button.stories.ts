import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button } from '@storybook/angular/demo';
import { AmButtonComponent } from '../../projects/design-system/src/lib/components/atoms/am-button/am-button.component';


export default {
  title: 'Button',
};

export const PrimaryButton = () => ({
  component: AmButtonComponent,
  props: {
    btnClass: 'action-button-w-icon',
    iconClass: 'icon-email icon-md icon-color-primary-light',
    btnText: 'Primary',
    btnDesc: 'This is a primary button',
    onClick: action('You clicked a primary button')
  }
});

export const successButton = () => ({
  component: AmButtonComponent,
  props: {
    btnClass: 'action-button-w-icon action-button-w-icon-success',
    iconClass: 'icon-calendar icon-md icon-color-success',
    btnText: 'Primary',
    btnDesc: 'This is a primary button',
    onClick: action('You clicked a Success button')
  }
});

export const dangerButton = () => ({
  component: ButtonsComponent,
  props: {
    btnClass: 'action-button-w-icon action-button-w-icon-danger',
    iconClass: 'icon-delete_bin icon-md icon-color-danger',
    btnText: 'Danger',
    btnDesc: 'This is a danger button',
    onClick: action('You clicked a Danger button')
  }
});



// export const newbtn = () => ({
//   component: ButtonComponentComponent,
//   props: {
//     text: 'this is the new button',
//   },
// });

// export const text = () => ({
//   component: Button,
//   props: {
//     text: 'Hello Button',
//   },
// });

// export const emoji = () => ({
//   component: Button,
//   props: {
//     text: '😀 😎 👍 💯',
//   },
// });

// // emoji.story = {
// //   parameters: { notes: 'My notes on a button with emojis' },
// // };

// export const withSomeEmojiAndAction = () => ({
//   component: Button,
//   props: {
//     text: '😀 😎 👍 💯',
//     onClick: action('This was clicked OMG'),
//   },
// });

// // withSomeEmojiAndAction.story = {
// //   name: 'with some emoji and action',
// //   parameters: { notes: 'My notes on a button with emojis' },
// // };

// export const buttonWithLinkToAnotherStory = () => ({
//   component: Button,
//   props: {
//     text: 'Go to Welcome Story',
//     onClick: linkTo('Welcome'),
//   },
// });

// // buttonWithLinkToAnotherStory.story = {
// //   name: 'button with link to another story',
// // };
