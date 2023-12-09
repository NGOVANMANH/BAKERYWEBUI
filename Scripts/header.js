const header = document.querySelector("#header")

const html = `
<img
                src="../Images/Logo/PT-Talkindo-Selaksa-Anugrah-2.png"
                alt=""
                class="logo"
            />
            <ul class="menu">
                <li class="menu__sub-menu">
                    <a href="./" class="menu__sub-menu--link">TRANG CHỦ</a>
                </li>
                <li class="menu__sub-menu">
                    <a href="../Views/Products.html" class="menu__sub-menu--link">SẢN PHẨM</a>
                </li>
                <li class="menu__sub-menu">
                    <a href="../Views/branch.html" class="menu__sub-menu--link"
                        >HỆ THỐNG CỬA HÀNG</a
                    >
                </li>
                <li class="menu__sub-menu">
                    <a href="../Views/introduction.html" class="menu__sub-menu--link">GIỚI THIỆU</a>
                </li>
                <li class="menu__sub-menu">
                    <a href="../Views/recruitment.html" class="menu__sub-menu--link">TUYỂN DỤNG</a>
                </li>
                <li class="menu__sub-menu">
                    <a href="../Views/contact.html" class="menu__sub-menu--link">LIÊN HỆ</a>
                </li>
            </ul>
            <div class="option">
                <div class="option__language">VI | EN</div>
                <a class="div-icon" href="Cart.html"><i class="fa-solid fa-cart-shopping icon"></i></a>
                <div class="div-icon"><i class="fa-solid fa-magnifying-glass icon"></i></i></div>
                
                
            </div>
`
header.innerHTML = html