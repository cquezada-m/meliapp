FactoryBot.define do
  factory :paper_rolls_request, class: PaperRollsRequest do
    user { User.order('RANDOM()').first }
    address { Faker::Address.street_address }
    amount { Faker::Number.between(from: 1, to: 10) }
  end
end
