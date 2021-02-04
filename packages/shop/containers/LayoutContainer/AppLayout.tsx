import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Sticky from 'react-stickynode';
import Header from './Header/Header';
import { useStickyState } from 'contexts/app/app.provider';
import { LayoutWrapper } from './Layout.style';
import { isCategoryPage } from './is-home-page';
import { useQuery } from '@apollo/react-hooks';
import { ProfileProvider } from 'contexts/profile/profile.provider';
import { AuthContext } from 'contexts/auth/auth.context';
import { GET_LOGGED_IN_CUSTOMER } from 'graphql/query/customer.query';
import Loader from 'components/Loader/Loader';
import { withApollo } from 'helper/apollo';

const MobileHeader = dynamic(() => import('./Header/MobileHeader'), {
  ssr: false,
});

type LayoutProps = {
  className?: string;
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  token?: string;
};

const Layout: React.FunctionComponent<LayoutProps> = ({
  className,
  children,
  deviceType: { mobile, tablet, desktop },
  token,
}) => {
  const isSticky = useStickyState('isSticky');
  const { pathname } = useRouter();
  const {
    authState: { isAuthenticated },
    authDispatch,
  } = React.useContext<any>(AuthContext);
  let data = ""
  // console.log("isAuthenticated", isAuthenticated)
let datass ={}
let loadings = false;
  if (isAuthenticated) {

    const { data, error, loading } = useQuery(GET_LOGGED_IN_CUSTOMER);
    if (loading) {
      return (
        <>
        <div className="loading">loading</div>
        <Loader/>
        </>
      );
    }
    loadings=loading
    
    if (error) return <div>{error} </div>;
  datass=data&& data.profile

  }else{
    datass ={userAddress:[]}
  }
  const isHomePage = isCategoryPage(pathname);
  return (
    <ProfileProvider initData={datass} >
    <LayoutWrapper className={`layoutWrapper ${className}`}>
      {(mobile || tablet) && (
        <Sticky enabled={isSticky} innerZ={1001}>
          <MobileHeader
            className={`${isSticky ? 'sticky' : 'unSticky'} ${
              isHomePage ? 'home' : ''
            }`}
            pathname={pathname}
          />
        </Sticky>
      )}

      {desktop && (
        <Sticky enabled={isSticky} innerZ={1001}>
          <MobileHeader
            className={`${isSticky ? 'sticky' : 'unSticky'} ${
              isHomePage ? 'home' : ''
            } desktop`}
            pathname={pathname}
          />
          <Header
          apolloClient={''}
          apolloState={''}
            className={`${isSticky && isHomePage ? 'sticky' : 'unSticky'} ${
              isHomePage ? 'home' : ''
            }`}
            token={token}
            pathname={pathname}
          />
        </Sticky>
      )}
      {children}
    </LayoutWrapper>
    </ProfileProvider>
  );
};

export default withApollo(Layout);
