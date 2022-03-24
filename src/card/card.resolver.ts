import { Args, Query } from "@nestjs/graphql";
import { Context, Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Column } from "src/column/column.model";
import { data } from "src/data";
import { Card } from "./card.model";

@Resolver(() => Card)
export class CardResolver {
    constructor() { }

    @ResolveField('column', () => Column, { nullable: true })
    get_column(@Parent() card: Card, @Context() { loaders }) {
        console.log('triggered columnloader from get column method');
        return loaders.column_loader.load(card.column_id);
    }

    @Query(() => Card, { nullable: true })
    get_card(@Args('id') id: number): Card {
        return data.cards.find(card => card.id === id);
    }

    @Query(() => [Card], { nullable: true })
    get_cards(): Card[] {
        return data.cards;
    }

}