class User < ApplicationRecord
  validates :rut, presence: true, uniqueness: true
end
