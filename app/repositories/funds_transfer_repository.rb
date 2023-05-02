module FundsTransferRepository
  extend ActiveSupport::Concern

  included do
    scope :available_at, ->(available_at) { where(available_at: available_at.all_day) }
    scope :balance_at, ->(balance_at) { available_at(balance_at).sum('CASE WHEN kind = 0 THEN -1 * amount ELSE amount END') }
  end
end
