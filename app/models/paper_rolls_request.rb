class PaperRollsRequest < ApplicationRecord
  BASE_VALUE_PER_ROLL = 700

  belongs_to :user
  has_many :accounts, through: :user

  validate :insufficient_balance?
  after_create :attach_funds_transfer!

  def total_balance
    accounts.sum(:balance)
  end

  def price
    BASE_VALUE_PER_ROLL * amount
  end

  private

  def insufficient_balance?
    if price > total_balance
      self.errors.add :base, 'Saldo insuficiente'
    end
  end

  def attach_funds_transfer!
  end
end
