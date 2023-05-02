class PaperRollsRequest < ApplicationRecord
  BASE_VALUE_PER_ROLL = 700

  belongs_to :user
  has_many :funds_transfers, through: :user

  validates :address, presence: true
  validates :amount, presence: true, numericality: { only_integer: true, greater_than: 0, less_than: 100 }

  validate :insufficient_balance?
  after_create :attach_withdrawal!

  def price
    BASE_VALUE_PER_ROLL * amount
  end

  def tomorrow_balance
    tomorrow = Date.today + 1.day
    funds_transfers.balance_at(tomorrow)
  end

  private

  def insufficient_balance?
    if tomorrow_balance && price > tomorrow_balance
      errors.add(:amount, 'Saldo insuficiente para cubrir esta cantidad')
    end
  end

  def attach_withdrawal!
    FundsTransfer.withdrawal.create(
      user:,
      amount: price,
      available_at: Date.today + 1.day,
    )
  end
end
