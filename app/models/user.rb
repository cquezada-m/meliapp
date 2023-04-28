class User < ApplicationRecord
  has_many :accounts
  has_many :funds_transfers, through: :accounts
  has_many :paper_rolls_requests

  validates :rut, presence: true, uniqueness: true
end
