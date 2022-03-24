import { Query, Resolver, ResolveField, Parent, Context, Args } from "@nestjs/graphql";
import { Card } from "src/card/card.model";
import { data } from "src/data";
import { Column } from "./column.model";

@Resolver(() => Column)
export class ColumnResolver {
    constructor() { }

    @ResolveField('cards', () => [Card], { nullable: true })
    get_cards(@Parent() column: Column, @Context() { loaders }) {
        console.log('triggered columnloader from get column method');
        let card_ids = data.cards.filter(card => card.column_id === column.id);
        return loaders.card_loader.load(card_ids);
    }

    @Query(() => Column, { nullable: true })
    get_column(@Args('id') id: number): Column {
        return data.columns.find(col => col.id === id);
    }

    @Query(() => [Column], { nullable: true })
    get_columns(): Column[] {
        return data.columns;
    }

}