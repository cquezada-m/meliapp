class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :rut
      t.string :name
      t.float :balance

      t.timestamps
    end
  end
end
