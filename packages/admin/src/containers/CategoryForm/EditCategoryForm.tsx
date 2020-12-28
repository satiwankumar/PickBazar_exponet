import React, { useState, useCallback } from 'react';

import { useForm } from 'react-hook-form';
import uuidv4 from 'uuid/v4';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useDrawerDispatch,useDrawerState } from '../../context/DrawerContext';
import { Scrollbars } from 'react-custom-scrollbars';
import Uploader from '../../components/Uploader/Uploader';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import Button, { KIND } from '../../components/Button/Button';
import DrawerBox from '../../components/DrawerBox/DrawerBox';
import { Row, Col } from '../../components/FlexBox/FlexBox';
// import { useDrawerDispatch, useDrawerState } from '../../context/DrawerContext';

import {
  Form,
  DrawerTitleWrapper,
  DrawerTitle,
  FieldDetails,
  ButtonGroup,
} from '../DrawerItems/DrawerItems.style';
import { FormFields, FormLabel } from '../../components/FormFields/FormFields';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// const GET_CATEGORIES = gql`
//   query getCategories($type: String, $searchBy: String) {
//     categories(type: $type, searchBy: $searchBy) {
//       id
//       icon
//       name
//       slug
//       type
      
//     }
//   }
// `;
const GET_CATEGORIES = gql`
query getCategoryWithoutFilter{
  getCategoryWithoutFilter{
    id
    name
    image
    type
    slug
   
    parent_id
    subcategories {
      name
      slug
      position
      is_searchable
      parent_id
       subcategories {
      name
      slug
      position
      is_searchable
      parent_id
    }
    }

    }
}`
const Edit_CATEGORY = gql`

  mutation editCategory($parent_id: Int,$name:String!,$slug:String,$file: Upload,$category_id:Int,$content:String) {
    editCategory(parent_id: $parent_id,name:$name,slug:$slug,file:$file,category_id:$category_id,content:$content)
  }
`;


type Props = any;
toast.configure()

const AddCategory: React.FC<Props> = props => {
  const dispatch = useDrawerDispatch();
  const Categoryitem = useDrawerState('data');
  console.log("Categoryitem",Categoryitem)
  const closeDrawer = useCallback(() => dispatch({ type: 'CLOSE_DRAWER' }), [
    dispatch,
  ]);


  const { register, handleSubmit, setValue } = useForm();
  
  
  const [formdata, setFormData] = useState(Categoryitem);
  console.log("formdata",formdata)

  // const [slug, setSlug] = useState('');
  // const [file, setFile] = useState('');
  
  // const [category, setCategory] = useState([]);
  // const [category, setCategory] = useState([]);
  
  React.useEffect(() => {
    register({ name: 'parent' });
    register({ name: 'image' });
  }, [register]);
  const {data} = useQuery(GET_CATEGORIES)
  const [editCategory] = useMutation(Edit_CATEGORY)


  const categories= data && data.getCategoryWithoutFilter.filter(item=> item.parent_id==null)
  
  
  
  const valueData =data && categories.filter(item=> item.id===formdata.parent_id)
  
  
  
  const [Parentcategory, setCategory] = useState(data&& valueData);


  // console.log("category ",typeof(categories),categories)
  const Subcategories = data && data.getCategoryWithoutFilter.map(item=>item.subcategories.map(
        item=> {return item}
  ))
  //   , {
  //   update(cache, { data: { createCategory } }) {
  //     const { categories } = cache.readQuery({
  //       query: GET_CATEGORIES,
  //     });

  //     cache.writeQuery({
  //       query: GET_CATEGORIES,
  //       data: { categories: categories.concat([createCategory]) },
  //     });
  //   },
  // });

  const onSubmit = async ({ name, slug, parent, image }) => {


try{

    console.log("daty",name,slug,parent,image)
    // const newCategory = {
    //   id: uuidv4(),
    //   name: name,
    //   type: parent[0].value,
    //   slug: slug,
    //   icon: image,
    //   creation_date: new Date(),
    // };
 const resulting = await editCategory({
      variables: { 
        category_id:formdata.id,
        parent_id:Parentcategory.length>0?Parentcategory[0].id:null,
        name:formdata.name,
        slug:formdata.slug,
        content:formdata.content?formdata.content:null,
        file:image

      },
    }); 
    // console.log(result)
    
    if (resulting.data) {
       
   
              
      toast.success(`🦄 Category Updated Successfully`, {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,


})

setTimeout(() => {
  window.location.reload()
    
  }, 3000);
    

} 







    closeDrawer();
  } catch (error) {
    console.log("errrorrrr",error)
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
  const handleChange = ({ value }) => {
    // setValue('parent', value);
    setCategory(value);
  };
  const handleUploader = files => {
    setValue('image', files[0]);
  };
  const handleChangeInput = (e)=>{
      setFormData({...formdata,[e.target.name]:e.target.value})
      console.log(formdata)
  }

  return (
    <>
      <DrawerTitleWrapper>
        <DrawerTitle>Update Category</DrawerTitle>
      </DrawerTitleWrapper>

      <Form onSubmit={handleSubmit(onSubmit)} style={{ height: '100%' }}>
        <Scrollbars
          autoHide
          renderView={props => (
            <div {...props} style={{ ...props.style, overflowX: 'hidden' }} />
          )}
          renderTrackHorizontal={props => (
            <div
              {...props}
              style={{ display: 'none' }}
              className="track-horizontal"
            />
          )}
        >
          <Row>
            <Col lg={4}>
              <FieldDetails>Upload your Category image here</FieldDetails>
            </Col>
            <Col lg={8}>
              <DrawerBox
                overrides={{
                  Block: {
                    style: {
                      width: '100%',
                      height: 'auto',
                      padding: '30px',
                      borderRadius: '3px',
                      backgroundColor: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',

                    },
                  },
                }}
              >
                <Uploader  onChange={handleUploader} imageURL={formdata.image} required={false}/>
              </DrawerBox>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <FieldDetails>
                Add your category description and necessary informations from
                here
              </FieldDetails>
            </Col>

            <Col lg={8}>
              <DrawerBox>
                <FormFields>
                  <FormLabel>Category Name</FormLabel>
                  <Input
                    inputRef={register({ required: true, maxLength: 20 })}
                    name="name"
                    value={formdata.name}
                    onChange={(e)=>handleChangeInput(e)}
                    
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>Slug</FormLabel>
                  <Input
                    inputRef={register({ required: true, maxLength: 20 })}
                    name="slug"
                    value={formdata.slug}
                    disabled={true}
                    onChange={(e)=>handleChangeInput(e)}

                  />
                </FormFields>
                <FormFields>
                  <FormLabel>Content</FormLabel>
                  <Input
                    // inputRef={register({ required: true, maxLength: 20 })}
                    value={formdata.content}
                    name="content"
                    onChange={(e)=>handleChangeInput(e)}

                  />
                </FormFields>
                <ToastContainer autoClose={2000} />

                <FormFields>
                  <FormLabel>Parent</FormLabel>
                  <Select
                    options={categories}
                    labelKey="name"
                    valueKey="id"
                    value={Parentcategory}
                    placeholder="Ex: Choose parent category"
                    // value={category}
                    searchable={false}
                    onChange={handleChange}
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
                </FormFields>
              </DrawerBox>
            </Col>
          </Row>
        </Scrollbars>

        <ButtonGroup>
          <Button
            kind={KIND.minimal}
            onClick={closeDrawer}
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  width: '50%',
                  borderTopLeftRadius: '3px',
                  borderTopRightRadius: '3px',
                  borderBottomRightRadius: '3px',
                  borderBottomLeftRadius: '3px',
                  marginRight: '15px',
                  color: $theme.colors.red400,
                }),
              },
            }}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  width: '50%',
                  borderTopLeftRadius: '3px',
                  borderTopRightRadius: '3px',
                  borderBottomRightRadius: '3px',
                  borderBottomLeftRadius: '3px',
                }),
              },
            }}
          >
            Update Category
          </Button>
        </ButtonGroup>
<ToastContainer autoClose={2000}/>
      </Form>
    </>
  );
};

export default AddCategory;
// setTimeout(() => {
    
//   }, 5000);