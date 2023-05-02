class PaperRollsRequest < ApplicationRecord
  BASE_VALUE_PER_ROLL = 700

  belongs_to :user
  has_many :funds_transfers, through: :user

  validates :address, presence: true
  validates :amount, presence: true, numericality: { only_integer: true, greater_than: 0, less_than: 100 }

  validate :insufficient_balance?
  after_create :attach_withdrawal!

  delegate :balance, to: :user

  def price
    BASE_VALUE_PER_ROLL * amount
  end

  private

  def insufficient_balance?
    if balance && price > balance
      errors.add(:amount, 'Saldo insuficiente')
    end
  end

  def attach_withdrawal!
    FundsTransfer.withdrawal.create(
      user:,
      amount: price,
    )
  end
end
