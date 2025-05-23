import RequestProvider from "./RequestProvider"
import BasketProvider from "./BasketProvider"
import WishListProvider from "./WishListProvider"

function MainProvider({children}) {
  return (
    <RequestProvider>
        <BasketProvider>
            <WishListProvider>
            {children}
            </WishListProvider>
        </BasketProvider>
    </RequestProvider>
  )
}

export default MainProvider