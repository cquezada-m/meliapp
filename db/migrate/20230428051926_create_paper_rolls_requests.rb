class CreatePaperRollsRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :paper_rolls_requests do |t|
      t.references :user, null: false, foreign_key: true
      t.string :address
      t.integer :amount

      t.timestamps
    end
  end
end
