class AddNotificationsAndTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :notifications do |t|
      t.integer :user_id, null: false
      t.text :notice
      t.boolean :seen, default: false

      t.timestamps
    end

    create_table :tasks do |t|
      t.integer :assigner_id, null: false
      t.integer :assignee_id, null: false
      t.integer :creator_id, null: false
      t.string :task_name, null: false
      t.text :task_description
      t.integer :status

      t.timestamps
    end

    rename_column :users, :notifications, :notifications_count
  end
end
