class FundsTransferSerializer < ActiveModel::Serializer
  belongs_to :user
  attributes :id, :amount, :available_at, :kind, :user
end
