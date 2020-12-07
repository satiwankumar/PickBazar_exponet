export const getURl =  (image)=>{

  console.log("updateData",image)

    if (typeof window !== 'undefined' && !image.includes("http://dev74.onlinetestingserver.com/fleetcart_lighthouse/FleetCart/public/uploads/products/"+image)) {
      var path = "http://dev74.onlinetestingserver.com/fleetcart_lighthouse/FleetCart/public/uploads/products/"+image; // (or whatever)

      return path
      console.log("path",path)
    } else {
      
    }
  }