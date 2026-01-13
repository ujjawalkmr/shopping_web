import "../css_file/About.css";
import Avatar from "@mui/material/Avatar";

function AnimatedTextImg() {
    return (
        <div className="who-we-are-container">
            <div className="left-side">
                <h1 className="heading">Who we are</h1>
                <p className="paragraph">We are multi-generational family dairy farm commited
                    su3 suiactices and susthest quallicifine highest quility milk Located in Farming region
                    ,our cows graze freely for nutrients-rich fields. Every day we work to
                    briok to bing he wholesome goodness of fam farm directly to you
                    We are multi-generational family dairy farm commited
                    su3 suiactices and susthest quallicifine highest quility milk Located in Farming region
                    ,our cows graze freely for nutrients-rich fields. Every day we work to
                    briok to bing he wholesome goodness of fam farm directly to you
                </p>
            </div>
            <div className="right-side">

                <Avatar
                    className="avatar"
                    alt="User"
                    src="assets/images/butter.jpg"
                    sx={{ width: 300, height: 300, marginRight: "80px" }} />
            </div>

        </div>
    )
        ;
}
export default AnimatedTextImg;