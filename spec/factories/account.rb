FactoryBot.define do
  factory :account, class: Account do
    balance { Faker::Number.between(from: 1.0, to: 99999999) }
    user { User.order("RANDOM()").first }
  end
end