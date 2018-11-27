export type FermentableBase = {
  name: string,
  type:
    | 'dry extract'
    | 'extract'
    | 'grain'
    | 'sugar'
    | 'fruit'
    | 'juice'
    | 'honey'
    | 'other',
  origin?: string,
  supplier?: string,
  grain_group?:
    | 'base'
    | 'caramel'
    | 'flaked'
    | 'roasted'
    | 'specialty'
    | 'smoked'
    | 'adjunct',
  yield: YieldType,
  color: {|
    unit: 'EBC' | 'Lovi' | 'SRM',
    value: number
  |}
}

export type FermentableType = FermentableBase

export type FermentableAdditionType = FermentableBase

export type YieldType = {|
  fine_grind?: {|
    unit: '%',
    value: number
  |},
  coarse_grind?: {|
    unit: '%',
    value: number
  |},
  fine_coarse_difference?: {|
    unit: '%',
    value: number
  |},
  potential?: {|
    unit: 'sg' | 'plato' | 'brix',
    value: number
  |}
|}

export type FermentableInventoryType = {|
  amount?:
    | {|
        unit:
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
          | 'ibbl',
        value: number
      |}
    | {|
        unit: 'mg' | 'g' | 'kg' | 'lb' | 'oz',
        value: number
      |}
|}

export type HttpsRawGithubusercontentComBeerjsonBeerjsonMasterJsonFermentableJson = {||}
