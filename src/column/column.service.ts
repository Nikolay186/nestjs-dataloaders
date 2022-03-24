import { Injectable } from "@nestjs/common";
import { data } from "src/data";

@Injectable()
export class ColumnService {
    find_columns_for_loader(ids: number[]) {
        const columns = data.columns.filter(col => ids.includes(col.id));
        
        return ids.map(id => columns.find(col => col.id === id) || undefined);
    }
}