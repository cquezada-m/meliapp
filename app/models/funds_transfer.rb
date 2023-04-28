class FundsTransfer < ApplicationRecord
  include FundsTransferRepository

  belongs_to :user

  enum :kind, [:withdrawal, :deposit]
  validates :kind, presence: true, inclusion: { in: kinds.keys }

  after_create :update_balance!

  private

  def update_balance!
    current_balance = deposit_balance - withdrawal_balance
    user.update(balance: current_balance)
  end

  def deposit_balance
    self.class.deposit_balance(user_id)
  end

  def withdrawal_balance
    self.class.withdrawal_balance(user_id)
  end
end
