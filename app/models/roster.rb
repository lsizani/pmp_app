# == Schema Information
#
# Table name: rosters
#
#  id                   :integer          not null, primary key
#  effective_start_date :date             not null
#  effective_end_date   :date             not null
#  pmp_office           :integer
#  roster               :jsonb
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#

class Roster < ApplicationRecord
  enum pmp_office: { cassinga: 0, csss: 1 }
end
