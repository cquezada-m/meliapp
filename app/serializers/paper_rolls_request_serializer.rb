class PaperRollsRequestSerializer < ActiveModel::Serializer
  attributes :id, :address, :amount, :user
end
