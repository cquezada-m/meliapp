class FundsTransfer < ApplicationRecord
  include FundsTransferRepository

  belongs_to :account

  enum :kind, [:withdrawal, :deposit]
  validates :kind, presence: true, inclusion: { in: kinds.keys }
end
