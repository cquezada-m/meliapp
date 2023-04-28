module FundsTransferRepository
  extend ActiveSupport::Concern

  included do
    scope :deposit_at, ->(available_at) do
      parsed_date = Date.parse(available_at)
      deposit.where(created_at: parsed_date.all_day)
    end
    scope :from_user, ->(user_id) { where(user_id:) }
    scope :withdrawal_balance, ->(user_id) { from_user(user_id).withdrawal.sum(:amount) }
    scope :deposit_balance, ->(user_id) { from_user(user_id).deposit.sum(:amount) }
  end
end
