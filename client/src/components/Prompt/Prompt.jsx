import React from "react";
import "./Prompt.css";
import { Link } from "react-router-dom";
const Prompt =()=>{
return(
<div className="help text-center">
{/* <h6 class="help-para">Want To LEARN About The World Of Programming? Check Out Our Youtube Channel</h6> */}
<h4 className="learn">Want to LEARN about the <i>World Of Programming?</i> Check Out Our Youtube Channel</h4>
<div className="d-grid gap-2 col-lg-2 col-md-5 col-6 mx-auto">
 <Link to="https://www.youtube.com/@Tarlose"> <button className="btn help-btn px-4" type="button">YouTube</button></Link>
</div>
</div>

)
}
export default Prompt;