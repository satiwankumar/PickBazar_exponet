import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import Sticky from 'react-stickynode';
import { Scrollbars } from 'react-custom-scrollbars';
import Popover from 'components/Popover/Popover';
import { ArrowDropDown, CategoryIcon } from 'components/AllSvgIcon';
import Select from 'components/Select/Select/Select';

import { SearchContext } from 'contexts/search/search.context';
import { useLocale } from 'contexts/language/language.provider';
import { useStickyState } from 'contexts/app/app.provider';
import { FormFields, FormLabel } from '../../components/FormFields/FormFields';
import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab'
import {
  SidebarMobileLoader,
  SidebarLoader,
} from 'components/Placeholder/Placeholder';
import { FormattedMessage } from 'react-intl';
import {
  CategoryWrapper,
  TreeWrapper,
  PopoverHandler,
  PopoverWrapper,
  SidebarWrapper,
  RequestMedicine,
} from './Sidebar.style';

import { TreeMenu } from 'components/TreeMenu/TreeMenu';

import { GET_CATEGORIES } from 'graphql/query/category.query';

import { REQUEST_MEDICINE_PAGE } from 'constants/navigation';

type SidebarCategoryProps = {
  deviceType: {
    mobile: string;
    tablet: string;
    desktop: boolean;
  };
  type: string;
};

const SidebarCategory: React.FC<SidebarCategoryProps> = ({

  deviceType: { mobile, tablet, desktop },
  type,
}) => {
  console.log("type",type)
  const { state, dispatch } = useContext(SearchContext);
  const router = useRouter();
  const { pathname, query } = router;
  const { loading,error,data } = useQuery(GET_CATEGORIES, {
    variables: { category_id:type?type:null,filter_by_name: null  },
  });
console.log(error,loading,data)
const [brands, setBrands] = React.useState([]);

  const selectedQueries = query.category;

  const { isRtl } = useLocale();
  console.log("queryName",pathname, query)

  const handleCategorySelection = (id: string) => {
  //  alert(id)
  let type= query
    const updatedQuery = state.text 
      ? { type: query.type, category: id }
      : { type: query.type,category: id };
    router.push({
      pathname: pathname,
      query: updatedQuery,
    });
  };
  const handleBrandSelection = (e: any) => {
    // alert(value)
     console.log("brandSelection",e.target.value)
      const updatedQuery = state.text
        ? {  type: query.type, brand: e.target.value}
        : { type: query.type, brand: e.target.value };
      router.push({
        pathname: pathname,
        query: updatedQuery,
      });
    };
  



  const Subcategories = []

  data && data.getCategory.map(
    item => item.subcategories.map(
      item => Subcategories.push(item)
    ))
    const brandsOptions = data && data.getBrand.map(item => { return item })
    console.log("brandOptions",brandsOptions)
   data&& brandsOptions.unshift({id:"",name:"Select Brand"})
    const SelectChange = (e) => {
      // console.log("value", e.target.value)
      // setValue('type', value);
      setBrands(e.target.value)
  
    };

  const isSidebarSticky = useStickyState('isSidebarSticky');

  if (!data || loading) {
    if (mobile || tablet) {
      return <SidebarMobileLoader />;
    }

    return <SidebarLoader />;
  }

  return (

   
    


    <CategoryWrapper>
  

        <h1 style={{
           "margin": "19px 0px 10px 20px",
           "fontSize": "24px"
          }} >Filter By Brand </h1> 
         {/* <input type="text" list="data" 
          style={{
           "borderRadius":"4px",
           "padding":"10px",
           "margin":"0px 0px 0px 20px",
           "width":"87%",
           "border":"1px solid #ccc"
          }}
         className="form-control brand-flied"  onChange={(value) => handleBrandSelection(value)} />  */}

        <select id="data" onChange={(value)=>handleBrandSelection(value)} contentEditable="true" style={{
           "borderRadius":"4px",
           "padding":"10px",
           "margin":"0px 0px 0px 20px",
           "width":"87%",
           "border":"1px solid #ccc"
          }}>
          {data && brandsOptions.map((item, key) =>
            <option key={item.id} value={item.id} >{item.name}</option>
          )}
        </select>
      <PopoverWrapper className={`${mobile || tablet ? 'mobileView' : ''}`}>
        
        <Popover
          handler={
            <PopoverHandler>
              <div>
                <CategoryIcon />
                Select your Category
              </div>
              <div>
                <ArrowDropDown />
              </div>
            </PopoverHandler>
          }
          className="category-popover"
          content={
            <>
              {/* {type === 'medicine' && (
                <Link href={REQUEST_MEDICINE_PAGE}>
                  <RequestMedicine>
                    <FormattedMessage id="reqMedicine" />
                  </RequestMedicine>
                </Link>
              )} */}
              <TreeMenu
                data={data && data.getCategory}
                onClick={handleCategorySelection}
                active={selectedQueries}
              />
            </>
          }
        />
      </PopoverWrapper>

      <SidebarWrapper
        className={`${mobile || tablet ? 'mobileView' : ''}`}
        style={{ paddingTop: type === 'medicine' ? 0 : 45 }}
      >
        <Sticky enabled={isSidebarSticky} top={type === 'medicine' ? 89 : 110}>
          {/* {type === 'medicine' && (
            <Link href={REQUEST_MEDICINE_PAGE}>
              <RequestMedicine>
                <FormattedMessage id="reqMedicine" />
              </RequestMedicine>
            </Link>
          )} */}

          <Scrollbars
            universal
            autoHide
            autoHeight
            autoHeightMax={688}
            renderView={(props) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  marginLeft: isRtl ? props.style.marginRight : 0,
                  marginRight: isRtl ? 0 : props.style.marginRight,
                }}
              />
            )}
          >
            <TreeWrapper>
              <TreeMenu
                data={data && Subcategories}
                onClick={handleCategorySelection}
                active={selectedQueries}
              />
            </TreeWrapper>
          </Scrollbars>
        </Sticky>
      </SidebarWrapper>
    </CategoryWrapper>
  );
};

export default SidebarCategory;
