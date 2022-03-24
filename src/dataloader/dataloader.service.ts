import { Injectable } from "@nestjs/common";
import DataLoader from "dataloader";
import { Card } from "src/card/card.model";
import { CardService } from "src/card/card.service";
import { Column } from "src/column/column.model";
import { ColumnService } from "src/column/column.service";

@Injectable()
export class DataloaderService {
    constructor(
        private readonly column_service: ColumnService,
        private readonly card_service: CardService) { }

    create_loaders() {
        const column_loader = new DataLoader<number, Column>(
            async (ids: readonly number[]) => this.column_service.find_columns_for_loader(ids as number[]),
        );
        const card_loader = new DataLoader<number, Card>(
            async (ids: readonly number[]) => this.card_service.find_cards_for_loader(ids as number[]),
        );
        return { column_loader, card_loader };
    }
}