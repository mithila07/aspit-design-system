import { Checkbox } from '@storybook/angular/demo';
import { FormInputComponent } from '../app/components/atoms/form-input/form-input.component';

export default {
    title: 'Input',
    
};
export const FormInput = () => ({
    component: FormInputComponent,
    props: {
        formlabel: 'This is a form control label',
        formplaceholder: 'This is a form control placeholder'
    },
});
  
