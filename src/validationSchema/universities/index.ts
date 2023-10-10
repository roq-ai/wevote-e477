import * as yup from 'yup';

export const universityValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  location: yup.string().nullable(),
  founded_date: yup.date().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
