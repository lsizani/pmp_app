class CreateCalendarEventRegisters < ActiveRecord::Migration[5.1]
  def change
    create_table :calendar_event_registers do |t|
      t.integer :calender_event_id, null: false
      t.integer :attendee_ids, array: true
    end

    add_index :calendar_event_registers, :calender_event_id
  end
end
