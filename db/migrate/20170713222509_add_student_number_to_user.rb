class AddStudentNumberToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :student_number, :string
  end
end
