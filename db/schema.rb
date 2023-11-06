# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2022_09_12_101821) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "currencies", force: :cascade do |t|
    t.string "name", null: false
    t.string "symbol", null: false
    t.string "iso_code", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "exchange_rates", force: :cascade do |t|
    t.decimal "rate", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "original_currency_id", null: false
    t.bigint "new_currency_id", null: false
    t.index ["new_currency_id"], name: "index_exchange_rates_on_new_currency_id"
    t.index ["original_currency_id"], name: "index_exchange_rates_on_original_currency_id"
  end

  create_table "expenses", force: :cascade do |t|
    t.decimal "value", null: false
    t.string "description", null: false
    t.date "expended_at", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "currency_id", null: false
    t.index ["currency_id"], name: "index_expenses_on_currency_id"
  end

  add_foreign_key "exchange_rates", "currencies", column: "new_currency_id"
  add_foreign_key "exchange_rates", "currencies", column: "original_currency_id"
  add_foreign_key "expenses", "currencies"
end
