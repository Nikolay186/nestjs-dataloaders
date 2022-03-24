import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Card } from "src/card/card.model";

@ObjectType()
export class Column {
    @Field(() => Int, { nullable: false })
    id: number;

    @Field({ nullable: false })
    title: string;

    @Field(() => [Card])
    cards?: Card[];
}