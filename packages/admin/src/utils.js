export const getURl =  (image)=>{
    if (typeof window !== 'undefined') {
      var path = "http://dev74.onlinetestingserver.com/fleetcart_lighthouse/FleetCart/public/uploads/products/"+image; // (or whatever)

      return path
      console.log("path",path)
    } else {
      
    }
  }