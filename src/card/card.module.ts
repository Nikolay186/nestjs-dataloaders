import { Module } from "@nestjs/common";
import { ColumnModule } from "src/column/column.module";
import { CardResolver } from "./card.resolver";
import { CardService } from "./card.service";

@Module({
    imports: [ColumnModule],
    providers: [CardResolver, CardService],
    exports: [CardService],
})
export class CardModule { }