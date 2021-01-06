import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { Modal } from '@redq/reuse-modal';
import { withApollo } from 'helper/apollo';
import { SEO } from 'components/seo';
import StoreNav from 'components/StoreNav/StoreNav';
import Carousel from 'components/Carousel/Carousel';
import Banner from 'containers/Banner/Banner';
import Sidebar from 'containers/Sidebar/Sidebar';
import Products from 'containers/Products/Products';
import CartPopUp from 'containers/Cart/CartPopUp';
import gql from 'graphql-tag';

import {
  MainContentArea,
  SidebarSection,
  ContentSection,
  OfferSection,
  MobileCarouselDropdown,
} from 'styled/pages.style';
// Static Data Import Here
import OFFERS from 'data/offers';
import BannerImg from 'image/grocery.png';
import storeType from 'constants/storeType';
import { AuthContext } from 'contexts/auth/auth.context';
import { useQuery } from '@apollo/react-hooks';



export const GET_CATEGORIES = gql`
query getCategory($category_id:Int,$filter_by_name: String){
  getCategory(category_id:$category_id,filter_by_name: $filter_by_name){
    id
    image
    name
    content
    slug
    type
  }
}`
 

function HomePage({ deviceType }) {


  // //   // console.log('filtered again again', data);
  // const { authDispatch } = useContext<any>(AuthContext);
    

//  authDispatch({
//         type: 'GLOBAL_DATA',
//     });
//   }


  const { query } = useRouter();
  const targetRef = React.useRef(null);
  React.useEffect(() => {
    

  

    if ((query.text || query.category || query.type) && targetRef.current) {
      // window.scrollTo({
      //   top: targetRef.current.offsetTop - 110,
      //   behavior: 'smooth',
      // });
    }
  }, [query]);

  const PAGE_TYPE = query.type ? query.type.toString() : "1";
 
  const { data, error, refetch } =  useQuery(GET_CATEGORIES, {
    variables : {category_id:parseInt(PAGE_TYPE),filter_by_name: null}
})
// console.log("dataaaaaaaaaaaaaaaa",data && data.getCategory)


  return (
    <>
      <SEO title='Filters - Exponent' description='Filters Details' />
      <Modal>
        <Banner
          intlTitleId='groceriesTitle'
          intlDescriptionId='groceriesSubTitle'
          data={data&&data.getCategory[0]}
          imageUrl={`https://www.exponet.ca/images/background/intro.jpg`}
        />

        {deviceType.desktop ? (
          <>
            <MobileCarouselDropdown>
              <StoreNav items={storeType} />
              <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
            </MobileCarouselDropdown>
            <OfferSection>
              <div style={{ margin: '0 -10px' }}>
                <Carousel deviceType={deviceType} data={OFFERS} />
              </div>
            </OfferSection>
            <MainContentArea>
              <SidebarSection>
                <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
              </SidebarSection>
              <ContentSection>
                <div ref={targetRef}>
                  <Products
                    type={PAGE_TYPE}
                    deviceType={deviceType}
                    fetchLimit={16}
                  />
                </div>
              </ContentSection>
            </MainContentArea>
          </>
        ) : (
          <MainContentArea>
            <StoreNav items={storeType} />
            <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
            <OfferSection>
              <div style={{ margin: '0 -10px' }}>
                <Carousel deviceType={deviceType} data={OFFERS} />
              </div>
            </OfferSection>
            <ContentSection style={{ width: '100%' }}>
              <Products
                type={PAGE_TYPE}
                deviceType={deviceType}
                fetchLimit={16}
              />
            </ContentSection>
          </MainContentArea>
        )}
        <CartPopUp deviceType={deviceType} />
      </Modal>
    </>
  );
}

export default withApollo(HomePage);
