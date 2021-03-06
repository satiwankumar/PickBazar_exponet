import React, { useContext } from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, Form } from 'formik';
import { closeModal } from '@redq/reuse-modal';
import TextField from 'components/TextField/TextField';
import Button from 'components/Button/Button';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_ADDRESS } from 'graphql/mutation/address';
import { FieldWrapper, Heading } from './Update.style';
import { ProfileContext } from 'contexts/profile/profile.context';
import { AuthContext } from 'contexts/auth/auth.context';


// Shape of form values
interface FormValues {
  id?: number | null;
  name?: string;
  info?: string;
}

// The type of props MyForm receives
interface MyFormProps {
  item?: any | null;
}

// Wrap our form with the using withFormik HoC
const FormEnhancer = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      id: props.item.id || null,
      name: props.item.address_type || '',
      info: props.item.address || '',
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Title is required!'),
    info: Yup.string().required('Address is required'),
  }),
  handleSubmit: values => {
    console.log(values, 'values');
    // do submitting things
  },
});

const UpdateAddress = (props: FormikProps<FormValues> & MyFormProps) => {
  const {
    isValid,
    item,
    values,
    touched,
    errors,
    dirty,
    handleChange,
    handleBlur,

    handleReset,
    isSubmitting,
  } = props;

  
  const addressValue = {
    id: values.id,
    type: 'secondary',
    address_type: values.name,
    address: values.info,
  }
  const {
    authState: { isAuthenticated }} = React.useContext<any>(AuthContext);
  const { state, dispatch } = useContext(ProfileContext);

  const [updateAddress, { data }] = useMutation(UPDATE_ADDRESS);

  const handleSubmit = async () => {
    if (isValid) {
      console.log(values, 'address data');
if(isAuthenticated){
      const addressData = await updateAddress({
        variables: { id:values.id,address_type:values.name,address:values.info },
      });
      
      console.log("adress",addressData)
    }
     
      dispatch({ type: 'ADD_OR_UPDATE_ADDRESS', payload: { id:values.id, address_type: values.name, address:values.info} });
    
      closeModal();
    }
    
  };
  return (
    <Form>
      <Heading>{item && item.id ? 'Edit Address' : 'Add New Address'}</Heading>
      <FieldWrapper>
        <TextField
          id='name'
          type='text'
          placeholder='Enter Title'
          error={touched.name && errors.name}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FieldWrapper>

      <FieldWrapper>
        <TextField
          id='info'
          as='textarea'
          placeholder='Enter Address'
          error={touched.info && errors.info}
          value={values.info}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FieldWrapper>

      <Button
        onClick={handleSubmit}
        type='submit'
        title='Save Address'
        size='medium'
        fullwidth={true}
      />
    </Form>
  );
};

export default FormEnhancer(UpdateAddress);
