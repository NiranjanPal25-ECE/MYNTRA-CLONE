import BagItem from "../components/bagItem";
import BagSummary from "../components/bagSummary";
import {useSelector} from "react-redux";

function Bag() {
    const bagItems = useSelector(state => state.bag);
    const items = useSelector(state => state.items);
    const finalItems = items.filter(item => {
      const itemIndex = bagItems.indexOf(item.id);
      return itemIndex >= 0;
    })

  return (
    <div>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map(item => <BagItem item ={item}/>)}
            
          </div>
          <BagSummary/>
        </div>
      </main>
    </div>
  );
}

export default Bag;
