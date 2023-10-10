import * as yup from 'yup';

export const guestValidationSchema = yup.object().shape({
  visit_date: yup.date().required(),
  purpose: yup.string().nullable(),
  notes: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  university_id: yup.string().nullable().required(),
});
