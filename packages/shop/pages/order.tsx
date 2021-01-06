import React, { useContext ,useEffect} from 'react';

import { NextPage } from 'next';
import { AuthContext, } from 'contexts/auth/auth.context';

import { SEO } from 'components/seo';
import Order from 'containers/Profile/Order/Order';
import { PageWrapper, SidebarSection } from 'containers/Profile/Profile.style';
import Sidebar from 'containers/Profile/Sidebar/Sidebar';
import { withApollo } from 'helper/apollo';
import { Modal } from '@redq/reuse-modal';
import { useRouter } from 'next/router'
type Props = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};
const OrderPage: NextPage<Props> = ({ deviceType }) => {
  const { authState:{isAuthenticated},authDispatch } = useContext<any>(AuthContext);
  const router = useRouter()

//   useEffect(() => {
//     if(!isAuthenticated){ 
//     router.push('/');
//     }
// }

// , []);

  return (
    <>
      <SEO title='Order - Exponet' description='Order Details' />
      <Modal>
        <PageWrapper>
          {deviceType.desktop && (
            <SidebarSection>
              <Sidebar />
            </SidebarSection>
          )}

          <Order deviceType={deviceType} />
        </PageWrapper>
      </Modal>
    </>
  );
};

export default withApollo(OrderPage);
