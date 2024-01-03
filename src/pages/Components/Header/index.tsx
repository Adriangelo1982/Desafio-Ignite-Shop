import { useRouter } from "next/router";
import logoImg from "../../assets/Logo.svg";
import { HeaderContainer } from "./styles";
import { Cart } from "../Cart"

export function Header() {
  const { pathname } = useRouter()

  const showCartButton = pathname !== "/success"

  return (
      <HeaderContainer>
        <div>
          <img src={logoImg.src} alt="" />
        </div>  
          { showCartButton && <Cart />}
      </HeaderContainer>

  )
}