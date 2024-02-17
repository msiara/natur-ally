import GivingBlock from '../../../assets/giving-block.svg';
import { CardProps } from './Card.types';

import styles from './Card.module.css';

export default function Card({ children }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={GivingBlock} alt="Giving Block" />
        <div>
          <h2 className={styles.title}>The giving block</h2>
          <p className={styles.description}>Set up your donation goal!</p>
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
