import imagetest2 from '../assets/imagetest2.jpg';
function Card(){

return(
<div className="card">
<img className="card-image" src={imagetest2} alt="visual" />
<h2 className="card-title">Visual Card</h2>
<p className="card-text">Also Selling dumplings</p>
</div>



);


}
export default Card