class AddCourses < ActiveRecord::Migration[5.1]
  def change
    create_table :courses do |t|
      t.integer :faculty
      t.integer :course_type
      t.text :course_name

      t.timestamps null: false
    end

    add_index :courses, :faculty
  end
end
