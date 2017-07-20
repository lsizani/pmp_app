json.array! @users do |user|
  json.firstName user.first_name
  json.lastName user.last_name
  json.email  user.email
  json.roles  user.roles
end