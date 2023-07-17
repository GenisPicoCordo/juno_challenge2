import React from "react";
import styles from "../../styles/people.module.scss";
import Image from "next/image";

interface Props {
  name: string;
  height: string;
  mass: string;
  gender: string;
  index: number;
}

const PeopleCard = ({ name, height, mass, gender, index }: Props) => {
  const imagePath = `/assets/people/${index + 1}.jpg`;

  return (
    <div className={styles.peopleCard}>
      <Image src={imagePath} width={180} height={200} alt="" />
      <div className={styles.attributes}>
        {/* name */}
        <p className={styles.text}>
          <span className={styles.textType}> Name: </span> {name}
        </p>
        {/* height */}
        <p className={styles.text}>
          <span className={styles.textType}>height:</span> {height}
        </p>
        {/* mass */}
        <p className={styles.text}>
          <span className={styles.textType}>mass:</span> {mass}
        </p>
        {/* gender */}
        <p className={styles.text}>
          <span className={styles.textType}>gender:</span> {gender}
        </p>
      </div>
    </div>
  );
};

export default PeopleCard;
