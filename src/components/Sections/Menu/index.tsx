import react from "react";
import { useStateValue } from "../../../context/StateProvider";
import Filters from "../../Filters";
import { Title } from "..";
import App from "../Fruits/App";

const Menu = () => {
  // eslint-disable-next-line no-empty-pattern
  const [] = react.useState(0);
  // eslint-disable-next-line no-empty-pattern
  const [] = useStateValue();
  const [filter, setFilter] = react.useState<string>("all");

  return (
    <section className="w-full my-5 " id="menu">
      <div className="w-full flex items-center justify-center">
        <Title title="Our Hot Dishes" center />
      </div>
      <Filters filter={filter} setFilter={setFilter} />
      <App />
      {/* <Container
        className="bg-containerbg"
        col
        scrollOffset={scrollValue}
        items={filter === "all" ? foodItems : FilterFood(filter)}
      /> */}
    </section>
  );
};

export default Menu;
