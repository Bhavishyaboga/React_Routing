import images from './sample.jpg'
import './About.css'
export default function(){
    return(
        <>
        <h1>About Page</h1>
        <img src={images} alt="" className='image' width="350px" height="350px"/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic officia, officiis suscipit, architecto sapiente voluptas consequuntur assumenda obcaecati odio autem explicabo quasi exercitationem dolorum ut maxime quisquam ab at ipsa?
        </p>

        </>
    )
}