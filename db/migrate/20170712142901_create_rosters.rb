class CreateRosters < ActiveRecord::Migration[5.1]
  def change
    create_table :rosters do |t|
      t.date :effective_start_date, null: false
      t.date :effective_end_date, null: false
      t.integer :pmp_office
      t.jsonb :roster # {day_of_week: {start_time-end_time: {[student_ids]}}}

      t.timestamps
    end
  end
end
