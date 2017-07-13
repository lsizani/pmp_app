# == Schema Information
#
# Table name: courses
#
#  id          :integer          not null, primary key
#  faculty     :integer
#  course_type :integer
#  course_name :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_courses_on_faculty  (faculty)
#

class Course < ApplicationRecord
  enum faculty: { arts: 1, chs: 2, dentistry: 3, education: 4, ems: 5, law: 6, natural_sciences: 7 }
end
