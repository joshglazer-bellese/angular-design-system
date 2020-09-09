export class IDropdownSettings {
  singleSelection?: boolean;
  idField?: string;
  textField?: string;
  disabledField?: string;
  enableCheckAll?: boolean;
  selectAllText?: string;
  unSelectAllText?: string;
  allowSearchFilter?: boolean;
  error?: any;
  clearSearchFilter?: boolean;
  hintMessage?: string;
  errorMessage?: string;
  labelName?: string;
  labelClass?: string;
  searchPlaceholder?: string;
  disabled?: boolean;
  placeholder?: string;
  maxHeight?: number;
  itemsShowLimit?: number;
  limitSelection?: number;
  searchPlaceholderText?: string;
  noDataAvailablePlaceholderText?: string;
  closeDropDownOnSelection?: boolean;
  showSelectedItemsAtTop?: boolean;
  defaultOpen?: boolean;
  allowRemoteDataSearch?: boolean;
  searchValue?: string;
}

export class ListItem {
  id: string | number;
  text: string | number;
  isDisabled?: boolean;
  searchValue?: string;

  public constructor(source: any) {
    if (typeof source === 'string' || typeof source === 'number') {
      this.id = this.text = source;
      this.isDisabled = false;
      this.searchValue = '';
    }
    if (typeof source === 'object') {
      this.id = source.id;
      this.text = source.text;
      this.isDisabled = source.isDisabled;
      this.searchValue = source.searchValue;
    }
  }
}
