class PaperRollsRequestSerializer < ActiveModel::Serializer
  attributes :id, :address, :amount, :pdf_url, :tomorrow_balance, :user
end
