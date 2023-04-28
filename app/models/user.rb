class User < ApplicationRecord
  has_many :funds_transfers
  has_many :paper_rolls_requests

  validates :rut, presence: true, uniqueness: true
end
