import { FilterType } from "../enums/filter-type.enum";
import { MatchType } from "../enums/match-type.enum";

export class SearchQuery {
  matchType: MatchType;
  parameter: FilterType;
  valueTobeSearched: string = ""; 
}
