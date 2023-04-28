module FundsTransferRepository
  extend ActiveSupport::Concern

  included do
    scope :deposit_at, ->(available_at) do
      parsed_date = Date.parse(available_at)
      deposit.where(created_at: parsed_date.all_day)
    end
  end
end
