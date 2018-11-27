export type VolumeType = {|
  unit: VolumeUnitType,
  value: number
|}

export type MassType = {|
  unit: MassUnitType,
  value: number
|}

export type DiastaticPowerType = {|
  unit: DiastaticPowerUnitType,
  value: number
|}

export type TemperatureType = {|
  unit: TemperatureUnitType,
  value: number
|}

export type PressureType = {|
  unit: PressureUnitType,
  value: number
|}

export type AcidityType = {|
  unit: AcidityUnitType,
  value: number
|}

export type TimeType = {|
  unit: TimeUnitType,
  value: number
|}

export type ColorType = {|
  unit: ColorUnitType,
  value: number
|}

export type CarbonationType = {|
  unit: CarbonationUnitType,
  value: number
|}

export type BitternessType = {|
  unit: BitternessUnitType,
  value: number
|}

export type GravityType = {|
  unit: GravityUnitType,
  value: number
|}

export type SpecificHeatType = {|
  unit: SpecificHeatUnitType,
  value: number
|}

export type ConcentrationType = {|
  unit: ConcentrationUnitType,
  value: number
|}

export type SpecificVolumeType = {|
  unit: SpecificVolumeUnitType,
  value: number
|}

export type UnitType = {|
  unit: UnitUnitType,
  value: number
|}

export type CarbonationRangeType = {|
  minimum: CarbonationType,
  maximum: CarbonationType
|}

export type BitternessRangeType = {|
  minimum: BitternessType,
  maximum: BitternessType
|}

export type TemperatureRangeType = {|
  minimum: TemperatureType,
  maximum: TemperatureType
|}

export type ColorRangeType = {|
  minimum: ColorType,
  maximum: ColorType
|}

export type GravityRangeType = {|
  minimum: GravityType,
  maximum: GravityType
|}

export type PercentRangeType = {|
  minimum: PercentType,
  maximum: PercentType
|}

export type VolumeUnitType =
  | 'ml'
  | 'l'
  | 'tsp'
  | 'tbsp'
  | 'floz'
  | 'cup'
  | 'pt'
  | 'qt'
  | 'gal'
  | 'bbl'
  | 'ifloz'
  | 'ipt'
  | 'iqt'
  | 'igal'
  | 'ibbl'

export type MassUnitType = 'mg' | 'g' | 'kg' | 'lb' | 'oz'

export type DiastaticPowerUnitType = 'Lintner' | 'WK'

export type TemperatureUnitType = 'C' | 'F'

export type AcidityUnitType = 'pH'

export type PressureUnitType = 'kPa' | 'psi' | 'bar'

export type TimeUnitType =
  | 'sec'
  | 'min'
  | 'hr'
  | 'day'
  | 'week'
  | 'month'
  | 'year'

export type ColorUnitType = 'EBC' | 'Lovi' | 'SRM'

export type CarbonationUnitType = 'vols'

export type BitternessUnitType = 'IBUs'

export type GravityUnitType = 'sg' | 'plato' | 'brix'

export type DensityUnitType = 'sg' | 'plato' | 'brix'

export type ConcentrationUnitType = 'ppm' | 'ppb' | 'mg/l'

export type SpecificHeatUnitType = 'Cal/(g C)' | 'J/(kg K)' | 'BTU/(lb F)'

export type SpecificVolumeUnitType =
  | 'qt/lb'
  | 'gal/lb'
  | 'gal/oz'
  | 'l/g'
  | 'l/kg'
  | 'floz/oz'
  | 'm^3/kg'
  | 'ft^3/lb'

export type UnitUnitType = '1' | 'unit' | 'each' | 'dimensionless'

export type DateType = string

export type PercentType = {|
  unit: PercentUnitType,
  value: number
|}

export type PercentUnitType = '%'

export type QualitativeRangeType =
  | 'very low'
  | 'low'
  | 'medium low'
  | 'medium'
  | 'medium high'
  | 'high'
  | 'very high'

export type VersionType = number

export type HttpsRawGithubusercontentComBeerjsonBeerjsonMasterJsonMeasureableUnitsJson = {||}
