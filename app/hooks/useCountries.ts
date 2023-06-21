import countries from "world-countries";

const formattedCountries = countries.map((item) => ({
  value: item.cca2,
  label: item.name.common,
  flag: item.flag,
  latlng: item.latlng,
  region: item.region
}))

const useCountries = () => {
  const getAll = () => formattedCountries

  const getByValue = (value: string) => {
    return formattedCountries.find(i => i.value === value)
  }

  return {
    getAll,
    getByValue
  }
}

export default useCountries