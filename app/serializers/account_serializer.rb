class AccountSerializer < ActiveModel::Serializer
  attributes :id, :balance, :user
end
