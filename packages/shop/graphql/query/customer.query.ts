import gql from 'graphql-tag';

export const GET_LOGGED_IN_CUSTOMER = gql`
  query profile{
    profile{
      id
      first_name
      last_name
      email
      image
      phone_number
      phone_number_secondary
      userAddress{
          id
          address_type
          address
      }
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
