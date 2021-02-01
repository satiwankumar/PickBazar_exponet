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
import { url } from 'inspector';


// const options = [
//   { value: 'active', label: 'Active' },
//   { value: 'maintenance', label: 'Maintenance' },
//   { value: 'turn-off', label: 'Down' },
// ];

const getSiteData = gql`
query getSiteSetting{
  getSiteSetting{
        site_name
        site_description
        image
}}`

const SITE_SETTING = gql`
  mutation siteSetting($site_name:String,$site_description:String,$file: Upload){
    siteSetting(site_name:$site_name,site_description: $site_description,file:$file)
}`








type Props = {};









const SiteSettingsForm: React.FC<Props> = () => {
const {data,error} = useQuery(getSiteData)

  const { register, handleSubmit, setValue } = useForm();

  const [category, setCategory] = useState([]);
  const [description, setDescription] = React.useState('')
  
  const [site_name, setSiteName] = React.useState('');
  
  useEffect(() => {
  setDescription(data&& data.getSiteSetting.site_description)
  setSiteName(data&& data.getSiteSetting.site_name)
  }, [data&&data.getSiteSetting])
  
  // const handleMultiChange = ({ value }) => {
  //   setValue('reactSelect', value);
  //   setCategory(value);
  // };
  
  const handleUploader = files => {
    setValue('reactDropzone', files[0]);
  };




  React.useEffect(() => {
    register({ name: 'reactSelect' });
    register({ name: 'reactDropzone' });
  }, [register]);

  const [siteSetting] = useMutation(SITE_SETTING)
  const onSubmit = async data =>{

try{



    console.log("data",data,description,site_name)
    const result  = await siteSetting({
      variables:{
          file:typeof(data.reactDropzone)=='object'?data.reactDropzone:"",
          site_name:site_name,
          site_description:description
    }})
    console.log("result",result)
      if (result.data) {
      
       
    
         
              
                    toast.success(`🦄  ${result.data.siteSetting} `, {
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
  setTimeout(() => {
    window.location.reload();
    
  }, 3000);
  } catch (error) {
    toast.error(`🦄 SomeThing Went Wrong`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })


  }
    
  };
  const uplaoder= (url)=>{
   return <Uploader imageURL={url} onChange={handleUploader} />
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
              {data&& data.getSiteSetting.image?uplaoder(data.getSiteSetting.image):""}
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
                <FormLabel>Site Name</FormLabel>
                
                <Textarea
                  value={site_name}
                  onChange={e => setSiteName(e.target.value)}
                />
                
              </FormFields>

              <FormFields>
                <FormLabel>Site Description</FormLabel>
                <Textarea
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </FormFields>

              {/* <FormFields>
                <FormLabel>Status</FormLabel>
                <Select
                  options={options}
                  labelKey="label"
                  valueKey="value"
                  placeholder="Choose current status"
                  value={category}
                  searchable={false}
                  onChange={handleMultiChange}
                  overrides={{
                    Placeholder: {
                      style: ({ $theme }) => {
                        return {
                          ...$theme.typography.fontBold14,
                          color: $theme.colors.textNormal,
                        };
                      },
                    },
                    DropdownListItem: {
                      style: ({ $theme }) => {
                        return {
                          ...$theme.typography.fontBold14,
                          color: $theme.colors.textNormal,
                        };
                      },
                    },
                    OptionContent: {
                      style: ({ $theme, $selected }) => {
                        return {
                          ...$theme.typography.fontBold14,
                          color: $selected
                            ? $theme.colors.textDark
                            : $theme.colors.textNormal,
                        };
                      },
                    },
                    SingleValue: {
                      style: ({ $theme }) => {
                        return {
                          ...$theme.typography.fontBold14,
                          color: $theme.colors.textNormal,
                        };
                      },
                    },
                    Popover: {
                      props: {
                        overrides: {
                          Body: {
                            style: { zIndex: 5 },
                          },
                        },
                      },
                    },
                  }}
                />
              </FormFields> */}

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

export default SiteSettingsForm;
