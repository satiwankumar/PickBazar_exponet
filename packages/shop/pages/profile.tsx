import React, { useContext ,useEffect} from 'react';
import { AuthContext, } from 'contexts/auth/auth.context';

import { NextPage } from 'next';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import { Modal } from '@redq/reuse-modal';
import { GET_LOGGED_IN_CUSTOMER } from 'graphql/query/customer.query';
import { ProfileProvider } from 'contexts/profile/profile.provider';
import SettingsContent from 'containers/Profile/Settings/Settings';
import { useRouter } from 'next/router'

import {
  PageWrapper,
  SidebarSection,
  ContentBox,
} from 'containers/Profile/Profile.style';
import Sidebar from 'containers/Profile/Sidebar/Sidebar';
import { SEO } from 'components/seo';
import SiteFooter from 'components/SiteFooter/SiteFooter';
import { FormattedMessage } from 'react-intl';
import { withApollo } from 'helper/apollo';

type Props = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};





const ProfilePage: NextPage<Props> = ({ deviceType }) => {
  const { authState:{isAuthenticated},authDispatch } = useContext<any>(AuthContext);
  const router = useRouter()
 
  useEffect(() => {
    if(!isAuthenticated){ 
    router.push('/signin');
    }
}

, []);
let datass ={}
  if(isAuthenticated){
  const { data, error, loading } = useQuery(GET_LOGGED_IN_CUSTOMER);

  if (!data || loading) {
    return <div>loading...</div>;
  }
  datass=data&& data.profile

console.log("datass",datass)

  if (error) return <div>{error.message}</div>;

}

  return (
    <>
      <SEO title='Profile - Exponet' description='Profile Details' />
      <ProfileProvider initData={datass && datass}>
        <Modal>
          <PageWrapper>
            <SidebarSection>
              <Sidebar />
            </SidebarSection>
            <ContentBox>
              <SettingsContent deviceType={deviceType} />
            </ContentBox>

            <SiteFooter style={{ marginTop: 50 }}>
              <FormattedMessage
                id='siteFooter'
                // defaultMessage='Exponent is a product of'
              />
              &nbsp; <Link href='#'>&copy;2020</Link>
            </SiteFooter>
          </PageWrapper>
        </Modal>
      </ProfileProvider>
    </>
  );
};

export default withApollo(ProfilePage);
