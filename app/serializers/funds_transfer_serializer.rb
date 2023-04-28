class FundsTransferSerializer < ActiveModel::Serializer
  belongs_to :account
  attributes :id, :amount, :available_at, :kind, :account
end
