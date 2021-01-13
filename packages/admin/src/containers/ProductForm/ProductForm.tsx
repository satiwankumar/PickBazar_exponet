import React, { useState, useCallback } from 'react';
import CKEditor from "react-ckeditor-component";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uuidv4 from 'uuid/v4';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { Scrollbars } from 'react-custom-scrollbars';
import { useDrawerDispatch } from '../../context/DrawerContext';
import Uploader from '../../components/Uploader/Uploader1';
import Button, { KIND } from '../../components/Button/Button';
import DrawerBox from '../../components/DrawerBox/DrawerBox';
import { Row, Col } from '../../components/FlexBox/FlexBox';
import Input from '../../components/Input/Input';
import { Textarea } from '../../components/Textarea/Textarea';
import Select from '../../components/Select/Select';
import { FormFields, FormLabel } from '../../components/FormFields/FormFields';
import {Trash, Plus} from '../../components/AllSvgIcon'
import { useStyletron } from 'baseui';
import { Combobox, SIZE } from 'baseui/combobox';
import { FormControl } from 'baseui/form-control';
import {
  Form,
  DrawerTitleWrapper,
  DrawerTitle,
  FieldDetails,
  ButtonGroup,
} from '../DrawerItems/DrawerItems.style';



const GET_PRODUCTS = gql`

 


query getCategory($filter_category_id:Int){
  getCategory(category_id:$filter_category_id,filter_by_name: null){
    id
    image
    name
    slug
    type
    subcategories {
      id
      name
      slug
      position
      is_searchable
      parent_id
  
    
}
  },
    getBrand(filter_text: null,category_id:null){
        name
    },
      getProductVariations{
              id
              variation_name
          
      },
      getproducts(filter_category_id:null ,filter_by_name:null,brand_id:null){
        id
       brand{
         name
       },
       slug
        price
        selling_price
        unit
        qty
        actual_size,
        nominal_size
        name
        description
        productImages{
         id
         product_id
         image
         }
         productVariations{
          variations{
              id
              variation_name
              variation_quantity
       variation_price
          }
        }
        categories{
            id
            name
        }
     
      }
  

}`


const CREATE_PRODUCT = gql`
  mutation createProduct($brand:String!,$name:String!,$file:[Upload],$price:Float,$unit:String,$description:String,$actual_size:String!,$nominal_size:String!,$variation:String, $selling_price:Float,$category_id:Int!,$qty:Int,$sub_category_id:Int!,$related_products:String) {  
      createProduct(brand:$brand,name:$name,file:$file,price:$price,unit:$unit,description:$description,actual_size:$actual_size,nominal_size:$nominal_size,variation:$variation,selling_price:$selling_price,qty:$qty,category_id:$category_id,sub_category_id:$sub_category_id,related_products:$related_products)
         }`;

type Props = any;

const AddProduct: React.FC<Props> = props => {
  const dispatch = useDrawerDispatch();
  const closeDrawer = useCallback(() => dispatch({ type: 'CLOSE_DRAWER' }), [
    dispatch,
  ]);
  const { register, handleSubmit, setValue,errors } = useForm();
  const [type, setType] = useState([]);
  const [variation, setVariations] = useState([{variation_name:"",variation_price :0,variation_quantity:0,variation_sell_price:0}]);
  // let [variation_price, setVariationsPrice] = useState({});
  const [tag, setTag] = useState([]);
  const [Related, setRelatedProducts] = useState([]);

  const [description, setDescription] = useState('');
  const [content,setContent] = useState({content:""})
  const [css] = useStyletron();
  const [brands, setBrands] = React.useState([]);
  const [files, setFiles] = React.useState([]);
  




  React.useEffect(() => {
    register({ name: 'type', required: true });
    register({ name: 'categories', required: true });
    register({ name: 'image', required: true });
    register({ name: 'description' });
  }, [register]);


  const handleDescriptionChange = e => {
    const value = e.target.value;
    setValue('description', value);
    setDescription(value);
  };

  const [createProduct] = useMutation(CREATE_PRODUCT)

  const { data, refetch } = useQuery(GET_PRODUCTS, {
    variables: { filter_category_id: null, filter_by_name: null }
  })
  console.log("dataaaa",data)
  const categories = data && data.getCategory.filter(item => item.parent_id == null)
  const brandsOptions = data && data.getBrand.map(item => { return item })
  console.log("brandoptiopns",brandsOptions)
  const Subcategories = []
  data && data.getCategory.map(
    item => item.subcategories.map(
      item => Subcategories.push(item)
    ))
const products = []
data && data.getproducts.map(item=>
    {
      let branditems = {...item,"brandWithName":`${item.brand.name} ${item.name} `}

  products.push(branditems)}) 
   console.log("productssssssssssssssssssssssss",products)
  const AddVariation  = () =>{
    setVariations((previous)=>[...previous,{variation_name:"",variation_price:0,variation_quantity:0,variation_sell_price:0}])

  }
  const removeVariation  = (i) =>{

   let variaton =[...variation]
   variaton.splice(i,1)
   setVariations(variaton)

  }
  const handleMultiChange = ({ value }) => {
    setValue('categories', value);
    console.log(value)
    setTag(value);
  };
  const handleMultiProductsChange = ({ value }) => {
    // setValue('categories', value);
    // console.log(value)
    setRelatedProducts(value);
  };
  const handleTypeChange = ({ value }) => {
    console.log("value", value)
    // setValue('type', value);
    setType(value)
    refetch({
      // filter_category_id: value.length ? value[0].id : null,
      filter_category_id:  null,
      filter_by_name: null
    });
  };

  const getSubCategory = (Subcategories)=>{
    const sub = type.length>0?data && Subcategories.filter(item=>item.parent_id==type[0].id):""
    console.log("dataaaaaa",sub)
    return sub
  }
// getSubCategory(data && Subcategories)

  // const handleVariationChange = ({ value }, _id) => {
  //   // console.log("variation", value)
  //   setVariations({
  //     ...variation,
  //     [_id]: {
  //       ...value[0]
  //     }

  //   });

  // };
  // const handlePriceChange = (e, _id) => {
  //   // console.log("change", e.target.name, e.target.value)
  //   let newvalue = e.target.value
  //   setVariationsPrice({
  //     ...variation_price,
  //     [_id]: {
  //       newvalue
  //     }
  //   })
  // }

  const SelectChange = (e) => {
    // console.log("value", e.target.value)
  
    setBrands(e.target.value)

  };
  const handleUploader = files => {
    // console.log("files",files)
    // setValue('image', files[0]);
    // console.log("filessssss",files)
    // setFiles((previous)=>[...previous,{id : 22,image:files[0].image}])

    setFiles((previous)=>[...previous,files[0]])


  };
  const  onChange = (evt)=>{
    // console.log("onChange fired with event info: ", evt);
    var newContent = evt.editor.getData();
    setContent({
      content: newContent
    })
    setDescription(evt.editor.getData())

  }
  
  const  onBlur= (evt)=>{
    console.log("onBlur event called with event info: ", evt);
  }
  
  const afterPaste = (evt)=>{
    console.log("afterPaste event called with event info: ", evt);
  }
  const onSubmit = async data => {
    console.log("dataaaaaaaaaa",data,errors)


    let variationsData = []
    let variationPrice = []
    let relatedProducts = []
    // for (const property in variation) {
    //   variationsData.push(variation[property].id)
    // }
    // for (const property in variation_price) {
    //   variationPrice.push(parseFloat(variation_price[property].newvalue))
    // }
    // console.log("filesssss", files)
    // console.log("dataaa", variationPrice)
    

    for (const property in Related) {
      relatedProducts.push(Related[property].id)
    }
    console.log("Related",variation)

    try {
      const result = await createProduct({
        variables: {
          brand: brands,
          name: data.name,
          description: description?description:null,
          actual_size: data.actual_size,
          nominal_size: data.nominal_size,
          file: files?files:null,
          price: data.price?data.price:0.0,
          unit: "",
          selling_price: data.salePrice ? data.salePrice : 0.0,
          qty: data.quantity?data.quantity:0,
          variation: variation.length > 0 ? JSON.stringify(variation) : "",
          // variation_price: variationPrice.length > 0 ? JSON.stringify(variationPrice) : "",
          category_id: type[0].id,
          sub_category_id: tag[0].id,
          related_products:relatedProducts.length > 0 ? JSON.stringify(relatedProducts) : ""

        }
      });
      if (result) {
        // if (result.data.deleteUser.status == 200) {
        toast.success(`🦄  "Product Created Successfully" `, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,

        })

      }

      else {

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

      closeDrawer();
      setTimeout(() => {

        window.location.reload()

      }, 2000);

    } catch (error) {
      console.log("error", error)
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
  
  

  const getvariation = () =>{
    return variation.map((item,i)=>
    ( <>
     <Row>
            <Col xl={3} lg={6} md={6}>
            <div className="mt-10"><FormLabel>name</FormLabel></div>
                      <input type="text"  value={variation[i].variation_name}
                    name="variation_name"
                    onChange={((e)=>handleVariationChange(e,i))} className="form-control brand-flied"/>
            </Col>
         
            <Col xl={3} lg={6} md={6}>
            <div className="mt-10"><FormLabel>Quantity</FormLabel></div>
                      <input type="number" step="any"
                    min="0"  value={variation[i].variation_quantity}
                    onChange={((e)=>handleVariationChange(e,i))}
                    name="variation_quantity" className="form-control brand-flied"/>
            </Col>
               <Col  xl={3} lg={6} md={6}>
            <div className="mt-10"><FormLabel>Price</FormLabel></div>
                      <input type="number" step="any"
                    min="0"   value={variation[i].variation_price}
                    onChange={((e)=>handleVariationChange(e,i))}
                    name="variation_price" className="form-control brand-flied"/>
            </Col>
            <Col xl={3} lg={6} md={6}>
            <div className="mt-10"><FormLabel>Sell Price</FormLabel></div>
                      <input type="number" step="any"
                    min="0"  value={variation[i].variation_sell_price}
                    onChange={((e)=>handleVariationChange(e,i))}
                    name="variation_sell_price" className="form-control brand-flied"/>
            </Col>
                <Col xl={3} lg={6} md={6}>
                {
   i == (variation.length - 1)?  (<Button type="button"   startEnhancer={() => <Plus />} title="add variation"  onClick={()=>AddVariation()} className="nm-bt mt-40">add</Button>)
   :(<Button type="button" title="add variation"  startEnhancer={() => <Trash />} onClick={()=>removeVariation(i)} className="nm-bt mt-40 red-bg">Remove</Button>)

                }
     

            </Col>
           
  </Row>

    
    
    </>
  
    )
        
      )
  } 

  const handleVariationChange = (e,index)=>{
      e.preventDefault()
      let newArr = [...variation]; // copying the old datas array
      console.log(newArr[index][e.target.name])
      newArr[index] = {...newArr[index],[e.target.name]:e.target.value};

      setVariations(newArr)
    
    
        
    
        // [variation[index].[e.target.name]]:e.target.value[index]})
    
      
      
      console.log("e",e)
  }

  console.log("after add", files)
  // console.log("after add", variation_price)

  return (
    <>
      <DrawerTitleWrapper>
        <DrawerTitle>Add Product</DrawerTitle>
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
              <FieldDetails>Upload your Product image here</FieldDetails>
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
                <Uploader onChange={handleUploader} multi={true} required={false} />

              </DrawerBox>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <FieldDetails>
                Add your Product description and necessary information from here
              </FieldDetails>
            </Col>

            <Col lg={8}>
              <DrawerBox>
                <FormFields>
                  <FormLabel>Name</FormLabel>
                  <Input
                    inputRef={register({ required: true })}
                    name="name"
                  />
                </FormFields>

                <FormFields>
                  <FormLabel >Brand Name </FormLabel>
                  <input type="text" list="data" name="brand" ref={register({ required: true })} className="form-control brand-flied"   onChange={(value) => SelectChange(value)}  />

                  <datalist id="data">
                    {data && brandsOptions.map((item, key) =>
                      <option key={key} value={item.name} />
                    )}
                  </datalist>
                  {errors.brand && <span style={{color: "red"}}>This field is required</span>}




                </FormFields>




                <FormFields>
                  <FormLabel>Description</FormLabel>
                  {/* <Textarea
                    value={description}
                    onChange={handleDescriptionChange}
                    required="true"
                  /> */}
                </FormFields>

                <CKEditor 
              activeClass="p10" 
              content={content.content} 
              events={{
                "blur": onBlur,
                "afterPaste":afterPaste,
                "change": onChange
              }}
             />

                <FormFields>
                  <FormLabel>Actual Size</FormLabel>
                  <Input
                    inputRef={register({ required: true })}
                    name="actual_size"
                   
                  />
                </FormFields>
                <FormFields>
                  <FormLabel>Nominal Size</FormLabel>
                  <Input
                    inputRef={register({ required: true })}
                    name="nominal_size"
                    
                  />
                </FormFields>
                {/* <FormFields>
                  <FormLabel>Unit</FormLabel>
                  <Input type="text" inputRef={register} name="unit" required="true" />
                </FormFields> */}

                {/* <FormFields>
                  <FormLabel>Price</FormLabel>
                  <Input
                    type="number"
                    step="any"
                    min="0"
                    inputRef={register({ required: true })}
                    name="price"
                    required="true"
                  />
                </FormFields> */}

                    

                {getvariation()}
             
                


                {/* <FormFields>
                  <FormLabel>Sale Price</FormLabel>
                  <Input type="number" inputRef={register} name="salePrice" step="any"
                    min="0" />
                </FormFields> */}

                
                {/* <FormFields>
                  <FormLabel>Product Quantity</FormLabel>
                  <Input
                    type="number"
                    min="0"
                    inputRef={register({ required: true })}
                    name="quantity"
                  />
                </FormFields> */}


                <FormFields>
                  <FormLabel>Type</FormLabel>
                  <Select

                    options={data && categories}
                    labelKey="name"
                    valueKey="id"
                    required
                    // placeholder="Product Type"
                    value={type}
                    searchable={false}
                    onChange={handleTypeChange}
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

                <FormFields>
                  <FormLabel>Categories</FormLabel>
                  <Select
                    options={data &&getSubCategory(Subcategories)}
                    labelKey="name"
                    valueKey="id"
                    // placeholder="Product Tag"
                    value={tag}
                    required
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
                    multi
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>Related Products</FormLabel>
                  <Select
                    options={data &&products}
                    labelKey="brandWithName"
                    valueKey="id"
                    // placeholder="Product Tag"
                    value={Related}
                    onChange={handleMultiProductsChange}
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
                    multi
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
            Create Product
          </Button>
        </ButtonGroup>
      </Form>
    </>
  );
};

export default AddProduct;
