export const reducer = (state, action) => {

    const { shoppingCart, totalAmount, totalQuantity } = state;

    let product;
    let index;
    let updatedPrice;
    let updatedQty;
    switch (action.type) {

        case 'ADD_TO_CART':
            const check = shoppingCart.find(
                product => product.id === action.id
            )
            if (check) {
                return state;
            }
            else {
                product = action.product;
                let indQty = 1
                updatedQty = parseInt(totalQuantity) + 1;
                updatedPrice = totalAmount + product.price;
                return {
                    shoppingCart: [product, ...shoppingCart],
                    totalAmount: updatedPrice,
                    totalQuantity: updatedQty,
                    indQty: indQty
                }
            }

        case 'INC':
            product = shoppingCart.map((currElem) => {
                if (currElem.id === action.id) {
                    return {
                        ...currElem,
                        Quantity: currElem.Quantity + 1,
                    }
                }
                return currElem
            })
            updatedQty = totalQuantity + 1
            index = shoppingCart.findIndex(cart => cart.id === action.id)
            updatedPrice = totalAmount + product[index].price
            return {
                ...state,
                shoppingCart: [...product],
                totalQuantity: updatedQty,
                totalAmount: updatedPrice
            }

        case 'DRC':
            product = shoppingCart.map((currElem) => {
                if (currElem.id === action.id) {
                        return {
                            ...currElem,
                            Quantity: currElem.Quantity - 1,
                    }
                }
                return currElem
            })
            updatedQty = totalQuantity - 1;
            index = shoppingCart.findIndex(cart => cart.id === action.id)
                updatedPrice = totalAmount - product[index].price;
            
            return {
                ...state,
                shoppingCart: [...product],
                totalQuantity: updatedQty,
                totalAmount: updatedPrice
            }

        case 'TRASH':
            const filtered = shoppingCart.filter(
                product => product.id !== action.id
            )
            product = action.cart;
            updatedQty = totalQuantity - product.Quantity;
            updatedPrice = totalAmount - product.price * product.Quantity;
            return {
                shoppingCart: [...filtered],
                totalAmount: updatedPrice,
                totalQuantity: updatedQty
            }
        default :
            return {
                ...shoppingCart
            }

    }

}
