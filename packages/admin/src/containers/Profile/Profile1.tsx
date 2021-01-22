import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Uploader from '../../components/Uploader/Uploader';
import Input from '../../components/Input/Input';
import { Textarea } from '../../components/Textarea/Textarea';
import Select from '../../components/Select/Select';
import Button from '../../components/Button/Button';
import DrawerBox from '../../components/DrawerBox/DrawerBox';
import { Grid, Row, Col } from '../../components/FlexBox/FlexBox';
import { Form, FieldDetails } from '../DrawerItems/DrawerItems.style';
import { FormFields, FormLabel } from '../../components/FormFields/FormFields';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks';


// const options = [
//   { value: 'active', label: 'Active' },
//   { value: 'maintenance', label: 'Maintenance' },
//   { value: 'turn-off', label: 'Down' },
// ];


const GET_PROFILE = gql`
  query profile{

   
    profile{
        first_name
        last_name
        email
        image
    }

}`

const UPDATE_PROFILE = gql`
  mutation profileUpdate($first_name: String!,$last_name:String!,$email:String!,$file: Upload) {
    profileUpdate(first_name: $first_name,last_name:$last_name,email:$email,file:$file)
  }
`;




type Props = {};









const Profile: React.FC<Props> = () => {

  const { register, handleSubmit, setValue } = useForm();



  const {data,error} = useQuery(GET_PROFILE)

  
  const [profileUpdate] = useMutation(UPDATE_PROFILE)
       

  const [firstname, setFirstname] = useState('xyz')
const [lastname, setlastname] = useState('xyz')
const [email, setEmail] = useState('xyz@gmail.com')
const [Image, setImages] = useState("")



  useEffect(() => {
    
    setFirstname(data && data.profile.first_name || '')
    setlastname(data &&data.profile.last_name|| '')
    setEmail(data && data.profile.email || '')
    setImages(data && data.profile.image ||'')
  
}, [data])

  
  // const handleMultiChange = ({ value }) => {
  //   setValue('reactSelect', value);
  //   setCategory(value);
  // };
  console.log("data",Image)
  const handleUploader = files => {
    console.log("files",files)
    setImages(files[0]);
  };




//   React.useEffect(() => {
//     register({ name: 'reactSelect' });
//     register({ name: 'image' });
//   }, [register]);


  const onSubmit = async data =>{
    console.log("data",firstname,lastname,email,Image)
    const result  = await profileUpdate({
      variables:{
        
          first_name:firstname,
          last_name:lastname,
          email:email,
          file:typeof(Image)==='object'?Image:"",
    }})
    console.log("result",result)
      if (result.data) {
      
       
    
         
              
                    toast.success(`🦄  ${result.data.profileUpdate} `, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
  
            
          })
 
          } 
        
        else{
                          toast.error(`🦄 SomeThing Went Wrong`, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            })
    
  
    }
  setTimeout(()=>{
    window.location.reload();

  },3000)
    
  };
  const uplaoder= (url)=>{
    return <Uploader imageURL={url} onChange={handleUploader}  />
   }
 
 


  return (
    <Grid fluid={true}>
      <Form onSubmit={handleSubmit(onSubmit)} style={{ paddingBottom: 0 }}>
        <Row>
          <Col md={4}>
            <FieldDetails>Upload your site logo here</FieldDetails>
          </Col>
        
              <Col md={8}>
           
            
          
                <DrawerBox>
                {data && data.profile.image?uplaoder(data.profile.image):""}
            
                </DrawerBox>
              </Col> 
        
        </Row>

        <Row>
          <Col md={4}>
            <FieldDetails>
              Add your site description and necessary information from here
            </FieldDetails>
          </Col>

          <Col md={8}>
            <DrawerBox>
              <FormFields>
                <FormLabel>First Name</FormLabel>
                
                <Textarea
                  name="first_name"
                  value={firstname}
                  required="true"
                  onChange={e => setFirstname(e.target.value)}
                />
                
              </FormFields>

              <FormFields>
                <FormLabel>LastName</FormLabel>
                <Textarea
                  name="last_name"
                  value={lastname}
                  onChange={e => setlastname(e.target.value)}
                />
              </FormFields>
              
              <FormFields>
                <FormLabel>Email
                </FormLabel>
                <Textarea
                    name="email"
                  value={email}
                  onChange={e => setlastname(e.target.value)}
                  disabled="disabled"
                />
              </FormFields>
              
              

     

              <FormFields>
                <Button
                  type="submit"
                  overrides={{
                    BaseButton: {
                      style: ({ $theme }) => ({
                        width: '100%',
                        marginLeft: 'auto',
                        borderTopLeftRadius: '3px',
                        borderTopRightRadius: '3px',
                        borderBottomLeftRadius: '3px',
                        borderBottomRightRadius: '3px',
                      }),
                    },
                  }}
                >
                  Submit
                </Button>
              </FormFields>
            </DrawerBox>
          </Col>
        </Row>
      </Form>
      <ToastContainer autoClose={2000} />
    </Grid>
  );
};

export default Profile;
