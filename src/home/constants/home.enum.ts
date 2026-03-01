import { Validators } from "@angular/forms";
import { emailExistsValidator } from "../../libs/shared/validators/email.exists.validator";
import { FormFieldConfig } from "../../libs/shared/models/dynamic-form.model";

export const formConfiguration: FormFieldConfig[] = [
    {
        key: 'firstName',
        label: 'First Name',
        type: 'text',
        required: true,
        validators: [
            {
                validator: Validators.required,
                errorKey: 'required',
                message: 'First name is required'
            }
        ],
        row: 1,
        col: 'col-md-6'
    },
    {
        key: 'lastName',
        label: 'Last Name',
        type: 'text',
        required: true,
        validators: [
            {
                validator: Validators.required,
                errorKey: 'required',
                message: 'Last name is required'
            }
        ],
        row: 1,
        col: 'col-md-6'
    },
    {
        key: 'email',
        label: 'Email',
        type: 'email',
        required: true,
        validators: [
            {
                validator: Validators.required,
                errorKey: 'required',
                message: 'Email is required'
            }
        ],
        asyncValidators: [
            {
                validator: emailExistsValidator(),
                errorKey: 'emailTaken',
                message: 'This email is already registered'
            }
        ],
        row: 2,
        col: 'col-md-12'
    },
    {
        key: 'contact',
        label: 'Contact',
        type: 'number',
        required: true,
        validators: [
            {
                validator: Validators.required,
                errorKey: 'required',
                message: 'Contact is required'
            }
        ],
        row: 3,
        col: 'col-md-12'
    },
    {
        key: 'newPassword',
        label: 'New Password',
        type: 'password',
        required: true,
        validators: [
            {
                validator: Validators.required,
                errorKey: 'required',
                message: 'New Password is required'
            }
        ],
        row: 4,
        col: 'col-md-12'
    },
    {
        key: 'confirmPassword',
        label: 'Confirm Password',
        type: 'password',
        required: true,
        validators: [
            {
                validator: Validators.required,
                errorKey: 'required',
                message: 'Confirm Password is required'
            }
        ],
        row: 5,
        col: 'col-md-12'
    }
]