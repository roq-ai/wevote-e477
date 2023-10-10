import * as yup from 'yup';

export const electionValidationSchema = yup.object().shape({
  name: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  description: yup.string().nullable(),
  university_id: yup.string().nullable().required(),
});
