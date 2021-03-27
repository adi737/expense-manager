import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import NextLnik from "next/link";
import { Link } from "@chakra-ui/react";

export const whichIconDesktop = (category: string): JSX.Element | null => {
  if (category === "Groceries") {
    return (
      <NextLnik href="/expenses/groceries" passHref>
        <Link>
          <FontAwesomeIcon icon="shopping-cart" /> {category}
        </Link>
      </NextLnik>
    );
  } else if (category === "Medical & Healthcare") {
    return (
      <NextLnik href="/expenses/medical" passHref>
        <Link>
          <FontAwesomeIcon icon="hand-holding-medical" /> {category}
        </Link>
      </NextLnik>
    );
  } else if (category === "House Items/Supplies") {
    return (
      <NextLnik href="/expenses/house" passHref>
        <Link>
          <FontAwesomeIcon icon="home" /> {category}
        </Link>
      </NextLnik>
    );
  } else if (category === "Transport") {
    return (
      <NextLnik href="/expenses/transport" passHref>
        <Link>
          <FontAwesomeIcon icon="car-side" /> {category}
        </Link>
      </NextLnik>
    );
  } else if (category === "Taxes and fees") {
    return (
      <NextLnik href="/expenses/taxes" passHref>
        <Link>
          <FontAwesomeIcon icon="coins" /> {category}
        </Link>
      </NextLnik>
    );
  } else if (category === "Entertainment & travels") {
    return (
      <NextLnik href="/expenses/entertainment" passHref>
        <Link>
          <FontAwesomeIcon icon="glass-cheers" /> {category}
        </Link>
      </NextLnik>
    );
  } else if (category === "Installments") {
    return (
      <NextLnik href="/expenses/installments" passHref>
        <Link>
          <FontAwesomeIcon icon="hand-holding-usd" /> {category}
        </Link>
      </NextLnik>
    );
  } else if (category === "Personal") {
    return (
      <NextLnik href="/expenses/personal" passHref>
        <Link>
          <FontAwesomeIcon icon="tshirt" /> {category}
        </Link>
      </NextLnik>
    );
  } else if (category === "Education") {
    return (
      <NextLnik href="/expenses/education" passHref>
        <Link>
          <FontAwesomeIcon icon="graduation-cap" /> {category}
        </Link>
      </NextLnik>
    );
  } else if (category === "Gifts/Donations") {
    return (
      <NextLnik href="/expenses/donations" passHref>
        <Link>
          <FontAwesomeIcon icon="gifts" /> {category}
        </Link>
      </NextLnik>
    );
  } else if (category === "Other") {
    return (
      <NextLnik href="/expenses/other" passHref>
        <Link>
          <FontAwesomeIcon icon="ellipsis-h" /> {category}
        </Link>
      </NextLnik>
    );
  } else {
    return null;
  }
};
