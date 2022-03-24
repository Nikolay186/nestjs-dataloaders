import { Card } from "./card/card.model";
import { Column } from "./column/column.model";


const cards: Card[] = [
  {
    id: 1,
    title: 'Workshop',
    column_id: 1,
  },
  {
    id: 2,
    title: 'GraphQL',
    column_id: 1,
  },
  {
    id: 3,
    title: 'Apollo',
    column_id: 2,
  },
];

const columns: Column[] = [
  {
    id: 1,
    title: 'TODO',
  },
  {
    id: 2,
    title: 'Completed',
  },
];

export const data = {
    columns: columns,
    cards: cards,
};