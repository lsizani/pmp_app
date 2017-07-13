class AddPmpOfficeToStudent < ActiveRecord::Migration[5.1]
  def change
    add_column :students, :pmp_office, :integer, null: false, default: 0
  end
end
