export  const reducer = (cart,action) =>{
    if(action.type === 'addItems'){
       const findItem = cart.data.findIndex(itm => itm.id === action.payload.id)
       if(findItem === -1){
    
        return {...cart,data:[...cart.data,{...action.payload,amnt:1,total:0}]};

       }else{
            const newItem = cart.data.map((itm,index) => {
                if(index === findItem){
                    return {...itm,amnt:itm.amnt+1};
                }
                return itm;
          })
          return {...cart,data:newItem};
        }
    }

    if(action.type === 'removeItem'){
        const item = cart.data.filter(itm => itm.id !== action.payload);
        return {...cart,data:[...item]};
    }

    if(action.type ==='Amount_Total'){
        let Amnt  = 0;
        let ToTl = 0;
        const newItem = cart.data.map(itm => {

            Amnt += itm.amnt;
            ToTl += itm.amnt*itm.new_price;
            return {...itm,total:itm.amnt * itm.new_price}
        })
        return {...cart,data:newItem,Amount:Amnt,Total:ToTl};
    }
    return cart;
} 