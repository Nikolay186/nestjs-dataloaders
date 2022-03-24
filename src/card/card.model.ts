import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column } from 'src/column/column.model';

@ObjectType()
export class Card {
    @Field(() => Int, { nullable: false })
    id: number;

    @Field({ nullable: false })
    title: string;

    @Field(() => Int, { nullable: false })
    column_id: number;

    @Field(() => Column, { nullable: true })
    column?: Column;
}