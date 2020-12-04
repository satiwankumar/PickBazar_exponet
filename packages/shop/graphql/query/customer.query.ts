import gql from 'graphql-tag';

export const GET_LOGGED_IN_CUSTOMER = gql`
  query profile{
    profile{
      first_name
        last_name
        email
        image
        

      }
    }

  # query getUser($id: String = "1") {
  #   me(id: $id) {
  #     id
  #     name
  #     email
  #     address {
  #       id
  #       type
  #       name
  #       info
  #     }
  #     contact {
  #       id
  #       type
  #       number
  #     }
  #     card {
  #       id
  #       type
  #       cardType
  #       name
  #       lastFourDigit
  #     }
  #   }
  # }
`;
