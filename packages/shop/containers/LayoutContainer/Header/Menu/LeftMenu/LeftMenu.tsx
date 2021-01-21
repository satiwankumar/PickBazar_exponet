import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


import Select from 'components/Select/Select/Select'
// import 'react-toastify/dist/ReactToastify.css';
import {
  MainMenu,
  SelectedItem,
  Icon,
  Arrow,
  LeftMenuBox,
} from './LeftMenu.style';
import Popover from 'components/Popover/Popover';
import {
  MenuDown,
  FruitsVegetable,
  FacialCare,
  Handbag,
  DressIcon,
  FurnitureIcon,
  BookIcon,
  MedicineIcon,
  Restaurant,
} from 'components/AllSvgIcon';
import NavLink from 'components/NavLink/NavLink';
import {
  GROCERY_PAGE,
  // CLOTHING,
  // MAKEUP_PAGE,
  // BAGS_PAGE,
  // FURNITURE_PAGE,
  // BOOK_PAGE,
  // MEDICINE_PAGE,
  // RESTAURANT_PAGE,
} from 'constants/navigation';
import { Router, useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';


import Logo from 'components/Logo/Logo';

import { useQuery } from '@apollo/react-hooks';
import { GET_CATEGORIES } from '../../../../../graphql/query/category.query';
import { object } from 'yup';



// const MENU_ITEMS = [
//   {
//     link: GROCERY_PAGE,
//     icon: <FruitsVegetable />,
//     label: 'Grocery',
//     intlId: '1',
//   },
//   {
//     link: MAKEUP_PAGE,
//     label: 'Makeup',
//     icon: <FacialCare />,
//     intlId: '2',
//   },
//   {
//     link: BAGS_PAGE,
//     label: 'Bags',
//     icon: <Handbag />,
//     intlId: '3',
//   },
//   {
//     link: CLOTHING,
//     label: 'Clothing',
//     icon: <DressIcon />,
//     intlId: '4',
//   },
//   {
//     link: FURNITURE_PAGE,
//     label: 'Furniture',
//     icon: <FurnitureIcon width='15px' height='13px' />,
//     intlId: '5',
//   },
//   {
//     link: BOOK_PAGE,
//     label: 'Book',
//     icon: <BookIcon width='15px' height='13px' />,
//     intlId: '6',
//   },
//   {
//     link: MEDICINE_PAGE,
//     label: 'Medicine',
//     icon: <MedicineIcon width='15px' height='13px' />,
//     intlId: '7',
//   },
//   {
//     link: RESTAURANT_PAGE,
//     label: 'Foods',
//     icon: <Restaurant />,
//     intlId: 'navFoodsMenu',
//   },
// ];

const CategoryMenu = ({ onClick,handleClick, data }) => {
  return (
    <>

      {
        Object.keys(data).length > 0 ? (
          data.getCategory.map((item) => (
            <NavLink
              key={item.id}
              onClick={()=>handleClick(item)}
              className='menu-item'
              href={``}
              label={item.name}
              icon={<Handbag />}
              iconClass='menu-item-icon'
              intlId={String(item.id)}
            />
          ))) : "no record found"}
    </>
  );
};

type Props = {
  logo: string;
};
// alert("called")

export const LeftMenu: React.FC<Props> = ({ logo }) => {
  const [cat , setCat] = useState("");

  const { data, error, refetch } = useQuery(GET_CATEGORIES, {
    variables: { category_id: null, filter_by_name: null }
  });


  const categories = data && data.getCategory.filter(item => item.parent_id == null)
  const router = useRouter();


  const initialMenu = data && data.getCategory.map((item) => item.slug === router.pathname);
  const [activeMenu, setActiveMenu] = React.useState(data && data.getCategory[0]);


  console.log("data", data)
  console.log("dataactivemenu", data && activeMenu)
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

const handleClick = (item) => {
  // setCat(e.target.value);

  setActiveMenu(item)
  router.push({
    pathname : '/home',
    query : {type:item.id}
  })
}

  return (
    <LeftMenuBox>
      {data && data.getSiteSetting ? (<Logo
        imageUrl={data && data.getSiteSetting.image}
        alt={data && data.getSiteSetting.image}
        onClick={() => setActiveMenu(data && data.getCategory[0])}
      />) : ""}

      <MainMenu>
        <Popover
          className='right'
          handler={
            <SelectedItem>
              <span>
                <Icon>{<Handbag/>}</Icon>
                <span>
                  <FormattedMessage
                    id={activeMenu?.name ? activeMenu?.name : "filters"}
                    defaultMessage={data && activeMenu?.name}
                  />
                </span>
              </span>
              <Arrow>
                <MenuDown />
              </Arrow>
            </SelectedItem>
          }
          content={<CategoryMenu data={data} onClick={setActiveMenu} handleClick={handleClick} />}
        />


       {/* {data && 
        <SelectedItem><select className='right' value={cat} onChange={handleClick} name="cars" id="cars">
          {data && categories.map( (item , index) => (
            <option key={index} value={item.id}>{item.name}</option>
          ))}
        </select>
        </SelectedItem>} */}
      </MainMenu>
      <ToastContainer autoClose={2000} />

    </LeftMenuBox>
  );
};
