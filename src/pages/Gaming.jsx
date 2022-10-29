import Slider from "../components/Slider";
import { GamingData } from "../datas/imagesData";

function Gaming() {
  return <Slider datas={GamingData} api={false} />;
}

export default Gaming;
