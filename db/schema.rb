# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170718132507) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "areas_of_mentoring", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "calendar_event_registers", force: :cascade do |t|
    t.integer "calender_event_id", null: false
    t.integer "attendee_ids", array: true
    t.index ["calender_event_id"], name: "index_calendar_event_registers_on_calender_event_id"
  end

  create_table "calendar_events", force: :cascade do |t|
    t.date "event_date", null: false
    t.time "start_time", null: false
    t.string "name", null: false
    t.text "description"
    t.integer "register_id"
    t.index ["event_date"], name: "index_calendar_events_on_event_date"
  end

  create_table "campus_services", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "courses", force: :cascade do |t|
    t.integer "faculty"
    t.integer "course_type"
    t.text "course_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["faculty"], name: "index_courses_on_faculty"
  end

  create_table "notifications", force: :cascade do |t|
    t.integer "user_id", null: false
    t.text "notice"
    t.boolean "seen", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "rosters", force: :cascade do |t|
    t.date "effective_start_date", null: false
    t.date "effective_end_date", null: false
    t.integer "pmp_office"
    t.jsonb "roster"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "students", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.date "birth_date"
    t.string "nationality", default: "South Africa"
    t.string "home_language"
    t.string "cellphone"
    t.string "student_number", null: false
    t.boolean "commuter_student"
    t.boolean "res_student", default: true
    t.string "res_name"
    t.string "room_number"
    t.boolean "kovaks_student", default: false
    t.integer "course_id"
    t.string "type"
    t.integer "status"
    t.integer "mentor_id"
    t.integer "gender", default: 1
    t.date "arrival_date"
    t.boolean "access_granted"
    t.integer "user_id"
    t.integer "areas_of_mentoring_ids", array: true
    t.jsonb "resources_accessed"
    t.integer "campus_service_ids", array: true
    t.text "requirements"
    t.text "expectations"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "pmp_office", default: 0, null: false
    t.index ["gender"], name: "index_students_on_gender"
    t.index ["student_number"], name: "index_students_on_student_number"
    t.index ["type"], name: "index_students_on_type"
  end

  create_table "tasks", force: :cascade do |t|
    t.integer "assigner_id", null: false
    t.integer "assignee_id", null: false
    t.integer "creator_id", null: false
    t.string "task_name", null: false
    t.text "task_description"
    t.integer "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_name"
    t.integer "roles_mask"
    t.integer "student_id"
    t.integer "notifications_count", default: 0
    t.string "student_number"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
