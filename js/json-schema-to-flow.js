const fs = require('fs')
const path = require('path')

const {
  parseSchema,
  simplifySchema,
  schemaToFlow,
  convertSchema
} = require('json-schema-to-flow-type')

const measureable_units_ref = 'measureable_units.json'
const measureable_units_schema = require('../json/measureable_units')

const timing_ref = 'timing.json'
const timing_schema = require('../json/timing')

const measureable_units = parseSchema(measureable_units_schema)

const timing = parseSchema(timing_schema, {
  [measureable_units_ref]: measureable_units_schema
})

const fermentable = parseSchema(require('../json/fermentable'), {
  [measureable_units_ref]: measureable_units_schema,
  [timing_ref]: convertSchema(
    simplifySchema(timing_schema, {
      [measureable_units_ref]: measureable_units_schema
    })
  )
})

const outputDir = '../definitions'

fs.writeFileSync(
  path.resolve(outputDir, 'measureable_units.js'),
  measureable_units
)
fs.writeFileSync(path.resolve(outputDir, 'timing.js'), timing)
fs.writeFileSync(path.resolve(outputDir, 'fermentable.js'), fermentable)
