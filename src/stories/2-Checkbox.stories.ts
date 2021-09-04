import { Checkbox } from '@storybook/angular/demo';
import { CheckboxComponent } from '../app/components/atoms/checkbox/checkbox.component';

export default {
    title: 'Checkbox',
    
};
export const PrimaryCheckbox = () => ({
    component: CheckboxComponent,
    props: {
      checkboxlabel: 'This is a checkbox label'
    },
});
  
