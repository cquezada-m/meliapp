FactoryBot.define do
  factory :user, class: User do
    rut { Faker::ChileRut.rut }
    name { Faker::Name.name }
  end
end
