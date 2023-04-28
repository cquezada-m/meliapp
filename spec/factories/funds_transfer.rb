FactoryBot.define do
  factory :fund_transfer, class: FundsTransfer do
    user { User.order('RANDOM()').first }
    amount { Faker::Number.between(from: 1.0, to: 99999999) }
    available_at { Faker::Date.in_date_period }
    kind { FundsTransfer.kinds.keys.sample }
  end
end
