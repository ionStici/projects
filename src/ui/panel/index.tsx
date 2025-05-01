import { BtnFeatured } from "./btn-featured";
import { BtnFilter } from "./btn-filter";
import { BtnLevel } from "./btn-level";
import { PanelWrapper } from "./panel-wrapper";
import { SearchInput } from "./search-input";

export function Panel() {
  return (
    <PanelWrapper>
      <SearchInput />
      <BtnFeatured />
      <BtnLevel />
      <BtnFilter />
    </PanelWrapper>
  );
}
