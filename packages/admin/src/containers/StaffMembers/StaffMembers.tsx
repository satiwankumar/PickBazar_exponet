import React, { useCallback, useState } from 'react';
import Moment from 'react-moment';
import { withStyle } from 'baseui';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkbox from '../../components/CheckBox/CheckBox';

import {
  Grid,
  Row as Rows,
  Col as Column,
} from '../../components/FlexBox/FlexBox';
import { useDrawerDispatch } from '../../context/DrawerContext';
import Select from '../../components/Select/Select';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import { Plus,Trash } from '../../components/AllSvgIcon';

import gql from 'graphql-tag';
import { useQuery,useMutation } from '@apollo/react-hooks';

import { Wrapper, Header, Heading } from '../../components/WrapperStyle';

import {
  TableWrapper,
  StyledTable,
  StyledHeadCell,
  StyledBodyCell,
} from './StaffMembers.style';
import NoResult from '../../components/NoResult/NoResult';

const GET_STAFFS = gql`
query getStaffMember($role_id: Int,$filter_by_name:String){
  getStaffMember(role_id:$role_id,filter_by_name:$filter_by_name){
        id
      first_name
      last_name
      email
      phone_number
      created_at
      role_name
  }
}
`;


const Delete_STAFF = gql`
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

const roleSelectOptions = [
  { value: '1', label: 'Admin' },
  // { value: '2', label: 'Customer' },
  { value: '3', label: 'Manager' },
  { value: '4', label: 'Delivery boy' },
];
toast.configure()
export default function StaffMembers() {
  const dispatch = useDrawerDispatch();

  const openDrawer = useCallback(
    () =>
      dispatch({ type: 'OPEN_DRAWER', drawerComponent: 'STAFF_MEMBER_FORM' }),
    [dispatch]
  );
  const [role, setRole] = useState([]);
  const [search, setSearch] = useState('');
  const [checkedId, setCheckedId] = useState([]);
  const [checked, setChecked] = useState(false);
  const { data, error, refetch } = useQuery(GET_STAFFS, {
    variables: {
      role_id: null, filter_by_name: null
    }
  });
  const [deleteUser]  = useMutation(Delete_STAFF)
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  function handleCategory({ value }) {
    setRole(value);
    console.log("valueFilter", value)
    if (value.length) {
      refetch({ role_id: value[0].value, filter_by_name: search ? search : null });
    } else {
      refetch({
        role_id: null, filter_by_name: search ? search : null
      });
    }
  }
  function handleSearch(event) {
    const value = event.currentTarget.value;
    setSearch(value);
    if (search !== "") {
      refetch({ role_id: role.length ? role[0].value : null, filter_by_name: value });
    } else {
      refetch({
        role_id: role.length ? role[0].value : null, filter_by_name: null
      });
    }
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
    console.log("sati",newarray)

  }



  const handleDelete =async ()=>{
if(checkedId.length>0){
const value = JSON.stringify(checkedId)
    const result = await deleteUser({variables:{input : {user_id:value}}})
    if(result){
      if (result.data.deleteUser.status ==200) {

              
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
    
    toast.error(`🦄 Please Select value to Delete`, {
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
              marginBottom: 40,
              boxShadow: '0 0 5px rgba(0, 0 ,0, 0.05)',
            }}
          >
            <Col md={3} xs={12}>
              <Heading>Staff Members</Heading>
            </Col>

            <Col md={9} xs={12}>
              <Row>
                <Col md={3} xs={12}>
                  <Select
                    options={roleSelectOptions}
                    labelKey="label"
                    valueKey="value"
                    placeholder="Role"
                    value={role}
                    searchable={false}
                    onChange={handleCategory}
                  />
                </Col>

                <Col md={5} xs={12}>
                  <Input
                    value={search}
                    placeholder="Ex: Quick Search By Name"
                    onChange={handleSearch}
                    clearable
                  />
                </Col>

                <Col md={4} xs={12}>
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
                    Add Members
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
              <StyledTable $gridTemplateColumns=" minmax(70px, 70px) minmax(70px, 70px) minmax(270px, max-content) minmax(270px, max-content) minmax(150px, max-content) minmax(150px, auto) minmax(150px, auto)">
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
                <StyledHeadCell>Name</StyledHeadCell>
                <StyledHeadCell>Email</StyledHeadCell>
                <StyledHeadCell>Contact</StyledHeadCell>
                <StyledHeadCell>Joining Date</StyledHeadCell>
                <StyledHeadCell>Role</StyledHeadCell>

                {data ? (
                  Object.keys(data.getStaffMember).length > 0 ? (
                    data.getStaffMember
                      .map((item) => Object.values(item))
                      .map((row, index) => (
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
                              }}
                            />





                          </StyledBodyCell>
                          <StyledBodyCell>{row[0]}</StyledBodyCell>
                          <StyledBodyCell>{`${row[1].slice(0, 6)}  ${row[2]}`}</StyledBodyCell>
                          <StyledBodyCell>{row[3]}</StyledBodyCell>
                          <StyledBodyCell>{row[4]}</StyledBodyCell>
                          <StyledBodyCell>
                            <Moment format="Do MMM YYYY">{row[5]}</Moment>
                          </StyledBodyCell>
                          <StyledBodyCell>{row[6]}</StyledBodyCell>
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
      <ToastContainer autoClose={2000}/>
    </Grid>
  );
}

