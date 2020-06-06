export interface Coordinates {
    latitude?: number;
    longitude?: number;
}

export interface Today {
    deaths: number;
    confirmed: number;
}

export interface Calculated {
    death_rate?: number;
    recovery_rate?: number;
    recovered_vs_death_ratio?: any;
    cases_per_million_population: number;
}

export interface LatestData {
    deaths: number;
    confirmed: number;
    recovered: number;
    critical: number;
    calculated: Calculated;
}

export interface CountryData {
    coordinates: Coordinates;
    name: string;
    code: string;
    population?: number;
    updated_at: Date;
    today: Today;
    latest_data: LatestData;
}

export interface CountryDataResponse {
    data: CountryData[];
    _cacheHit: boolean;
}
