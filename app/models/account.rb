class Account < ApplicationRecord
  belongs_to :user
  has_many :funds_transfers
end
