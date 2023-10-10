import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
  Center,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState, useRef } from 'react';
import * as yup from 'yup';
import useSWR from 'swr';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { getVoteById, updateVoteById } from 'apiSdk/votes';
import { voteValidationSchema } from 'validationSchema/votes';
import { VoteInterface } from 'interfaces/vote';
import { UserInterface } from 'interfaces/user';
import { CandidateInterface } from 'interfaces/candidate';
import { ElectionInterface } from 'interfaces/election';
import { getUsers } from 'apiSdk/users';
import { getCandidates } from 'apiSdk/candidates';
import { getElections } from 'apiSdk/elections';

function VoteEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const { data, error, isLoading, mutate } = useSWR<VoteInterface>(
    () => (id ? `/votes/${id}` : null),
    () => getVoteById(id),
  );
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: VoteInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await updateVoteById(id, values);
      mutate(updated);
      resetForm();
      router.push('/votes');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<VoteInterface>({
    initialValues: data,
    validationSchema: voteValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Votes',
              link: '/votes',
            },
            {
              label: 'Update Vote',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Vote
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <FormControl id="vote_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Vote Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.vote_date ? new Date(formik.values?.vote_date) : null}
              onChange={(value: Date) => formik.setFieldValue('vote_date', value)}
            />
          </FormControl>
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <AsyncSelect<CandidateInterface>
            formik={formik}
            name={'candidate_id'}
            label={'Select Candidate'}
            placeholder={'Select Candidate'}
            fetcher={getCandidates}
            labelField={'campaign_statement'}
          />
          <AsyncSelect<ElectionInterface>
            formik={formik}
            name={'election_id'}
            label={'Select Election'}
            placeholder={'Select Election'}
            fetcher={getElections}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/votes')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'vote',
    operation: AccessOperationEnum.UPDATE,
  }),
)(VoteEditPage);