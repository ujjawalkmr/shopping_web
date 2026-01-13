import "../css_file/About.css"
function PageImageWithText() {
    return (
        <div>
            <img
                className="about-image"
                src="/assets/images/field_cow.avif"
                alt="About"
            />
            <div className="about-text">
                Welcome to Our Farm
            </div>
        </div>

    )
        ;
}

export default PageImageWithText;