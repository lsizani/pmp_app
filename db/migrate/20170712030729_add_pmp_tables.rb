class AddPmpTables < ActiveRecord::Migration[5.1]
  def change
    create_table :areas_of_mentoring do |t|
      t.string :name
      t.string :description

      t.timestamps null: false
    end

    create_table :campus_services do |t|
      t.string :name
      t.string :description

      t.timestamps null: false
    end
  end
end
