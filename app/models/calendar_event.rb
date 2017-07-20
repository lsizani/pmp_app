# == Schema Information
#
# Table name: calendar_events
#
#  id          :integer          not null, primary key
#  event_date  :date             not null
#  start_time  :time             not null
#  name        :string           not null
#  description :text
#  register_id :integer
#
# Indexes
#
#  index_calendar_events_on_event_date  (event_date)
#

class CalendarEvent < ApplicationRecord
end
