FactoryBot.define do
  factory :fund_transfer, class: FundsTransfer do
    user { User.order('RANDOM()').first }
    amount { Faker::Number.between(from: 1, to: 10000) }
    available_at { Faker::Date.in_date_period }
    kind { FundsTransfer.kinds.keys.sample }

    trait :withdrawal do
      kind { FundsTransfer.kinds.keys[0] }
    end

    trait :deposit do
      kind { FundsTransfer.kinds.keys[1] }
    end
  end
end
