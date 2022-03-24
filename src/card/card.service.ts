import { Injectable } from "@nestjs/common";
import { data } from "src/data";

@Injectable()
export class CardService {
    find_cards_for_loader(ids: number[]) {
        const cards = data.cards.filter(card => ids.includes(card.id));
        
        return ids.map(id => cards.find(card => card.id === id) || undefined);
    }
}