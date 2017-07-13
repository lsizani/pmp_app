class CreateCalendarEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :calendar_events do |t|
      t.date :event_date, null: false
      t.time :start_time, null: false
      t.string :name, null: false
      t.text :description
      t.integer :register_id
    end

    add_index :calendar_events, :event_date
  end
end
