import 'reflect-metadata';
import 'class-transformer';

export class Quote {
    public readonly price!: number;
    public readonly volume_24h!: number;
    public readonly volume_24h_change_24h!: number;
    public readonly market_cap!: number;
    public readonly market_cap_change_24h!: number;
    public readonly percent_change_15m!: number;
    public readonly percent_change_30m!: number;
    public readonly percent_change_1h!: number;
    public readonly percent_change_6h!: number;
    public readonly percent_change_12h!: number;
    public readonly percent_change_24h!: number;
    public readonly percent_change_7d!: number;
    public readonly percent_change_30d!: number;
    public readonly percent_change_1y!: number;
    public readonly ath_price?: number;
    public readonly ath_date?: string;
    public readonly percent_from_price_ath?: number;
}
  