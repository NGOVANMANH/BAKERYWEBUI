const slideImages = [
    {
        "image": "../Images/Slide/BUFFET-LAU-BANG-CHUYEN-WEB-DESKTOP-1920x720.jpg"
    },
    {
        "image": "../Images/Slide/BANH-MOI_THANG-11-06-1920x720.jpg"
    },
    {
        "image": "../Images/Slide/CUSTARD-COVER_WEB_DESKTOP-1920x720.jpg"
    },
    {
        "image": "../Images/Slide/PRICE_website-02.jpg"
    },
    {
        "image": "../Images/Slide/XMAS_COVER_WEB_DESKTOP-1920x720.jpg"
    },
    {
        "image": "../Images/Slide/z4668724191178_f70f6955a4a0cce030de45db8deacb35-1920x1080.jpg"
    }
]

const root = document.querySelector("#root");

slideImages.forEach((item, index) => {
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = `slide-${index}`;
    root.appendChild(img);
});