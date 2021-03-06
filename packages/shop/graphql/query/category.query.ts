import gql from 'graphql-tag';


export const GET_CATEGORIES = gql`
query getCategory($category_id:Int,$filter_by_name: String){
  getCategory(category_id:$category_id,filter_by_name: $filter_by_name){
    id
    image
    name
    content
    slug
    type
    subcategories {
      id
      name
      content
      slug
      position
      is_searchable
      parent_id
       subcategories {
      name
      content
      slug
      position
      is_searchable
      parent_id
    }
    }
},
 
  getSiteSetting{
        site_name
        site_description
        image
}

getBrand(filter_text: null,category_id: $category_id){
  id
  name
},
}`;