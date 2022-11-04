# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create(email: "test@case.com", name: "Dane", password: "password", password_confirmation: "password")

5.times do |x|
  Project.create(project_name: "Name #{x + 1}", project_description: "Description #{x + 1} goes right in here for ya to see and read", project_url: "url#{x + 1}. url", project_code: "code#{x + 1}.url", user_id: User.first.id)
end