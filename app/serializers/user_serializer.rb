class UserSerializer < ActiveModel::Serializer
  attributes :id, :rut, :name, :balance
end
