export type UseType =
  | 'add_to_mash'
  | 'add_to_boil'
  | 'add_to_fermentation'
  | 'add_to_package'

export type TimingType = {|
  time?: {|
    unit: 'sec' | 'min' | 'hr' | 'day' | 'week' | 'month' | 'year',
    value: number
  |},
  duration?: {|
    unit: 'sec' | 'min' | 'hr' | 'day' | 'week' | 'month' | 'year',
    value: number
  |},
  continuous?: boolean,
  specific_gravity?: {|
    unit: 'sg' | 'plato' | 'brix',
    value: number
  |},
  pH?: {|
    unit: 'pH',
    value: number
  |},
  step?: number,
  use?: UseType
|}

export type HttpsRawGithubusercontentComBeerjsonBeerjsonMasterJsonTimingJson = {||}
