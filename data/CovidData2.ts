export interface TimeLineData {
    updated_at: Date;
    date: string;
    deaths: number;
    confirmed: number;
    recovered: number;
    active: number;
    new_confirmed: number;
    new_recovered: number;
    new_deaths: number;
    is_in_progress: boolean;
}

export interface CovidDatav2 {
    data: TimeLineData[];
    _cacheHit: boolean;
}
