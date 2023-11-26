import 'animate.css';
import Image from 'next/image'
import jingleBells from "./jingle-bell.svg";
import christmasTree from "./christmas-tree.png";


export default function getContent() {
  return (
    <div className="content-container">
 
      <h1> Christmas Countdown </h1>{" "}
      <div className="cover"></div>
      <div className="christmas-tree-container">
      
      
        <Image
          className={`animate__animated animate__rubberBand christmas-tree`}
          src={christmasTree}
        />
     
        
        <div className="snow"></div>
        
        
      </div>
      <div class="legs-feet"></div>
      <div className="bottom"> <div class="bt1"></div>
    <div className="bt2"></div></div>
    </div>
  );
}
