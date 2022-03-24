import { Module } from "@nestjs/common";
import { ColumnResolver } from "./column.resolver";
import { ColumnService } from "./column.service";

@Module({
    imports: [ColumnModule],
    providers: [ColumnResolver, ColumnService],
    exports: [ColumnService],
})
export class ColumnModule { }