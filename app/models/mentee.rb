# == Schema Information
#
# Table name: students
#
#  id                     :integer          not null, primary key
#  first_name             :string           not null
#  last_name              :string           not null
#  birth_date             :date
#  nationality            :string           default("South Africa")
#  home_language          :string
#  cellphone              :string
#  student_number         :string           not null
#  commuter_student       :boolean
#  res_student            :boolean          default(TRUE)
#  res_name               :string
#  room_number            :string
#  kovaks_student         :boolean          default(FALSE)
#  course_id              :integer
#  type                   :string
#  status                 :integer
#  mentor_id              :integer
#  gender                 :integer          default("female")
#  arrival_date           :date
#  access_granted         :boolean
#  user_id                :integer
#  areas_of_mentoring_ids :integer          is an Array
#  resources_accessed     :jsonb
#  campus_service_ids     :integer          is an Array
#  requirements           :text
#  expectations           :text
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  pmp_office             :integer          default("cassinga"), not null
#
# Indexes
#
#  index_students_on_gender          (gender)
#  index_students_on_student_number  (student_number)
#  index_students_on_type            (type)
#

class Mentee < Student
  enum status: %w[Pending Accepted Active Declined]
end
