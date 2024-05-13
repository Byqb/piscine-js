function dogYears(planet, age) {
    const orbitalPeriods = {
        earth: 1.0,
        mercury: 0.2408467,
        venus: 0.61519726,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132
    };
    const earthYearInSecond = 31557600;
    const ageInEarthYears = age / earthYearInSecond;
    const ageInDogYears = ageInEarthYears * 7;
    const ageOnPlanet = ageInDogYears / orbitalPeriods[planet];
    const roundedAge = Math.round(ageOnPlanet * 100) / 100;
    return roundedAge;
}