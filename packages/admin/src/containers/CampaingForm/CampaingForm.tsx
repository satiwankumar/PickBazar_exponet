import React, { useState, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import uuidv4 from 'uuid/v4';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useDrawerDispatch } from '../../context/DrawerContext';
import { Scrollbars } from 'react-custom-scrollbars';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import Button, { KIND } from '../../components/Button/Button';
import DrawerBox from '../../components/DrawerBox/DrawerBox';
import moment from 'moment'
import { Row, Col } from '../../components/FlexBox/FlexBox';
import {
  Form,
  DrawerTitleWrapper,
  DrawerTitle,
  FieldDetails,
  ButtonGroup,
} from '../DrawerItems/DrawerItems.style';
import { FormFields, FormLabel } from '../../components/FormFields/FormFields';
import InputMask from 'react-input-mask';

const GET_COUPONS = gql`
 query coupon{
   coupon{
    id
    name
    code
    used
    value
    end_date
    start_date
    is_active
  
  },
  
}`
const GET_CATEGORIES = gql`
query getCategoryWithoutFilter{
  getCategoryWithoutFilter{
    id
    image
    name
    slug
    type
   
}
}`




const CREATE_COUPON = gql`
  mutation createCoupon($input: CouponInput!) {
    createCoupon(input: $input)
  }
`;


type Props = any;
toast.configure()
const AddCampaing: React.FC<Props> = props => {
  const dispatch = useDrawerDispatch();
  const closeDrawer = useCallback(() => dispatch({ type: 'CLOSE_DRAWER' }), [
    dispatch,
  ]);

  const { register, handleSubmit, errors, setValue } = useForm();
  const [category, setCategory] = useState([]);
  React.useEffect(() => {
    register({ name: 'category' });
  }, [register]);
  const { data } = useQuery(GET_CATEGORIES)
  console.log(data)
  const categories = data && data.getCategoryWithoutFilter.filter(item => item.parent_id == null)
  console.log("category ", typeof (categories), categories)



  const [createCoupon] = useMutation(CREATE_COUPON);
  // update(cache, { data: { createCoupon } }) {
  //   const { coupon } = cache.readQuery({
  //     query: GET_COUPONS,
  //   });

  //   // cache.writeQuery({
  //   //   query: GET_COUPONS,
  //   //   data: { coupon: coupon.concat([createCoupon]) },
  //   // });


  var now = new Date();
  var dateString = moment(now).format('YYYY-MM-DD');
  const onSubmit = async data => {
    try {

      // console.log(data)
      const newCoupon = {
        // id:1,
        name: data.name,
        code: data.code,
        category_id: category[0].id,
        is_percent: Number(data.discount_in_percent),
        number_of_coupon: Number(data.number_of_coupon),
        minimum_spend: Number(data.minimum_amount),
        free_shipping: 0,
        start_date: data.start_date,
        end_date: data.end_date
        // creation_date: new Date(),
      };
      const result = await createCoupon({
        variables: { input: newCoupon },
      });

      closeDrawer();
      console.log(newCoupon, 'newCoupon');


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
  const handleCategoryChange = ({ value }) => {
    setValue('category', value);
    setCategory(value);
  };

  return (
    <>
      <DrawerTitleWrapper>
        <DrawerTitle>Add Coupon</DrawerTitle>
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
              <FieldDetails>
                Add your Coupon description and necessary informations from
                here
              </FieldDetails>
            </Col>

            <Col lg={8}>

              <DrawerBox>
                {/* <input name="test" ref={register({required:true, pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }})}  />
                                         {errors.test && <span className="text-danger">{errors.test.message}</span>} */}
                <FormFields>
                  <FormLabel>Coupon Name</FormLabel>

                  <Input inputRef={register({ required: true })} name="name" />
                </FormFields>
                {errors.name && <span className="text-danger">This Field is required</span>}

                <FormFields>
                  <FormLabel>Discount Percent</FormLabel>
                  <InputMask mask="99.99">
                    {(inputProps) => <Input
                      {...inputProps}
                      type="text"
                      inputRef={register({ required: true })}
                      name="discount_in_percent"
                      min="0"
                    />}
                  </InputMask>
                  <Input
                    type="number"
                    inputRef={register({ required: true })}
                    name="discount_in_percent"
                    min="0"

                  />
                </FormFields>
                {errors.discount_in_percent && <span style={{ color: "red" }}>{errors.discount_in_percent.message}</span>}

                <FormFields>
                  <FormLabel>Discount Code</FormLabel>
                  <Input inputRef={register({ required: true })} name="code" />
                </FormFields>

                <FormFields>
                  <FormLabel>Number of Coupon</FormLabel>
                  <Input
                    type="number"
                    inputRef={register({ required: true })}
                    name="number_of_coupon"
                  />
                </FormFields>
                <FormFields>
                  <FormLabel>Start Date</FormLabel>
                  <Input
                    type="date"
                    inputRef={register({ required: true })}
                    name="start_date"
                    min={dateString}
                  />
                </FormFields>
                <FormFields>
                  <FormLabel>End Date</FormLabel>
                  <Input
                    type="date"
                    inputRef={register({ required: true })}
                    name="end_date"
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>Category</FormLabel>
                  <Select
                    options={data && categories}
                    labelKey="name"
                    valueKey="id"
                    placeholder="Ex: Choose parent category"
                    value={category}
                    searchable={false}
                    onChange={handleCategoryChange}
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
                  <FormLabel>Minimum Amount Required</FormLabel>
                  <Input
                    type="number"
                    inputRef={register({ required: true })}
                    name="minimum_amount"
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
            Create Coupon
          </Button>
        </ButtonGroup>
        <ToastContainer autoClose={2000} />
      </Form>
    </>
  );
};

export default AddCampaing;
