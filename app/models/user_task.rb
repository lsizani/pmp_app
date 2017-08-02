# == Schema Information
#
# Table name: tasks
#
#  id               :integer          not null, primary key
#  assigner_id      :integer          not null
#  assignee_id      :integer          not null
#  creator_id       :integer          not null
#  task_name        :string           not null
#  task_description :text
#  status           :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class UserTask < ApplicationRecord
  self.table_name = 'tasks'
  belongs_to :assignee, class_name: 'User'
  enum status: { pending: 0, in_progress: 1, completed: 2 }

  def assigner
    User.find(assigner_id)
  end
end
