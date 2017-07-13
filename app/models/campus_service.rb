# == Schema Information
#
# Table name: campus_services
#
#  id          :integer          not null, primary key
#  name        :string
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class CampusService < ApplicationRecord
end
