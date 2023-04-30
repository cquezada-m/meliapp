class AddPdfUrlToPaperRollsRequest < ActiveRecord::Migration[7.0]
  def change
    add_column :paper_rolls_requests, :pdf_url, :string
  end
end
