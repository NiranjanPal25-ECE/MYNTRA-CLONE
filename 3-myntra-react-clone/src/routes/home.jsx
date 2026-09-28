import { useSelector } from "react-redux";
import Item from "../components/item";

function Home() {
    const items = useSelector((store) => store.items ?? []);

    return (
        <main>
            <div className="items-container">
                {items.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </div>
        </main>
    );
}

export default Home;