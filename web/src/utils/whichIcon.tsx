import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const whichIcon = (icon: string): JSX.Element | null => {
  if (icon === "Groceries") {
    return <FontAwesomeIcon icon="shopping-cart" />;
  } else if (icon === "Medical & Healthcare") {
    return <FontAwesomeIcon icon="hand-holding-medical" />;
  } else if (icon === "House Items/Supplies") {
    return <FontAwesomeIcon icon="home" />;
  } else if (icon === "Transport") {
    return <FontAwesomeIcon icon="car-side" />;
  } else if (icon === "Taxes and fees") {
    return <FontAwesomeIcon icon="coins" />;
  } else if (icon === "Entertainment & travels") {
    return <FontAwesomeIcon icon="glass-cheers" />;
  } else if (icon === "Installments") {
    return <FontAwesomeIcon icon="hand-holding-usd" />;
  } else if (icon === "Personal") {
    return <FontAwesomeIcon icon="tshirt" />;
  } else if (icon === "Education") {
    return <FontAwesomeIcon icon="graduation-cap" />;
  } else if (icon === "Gifts/Donations") {
    return <FontAwesomeIcon icon="gifts" />;
  } else if (icon === "Other") {
    return <FontAwesomeIcon icon="ellipsis-h" />;
  } else {
    return null;
  }
};
