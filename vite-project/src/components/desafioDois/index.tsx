import { useEffect, useState } from "react";

interface ClimaData {
  current_weather: {
    temperature: number;
    windspeed: number;
  }
}

export function DesafioDois() {
    const [temperatura, setTemperatura] = useState<number | null>(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        fetch("https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current_weather=true")
            .then(res => res.json())
            .then((data: ClimaData) => {
                setTemperatura(data.current_weather.temperature);
                setCarregando(true);
            });
    }, []);

    return(
        <div>
            {carregando ? <p>Carregando...</p> : <p>Temperatura atual: {temperatura}°C</p>}
        </div>
    );
}


export default DesafioDois;