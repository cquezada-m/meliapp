class User < ApplicationRecord
  has_many :funds_transfers, dependent: :destroy
  has_many :paper_rolls_requests, dependent: :destroy

  validates :rut, presence: true
end
