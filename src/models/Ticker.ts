
export class Ticker {
    public readonly id!: string;
    public readonly name!: string;
    public readonly symbol!: string;
    public readonly rank!: number;
    public readonly circulating_supply!: number;
    public readonly total_supply!: number;
    public readonly max_supply!: number;
    public readonly beta_value!: number;
    public readonly last_updated!: string;

    // Todo: Create model for Quote
    public readonly quotes!: {[index: string]: any};
  }
 