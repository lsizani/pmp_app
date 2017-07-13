# == Schema Information
#
# Table name: areas_of_mentoring
#
#  id          :integer          not null, primary key
#  name        :string
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class AreaOfMentoring < ApplicationRecord
  self.table_name = 'areas_of_mentoring'
end
