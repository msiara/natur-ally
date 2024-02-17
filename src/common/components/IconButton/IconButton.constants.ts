import ChevronLeft from '../../../assets/chevron-left.svg';
import ChevronRight from '../../../assets/chevron-right.svg';
import Close from '../../../assets/close.svg';

export const ICONS = {
  'chevron-left': {
    src: ChevronLeft,
    alt: 'Left',
  },
  'chevron-right': {
    src: ChevronRight,
    alt: 'Right',
  },
  close: {
    src: Close,
    alt: 'Close',
  },
} as const;
