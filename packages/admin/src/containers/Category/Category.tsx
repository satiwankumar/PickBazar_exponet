import React, { useCallback, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { withStyle } from 'baseui';
import '../../style.css'
import {
  Grid,
  Row as Rows,
  Col as Column,
} from '../../components/FlexBox/FlexBox';
import { useDrawerDispatch } from '../../context/DrawerContext';
import Select from '../../components/Select/Select';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Checkbox from '../../components/CheckBox/CheckBox';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { Wrapper, Header, Heading } from '../../components/WrapperStyle';
import {
  TableWrapper,
  StyledTable,
  StyledHeadCell,
  StyledCell,
  ImageWrapper,
} from './Category.style';

import {
  Plus,
  Accessories,
  BathOil,
  BeautyHealth,
  Beverage,
  Breakfast,
  Cooking,
  Dairy,
  Deodorent,
  Eyes,
  Face,
  FacialCare,
  FruitsVegetable,
  HandBags,
  HomeCleaning,
  LaptopBags,
  Lips,
  MeatFish,
  OralCare,
  OuterWear,
  Pants,
  PetCare,
  Purse,
  ShavingNeeds,
  Shirts,
  ShoulderBags,
  Skirts,
  Snacks,
  Tops,
  Wallet,
  WomenDress,
  Minus,
  Trash,
  TrashNew,
  PencilIcon,
} from '../../components/AllSvgIcon';
import NoResult from '../../components/NoResult/NoResult';
import { setTimeout } from 'timers';
import '../../style.css'

let icons = {
  Accessories: Accessories,
  BathOil: BathOil,
  BeautyHealth: BeautyHealth,
  Beverage: Beverage,
  Breakfast: Breakfast,
  Cooking: Cooking,
  Dairy: Dairy,
  Deodorent: Deodorent,
  Eyes: Eyes,
  Face: Face,
  FacialCare: FacialCare,
  FruitsVegetable: FruitsVegetable,
  HandBags: HandBags,
  HomeCleaning: HomeCleaning,
  LaptopBags: LaptopBags,
  Lips: Lips,
  MeatFish: MeatFish,
  OralCare: OralCare,
  OuterWear: OuterWear,
  Pants: Pants,
  PetCare: PetCare,
  Purse: Purse,
  ShavingNeeds: ShavingNeeds,
  Shirts: Shirts,
  ShoulderBags: ShoulderBags,
  Skirts: Skirts,
  Snacks: Snacks,
  Tops: Tops,
  Wallet: Wallet,
  WomenDress: WomenDress,
};
const GET_CATEGORIES = gql`
query getCategory($category_id:Int,$filter_by_name: String){

  getCategoryWithoutFilter{
    id
    name
    slug
    is_searchable
    parent_id
    image
    type
    
    }
    ,
  getCategory(category_id:$category_id,filter_by_name: $filter_by_name){
    id
    image
    name
    content
    slug
    content
    type
    subcategories {
      id
      name
      content
      slug
      position
      is_searchable
      parent_id
       subcategories {
      name
      slug
      content
      position
      is_searchable
      parent_id
    }
    }
}
}`;

const Delete_Category = gql`

mutation deleteCategory($category_id:String!){
    deleteCategory(category_id:$category_id){
      
        token
        status
        message
    
    }
}

`

  // # query getCategories($type: String, $searchBy: String) {
  // #   categories(type: $type, searchBy: $searchBy) {
  // #     id
  // #     icon
  // #     name
  // #     slug
  // #     type
  // #   }
  // # }


const Col = withStyle(Column, () => ({
  '@media only screen and (max-width: 767px)': {
    marginBottom: '20px',

    ':last-child': {
      marginBottom: 0,
    },
  },
}));

const Row = withStyle(Rows, () => ({
  '@media only screen and (min-width: 768px)': {
    alignItems: 'center',
  },
}));

// const categorySelectOptions = [
//   { value: 'grocery', label: 'Grocery' },
//   { value: 'women-cloths', label: 'Women Cloth' },
//   { value: 'bags', label: 'Bags' },
//   { value: 'makeup', label: 'Makeup' },
// ];

toast.configure()

export default function Category() {
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState('');
  const [isParent, setIsParent] = useState(true);
  const dispatch = useDrawerDispatch();
  const [checkedId, setCheckedId] = useState([]);
  const [checked, setChecked] = useState(false);
  const openDrawer = useCallback(
    () => dispatch({ type: 'OPEN_DRAWER', drawerComponent: 'CATEGORY_FORM' }),
    [dispatch]
  );
  // const openCategoryEditDrawer = useCallback(
  //   (subitem) => dispatch({ type: 'OPEN_DRAWER', drawerComponent: 'Edit_CATEGORY_FORM',data: subitem}),
  //   [dispatch]
  // );
  
  const openCategoryEditDrawer = React.useCallback(
    (subItem) =>
      dispatch({
        type: 'OPEN_DRAWER',
        drawerComponent: 'EDIT_CATEGORY_FORM',
        data: subItem,
      }),
    [dispatch]
  );

  
  const [deleteCategory]  = useMutation(Delete_Category)

  const { data, error, refetch } = useQuery(GET_CATEGORIES,{
    variables : {category_id:null,filter_by_name: null}
  });

  if (error) {
    
    toast.error(`🦄 SomeThing Went Wrong`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })
      return <div>Error! {error.message}</div>;

    
  }

  function handleSearch(event) {
    const value = event.currentTarget.value;
    setSearch(value);
    refetch({
      category_id: category.length ? category[0].id : null,
      filter_by_name: value,
    });
  }
  function handleCategory({ value }) {
    setCategory(value);
    if (value.length) {
      refetch({
        category_id: value[0].id, filter_by_name: search,
      });
    } else {
      refetch({
        category_id: null, filter_by_name: search,
      });
    }
  }


  const handleDelete =async ()=>{
    // console.log("id",id)
if(checkedId.length>0){
  const value = JSON.stringify(checkedId)
  console.log("vale",value)
    const result = await deleteCategory({variables:{category_id:value}})
    if(result){
      if (result.data.deleteCategory.status ==200) {
        // console.log(result)

              
                    toast.success(`🦄  ${result.data.deleteCategory.message} `, {
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
  }
  
  setTimeout(() => {
  window.location.reload()
    
  }, 3000);
}else{
  
  toast.error(`🦄 Please select value to Delete`, {
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
  const handleSingleDelete =async (id)=>{
    // console.log("id",id)
    const value = JSON.stringify([id])
    const result = await deleteCategory({variables:{category_id:value}})
    if(result){
      if (result.data.deleteCategory.status ==200) {
        // console.log(result)

              
                    toast.success(`🦄  ${result.data.deleteCategory.message} `, {
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
  }
  
  setTimeout(() => {
  window.location.reload()
    
  }, 3000);




  }
  const Subcategories =[]

  data && data.getCategory.map(
    item=>item.subcategories.map(
    item=> Subcategories.push(item)
    ))

    const categories= data && data.getCategoryWithoutFilter.filter(item=> item.parent_id==null)

   
  function onAllCheck(event) {
  
    if (event.target.checked) {
      const idx = data && Subcategories.map(category =>category.id );

      // console.log("sati",idx)
      setCheckedId(idx);
      // console.log("sati",checkedId)
    } else {
      setCheckedId([]);
    }
    setChecked(event.target.checked);
  }

  function handleCheckbox(event) {
    // console.log("sati",event.currentTarget)

    // const { name } = event.currentTarget;

    // console.log("sati",name)
    let newarray = []
    // console.log("sati",newarray)
    console.log(event);
      newarray = [...checkedId];
      if(!newarray.includes(event)){
    newarray.push(event)
      }
      else{
        const index = newarray.indexOf(event);
        if (index > -1) {
          newarray.splice(index, 1);
        }

        console.log("else",newarray)
      }
setCheckedId(newarray)

//     if (!checkedId.includes(event)) {
//       // console.log("sati",false,name)
//       setCheckedId(prevState => [...prevState, event]);
// console.log("sati",checkedId)

//     } else {
//       // setCheckedId(prevState => prevState.filter(id => id !== name));
//       setCheckedId(prevState => prevState.filter(id => id !== event));
      
//     }
    
  }
  function Icon({ icon }) {
    const Component = icons.hasOwnProperty(icon) ? icons[icon] : 'span';
    return <Component />;
  }
function toggleParent(){
    setIsParent(!isParent)
}



  return (
    <Grid fluid={true}>
      <Row>
        <Col md={12}>
          <Header
            style={{
              marginBottom: 30,
              boxShadow: '0 0 5px rgba(0, 0 ,0, 0.05)',
            }}
          >
            <Col md={2}>
              <Heading>Category</Heading>
            </Col>

            <Col md={10}>
              <Row>
                <Col md={3} lg={3}>
                  <Select
                    clearable={false}
                    options={data&& categories}
                    labelKey='name'
                    valueKey='id'
                    placeholder='Category Type'
                    value={category}
                    searchable={false}
                    onChange={handleCategory}
                  />
                </Col>

                <Col md={5} lg={6}>
                  <Input
                    value={search}
                    placeholder='Ex: Search By Name'
                    onChange={handleSearch}
                    clearable
                  />
                </Col>
                {/* button.cat-del-btn {
    width: 100%;
    background: #ca0404;
}

button.cat-del-btn:hover {
    background: red;
}

button.cat-del-btn .ae.fa {
    margin: 0;
} */}
                <Col md={4} lg={3}>
                  <Button
                    onClick={openDrawer}
                    startEnhancer={() => <Plus />}
                    overrides={{
                      BaseButton: {
                        style: () => ({
                          width: '100%',
                          borderTopLeftRadius: '3px',
                          borderTopRightRadius: '3px',
                          borderBottomLeftRadius: '3px',
                          borderBottomRightRadius: '3px',
                        }),
                      },
                    }}
                  >
                    Add Category
                  </Button>
                </Col>
              </Row>
            </Col>
          </Header>


          <Wrapper style={{ boxShadow: '0 0 5px rgba(0, 0 , 0, 0.05)' }}>


          <div className="row" 
            style={{
              padding: 10,
            }}          
            >
              <div className="col-md-3 col-sm-6 col-12 ">
                  <Button
                    onClick={handleDelete}
                    startEnhancer={() => <Trash />}
                    className="cat-del-btn"
                    overrides={{
                      BaseButton: {
                        style: () => ({
                          marginBottom: '10px',
                           
                        }),
                      },
                    }}
                  >
                    
               Multiple Delete
              </Button>                
              </div>
              <div className="col-md-3 col-sm-6 col-12 ">
                  <Button
                    onClick={toggleParent}
                    // startEnhancer={() => <Trash />}
                    className="cat-del-btn"

                    overrides={{
                      BaseButton: {
                        style: () => ({
                          marginBottom: '10px',
                          color:'white',
                           
                        }),
                      },
                    }}
                  >
                    
               
              { !isParent ? "Show Parents":"Show Child"}              
               </Button>                
              </div>
          </div>          

            <TableWrapper>
              <StyledTable $gridTemplateColumns='minmax(70px, 70px) minmax(70px, 70px) minmax(70px, 70px) minmax(150px, auto) minmax(150px, auto)  minmax(150px, 70px)   auto'>
                <StyledHeadCell>
                <Checkbox
                    type='checkbox'
                    value='checkAll'
                    checked={checked}
                    onChange={onAllCheck}
                    overrides={{
                      Checkmark: {
                        style: {
                          borderWidth: '2px',
                          borderRadius: '4px',
                        },
                      },
                    }}
                  />
                </StyledHeadCell>
                <StyledHeadCell>Id</StyledHeadCell>
                <StyledHeadCell>Image</StyledHeadCell>
                <StyledHeadCell>Name</StyledHeadCell>
                <StyledHeadCell>Slug</StyledHeadCell>
                <StyledHeadCell>Type</StyledHeadCell>
                <StyledHeadCell>Action</StyledHeadCell>


                {data ? (
                  Object.keys(data.getCategory).length > 0 ?  (
                    !isParent?(
                    data.getCategory
                      .map((item) => 
                      item.subcategories.map((subItem , index)=> (
                        // subItem.name
                        <React.Fragment key={index}>
                          <StyledCell>
                      
                          <Checkbox
                              name={subItem.id}
                              checked={checkedId.includes(subItem.id)}
                              onChange={ () => handleCheckbox(subItem.id)}
                              overrides={{
                                Checkmark: {
                                  style: {
                                    borderWidth: '2px',
                                    borderRadius: '4px',
                                  },
                                },
                              }}
                            />
                            {/* <button onClick={()=>handleDelete(subItem.id)} >Delete</button> */}
                          </StyledCell>
                          <StyledCell>{subItem.id}</StyledCell>
                          <StyledCell>
                            <ImageWrapper>
                              <img src={`https://ui-avatars.com/api/?background=random&name=${subItem.name} &rounded=2`} />
                            </ImageWrapper>
                          </StyledCell>
                          <StyledCell>{subItem.name}</StyledCell>
                          <StyledCell>{subItem.slug}</StyledCell>
                          <StyledCell>{subItem.parent_id}</StyledCell>
                          
                          <StyledCell><Button startEnhancer={() => <PencilIcon/>}  onClick={()=>openCategoryEditDrawer(subItem)} className="edit-btn">Edit</Button>
                        
                  <Button
                    onClick={()=>handleSingleDelete(subItem.id)}
                    startEnhancer={() => <TrashNew />}
                    className="cat-del-btn new-del-btn"
                    overrides={{
                      BaseButton: {
                        style: () => ({
                          marginBottom: '10px',
                           
                        }),
                      },
                    }}
                  >
                    
                Delete
              </Button>   </StyledCell>              
             
                        </React.Fragment>
                        )),
                      
                      // Object.values(array[index].subcategories )
                      // .map((row, index,array1) => (
                        
                      // ))
                      )):(data.getCategory
                        .map((subItem,index) => 
        
                          // subItem.name
                          <React.Fragment key={index}>
                            <StyledCell>
                        
                            <Checkbox
                                name={subItem.id}
                                checked={checkedId.includes(subItem.id)}
                                onChange={ () => handleCheckbox(subItem.id)}
                                overrides={{
                                  Checkmark: {
                                    style: {
                                      borderWidth: '2px',
                                      borderRadius: '4px',
                                    },
                                  },
                                }}
                              />
                              {/* <button onClick={()=>handleDelete(subItem.id)} >Delete</button> */}
                            </StyledCell>
                            <StyledCell>{subItem.id}</StyledCell>
                            <StyledCell>
                              <ImageWrapper>
                                <img src={`https://ui-avatars.com/api/?background=random&name=${subItem.name} &rounded=2`} />
                              </ImageWrapper>
                            </StyledCell>
                            <StyledCell>{subItem.name}</StyledCell>
                            <StyledCell>{subItem.slug}</StyledCell>
                            <StyledCell>{subItem.parent_id}</StyledCell>
                            
                            <StyledCell><Button startEnhancer={() => <PencilIcon/>}  onClick={()=>openCategoryEditDrawer(subItem)} className="edit-btn">Edit</Button>
                          
                    <Button
                      onClick={()=>handleSingleDelete(subItem.id)}
                      startEnhancer={() => <TrashNew />}
                      className="cat-del-btn new-del-btn"
                      overrides={{
                        BaseButton: {
                          style: () => ({
                            marginBottom: '10px',
                             
                          }),
                        },
                      }}
                    >
                      
                  Delete
                </Button>   </StyledCell>              
               
                          </React.Fragment>
                          
                        
                        // Object.values(array[index].subcategories )
                        // .map((row, index,array1) => (
                          
                        // ))
                        ))
                  ) 
                  
                  
                  
                  
                  
                  
                  
                  
                  : (
                    <NoResult
                      hideButton={false}
                      style={{
                        gridColumnStart: '1',
                        gridColumnEnd: 'one',
                      }}
                    />
                  )
                ) : null}
              </StyledTable>
            </TableWrapper>
          </Wrapper>
        </Col>
      </Row>
      <ToastContainer autoClose={2000} />

    </Grid>
  );
}
