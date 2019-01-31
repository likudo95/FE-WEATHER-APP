export interface WeatherModel {
    id: number;
    name: string;
    cod: number;
    coordLon: number;
    coordLat: number;
    mainTemp: number;
    mainPressure: number;
    mainHumidity: number;
    mainTempMin: number;
    mainTempMax: number;
    windSpeed: number;
    windDeg: number;
    dt: Date;
    weatherMain: string;
    weatherDescription: string;
    weatherIcon: string;
    rain1h?: any;
    rain3h?: any;
    snow1h?: any;
    snow3h?: any;
}