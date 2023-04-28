module FundsTransferRepository
  extend ActiveSupport::Concern

  included do
    scope :available_at, ->(available_at) { deposit.where(available_at: available_at.all_day) }
    scope :from_user, ->(user_id) { where(user_id: user_id) }
    scope :total_available, ->(date) { available_at(date).sum(:amount) }
    scope :withdrawal_balance, ->(user_id) { from_user(user_id).withdrawal.sum(:amount) }
    scope :deposit_balance, ->(user_id) { from_user(user_id).deposit.sum(:amount) }
  end
end
