import { Module } from "@nestjs/common";
import { CardModule } from "src/card/card.module";
import { ColumnModule } from "src/column/column.module";
import { DataloaderService } from "./dataloader.service";

@Module({
    providers: [DataloaderService],
    imports: [ColumnModule, CardModule],
    exports: [DataloaderService],
})
export class DataloaderModule { }