class AddStudents < ActiveRecord::Migration[5.1]
  def change
    create_table :students do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.date :birth_date
      t.string  :nationality, default: 'South Africa'
      t.string  :home_language
      t.string  :cellphone
      t.string :student_number, null: false, unique: true
      t.boolean :commuter_student, defaul: false
      t.boolean :res_student, default: true
      t.string  :res_name
      t.string  :room_number
      t.boolean :kovaks_student, default: false
      t.integer :course_id
      t.string  :type
      t.integer :status
      t.integer :mentor_id
      t.integer :gender, default: 1 # Female
      t.date :arrival_date
      t.boolean :access_granted
      t.integer :user_id

      # Mentee specific

      t.integer :areas_of_mentoring_ids, array: true
      t.jsonb :resources_accessed # { name: frequency }
      t.integer :campus_service_ids, array: true
      t.text  :requirements
      t.text  :expectations

      # Timestamps
      t.timestamps null: false
    end

    add_index :students, :student_number
    add_index :students, :gender
    add_index :students, :type
  end
end
