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

class TasksController < ApplicationController
end
