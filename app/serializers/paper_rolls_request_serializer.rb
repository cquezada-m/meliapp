class PaperRollsRequestSerializer < ActiveModel::Serializer
  attributes :id, :address, :amount, :pdf_url, :user
end
