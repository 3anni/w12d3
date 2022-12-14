import { useCoffee } from "../context/CoffeeContext";

const SelectedCoffeeBean = props => {
  const { coffeeBean } = useCoffee();

  // console.log('coffeeBean', coffeeBean);
  return (
    <div className="selected-coffee">
      <h2>{coffeeBean.name}</h2>
    </div>
  )
}

export default SelectedCoffeeBean;
