class AddNotificationsToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :notifications, :integer, default: 0
  end
end
