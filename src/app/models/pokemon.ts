export interface Pokemon {
  national_number: string;
  isChecked: boolean;
  sprites: {
    large: string;
  };
  name: string;
  type: string[];
}
