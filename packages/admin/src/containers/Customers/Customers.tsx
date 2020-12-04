import React, { useState,useCallback } from 'react';
import Moment from 'react-moment';
import '../../style.css'
import {

  Trash,Plus
} from '../../components/AllSvgIcon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { styled, withStyle } from 'baseui';
import Button from '../../components/Button/Button';
import { useDrawerDispatch } from '../../context/DrawerContext';
import Checkbox from '../../components/CheckBox/CheckBox';
import {
  Grid,
  Row as Rows,
  Col as Column,
} from '../../components/FlexBox/FlexBox';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Wrapper, Header, Heading } from '../../components/WrapperStyle';

import {
  TableWrapper,
  StyledTable,
  StyledHeadCell,
  StyledBodyCell,
} from './Customers.style';
import NoResult from '../../components/NoResult/NoResult';

const GET_CUSTOMERS = gql`
  query getCustomer($filter_by_name: String){
    getCustomer (filter_by_name:$filter_by_name){
        id
        image
        first_name
        last_name
        contact
        orders_count
        total_amount
        created_at
        
        }
    }

   

  # query getCustomers($searchBy: String, $sortBy: String) {
  #   customers(searchBy: $searchBy, sortBy: $sortBy) {
  #     id
  #     image
  #     name
  #     contacts {
  #       id
  #       type
  #       number
  #     }
  #     total_order
  #     total_order_amount
  #     creation_date
  #   }
  # }
`;



const Delete_Customer = gql`
mutation deleteUser($input: StaffID ){
  deleteUser(input:$input){
      
        token
        status
        message
    
    }
}

`

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

const ImageWrapper = styled('div', ({ $theme }) => ({
  width: '38px',
  height: '38px',
  overflow: 'hidden',
  display: 'inline-block',
  borderRadius: '20px',
  backgroundColor: $theme.colors.backgroundF7,
}));

const Image = styled('img', () => ({
  width: '100%',
  height: 'auto',
}));

const sortByOptions = [
  { value: 'highestToLowest', label: 'Highest To Lowest' },
  { value: 'lowestToHighest', label: 'Lowest To Highest' },
];




toast.configure()
export default function Customers() {
  const { data, error, refetch } = useQuery(GET_CUSTOMERS, {
    variables: { filter_by_name: "" }
  });

  const [stock, setStock] = useState([]);
  const [search, setSearch] = useState([]);
  const [checkedId, setCheckedId] = useState([]);
  const [checked, setChecked] = useState(false);
  const dispatch = useDrawerDispatch();
  const openDrawer = useCallback(
    () => dispatch({ type: 'OPEN_DRAWER', drawerComponent: 'ADD_CUSTOMER_FORM' }),
    [dispatch]
  );
  const [deleteUser] = useMutation(Delete_Customer)
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  // function handleSort({ value }) {
  //   setStock(value);
  //   if (value.length) {
  //     refetch({
  //       sortBy: value[0].value,
  //     });
  //   } else {
  //     refetch({
  //       sortBy: null,
  //     });
  //   }
  // }
  function handleSearch(event) {
    const value = event.currentTarget.value;
    console.log(value, 'cus val');

    setSearch(value);
    refetch({ filter_by_name: value });
  }


  function onAllCheck(event) {

    if (event.target.checked) {
      const idx = data && data.getCustomer.map(customer => customer.id);
      setCheckedId(idx);
      // const idx = data && data.getOrder.map(order => order.id);
      // setCheckedId(idx);
      // const idx = data && Subcategories.map(category => category.id);

      // console.log("sati",idx)
      // setCheckedId(idx);
      // console.log("sati",checkedId)
    } else {
      setCheckedId([]);
    }
    setChecked(event.target.checked);
  }

  function handleCheckbox(id) {

    let newarray = []

    // console.log(id);
    newarray = [...checkedId];
    if (!newarray.includes(id)) {
      newarray.push(id)
    }
    else {
      const index = newarray.indexOf(id);
      if (index > -1) {
        newarray.splice(index, 1);
      }

      console.log("else", newarray)
    }
    setCheckedId(newarray)
    console.log("sati", newarray)

  }



  const handleDelete = async () => {

    if (checkedId.length>0) {


      const value = JSON.stringify(checkedId)

      const result = await deleteUser({ variables: { input: { user_id: value } } })
      if (result) {
        if (result.data.deleteUser.status == 200) {


          toast.success(`🦄  ${result.data.deleteUser.message} `, {
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
      }

      setTimeout(() => {
        window.location.reload()

      }, 3000);

    }
    else {
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
            <Col md={3}>
              <Heading>Customers</Heading>
            </Col>

            <Col md={9}>
              <Row>
                <Col md={9}>
                  <Input
                    value={search}
                    placeholder='Ex: Search By Name'
                    onChange={handleSearch}
                    clearable
                  />
                </Col>
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
                    Add Customers
                  </Button>
                </Col>
                {/* 
                <Col md={3}>
                  <Select
                    options={sortByOptions}
                    labelKey='label'
                    valueKey='value'
                    placeholder='Order Amount'
                    value={stock}
                    searchable={false}
                    onChange={handleSort}
                  />
                </Col> */}
              </Row>
            </Col>
          </Header>

          <Wrapper style={{ boxShadow: '0 0 5px rgba(0, 0 , 0, 0.05)' }}>

            <div className="row"
              style={{
                padding: 10,
              }}
            >
              <div className="col-md-3 col-sm-6 col-12 col-lg-2">

                <Button
                  startEnhancer={() => <Trash />}
                  onClick={handleDelete}
                  className="cat-del-btn"
                  overrides={{
                    BaseButton: {
                      style: () => ({
                        marginBottom: '10px',
                      }),
                    },
                  }}
                >
                  Delete
              </Button>
              </div>
            </div>

            <TableWrapper>
              <StyledTable $gridTemplateColumns='minmax(70px, 70px) minmax(70px, 70px) minmax(150px, auto) minmax(150px, auto) minmax(200px, max-content) minmax(150px, auto) minmax(150px, auto) minmax(150px, auto) '>
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
                <StyledHeadCell>ID</StyledHeadCell>
                <StyledHeadCell>Image</StyledHeadCell>
                <StyledHeadCell>Name</StyledHeadCell>
                <StyledHeadCell>Contacts</StyledHeadCell>
                <StyledHeadCell>Total Order</StyledHeadCell>
                <StyledHeadCell>Total Amount</StyledHeadCell>
                <StyledHeadCell>Joining Date</StyledHeadCell>
                {/* <StyledHeadCell>Status</StyledHeadCell> */}
                {/* <StyledTable $gridTemplateColumns='minmax(70px, 70px) minmax(70px, 70px) minmax(200px, auto) minmax(150px, auto) minmax(150px, max-content) minmax(150px, auto) minmax(150px, auto)'>
                <StyledHeadCell>ID</StyledHeadCell>
                <StyledHeadCell>Image</StyledHeadCell>
                <StyledHeadCell>Name</StyledHeadCell>
                <StyledHeadCell>Contacts</StyledHeadCell>
                <StyledHeadCell>Total Order</StyledHeadCell>
                <StyledHeadCell>Total Amount</StyledHeadCell>
                <StyledHeadCell>Joining Date</StyledHeadCell> */}

                {data ? (
                  Object.keys(data.getCustomer).length > 0 ? (
                    data.getCustomer
                      .map(item => Object.values(item))
                      .map((row, index) => (
                        console.log("row", row),
                        <React.Fragment key={index}>

                          <StyledBodyCell>


                            <Checkbox
                              name={row[0]}
                              checked={checkedId.includes(row[0])}
                              onChange={() => handleCheckbox(row[0])}

                              overrides={{
                                Checkmark: {
                                  style: {
                                    borderWidth: '2px',
                                    borderRadius: '4px',
                                  },
                                },
                              }

                              }
                              required
                            />





                          </StyledBodyCell>
                          <StyledBodyCell>{row[0]}</StyledBodyCell>
                          <StyledBodyCell>
                            <ImageWrapper>
                              <Image src={`https://ui-avatars.com/api/?background=random&name=${row[1]} ${row[2]}&rounded=2`} alt="" />
                            </ImageWrapper>
                          </StyledBodyCell>
                          <StyledBodyCell>{`${row[2]} ${row[3]}  `}</StyledBodyCell>
                          <StyledBodyCell>+1-541-754-3010</StyledBodyCell>
                          <StyledBodyCell>{row[5]}</StyledBodyCell>
                          <StyledBodyCell>${row[6]}</StyledBodyCell>
                          <StyledBodyCell>
                            <Moment format='Do MMM YYYY'>{row[7]}</Moment>
                          </StyledBodyCell>
                          {/* <StyledBodyCell>
                            <Moment format='Do MMM YYYY'>{row[7]}</Moment>
                          </StyledBodyCell> */}
                        </React.Fragment>

                      ))
                  ) : (
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
