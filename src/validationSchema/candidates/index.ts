import * as yup from 'yup';

export const candidateValidationSchema = yup.object().shape({
  campaign_statement: yup.string().nullable(),
  votes_received: yup.number().integer().nullable(),
  election_position: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  election_id: yup.string().nullable().required(),
});
