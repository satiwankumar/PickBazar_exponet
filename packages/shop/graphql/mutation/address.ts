import gql from 'graphql-tag';

export const UPDATE_ADDRESS = gql`
mutation updateAddress($id:Int, $address_type: String, $address:String){
updateAddress(id:$id, address_type: $address_type, address:$address ){
  status
  message
}
}
`;
export const DELETE_ADDRESS = gql`
  mutation($addressId: String!) {
    deleteAddress(addressId: $addressId) {
      id
      name
      address {
        id
        name
        info
      }
    }
  }
`;
