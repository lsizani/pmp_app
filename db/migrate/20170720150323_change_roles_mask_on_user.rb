class ChangeRolesMaskOnUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :role, :integer
    remove_column :users, :roles_mask, :integer
  end
end
