import * as Yup from 'yup';
const required = 'This field is required';
const fullNameMinLength = 'FullName should be maximum 4 characters long';
const fullNameMaxLength = 'FullName should be maximum 60 characters long';
const messageMinLength = 'Message should be maximum 20 characters long';
const messageMaxLength = 'Message should be maximum 300 characters long';

export const contactFormSchema = Yup.object().shape({
  fullName: Yup.string()
    .required(required)
    .min(4, fullNameMinLength)
    .max(60, fullNameMaxLength),
  email: Yup.string().email().required(required),
  message: Yup.string().min(20, messageMinLength).max(300, messageMaxLength),
});
