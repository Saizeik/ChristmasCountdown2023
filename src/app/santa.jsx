
import Image from 'next/image'
import 'animate.css';
import santa from "./sleigh.svg";
import reindeer from "./reindeer.svg";

export default function SantaReindeer() {
  return (
    <div className="animate__animated animate__fadeOutRightBig reindeer-container">
      <Image className="santa-image" src={santa} alt="santa's sleigh" />
      <Image className="reindeer-image" src={reindeer} alt="reindeer" />
      <Image className="reindeer-image" src={reindeer} alt="reindeer" />
      <Image className="reindeer-image" src={reindeer} alt="reindeer" />
      <Image className="reindeer-image" src={reindeer} alt="reindeer" />
    </div>
  );
}
