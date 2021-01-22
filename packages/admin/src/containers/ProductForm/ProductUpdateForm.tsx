import React, { useState, useCallback, useEffect } from 'react';
import CKEditor from "react-ckeditor-component";
import { getURl } from '../../utils';

import '../../style.css'
import { useForm } from 'react-hook-form';
import { Scrollbars } from 'react-custom-scrollbars';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDrawerDispatch, useDrawerState } from '../../context/DrawerContext';
import Uploader from '../../components/Uploader/Uploader1';
import Button, { KIND } from '../../components/Button/Button';
import DrawerBox from '../../components/DrawerBox/DrawerBox';
import { Row, Col } from '../../components/FlexBox/FlexBox';
import Input from '../../components/Input/Input';
import { Textarea } from '../../components/Textarea/Textarea';
import {Trash, Plus} from '../../components/AllSvgIcon'
import Select from '../../components/Select/Select';
import { FormFields, FormLabel } from '../../components/FormFields/FormFields';

import {
  Form,
  DrawerTitleWrapper,
  DrawerTitle,
  FieldDetails,
  ButtonGroup,
} from '../DrawerItems/DrawerItems.style';
import { setTimeout } from 'timers';


const GET_CATEGORIES = gql`
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
  getCategoryWithoutFilter{
    id
    name
    slug
    is_searchable
    parent_id
    image
    type
    
    },
  getBrand(filter_text: null,category_id:null){
    name
},

 getProductVariations{
              id
              variation_name
          
      }
    ,
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

const UPDATE_PRODUCT = gql`
# 
  mutation updateProduct($brand:String!,$name:String!,$file:[Upload],$price:Float,$unit:String,$description:String,$actual_size:String!,$variation:String,$nominal_size:String!,$selling_price:Float,$category_id:Int!,$sub_category_id:Int,$qty:Int,$product_id:Int!,$related_products:String) {  
    updateProduct(brand:$brand,name:$name,file:$file,price:$price,unit:$unit,description:$description,actual_size:$actual_size,variation:$variation,nominal_size:$nominal_size,selling_price:$selling_price,qty:$qty,category_id:$category_id,sub_category_id:$sub_category_id,product_id:$product_id,related_products:$related_products)
 
    
      }`;
  const DELETE_PRODUCT = gql`
mutation deleteProduct($product_id:Int!){
  deleteProduct(product_id:$product_id){
        token
        status
       message
    
}
    
      }`;



type Props = any;

const AddProduct: React.FC<Props> = () => {
  const dispatch = useDrawerDispatch();
  const data = useDrawerState('data');
  console.log("Updatedata",data)
  let unique=[]
console.log("updatedata",data)
  // Object.keys(data).length>0? data.productsImages.forEach(element => console.log("Updatedata",element)):""

  
  const closeDrawer = useCallback(() => dispatch({ type: 'CLOSE_DRAWER' }), [
    dispatch,
  ]);


  const { register, handleSubmit, errors, setValue } = useForm({
    defaultValues: data,
  });
  console.log("errors",errors)

  const {data:data1,refetch,error} = useQuery(GET_CATEGORIES,{
    variables: { filter_category_id: null, filter_by_name: null }
  })

  const products = []
data1 && data1.getproducts.map(item=>products.push(item)) 
   
  // console.log("dataaaaaaaaaaaaaaaaaaa",data1)

  // const imagesData = data.productImages.map(item=> item.image=getURl(item.image))
  
  
  const [productid,setProductId ] = useState(data && data.id)
  const [content,setContent] = useState({content:data&&data.description})

const filterVariation =[]
data.productVariations.map(item=>
  {filterVariation.push(item.variations)})

console.log(data.categories[1])
  const [variation, setVariations] = useState( data && filterVariation);
  const [type, setType] = useState(data.categories[0]!==undefined?[data.categories[0]]:[]);
  const [brand, setBrands] = useState(data && data.brand);
  const [tag, setTag] = useState(data.categories[1]!==undefined?[data.categories[1]]:[]);
  const [description, setDescription] = useState(data.description);
  const [files, setFiles] = React.useState(data && data.productImages);
  const [Related, setRelatedProducts] = useState(data && data.relatedProducts);
  const [newfiles, newFiles] = React.useState({});
  


//  let  productVariation = data && data.productVariations?data.productVariations:""
//  let extractedVariations=data && data.productVariations?productVariation.map(item=>{return item.variations}):""
//  let extractedPrices=data && data.productVariations?productVariation.map((item,index)=> {return  {newvalue : item.price}}):""
 const brandsOptions = data1 && data1.getBrand.map(item => { return item })

  // console.log("satibrands",brandsOptions)

// const [variation, setVariations] = useState({...extractedVariations})
// let [variation_price, setVariationsPrice] = useState({...extractedPrices});
const [updateProduct] = useMutation(UPDATE_PRODUCT)
const [deleteProduct] = useMutation(DELETE_PRODUCT)
const handleDelete = async(id)=>{
  // console.log("handleDelete ",id)
  console.log("relatedproducts",Related)

try {
  
const result =  await  deleteProduct({
  variables:{

    product_id:id
  }
})
if (result) {
  // if (result.data.deleteUser.status == 200) {
    toast.success(`🦄  ${result.data.deleteProduct.message} `, {
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

 
}
// const handleVariationChange = ({ value },_id) => {

//   setVariations({
//     ...variation,
//     [_id]:{
//       ...value[0]
//     }

//   });

// };
// const handlePriceChange = (e,_id) => {
//   // console.log("change", e.target.name, e.target.value)
//   let newvalue = e.target.value
//   setVariationsPrice({
//     ...variation_price,
//     [_id]:{
//       newvalue
//     }
//   })
// }
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

  const SelectChange = ( e ) => {
    // console.log("value", e.target.value)
    // setValue('type', value);
    setBrands({name:e.target.value})
  };

  const handleMultiProductsChange = ({ value }) => {
  
    setRelatedProducts(value);
  };
   
  const AddVariation  = () =>{
    let newArr = [...variation, {variation_name:"",variation_price:"",variation_quantity:"",variation_sell_price:""} ]; // copying the old datas array
    
    console.log("newArr",newArr)
    setVariations(newArr)

  }
  const removeVariation  = (i) =>{
console.log("variation",i)
    let variaton =[...variation]
    // console.log("variation",variation)
    variaton.splice(i,1)
    setVariations(variaton)
 
   }
  // console.log("dataaaaid",productid)
  const categories = data1 && data1.getCategoryWithoutFilter.filter(item => item.parent_id == null)
  const Subcategories = []
 data1 && data1.getCategory.map( item => item.subcategories.map( item => Subcategories.push(item) ))
 const getSubCategory = (Subcategories)=>{
  const sub = type.length>0?data && Subcategories.filter(item=>item.parent_id==type[0].id):""
  // console.log("dataaaaaa",sub)
  return sub
}

  React.useEffect(() => {
    register({ name: 'type' });
    register({ name: 'categories' });
    register({ name: 'image' });
    register({ name: 'description' });
  }, [register]);

  const handleMultiChange = ({ value }) => {
    setValue('categories', value);
    setTag(value);
  };
  const handleDescriptionChange = e => {
    const value = e.target.value;
    setValue('description', value);
    setDescription(value);
  };

  const handleTypeChange = ({ value }) => {
    setValue('type', value);
    setType(value);
    refetch({
      filter_category_id: value.length ? value[0].id : null,
      filter_by_name: null
    });
  };




  const createdUI = () =>{
    return variation.length>0?(
     variation.map((item,i)=>
    ( <>
     <Row>
            <Col md={3}>
            <div className="mt-10"><FormLabel>Name</FormLabel></div>
                      <input type="text" placeholder="variation name" value={variation[i].variation_name}
                    name="variation_name"
                    onChange={((e)=>handleVariationChange(e,i))} className="form-control brand-flied"/>
            </Col>
        
            <Col md={3}>
            <div className="mt-10"><FormLabel>Quantity</FormLabel></div>
                      <input type="number" step="any"
                    min="0" placeholder="variation quantity" value={variation[i].variation_quantity}
                    onChange={((e)=>handleVariationChange(e,i))}
                    name="variation_quantity" className="form-control brand-flied"/>
            </Col>
            <Col md={3}>
            <div className="mt-10"><FormLabel>Price</FormLabel></div>
                      <input type="number" step="any"
                    min="0" placeholder="variation price"  value={variation[i].variation_price}
                    onChange={((e)=>handleVariationChange(e,i))}
                    name="variation_price" className="form-control brand-flied"/>
            </Col>
            <Col md={3}>
            <div className="mt-10"><FormLabel>Sale Price</FormLabel></div>
                      <input type="number" step="any"
                    min="0" placeholder="variation_sell_price quantity" value={variation[i].variation_sell_price}
                    onChange={((e)=>handleVariationChange(e,i))}
                    name="variation_sell_price" className="form-control brand-flied"/>
            </Col>

            <Col md={12}>
            {
              i == (variation.length - 1) ? (

                <>
                  <Row>
                    <Col xl={3} lg={6} md={6}>
                      <Button type="button" startEnhancer={() => <Plus />} title="add variation" onClick={() => AddVariation()} className="add-vari nm-bt mt-40"></Button>
                    </Col>
                    <Col xl={3} lg={6} md={6}>
                      <Button type="button" title="add variation" startEnhancer={() => <Trash />} onClick={() => removeVariation(i)} className="del-vari nm-bt mt-40 red-bg"></Button>
                    </Col>

                  </Row>
                </>
              )
                : (
                  <Row>
                    <Col xl={3} lg={6} md={6}>

                      <Button type="button" title="add variation" startEnhancer={() => <Trash />} onClick={() => removeVariation(i)} className="del-vari nm-bt mt-40 red-bg"></Button>
                    </Col>

                  </Row>
                ) 
            } 
          </Col>
           
            
  </Row>

    
    
    </>
  
    )
        
      )
    ):(<><Button type="button"   startEnhancer={() => <Plus />} title="add variation"  onClick={()=>AddVariation()} className="nm-bt mt-40">Add Varitation</Button></>
    )
    
  } 

  const handleVariationChange = (e,index)=>{
    console.log("e.target.value",e.target.value)
    console.log("e.target.name",e.target.name)
    
      e.preventDefault()
      let newArr = [...variation]; // copying the old datas array
      console.log("newArray",newArr)
      // console.log("newArray",newArr[index][e.target.name])
      // console.log("newArrays",)
      let object = newArr[index];
      object[e.target.name] = e.target.value;
      console.log('newaray',newArr[index],e.target.name)
      newArr[index] = object;

    

      setVariations(newArr)
        
    
        // [variation[index].[e.target.name]]:e.target.value[index]})
    
      
      
      console.log("e",e)
  }


  const handleUploader = files => {
      // console.log(files[0])
    // setValue('image', files[0]);
  
      setFiles((previous)=>[...previous,{id : 22,image:files[0].image}])
    
    newFiles({...files})
  };


  // let variationsData = []
  // let variationPrice = []
  
 
  // for (const property in variation) {
  
  //   variationsData.push(variation[property])
  // }
  // for (const [key, value] of variationsData) {
  //   console.log("dataaaFilesVaruatiopnsdf",key, value);
  // }
  // for (const property in variation_price) {
  //   variationPrice.push(parseFloat(variation_price[property].newvalue))
  // }
  console.log("dataaaFiles",files)
const relatedProducts = []
  for (const property in Related) {
    relatedProducts.push(Related[property].id)
  }

  
  // console.log("Related",relatedProducts)
  console.log("updateddAta",variation)

  const onSubmit =async data => {
    try{

    const result = await  updateProduct({
      variables:{
        brand: brand.name,
        // discountInPercent: Number(data.discountInPercent),
        name: data.name,
        description: description?description:null,
        actual_size: data.actual_size,
        nominal_size: data.nominal_size,
        file: typeof(newfiles)=='object'?newfiles:"",
        price:data.price?data.price:0,
        unit: "",
        selling_price: data.selling_price?data.selling_price:0,
        qty: data.qty?data.qty:0,
        variation: variation.length > 0 ? JSON.stringify(variation) : "",
        category_id: type[0].id,
        sub_category_id:tag.length>0?tag[0].id:null,
        product_id:productid,
        related_products:relatedProducts.length > 0 ? JSON.stringify(relatedProducts) : ""
      }
    })
    if (result) {
        toast.success(`🦄  "Product Updated Successfullly" `, {
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
    }catch (error) {
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

  return (
    <>
      <DrawerTitleWrapper>
        <DrawerTitle>Update Product</DrawerTitle>
      </DrawerTitleWrapper>

      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{ height: '100%' }}
        noValidate
      >
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
              <DrawerBox>
                <Uploader onChange={handleUploader} multi={true}  imageURL={files} />
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
                  <input type="text" list="data" className="form-control brand-flied" value={brand.name}  onChange={(value)=>SelectChange(value)} />
                <datalist id="data">
                {data1 && brandsOptions.map((item, key) =>
                                <option key={key} value={item.name} />
                                )}
                </datalist> 
                </FormFields>
                


                <FormFields>
                  <FormLabel>Description</FormLabel>
                  <CKEditor 
              activeClass="p10" 
              content={content.content} 
              events={{
                "blur": onBlur,
                "afterPaste":afterPaste,
                "change": onChange
              }}
             />
                
                </FormFields>
                <FormFields>
                  <FormLabel>Actual Size</FormLabel>
                  <Input
                    inputRef={register({ required: true })}
                    
                    name="actual_size"
                    required="true"
                  />
                </FormFields>
                <FormFields>
                  <FormLabel>Nominal Size</FormLabel>
                  <Input
                    inputRef={register({ required: true })}
                    name="nominal_size"
                    required="true"
                  />
                </FormFields>
               

               { createdUI()}
     
              
             
                      <FormFields>
                  <FormLabel>Type</FormLabel>
                  <Select
                    options={data && categories}
                    labelKey="name"
                    valueKey="id"
                    value={type}
                    required
                    // searchable={false}
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
                    options={data1 && getSubCategory(Subcategories)}
                    labelKey="name"
                    valueKey="id"
                    placeholder="Product SubCategory"
                    value={tag}
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
                    labelKey="name"
                    valueKey="id"
                    placeholder="Related Products"
                    value={Related}
                    required
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

        <ButtonGroup className="update-pro-btns">
          <Button
          className="cancel-pro-btn"
            kind={KIND.minimal}
            onClick={closeDrawer}
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  width: '33%',
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
            type="submit"  className="mr-10 update-pro-btn"
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  width: '33%',
                  borderTopLeftRadius: '3px',
                  borderTopRightRadius: '3px',
                  borderBottomRightRadius: '3px',
                  borderBottomLeftRadius: '3px',
                }),
              },
            }}
          >
            Update Product
          </Button>
 
          <Button
          type="button"
           className="update-pro-del-btn"
            onClick={()=>handleDelete(data.id)}
            // className=""
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  width: '33%',
                  backgroundColor:'red',
                  borderTopLeftRadius: '3px',
                  borderTopRightRadius: '3px',
                  borderBottomRightRadius: '3px',
                  borderBottomLeftRadius: '3px',
                }),
              },
            }}
          >
            Delete Product
          </Button>
        </ButtonGroup>
      </Form>
    </>
  );
};

export default AddProduct;
