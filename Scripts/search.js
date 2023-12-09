
const handleClose = () => {
    const element = document.querySelector(".searchp");
    element.style.display = "none";
};


const handleShow = () => {
    const element = document.querySelector(".searchp");
    element.style.display = "block";
};

const handleSearch = () => {
    const searchEle = document.querySelector(".searchp input");
    const changedValue = searchEle.value;
    alert(`tìm kiếm: ${changedValue}`)
}

const handleChange = (event) => {
    const changedValue = event.target.value;
    alert(`tìm kiếm: ${changedValue}`)
}
